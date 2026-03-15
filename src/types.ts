// ============================================================
// Core Types for Applaa Kids Academy Content Generator
// ============================================================

export type AgeGroup = 'juniors' | 'elementary' | 'middle' | 'secondary' | 'advanced';

export interface AgeRange {
  min: number;
  max: number;
  label: string;
  ageGroup: AgeGroup;
  ukLevel: string;    // e.g. "Year 1-3", "GCSE", "A-Level"
  indiaLevel: string; // e.g. "Class 1-3", "Class 10"
  usaLevel: string;   // e.g. "Grade K-3", "Grade 9-10"
}

export const AGE_RANGES: Record<AgeGroup, AgeRange> = {
  juniors: {
    min: 6, max: 8,
    label: '6–8 years',
    ageGroup: 'juniors',
    ukLevel: 'Year 1–3',
    indiaLevel: 'Class 1–3',
    usaLevel: 'Grade K–3',
  },
  elementary: {
    min: 9, max: 11,
    label: '9–11 years',
    ageGroup: 'elementary',
    ukLevel: 'Year 4–6',
    indiaLevel: 'Class 4–6',
    usaLevel: 'Grade 4–6',
  },
  middle: {
    min: 12, max: 14,
    label: '12–14 years',
    ageGroup: 'middle',
    ukLevel: 'Year 7–9',
    indiaLevel: 'Class 7–9',
    usaLevel: 'Grade 7–9',
  },
  secondary: {
    min: 15, max: 16,
    label: '15–16 years',
    ageGroup: 'secondary',
    ukLevel: 'GCSE',
    indiaLevel: 'Class 10',
    usaLevel: 'Grade 9–10',
  },
  advanced: {
    min: 17, max: 18,
    label: '17–18 years',
    ageGroup: 'advanced',
    ukLevel: 'A-Level',
    indiaLevel: 'Class 11–12',
    usaLevel: 'Grade 11–12',
  },
};

// ============================================================
// Curriculum Structures
// ============================================================

export type CourseType =
  | 'ai'
  | 'programming'
  | 'web-dev'
  | 'data-cloud'
  | 'emerging-tech'
  | 'mathematics'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'earth-science'
  | 'language'
  | 'english-lit'
  | 'history'
  | 'geography'
  | 'social-studies'
  | 'psychology'
  | 'philosophy'
  | 'economics'
  | 'business'
  | 'art-design'
  | 'music'
  | 'drama'
  | 'pe-health'
  | 'life-skills'
  | 'world-cultures'
  | 'environment'
  | 'stem-special';

export interface CategoryDefinition {
  name: string;
  slug: string;
  description: string;
  parentSlug?: string;
  imagePrompt: string;
}

export interface LessonDefinition {
  title: string;
  topic: string;
  order: number;
  includesCode?: boolean;      // For programming lessons
  programmingLanguage?: string; // e.g. 'python', 'javascript'
  keyConceptHints?: string[];   // Hints for Claude about key concepts to cover
}

export interface QuizDefinition {
  title: string;
  order: number;
  questionCount: number;
  questionTopics?: string[];
}

export interface CourseSection {
  title: string;
  lessons: LessonDefinition[];
  quizzes: QuizDefinition[];
}

export interface CourseDefinition {
  title: string;
  slug: string;
  description: string;
  categorySlug: string;
  ageGroup: AgeGroup;
  type: CourseType;
  level?: number;             // 1-5 for leveled courses
  language?: string;          // For human language courses
  durationWeeks?: number;
  hasCertification: boolean;
  sections: CourseSection[];
  imagePrompt: string;
  tags?: string[];
}

// ============================================================
// WordPress / LearnPress API Response Types
// ============================================================

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  parent: number;
  count: number;
}

export interface WPMedia {
  id: number;
  source_url: string;
  title: { rendered: string };
}

export interface WPPost {
  id: number;
  title: { rendered: string };
  slug: string;
  status: string;
  link: string;
}

export interface LPCourse extends WPPost {
  meta: Record<string, unknown>;
}

export interface LPLesson extends WPPost {
  meta: Record<string, unknown>;
  content: { rendered: string };
}

export interface LPQuiz extends WPPost {
  meta: Record<string, unknown>;
}

export interface LPQuestion extends WPPost {
  meta: Record<string, unknown>;
}

// ============================================================
// Content Generation Types
// ============================================================

export interface GeneratedLesson {
  title: string;
  htmlContent: string;
  excerpt: string;
  keyTerms: string[];
  estimatedMinutes: number;
}

export interface GeneratedQuestion {
  question: string;
  type: 'single_choice' | 'multi_choice' | 'true_false';
  options: string[];
  correctAnswer: number | number[]; // index into options
  explanation: string;
  points: number;
}

export interface GeneratedQuiz {
  title: string;
  description: string;
  questions: GeneratedQuestion[];
  passingGrade: number; // 0-100
}

export interface GeneratedImage {
  url: string;
  buffer: Buffer;
  mimeType: string;
  filename: string;
  source: 'fal' | 'replicate';
}

// ============================================================
// Progress Tracking
// ============================================================

export interface ProgressState {
  categories: Record<string, number>;      // slug → WP category ID
  courses: Record<string, number>;         // slug → WP post ID
  lessons: Record<string, number>;         // slug → WP post ID
  quizzes: Record<string, number>;         // slug → WP post ID
  completedCourses: string[];              // course slugs fully created
  courseImages: Record<string, number>;    // course slug → media ID
  lastUpdated: string;
  stats: {
    categoriesCreated: number;
    coursesCreated: number;
    lessonsCreated: number;
    quizzesCreated: number;
    imagesGenerated: number;
  };
}

// ============================================================
// API Client Config
// ============================================================

export interface AppConfig {
  wp: {
    baseUrl: string;
    bearerToken: string;
  };
  anthropic: {
    apiKey: string;
  };
  fal: {
    key: string;
  };
  replicate: {
    token: string;
  };
}
