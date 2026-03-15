import 'dotenv/config';
import { loadConfig } from './config.js';
import { WordPressClient } from './api/wordpress.js';
import { ContentGenerator } from './generators/content-generator.js';
import { ImageGenerator } from './generators/image-generator.js';
import { createAllCategories } from './generators/category-creator.js';
import { createCourse } from './generators/course-creator.js';
import { loadProgress } from './utils/progress.js';
import { logger } from './utils/logger.js';
import { ALL_COURSES } from './curriculum/index.js';
import { CATEGORIES } from './curriculum/categories.js';

async function main(): Promise<void> {
  logger.phase('Applaa Kids Academy — Content Generator', 0);
  logger.info('━'.repeat(60));

  // ── 1. Load & validate config ──────────────────────────────────
  const config = loadConfig();
  logger.success('Config loaded');

  // ── 2. Initialize clients ──────────────────────────────────────
  const wp = new WordPressClient(config);
  const contentGen = new ContentGenerator(config);
  const imageGen = new ImageGenerator(config);

  // ── 3. Test WP connectivity ────────────────────────────────────
  try {
    await wp.testConnection();
    logger.success('WordPress API connected');
  } catch (err) {
    logger.error(`WordPress connection failed: ${(err as Error).message}`);
    process.exit(1);
  }

  // ── 4. Load progress (resume support) ─────────────────────────
  const progress = loadProgress();
  const completedCount = progress.completedCourses.length;
  if (completedCount > 0) {
    logger.info(`Resuming — ${completedCount} courses already completed`);
  }

  const totalCourses = ALL_COURSES.length;
  logger.info(`Total courses to create: ${totalCourses}`);
  logger.info(`Total categories: ${CATEGORIES.length}`);
  logger.info('━'.repeat(60));

  // ── 5. Phase 1: Create all categories ─────────────────────────
  logger.phase('Phase 1: Categories', CATEGORIES.length);
  const categorySlugToId = await createAllCategories(wp, imageGen, config);
  logger.success(`Categories ready: ${categorySlugToId.size}`);
  logger.info('━'.repeat(60));

  // ── 6. Phase 2: Create all courses ────────────────────────────
  logger.phase('Phase 2: Courses, Lessons & Quizzes', totalCourses);

  let courseIndex = 0;
  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const course of ALL_COURSES) {
    courseIndex++;

    if (progress.completedCourses.includes(course.slug)) {
      skipped++;
      continue;
    }

    const categoryId = categorySlugToId.get(course.categorySlug);
    if (!categoryId) {
      logger.warn(`  No category ID for slug "${course.categorySlug}" — skipping ${course.title}`);
      failed++;
      continue;
    }

    try {
      await createCourse({
        course,
        categoryId,
        wp,
        contentGen,
        imageGen,
        config,
        courseIndex,
        totalCourses,
      });
      created++;
    } catch (err) {
      logger.error(`Course "${course.title}" failed: ${(err as Error).message}`);
      failed++;
    }
  }

  // ── 7. Summary ─────────────────────────────────────────────────
  logger.info('━'.repeat(60));
  logger.phase('Generation Complete!', 0);
  logger.stats({
    'Total Courses': totalCourses,
    'Created This Run': created,
    'Previously Completed': skipped,
    'Failed': failed,
    'Categories': categorySlugToId.size,
  });
  logger.info('━'.repeat(60));
  logger.success('Visit https://app.applaa.com/wp-admin to review your content!');
}

main().catch(err => {
  logger.error(`Fatal error: ${err.message}`);
  console.error(err);
  process.exit(1);
});
