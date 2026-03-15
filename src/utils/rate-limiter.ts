import { sleep } from './retry.js';

export class RateLimiter {
  private lastCallTime = 0;

  constructor(private delayMs: number) {}

  async wait(): Promise<void> {
    const now = Date.now();
    const elapsed = now - this.lastCallTime;
    if (elapsed < this.delayMs) {
      await sleep(this.delayMs - elapsed);
    }
    this.lastCallTime = Date.now();
  }
}
