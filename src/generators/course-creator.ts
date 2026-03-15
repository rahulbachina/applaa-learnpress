import { WordPressClient } from '../api/wordpress.js';
import { ContentGenerator } from './content-generator.js';
import { ImageGenerator } from './image-generator.js';
import { createLesson } from './lesson-creator.js';
import { createQuiz } from './quiz-creator.js';
import { saveProgress, loadProgress } from '../utils/progress.js';
import { logger } from '../utils/logger.js';
import { AGE_RANGES } from '../types.js';
import type { CourseDefinition, AppConfig } from '../types.js';

export async function createCourse(params: {
  course: CourseDefinition;
  categoryId: number;
  wp: WordPressClient;
  contentGen: ContentGenerator;
  imageGen: ImageGenerator;
  config: AppConfig;
  courseIndex: number;
  totalCourses: number;
}): Promise<void> {
  const { course, categoryId, wp, contentGen, imageGen, config, courseIndex, totalCourses } = params;
  const progress = loadProgress();

  if (progress.completedCourses.includes(course.slug)) {
    logger.info(`  ↳ Skip completed course: ${course.title}`);
    return;
  }

  logger.course(course.title, courseIndex, totalCourses);

  try {
    const ageLabel = AGE_RANGES[course.ageGroup].label;

    // ── 1. Course Image ─────────────────────────────────────────────
    let courseImageId: number | undefined;
    try {
      const img = await imageGen.generateCourseImage({
        courseTitle: course.title,
        courseType: course.type,
        ageLabel,
        subject: course.slug,
      });
      const wpMedia = await wp.uploadMedia(img.buffer, img.filename, img.mimeType, course.title);
      courseImageId = wpMedia.id;
      logger.image(`  ✓ Course image: ${course.slug}`);
    } catch (imgErr) {
      logger.warn(`  Course image failed: ${(imgErr as Error).message}`);
    }

    // ── 2. Course Content via Claude ────────────────────────────────
    let courseContent: {
      content: string;
      excerpt: string;
      seoTitle: string;
      seoDescription: string;
      seoKeyword: string;
    };
    try {
      courseContent = await contentGen.generateCourseContent({
        courseTitle: course.title,
        courseType: course.type,
        ageGroup: course.ageGroup,
        ageLabel,
        description: course.description,
        tags: course.tags,
      });
    } catch {
      courseContent = {
        content: `<p>${course.description}</p>`,
        excerpt: course.excerpt,
        seoTitle: `${course.title} | Applaa Kids Academy`,
        seoDescription: course.description,
        seoKeyword: course.tags[0] ?? course.slug,
      };
    }

    // ── 3. Get/Create Tags ──────────────────────────────────────────
    const tagIds: number[] = [];
    for (const tag of course.tags.slice(0, 10)) {
      try {
        const tagId = await wp.getOrCreateTag(tag);
        if (tagId) tagIds.push(tagId);
      } catch { /* ignore tag errors */ }
    }

    // ── 4. Create Course Post ───────────────────────────────────────
    const courseId = progress.courses[course.slug] ?? (await (async () => {
      const wpCourse = await wp.createCourse({
        title: course.title,
        content: courseContent.content,
        excerpt: courseContent.excerpt,
        featuredImageId: courseImageId,
        categoryIds: [categoryId],
        tagIds,
        ageGroup: course.ageGroup,
        ageLabel,
        hasCertification: course.hasCertification,
      });

      progress.courses[course.slug] = wpCourse.id;
      saveProgress(progress);

      await wp.setSeoMeta(wpCourse.id, {
        title: courseContent.seoTitle,
        description: courseContent.seoDescription,
        keyword: courseContent.seoKeyword,
        postType: 'lp_course',
      });

      logger.success(`  ✓ Created course: ${course.title} (ID: ${wpCourse.id})`);
      return wpCourse.id;
    })());

    // ── 5. Create Lessons & Quizzes ─────────────────────────────────
    const allLessons = course.sections.flatMap(s => s.lessons);
    const totalLessons = allLessons.length;
    const curriculumItems: Array<{ type: 'lesson' | 'quiz'; id: number; sectionOrder: number }> = [];

    for (const section of course.sections) {
      // Lessons
      for (const lesson of section.lessons) {
        const lessonNumber = allLessons.findIndex(l => l.slug === lesson.slug) + 1;
        const lessonId = await createLesson({
          lesson,
          lessonNumber,
          totalLessons,
          course,
          courseId,
          wp,
          contentGen,
          imageGen,
          config,
        });
        if (lessonId) {
          curriculumItems.push({ type: 'lesson', id: lessonId, sectionOrder: section.order });
        }
      }

      // Quizzes
      const sectionLessonTitles = section.lessons.map(l => l.title);
      for (const quiz of section.quizzes) {
        const quizId = await createQuiz({
          quiz,
          course,
          courseId,
          lessonTitles: sectionLessonTitles,
          wp,
          contentGen,
          config,
        });
        if (quizId) {
          curriculumItems.push({ type: 'quiz', id: quizId, sectionOrder: section.order });
        }
      }
    }

    // ── 6. Build Curriculum Structure ───────────────────────────────
    try {
      const sections = course.sections.map((section, sIdx) => ({
        title: section.title,
        order: section.order,
        items: curriculumItems
          .filter(item => item.sectionOrder === section.order)
          .map((item, iIdx) => ({
            type: item.type,
            id: item.id,
            order: iIdx + 1,
          })),
      }));

      await wp.buildCurriculum(courseId, sections);
      logger.success(`  ✓ Curriculum built for: ${course.title}`);
    } catch (currErr) {
      logger.warn(`  Curriculum build failed for ${course.title}: ${(currErr as Error).message}`);
    }

    // ── 7. Mark Complete ────────────────────────────────────────────
    progress.completedCourses.push(course.slug);
    progress.lastUpdated = new Date().toISOString();
    saveProgress(progress);

    logger.success(`  ✅ COMPLETE: ${course.title}`);
  } catch (err) {
    logger.error(`  ✗ Course failed "${course.title}": ${(err as Error).message}`);
  }
}
