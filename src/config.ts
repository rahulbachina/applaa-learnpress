import 'dotenv/config';
import type { AppConfig } from './types.js';

function requireEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing required environment variable: ${name}`);
  return val;
}

export function loadConfig(): AppConfig {
  return {
    wp: {
      baseUrl: requireEnv('WP_BASE_URL').replace(/\/$/, ''),
      bearerToken: requireEnv('WP_BEARER_TOKEN'),
    },
    anthropic: {
      apiKey: requireEnv('ANTHROPIC_API_KEY'),
    },
    fal: {
      key: requireEnv('FAL_KEY'),
    },
    replicate: {
      token: requireEnv('REPLICATE_API_TOKEN'),
    },
  };
}

// Rate limiting constants (ms delay between requests)
export const RATE_LIMITS = {
  wordpress: 700,   // ~85 req/min (under 100/min limit)
  claude: 1200,     // Between lesson generations
  fal: 2500,        // Between image generations
  replicate: 6000,  // Between replicate runs
};

// Retry config
export const RETRY_CONFIG = {
  maxAttempts: 3,
  baseDelayMs: 2000,
  maxDelayMs: 16000,
};

// Content generation config
export const CONTENT_CONFIG = {
  lessonsPerCourse: 12,         // Default lessons per course
  quizzesPerCourse: 2,          // Default quizzes per course
  questionsPerQuiz: 8,          // Default questions per quiz
  minLessonsPerCourse: 10,
  maxLessonsPerCourse: 15,
};
