import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { withRetry } from '../utils/retry.js';
import { RateLimiter } from '../utils/rate-limiter.js';
import { RATE_LIMITS } from '../config.js';
import type { WPCategory, WPMedia, LPCourse, LPLesson, LPQuiz, LPQuestion } from '../types.js';

export class WordPressClient {
  private client: AxiosInstance;
  private rateLimiter = new RateLimiter(RATE_LIMITS.wordpress);

  constructor(baseUrl: string, bearerToken: string) {
    this.client = axios.create({
      baseURL: `${baseUrl}/wp-json`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });
  }

  async testConnection(): Promise<void> {
    await this.request<unknown>({ method: 'GET', url: '/wp/v2/users/me' });
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    await this.rateLimiter.wait();
    return withRetry(async () => {
      const resp = await this.client.request<T>(config);
      return resp.data;
    }, `WP API ${config.method} ${config.url}`);
  }

  // ── Categories ──────────────────────────────────────────────

  async createCategory(data: {
    name: string;
    slug: string;
    description: string;
    parent?: number;
  }): Promise<WPCategory> {
    return this.request<WPCategory>({
      method: 'POST',
      url: '/wp/v2/course_cat',
      data,
    });
  }

  async getCategory(slug: string): Promise<WPCategory | null> {
    try {
      const cats = await this.request<WPCategory[]>({
        method: 'GET',
        url: `/wp/v2/course_cat?slug=${slug}&per_page=1`,
      });
      return cats[0] ?? null;
    } catch {
      return null;
    }
  }

  // ── Media Upload ─────────────────────────────────────────────

  async uploadMedia(
    buffer: Buffer,
    filename: string,
    mimeType: string,
    altText?: string,
  ): Promise<WPMedia> {
    await this.rateLimiter.wait();
    return withRetry(async () => {
      const resp = await this.client.post<WPMedia>('/wp/v2/media', buffer, {
        headers: {
          'Content-Type': mimeType,
          'Content-Disposition': `attachment; filename="${filename}"`,
        },
        timeout: 60000,
        maxContentLength: 20 * 1024 * 1024,
      });
      // Set alt text if provided
      if (altText && resp.data.id) {
        await this.client.post(`/wp/v2/media/${resp.data.id}`, { alt_text: altText }).catch(() => {});
      }
      return resp.data;
    }, `Upload media ${filename}`);
  }

  // ── Courses ──────────────────────────────────────────────────

  async createCourse(data: {
    title: string;
    content: string;
    excerpt: string;
    featuredImageId?: number;
    categoryIds?: number[];
    tagIds?: number[];
    ageGroup: string;
    ageLabel: string;
    hasCertification: boolean;
  }): Promise<LPCourse> {
    return this.request<LPCourse>({
      method: 'POST',
      url: '/wp/v2/lp_course',
      data: {
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        status: 'publish',
        featured_media: data.featuredImageId,
        course_cat: data.categoryIds ?? [],
        tags: data.tagIds ?? [],
        meta: {
          _lp_course_price: '0',
          _lp_selling_option: 'only_require_enroll',
          _lp_passing_condition: 'evaluate_lesson',
          _lp_passing_grade: 70,
          _lp_duration: '0 weeks 0 days 0 hours 0 minutes',
          _lp_featured: data.hasCertification ? 'yes' : 'no',
          _lp_course_target_audience: data.ageLabel,
        },
      },
    });
  }

  // ── Lessons ──────────────────────────────────────────────────

  async createLesson(data: {
    title: string;
    content: string;
    excerpt: string;
    featuredImageId?: number;
    courseId: number;
    order: number;
  }): Promise<LPLesson> {
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return this.request<LPLesson>({
      method: 'POST',
      url: '/wp/v2/lp_lesson',
      data: {
        title: data.title,
        slug,
        content: data.content,
        excerpt: data.excerpt,
        status: 'publish',
        featured_media: data.featuredImageId,
        meta: {
          _lp_course: data.courseId,
          _lp_order: data.order,
          _lp_preview: 'no',
          _lp_duration: '0 hours 30 minutes',
        },
      },
    });
  }

  // ── Quizzes ──────────────────────────────────────────────────

  async createQuiz(data: {
    title: string;
    content: string;
    courseId: number;
    passingGrade?: number;
  }): Promise<LPQuiz> {
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return this.request<LPQuiz>({
      method: 'POST',
      url: '/wp/v2/lp_quiz',
      data: {
        title: data.title,
        slug,
        content: data.content,
        status: 'publish',
        meta: {
          _lp_course: data.courseId,
          _lp_passing_grade: data.passingGrade ?? 70,
          _lp_attempts: -1,           // unlimited
          _lp_show_result: 'yes',
          _lp_review_questions: 'yes',
          _lp_negative_marking: 'no',
          _lp_duration: '0 hours 30 minutes',
        },
      },
    });
  }

  // ── Questions ────────────────────────────────────────────────

  async createQuestion(data: {
    title: string;
    quizId: number;
    type: 'multi_choice' | 'true_or_false' | 'fill_in_blanks';
    answers: Array<{ text: string; isCorrect: boolean }>;
    correctAnswer?: string;  // for fill_in_blanks
    explanation?: string;
    order: number;
  }): Promise<LPQuestion> {
    // LearnPress stores answers as JSON in post content
    const answerContent = JSON.stringify(
      data.answers.map(a => ({
        text: a.text,
        is_true: a.isCorrect ? 'true' : 'false',
      })),
    );

    const slug = `question-${data.quizId}-${data.order}`;

    return this.request<LPQuestion>({
      method: 'POST',
      url: '/wp/v2/lp_question',
      data: {
        title: data.title,
        slug,
        content: answerContent,
        status: 'publish',
        parent: data.quizId,
        meta: {
          _lp_type: data.type,
          _lp_question_explanation: data.explanation ?? '',
          _lp_mark: 1,
          _lp_order: data.order,
        },
      },
    });
  }

  // ── Curriculum Structure ─────────────────────────────────────

  /**
   * Sets the full curriculum structure on a course via LearnPress REST API.
   * Each section has an ordered list of lessons and quizzes.
   */
  async buildCurriculum(
    courseId: number,
    sections: Array<{
      title: string;
      order: number;
      items: Array<{ type: 'lesson' | 'quiz'; id: number; order: number }>;
    }>,
  ): Promise<void> {
    // Map to LearnPress post type names
    const lpSections = sections.map(section => ({
      title: section.title,
      order: section.order,
      items: section.items.map(item => ({
        id: item.id,
        type: item.type === 'lesson' ? 'lp_lesson' : 'lp_quiz',
        order: item.order,
      })),
    }));

    await this.request({
      method: 'POST',
      url: `/lp/v1/courses/${courseId}/curriculum`,
      data: { sections: lpSections },
    });
  }

  // ── Tags ─────────────────────────────────────────────────────

  async getOrCreateTag(name: string): Promise<number> {
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    try {
      const tags = await this.request<Array<{ id: number }>>({
        method: 'GET',
        url: `/wp/v2/course_tag?slug=${slug}&per_page=1`,
      });
      if (tags[0]) return tags[0].id;
    } catch { /* fall through to create */ }

    const created = await this.request<{ id: number }>({
      method: 'POST',
      url: '/wp/v2/course_tag',
      data: { name, slug },
    });
    return created.id;
  }

  // ── SEO Meta (Yoast / RankMath) ──────────────────────────────

  async setSeoMeta(
    postId: number,
    data: {
      title: string;
      description: string;
      keyword: string;
      postType: 'lp_course' | 'lp_lesson';
    },
  ): Promise<void> {
    const meta: Record<string, string> = {
      // Yoast SEO
      _yoast_wpseo_title: data.title,
      _yoast_wpseo_metadesc: data.description,
      _yoast_wpseo_focuskw: data.keyword,
      // RankMath
      rank_math_title: data.title,
      rank_math_description: data.description,
      rank_math_focus_keyword: data.keyword,
    };

    const url = data.postType === 'lp_course'
      ? `/wp/v2/lp_course/${postId}`
      : `/wp/v2/lp_lesson/${postId}`;

    await this.request({ method: 'POST', url, data: { meta } });
  }
}
