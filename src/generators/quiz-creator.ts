import { WordPressClient } from '../api/wordpress.js';
import { ContentGenerator } from './content-generator.js';
import { saveProgress, loadProgress } from '../utils/progress.js';
import { logger } from '../utils/logger.js';
import { AGE_RANGES } from '../types.js';
import type { QuizDefinition, CourseDefinition, AppConfig } from '../types.js';

export async function createQuiz(params: {
  quiz: QuizDefinition;
  course: CourseDefinition;
  courseId: number;
  lessonTitles: string[];
  wp: WordPressClient;
  contentGen: ContentGenerator;
  config: AppConfig;
}): Promise<number | null> {
  const { quiz, course, courseId, lessonTitles, wp, contentGen } = params;
  const progress = loadProgress();

  if (progress.quizzes[quiz.slug]) {
    logger.info(`    ↳ Skip quiz (exists): ${quiz.title}`);
    return progress.quizzes[quiz.slug];
  }

  try {
    // Generate quiz questions via Claude
    const generated = await contentGen.generateQuiz({
      courseTitle: course.title,
      quizTitle: quiz.title,
      courseType: course.type,
      ageGroup: course.ageGroup,
      questionCount: quiz.questions.length,
      lessonTitles,
    });

    // Create quiz post
    const wpQuiz = await wp.createQuiz({
      title: generated.title || quiz.title,
      content: `<p>Test your knowledge from this section of ${course.title}!</p>`,
      courseId,
      passingGrade: 70,
    });

    // Create each question — convert GeneratedQuestion format to WP format
    for (let i = 0; i < generated.questions.length; i++) {
      const q = generated.questions[i];

      // Map GeneratedQuestion.type → LearnPress question type
      const lpType = q.type === 'true_false' ? 'true_or_false' : 'multi_choice';

      // Convert options + correctAnswer index → { text, isCorrect }[] format
      const correctIndices = Array.isArray(q.correctAnswer)
        ? q.correctAnswer
        : [q.correctAnswer];
      const answers = q.options.map((text, idx) => ({
        text,
        isCorrect: correctIndices.includes(idx),
      }));

      await wp.createQuestion({
        title: q.question,
        quizId: wpQuiz.id,
        type: lpType,
        answers,
        explanation: q.explanation,
        order: i + 1,
      });
    }

    progress.quizzes[quiz.slug] = wpQuiz.id;
    saveProgress(progress);

    logger.info(`    ✓ Created quiz: ${quiz.title} (${generated.questions.length} questions)`);
    return wpQuiz.id;
  } catch (err) {
    logger.error(`    ✗ Failed quiz ${quiz.title}: ${(err as Error).message}`);
    return null;
  }
}
