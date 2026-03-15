import { WordPressClient } from '../api/wordpress.js';
import { ImageGenerator } from './image-generator.js';
import { saveProgress, loadProgress } from '../utils/progress.js';
import { logger } from '../utils/logger.js';
import { CATEGORIES } from '../curriculum/categories.js';
import type { AppConfig } from '../types.js';

export async function createAllCategories(
  wp: WordPressClient,
  imageGen: ImageGenerator,
  config: AppConfig,
): Promise<Map<string, number>> {
  const progress = loadProgress();
  const slugToId = new Map<string, number>(
    Object.entries(progress.categories),
  );

  logger.phase('Creating Categories', CATEGORIES.length);

  for (const cat of CATEGORIES) {
    if (slugToId.has(cat.slug)) {
      logger.info(`  ↳ Skip category (exists): ${cat.name}`);
      continue;
    }

    try {
      // Generate category image
      let imageId: number | undefined;
      try {
        const img = await imageGen.generateFromPrompt(cat.imagePrompt, cat.slug);
        const wpMedia = await wp.uploadMedia(img.buffer, img.filename, img.mimeType, cat.name);
        imageId = wpMedia.id;
      } catch (imgErr) {
        logger.warn(`  Image failed for category ${cat.name}: ${(imgErr as Error).message}`);
      }

      const wpCat = await wp.createCategory({
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        imageId,
      });

      slugToId.set(cat.slug, wpCat.id);

      // Save progress
      progress.categories[cat.slug] = wpCat.id;
      saveProgress(progress);

      logger.success(`  ✓ Created category: ${cat.name} (ID: ${wpCat.id})`);
    } catch (err) {
      logger.error(`  ✗ Failed category ${cat.name}: ${(err as Error).message}`);
    }
  }

  return slugToId;
}
