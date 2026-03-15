import Replicate from 'replicate';
import { withRetry } from '../utils/retry.js';
import { RateLimiter } from '../utils/rate-limiter.js';
import { RATE_LIMITS } from '../config.js';
import type { GeneratedImage } from '../types.js';

// SDXL model (stable-diffusion-xl-base-1.0)
const SDXL_MODEL = 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b';

export class ReplicateClient {
  private client: Replicate;
  private rateLimiter = new RateLimiter(RATE_LIMITS.replicate);

  constructor(token: string) {
    this.client = new Replicate({ auth: token });
  }

  async generateImage(params: {
    prompt: string;
    subject: string;
  }): Promise<GeneratedImage> {
    await this.rateLimiter.wait();

    return withRetry(async () => {
      const output = await this.client.run(SDXL_MODEL, {
        input: {
          prompt: params.prompt,
          negative_prompt: 'scary, violent, adult, dark, text, watermark, blurry, low quality, nsfw',
          width: 1024,
          height: 768,
          num_inference_steps: 30,
          guidance_scale: 7.5,
          scheduler: 'K_EULER',
          num_outputs: 1,
        },
      }) as string[];

      const imageUrl = output[0];
      if (!imageUrl) throw new Error('Replicate returned no image URL');

      const resp = await fetch(imageUrl);
      if (!resp.ok) throw new Error(`Failed to fetch replicate image: ${resp.status}`);
      const arrayBuffer = await resp.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const safeSubject = params.subject.replace(/[^a-z0-9-]/gi, '-').toLowerCase().slice(0, 40);
      return {
        url: imageUrl,
        buffer,
        mimeType: 'image/png',
        filename: `${safeSubject}-${Date.now()}.png`,
        source: 'replicate' as const,
      };
    }, `Replicate generate: ${params.subject}`);
  }
}
