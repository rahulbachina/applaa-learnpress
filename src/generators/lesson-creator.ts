import { WordPressClient } from '../api/wordpress.js';
import { ContentGenerator } from './content-generator.js';
import { ImageGenerator } from './image-generator.js';
import { saveProgress, loadProgress } from '../utils/progress.js';
import { logger } from '../utils/logger.js';
import { AGE_RANGES } from '../types.js';
import type { LessonDefinition, CourseDefinition, AppConfig } from '../types.js';

export async function createLesson(params: {
  lesson: LessonDefinition;
  lessonNumber: number;
  totalLessons: number;
  course: CourseDefinition;
  courseId: number;
  wp: WordPressClient;
  contentGen: ContentGenerator;
  imageGen: ImageGenerator;
  config: AppConfig;
}): Promise<number | null> {
  const { lesson, lessonNumber, totalLessons, course, courseId, wp, contentGen, imageGen } = params;
  const progress = loadProgress();

  if (progress.lessons[lesson.slug]) {
    logger.info(`    ↳ Skip lesson (exists): ${lesson.title}`);
    return progress.lessons[lesson.slug];
  }

  try {
    const ageLabel = AGE_RANGES[course.ageGroup].label;

    // 1. Generate lesson image
    let lessonImageUrl: string | undefined;
    let lessonImageId: number | undefined;
    try {
      const img = await imageGen.generateLessonImage({
        lessonTitle: lesson.title,
        lessonTopic: lesson.title,
        courseType: course.type,
        ageLabel,
        subject: lesson.slug,
      });
      const wpMedia = await wp.uploadMedia(img.buffer, img.filename, img.mimeType, lesson.title);
      lessonImageUrl = wpMedia.source_url;
      lessonImageId = wpMedia.id;
    } catch (imgErr) {
      logger.warn(`    Image failed for lesson "${lesson.title}": ${(imgErr as Error).message}`);
    }

    // 2. Generate lesson content via Claude
    const generated = await contentGen.generateLesson({
      courseTitle: course.title,
      courseType: course.type,
      ageGroup: course.ageGroup,
      ageLabel,
      lessonTitle: lesson.title,
      lessonNumber,
      totalLessons,
      includesCode: lesson.includesCode,
      programmingLanguage: lesson.programmingLanguage,
      lessonImageUrl,
    });

    // 3. Create WP lesson post
    const seoTitle = `${lesson.title} — ${course.title} | Applaa Kids Academy`;
    const seoDescription = generated.excerpt || `Learn ${lesson.title} in this engaging lesson from ${course.title}.`;
    const seoKeyword = lesson.title.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').slice(0, 3).join(' ');

    const wpLesson = await wp.createLesson({
      title: lesson.title,
      content: generated.content,
      excerpt: generated.excerpt,
      featuredImageId: lessonImageId,
      courseId,
      order: lesson.order,
    });

    // 4. Set SEO meta
    await wp.setSeoMeta(wpLesson.id, {
      title: seoTitle,
      description: seoDescription,
      keyword: seoKeyword,
      postType: 'lp_lesson',
    });

    progress.lessons[lesson.slug] = wpLesson.id;
    saveProgress(progress);

    logger.lesson(`    ✓ Lesson ${lessonNumber}/${totalLessons}: ${lesson.title}`);
    return wpLesson.id;
  } catch (err) {
    logger.error(`    ✗ Failed lesson "${lesson.title}": ${(err as Error).message}`);
    return null;
  }
}
