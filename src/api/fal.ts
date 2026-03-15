import { fal } from '@fal-ai/client';
import { withRetry } from '../utils/retry.js';
import { RateLimiter } from '../utils/rate-limiter.js';
import { RATE_LIMITS } from '../config.js';
import type { GeneratedImage } from '../types.js';

export class FalClient {
  private rateLimiter = new RateLimiter(RATE_LIMITS.fal);

  constructor(apiKey: string) {
    fal.config({ credentials: apiKey });
  }

  async generateImage(params: {
    prompt: string;
    negativePrompt?: string;
    subject: string; // for filename
  }): Promise<GeneratedImage> {
    await this.rateLimiter.wait();

    const fullPrompt = params.prompt;
    const negPrompt = params.negativePrompt
      ?? 'scary, violent, adult content, dark themes, text in image, watermark, logo, blurry, low quality, distorted, disfigured';

    return withRetry(async () => {
      const result = await fal.subscribe('fal-ai/flux/schnell', {
        input: {
          prompt: fullPrompt,
          num_inference_steps: 4,
          guidance_scale: 3.5,
          image_size: 'landscape_4_3',
          num_images: 1,
          enable_safety_checker: true,
          output_format: 'jpeg',
        },
      }) as { images: Array<{ url: string; content_type: string }> };

      const image = result.images[0];
      if (!image?.url) throw new Error('fal.ai returned no image URL');

      // Fetch the image buffer
      const resp = await fetch(image.url);
      if (!resp.ok) throw new Error(`Failed to fetch image: ${resp.status}`);
      const arrayBuffer = await resp.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const safeSubject = params.subject.replace(/[^a-z0-9-]/gi, '-').toLowerCase().slice(0, 40);
      return {
        url: image.url,
        buffer,
        mimeType: 'image/jpeg',
        filename: `${safeSubject}-${Date.now()}.jpg`,
        source: 'fal' as const,
      };
    }, `fal.ai generate: ${params.subject}`);
  }
}

// ── Image Prompt Builders ─────────────────────────────────────

export function buildCourseImagePrompt(params: {
  courseTitle: string;
  courseType: string;
  ageLabel: string;
}): string {
  const styleGuide = 'flat design illustration, bright vibrant colors, friendly and welcoming, educational, cheerful, modern digital art style, high quality';
  const noText = 'no text, no letters, no words, no numbers';

  const typePrompts: Record<string, string> = {
    ai: `Friendly cartoon robot with glowing blue eyes surrounded by circuit patterns, gears, and colorful data visualizations. ${styleGuide}. ${noText}.`,
    programming: `A colorful computer screen showing code with magical sparkles, floating code blocks, and a young student character learning. ${styleGuide}. ${noText}.`,
    'web-dev': `A vibrant web browser window with colorful UI elements floating around it, HTML tags as building blocks, CSS paint splashes. ${styleGuide}. ${noText}.`,
    'data-cloud': `Fluffy clouds containing colorful data charts, graphs, and database icons connected by glowing lines. ${styleGuide}. ${noText}.`,
    'emerging-tech': `Futuristic technology landscape with holographic displays, VR headsets, blockchain chains, and glowing circuits. ${styleGuide}. ${noText}.`,
    mathematics: `Colorful mathematical symbols, geometric shapes, numbers, and equations floating in a magical space with stars and sparkles. ${styleGuide}. ${noText}.`,
    physics: `Planets, atoms, waves, and physics experiments with colorful energy fields and scientific equipment. ${styleGuide}. ${noText}.`,
    chemistry: `Colorful chemistry lab with glowing test tubes, molecular models, periodic table elements floating, bubbling beakers. ${styleGuide}. ${noText}.`,
    biology: `Vibrant nature scene with detailed plants, animals, DNA strands, cells under microscope, and ecosystem elements. ${styleGuide}. ${noText}.`,
    'earth-science': `Beautiful planet Earth with weather patterns, mountains, oceans, and space elements around it. ${styleGuide}. ${noText}.`,
    language: `Colorful speech bubbles with flags of different countries, books, and multilingual greetings floating in a friendly scene. ${styleGuide}. ${noText}.`,
    'english-lit': `Open storybook with characters jumping out, quill pen, books, and creative writing elements in a magical library. ${styleGuide}. ${noText}.`,
    history: `Timeline of historical events with castles, pyramids, ships, and cultural artifacts in a colorful journey through time. ${styleGuide}. ${noText}.`,
    geography: `Colorful world map with mountains, oceans, cities, and diverse landscapes, compass rose, globe. ${styleGuide}. ${noText}.`,
    'social-studies': `Diverse group of cartoon children from different cultures holding hands around a globe. ${styleGuide}. ${noText}.`,
    psychology: `Colorful brain with gears, lightbulbs, thought bubbles, and emotions represented as friendly characters. ${styleGuide}. ${noText}.`,
    philosophy: `Question marks, lightbulbs, books, thinking figures, scales of justice in a thoughtful colorful scene. ${styleGuide}. ${noText}.`,
    economics: `Colorful coins, charts going up, shopping cart, piggy bank, and marketplace with friendly characters. ${styleGuide}. ${noText}.`,
    business: `Young entrepreneur with briefcase, lightbulb ideas, bar charts, and business icons in bright colors. ${styleGuide}. ${noText}.`,
    'art-design': `Artist's palette with colorful paint splashes, brushes, canvas, digital tablet, and creative tools. ${styleGuide}. ${noText}.`,
    music: `Musical notes floating from instruments: piano, guitar, headphones, and colorful sound waves. ${styleGuide}. ${noText}.`,
    drama: `Stage spotlight on theatrical masks, curtains, performance elements with stars and applause. ${styleGuide}. ${noText}.`,
    'pe-health': `Children playing sports, fitness icons, healthy food, and active movement in bright outdoor setting. ${styleGuide}. ${noText}.`,
    'life-skills': `Diverse set of life skill icons: calendar, money, handshake, brain, heart, and career symbols. ${styleGuide}. ${noText}.`,
    'world-cultures': `World flags, cultural landmarks, diverse traditional costumes, and celebrations around a globe. ${styleGuide}. ${noText}.`,
    environment: `Beautiful forest, solar panels, wind turbines, clean water, and a healthy Earth with nature elements. ${styleGuide}. ${noText}.`,
    'stem-special': `Laboratory, engineering tools, telescope, circuits, and STEM equipment in an exciting science setting. ${styleGuide}. ${noText}.`,
  };

  const basePrompt = typePrompts[params.courseType] ?? `Educational illustration for "${params.courseTitle}", perfect for students aged ${params.ageLabel}. ${styleGuide}. ${noText}.`;

  return `Educational illustration for kids course "${params.courseTitle}" for ages ${params.ageLabel}. ${basePrompt}`;
}

export function buildLessonImagePrompt(params: {
  lessonTitle: string;
  lessonTopic: string;
  courseType: string;
  ageLabel: string;
}): string {
  return `Educational illustration for children aged ${params.ageLabel}: "${params.lessonTopic}".
Topic: ${params.lessonTitle}. Subject area: ${params.courseType}.
Colorful, engaging, child-friendly flat design illustration, bright vibrant colors,
educational and clear visual metaphor, friendly characters or objects, modern digital art,
no text, no letters, no words in image, no watermarks, high quality, landscape orientation.`;
}
