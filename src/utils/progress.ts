import { readFileSync, writeFileSync, existsSync } from 'fs';
import type { ProgressState } from '../types.js';

const PROGRESS_FILE = './progress.json';

export function loadProgress(): ProgressState {
  if (!existsSync(PROGRESS_FILE)) {
    return {
      categories: {},
      courses: {},
      lessons: {},
      quizzes: {},
      completedCourses: [],
      courseImages: {},
      lastUpdated: new Date().toISOString(),
      stats: {
        categoriesCreated: 0,
        coursesCreated: 0,
        lessonsCreated: 0,
        quizzesCreated: 0,
        imagesGenerated: 0,
      },
    };
  }
  const raw = readFileSync(PROGRESS_FILE, 'utf-8');
  return JSON.parse(raw) as ProgressState;
}

export function saveProgress(state: ProgressState): void {
  state.lastUpdated = new Date().toISOString();
  writeFileSync(PROGRESS_FILE, JSON.stringify(state, null, 2), 'utf-8');
}
