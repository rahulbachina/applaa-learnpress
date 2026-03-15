// Colored console logger with progress indicators

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  gray: '\x1b[90m',
};

function colorize(color: keyof typeof COLORS, text: string): string {
  return `${COLORS[color]}${text}${COLORS.reset}`;
}

function timestamp(): string {
  return new Date().toISOString().slice(11, 19); // HH:MM:SS
}

export const logger = {
  info(msg: string): void {
    console.log(`${colorize('gray', timestamp())} ${colorize('blue', '●')} ${msg}`);
  },

  success(msg: string): void {
    console.log(`${colorize('gray', timestamp())} ${colorize('green', '✓')} ${msg}`);
  },

  warn(msg: string): void {
    console.warn(`${colorize('gray', timestamp())} ${colorize('yellow', '⚠')} ${msg}`);
  },

  error(msg: string, err?: unknown): void {
    const errMsg = err instanceof Error ? `: ${err.message}` : '';
    console.error(`${colorize('gray', timestamp())} ${colorize('red', '✗')} ${msg}${errMsg}`);
  },

  phase(phase: string): void {
    console.log(`\n${colorize('bright', colorize('cyan', `━━━ ${phase} ━━━`))}\n`);
  },

  course(title: string, current: number, total: number): void {
    const pct = Math.round((current / total) * 100);
    const bar = '█'.repeat(Math.floor(pct / 5)) + '░'.repeat(20 - Math.floor(pct / 5));
    console.log(`\n${colorize('magenta', `📚 [${current}/${total}] ${title}`)}`);
    console.log(`   ${colorize('gray', `[${bar}] ${pct}%`)}`);
  },

  lesson(title: string, current: number, total: number): void {
    console.log(`   ${colorize('gray', timestamp())} ${colorize('cyan', `  📖 [${current}/${total}] ${title}`)}`);
  },

  image(source: string, subject: string): void {
    console.log(`   ${colorize('gray', timestamp())} ${colorize('yellow', `  🖼 [${source}] ${subject}`)}`);
  },

  stats(stats: Record<string, number>): void {
    console.log(`\n${colorize('bright', '📊 Progress Summary:')}`);
    for (const [key, val] of Object.entries(stats)) {
      console.log(`   ${colorize('cyan', key.padEnd(25))}: ${colorize('green', String(val))}`);
    }
  },
};
