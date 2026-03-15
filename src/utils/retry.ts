import { logger } from './logger.js';
import { RETRY_CONFIG } from '../config.js';

export async function withRetry<T>(
  fn: () => Promise<T>,
  label: string,
  maxAttempts = RETRY_CONFIG.maxAttempts,
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));

      if (attempt === maxAttempts) break;

      const delay = Math.min(
        RETRY_CONFIG.baseDelayMs * Math.pow(2, attempt - 1),
        RETRY_CONFIG.maxDelayMs,
      );
      logger.warn(`${label} failed (attempt ${attempt}/${maxAttempts}), retrying in ${delay}ms...`);
      await sleep(delay);
    }
  }

  throw new Error(`${label} failed after ${maxAttempts} attempts: ${lastError?.message}`);
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
