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

  async uploadMedia(buffer: Buffer, filename: string, mimeType: string): Promise<WPMedia> {
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
      return resp.data;
    }, `Upload media ${filename}`);
  }

  // ── Courses ──────────────────────────────────────────────────

  async createCourse(data: {
    title: string;
    slug: string;
    content: string;     // Full HTML course overview / syllabus
    excerpt: string;     // Short description (SEO meta desc)
    status: 'publish' | 'draft';
    featured_media?: number;
    course_cat?: number[];
    meta: Record<string, unknown>;
    tags?: string[];
  }): Promise<LPCourse> {
    return this.request<LPCourse>({
      method: 'POST',
      url: '/wp/v2/lp_course',
      data,
    });
  }

  // ── Lessons ──────────────────────────────────────────────────

  async createLesson(data: {
    title: string;
    slug: string;
    content: string;     // Full HTML lesson content (rich, with images inline)
    excerpt: string;     // Short SEO description
    status: 'publish' | 'draft';
    featured_media?: number;
    meta: Record<string, unknown>;
  }): Promise<LPLesson> {
    return this.request<LPLesson>({
      method: 'POST',
      url: '/wp/v2/lp_lesson',
      data,
    });
  }

  // ── Quizzes ──────────────────────────────────────────────────

  async createQuiz(data: {
    title: string;
    slug: string;
    content: string;
    status: 'publish' | 'draft';
    meta: Record<string, unknown>;
  }): Promise<LPQuiz> {
    return this.request<LPQuiz>({
      method: 'POST',
      url: '/wp/v2/lp_quiz',
      data,
    });
  }

  // ── Questions ────────────────────────────────────────────────

  async createQuestion(data: {
    title: string;
    slug: string;
    content: string;
    status: 'publish' | 'draft';
    meta: Record<string, unknown>;
    parent: number; // quiz ID
  }): Promise<LPQuestion> {
    return this.request<LPQuestion>({
      method: 'POST',
      url: '/wp/v2/lp_question',
      data,
    });
  }

  // ── Curriculum Structure ─────────────────────────────────────

  /**
   * Adds lessons and quizzes to a course curriculum via LearnPress REST API.
   * Groups items into sections.
   */
  async buildCurriculum(
    courseId: number,
    sections: Array<{
      title: string;
      items: Array<{ id: number; type: 'lp_lesson' | 'lp_quiz' }>;
    }>,
  ): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/lp/v1/courses/${courseId}/curriculum`,
      data: { sections },
    });
  }

  /**
   * Fallback: set lesson order via post meta if curriculum API not available.
   */
  async setLessonCourse(lessonId: number, courseId: number, order: number): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/wp/v2/lp_lesson/${lessonId}`,
      data: {
        meta: {
          _lp_course: courseId,
          _lp_order: order,
        },
      },
    });
  }

  // ── Tags ─────────────────────────────────────────────────────

  async getOrCreateTag(name: string): Promise<number> {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
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

  /**
   * Sets SEO metadata on any post via post meta.
   * Supports both Yoast SEO and RankMath field names.
   */
  async setSeoMeta(postId: number, postType: 'lp_course' | 'lp_lesson', seoData: {
    title: string;
    description: string;
    focusKeyword?: string;
    ogTitle?: string;
    ogDescription?: string;
  }): Promise<void> {
    const meta: Record<string, string> = {
      // Yoast SEO fields
      _yoast_wpseo_title: seoData.title,
      _yoast_wpseo_metadesc: seoData.description,
      _yoast_wpseo_focuskw: seoData.focusKeyword ?? '',
      // RankMath fields
      rank_math_title: seoData.title,
      rank_math_description: seoData.description,
      rank_math_focus_keyword: seoData.focusKeyword ?? '',
      // OpenGraph
      _yoast_wpseo_opengraph_title: seoData.ogTitle ?? seoData.title,
      _yoast_wpseo_opengraph_description: seoData.ogDescription ?? seoData.description,
    };

    const url = postType === 'lp_course'
      ? `/wp/v2/lp_course/${postId}`
      : `/wp/v2/lp_lesson/${postId}`;

    await this.request({
      method: 'POST',
      url,
      data: { meta },
    });
  }
}
