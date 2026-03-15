import type { CourseDefinition } from '../types.js';

export { CATEGORIES } from './categories.js';

export { TECHNOLOGY_COURSES } from './technology-courses.js';
export { WEB_DATA_COURSES } from './web-data-courses.js';
export { LANGUAGE_COURSES } from './language-courses.js';
export { ACADEMIC_COURSES } from './academic-courses.js';
export { HUMANITIES_COURSES } from './humanities-courses.js';
export { SOCIAL_COURSES } from './social-courses.js';
export { SKILLS_COURSES } from './skills-courses.js';

import { TECHNOLOGY_COURSES } from './technology-courses.js';
import { WEB_DATA_COURSES } from './web-data-courses.js';
import { LANGUAGE_COURSES } from './language-courses.js';
import { ACADEMIC_COURSES } from './academic-courses.js';
import { HUMANITIES_COURSES } from './humanities-courses.js';
import { SOCIAL_COURSES } from './social-courses.js';
import { SKILLS_COURSES } from './skills-courses.js';

export const ALL_COURSES: CourseDefinition[] = [
  ...TECHNOLOGY_COURSES,
  ...WEB_DATA_COURSES,
  ...LANGUAGE_COURSES,
  ...ACADEMIC_COURSES,
  ...HUMANITIES_COURSES,
  ...SOCIAL_COURSES,
  ...SKILLS_COURSES,
];

export type { CourseDefinition };
