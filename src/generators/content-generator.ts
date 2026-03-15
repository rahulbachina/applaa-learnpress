import { ClaudeClient } from '../api/claude.js';
import type { GeneratedLesson, GeneratedQuiz, AppConfig } from '../types.js';

export class ContentGenerator {
  private claude: ClaudeClient;

  constructor(config: AppConfig) {
    this.claude = new ClaudeClient(config.anthropicKey);
  }

  async generateLesson(params: {
    courseTitle: string;
    courseType: string;
    ageGroup: string;
    ageLabel: string;
    lessonTitle: string;
    lessonNumber: number;
    totalLessons: number;
    includesCode?: boolean;
    programmingLanguage?: string;
    lessonImageUrl?: string;
  }): Promise<GeneratedLesson> {
    return this.claude.generateLesson(params);
  }

  async generateQuiz(params: {
    courseTitle: string;
    quizTitle: string;
    courseType: string;
    ageGroup: string;
    questionCount: number;
    lessonTitles: string[];
  }): Promise<GeneratedQuiz> {
    return this.claude.generateQuiz(params);
  }

  async generateCourseContent(params: {
    courseTitle: string;
    courseType: string;
    ageGroup: string;
    ageLabel: string;
    description: string;
    tags: string[];
  }): Promise<{
    content: string;
    excerpt: string;
    seoTitle: string;
    seoDescription: string;
    seoKeyword: string;
  }> {
    return this.claude.generateCourseContent(params);
  }
}
