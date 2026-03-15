import { FalClient, buildCourseImagePrompt, buildLessonImagePrompt } from '../api/fal.js';
import { ReplicateClient } from '../api/replicate.js';
import { logger } from '../utils/logger.js';
import type { GeneratedImage, AppConfig } from '../types.js';

export class ImageGenerator {
  private fal: FalClient;
  private replicate: ReplicateClient;

  constructor(config: AppConfig) {
    this.fal = new FalClient(config.falKey);
    this.replicate = new ReplicateClient(config.replicateToken);
  }

  async generateCourseImage(params: {
    courseTitle: string;
    courseType: string;
    ageLabel: string;
    subject: string;
  }): Promise<GeneratedImage> {
    const prompt = buildCourseImagePrompt({
      courseTitle: params.courseTitle,
      courseType: params.courseType,
      ageLabel: params.ageLabel,
    });
    return this.generate(prompt, params.subject);
  }

  async generateLessonImage(params: {
    lessonTitle: string;
    lessonTopic: string;
    courseType: string;
    ageLabel: string;
    subject: string;
  }): Promise<GeneratedImage> {
    const prompt = buildLessonImagePrompt({
      lessonTitle: params.lessonTitle,
      lessonTopic: params.lessonTopic,
      courseType: params.courseType,
      ageLabel: params.ageLabel,
    });
    return this.generate(prompt, params.subject);
  }

  async generateFromPrompt(prompt: string, subject: string): Promise<GeneratedImage> {
    return this.generate(prompt, subject);
  }

  private async generate(prompt: string, subject: string): Promise<GeneratedImage> {
    // Try fal.ai first
    try {
      logger.image(`fal.ai → ${subject}`);
      return await this.fal.generateImage({ prompt, subject });
    } catch (falErr) {
      logger.warn(`fal.ai failed for "${subject}", trying Replicate: ${(falErr as Error).message}`);
    }

    // Fallback to Replicate
    try {
      logger.image(`replicate → ${subject}`);
      return await this.replicate.generateImage({ prompt, subject });
    } catch (repErr) {
      throw new Error(`Both image providers failed for "${subject}": ${(repErr as Error).message}`);
    }
  }
}
