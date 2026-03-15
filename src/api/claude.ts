import Anthropic from '@anthropic-ai/sdk';
import { RateLimiter } from '../utils/rate-limiter.js';
import { RATE_LIMITS } from '../config.js';
import type { GeneratedLesson, GeneratedQuestion, GeneratedQuiz, AgeGroup, CourseType, AGE_RANGES } from '../types.js';

const MODEL = 'claude-opus-4-6';

export class ClaudeClient {
  private client: Anthropic;
  private rateLimiter = new RateLimiter(RATE_LIMITS.claude);

  constructor(apiKey: string) {
    this.client = new Anthropic({ apiKey });
  }

  // ── Lesson Content ────────────────────────────────────────────

  async generateLesson(params: {
    courseTitle: string;
    lessonTitle: string;
    lessonTopic: string;
    lessonNumber: number;
    totalLessons: number;
    ageGroup: AgeGroup;
    ageLabel: string;
    courseType: CourseType;
    programmingLanguage?: string;
    previousLessons?: string[];
    sectionTitle?: string;
    imageUrl?: string; // URL of the lesson's featured image to embed
  }): Promise<GeneratedLesson> {
    await this.rateLimiter.wait();

    const isProgramming = [
      'programming', 'web-dev', 'data-cloud', 'ai', 'emerging-tech',
    ].includes(params.courseType);

    const isLanguage = params.courseType === 'language';

    const ageContext = getAgeContext(params.ageGroup);
    const codeInstructions = isProgramming && params.programmingLanguage
      ? `\n\nCODE REQUIREMENTS:
- Include 3–5 complete, runnable code examples in ${params.programmingLanguage}
- Each code block must be wrapped in <pre><code class="language-${params.programmingLanguage}">...</code></pre>
- After each code block, add a "Step-by-step breakdown" section explaining each line
- Include a "Try it yourself" challenge with starter code
- Show expected output for each example`
      : '';

    const langInstructions = isLanguage
      ? `\n\nLANGUAGE LEARNING FORMAT:
- Include vocabulary tables with the target language, phonetic pronunciation, and English meaning
- Add pronunciation guides
- Include example sentences with translations
- Include a "Practice Dialogue" section
- Add cultural notes where relevant
- Use HTML tables for vocabulary lists`
      : '';

    const imageHtml = params.imageUrl
      ? `\n<!-- Featured image embedded in lesson -->
<figure class="lesson-hero-image">
  <img src="${params.imageUrl}" alt="${params.lessonTitle}" style="width:100%;border-radius:12px;margin-bottom:24px;" loading="lazy" />
</figure>`
      : '';

    const systemPrompt = `You are a world-class educational content designer creating lessons for children aged ${params.ageLabel}.
Your content must be:
- Age-appropriate in vocabulary, complexity, and examples
- Engaging, encouraging, and fun — especially for younger ages
- Accurate and curriculum-aligned (UK/India/USA standards)
- Formatted as rich, valid HTML (NO markdown, only HTML)
- SEO-optimized with semantic HTML5 tags
- Accessible (proper heading hierarchy, alt attributes mentioned, clear language)

${ageContext}

FORBIDDEN: Do not use markdown (##, **, -), only HTML. Do not include <html>, <head>, or <body> tags — return the content section only.`;

    const userPrompt = `Create a comprehensive lesson for the following:

COURSE: "${params.courseTitle}"
LESSON ${params.lessonNumber} of ${params.totalLessons}: "${params.lessonTitle}"
TOPIC: ${params.lessonTopic}
${params.sectionTitle ? `SECTION: ${params.sectionTitle}` : ''}
${params.previousLessons?.length ? `PREVIOUS LESSONS COVERED: ${params.previousLessons.join(', ')}` : ''}
${codeInstructions}
${langInstructions}

Generate the full lesson HTML content including:

1. <div class="lesson-intro"> — Engaging hook question or fun fact (2-3 sentences)
2. <div class="learning-objectives"> — Bulleted list of 4-5 learning objectives with emoji icons
3. ${imageHtml ? imageHtml + '\n4.' : '3.'} <div class="core-content"> — Main teaching content divided into 3-5 clearly titled <section> elements with <h2> headings, rich explanations, diagrams described in text, real-world examples appropriate for age ${params.ageLabel}
${isProgramming ? `4. <div class="code-examples"> — Step-by-step code examples with explanations
5. <div class="try-it-yourself"> — Practice challenge` : ''}
${isLanguage ? `4. <div class="vocabulary-table"> — HTML table of new words/phrases
5. <div class="practice-dialogue"> — Conversation practice` : ''}
- <div class="real-world-connections"> — How this topic is used in real life / careers (age-appropriate)
- <div class="fun-facts"> — 2-3 surprising or fascinating facts${params.ageGroup === 'juniors' || params.ageGroup === 'elementary' ? ' with emoji' : ''}
- <div class="lesson-summary"> — Key takeaways as a bulleted list
- <div class="vocabulary-glossary"> — Important terms and definitions
- <div class="homework-challenge"> — One creative challenge or activity to do at home

Return ONLY the HTML content, no explanations outside of HTML, no markdown.`;

    let fullContent = '';

    const stream = this.client.messages.stream({
      model: MODEL,
      max_tokens: 4096,
      thinking: { type: 'adaptive' },
      messages: [{ role: 'user', content: userPrompt }],
      system: systemPrompt,
    });

    for await (const event of stream) {
      if (
        event.type === 'content_block_delta' &&
        event.delta.type === 'text_delta'
      ) {
        fullContent += event.delta.text;
      }
    }

    const finalMsg = await stream.finalMessage();

    // Extract excerpt (first 160 chars of plain text from content)
    const plainText = fullContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const excerpt = plainText.slice(0, 155) + (plainText.length > 155 ? '...' : '');

    // Extract key terms from vocabulary sections
    const keyTerms = extractKeyTerms(fullContent);

    const estimatedMinutes = Math.round(
      params.lessonNumber <= 3 ? 20 : // introductory lessons shorter
      isProgramming ? 45 : 30
    );

    return {
      title: params.lessonTitle,
      htmlContent: fullContent,
      excerpt,
      keyTerms,
      estimatedMinutes,
    };
  }

  // ── Quiz & Questions ──────────────────────────────────────────

  async generateQuiz(params: {
    courseTitle: string;
    quizTitle: string;
    ageGroup: AgeGroup;
    ageLabel: string;
    courseType: CourseType;
    lessonTopics: string[];
    questionCount?: number;
  }): Promise<GeneratedQuiz> {
    await this.rateLimiter.wait();

    const count = params.questionCount ?? 8;

    const prompt = `Create a quiz for children aged ${params.ageLabel} about the course "${params.courseTitle}".

Quiz title: "${params.quizTitle}"
Topics covered: ${params.lessonTopics.join(', ')}
Number of questions: ${count}
Age group: ${params.ageGroup}

Requirements:
- Questions should test understanding, not just memorization
- Use age-appropriate language
- Mix question types: single-choice (60%), true/false (20%), and multi-select (20%)
- Each question must have a clear correct answer with an explanation
- Difficulty should be appropriate for ages ${params.ageLabel}
- For programming courses: include at least 2 "what does this code do?" questions

Return a JSON object with this exact structure:
{
  "title": "quiz title",
  "description": "2-3 sentence quiz description",
  "passingGrade": 70,
  "questions": [
    {
      "question": "question text",
      "type": "single_choice" | "multi_choice" | "true_false",
      "options": ["option A", "option B", "option C", "option D"],
      "correctAnswer": 0,
      "explanation": "why this is correct",
      "points": 1
    }
  ]
}

For multi_choice, correctAnswer is an array of indices: [0, 2]
For true_false, options are always ["True", "False"] and correctAnswer is 0 or 1
For single_choice, correctAnswer is a single index 0-3

Return ONLY valid JSON, no explanation text.`;

    const response = await this.client.messages.create({
      model: MODEL,
      max_tokens: 3000,
      thinking: { type: 'adaptive' },
      messages: [{ role: 'user', content: prompt }],
    });

    const textBlock = response.content.find(b => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text response from Claude for quiz generation');
    }

    // Extract JSON from response
    const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON found in quiz response');

    return JSON.parse(jsonMatch[0]) as GeneratedQuiz;
  }

  // ── Course Description ────────────────────────────────────────

  async generateCourseContent(params: {
    courseTitle: string;
    ageLabel: string;
    ageGroup: AgeGroup;
    courseType: CourseType;
    sections: string[];
    lessonCount: number;
  }): Promise<{ content: string; excerpt: string; seoTitle: string; seoDescription: string; focusKeyword: string }> {
    await this.rateLimiter.wait();

    const prompt = `Write a comprehensive course overview page for "${params.courseTitle}" for children aged ${params.ageLabel}.

Course includes: ${params.lessonCount} lessons covering: ${params.sections.join(', ')}
Course type: ${params.courseType}
Age group: ${params.ageGroup}

Generate a JSON response with:
{
  "content": "Full HTML course overview (500-800 words, semantic HTML, no markdown). Include: what students will learn, who it's for, prerequisites, what makes this course fun/engaging, curriculum overview, certificate info.",
  "excerpt": "SEO meta description, 150-160 characters, keyword-rich, compelling.",
  "seoTitle": "SEO page title, 50-60 chars, includes main keyword + age.",
  "seoDescription": "Meta description, 155 chars max, call-to-action included.",
  "focusKeyword": "Primary SEO keyword phrase (3-5 words)"
}

Return ONLY valid JSON.`;

    const response = await this.client.messages.create({
      model: MODEL,
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    });

    const textBlock = response.content.find(b => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text response for course content');
    }

    const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in course content response');

    return JSON.parse(jsonMatch[0]);
  }
}

// ── Helpers ───────────────────────────────────────────────────

function getAgeContext(ageGroup: AgeGroup): string {
  const contexts: Record<AgeGroup, string> = {
    juniors: `AGE 6-8: Use very simple language. Short sentences. Lots of emoji and exclamation points. Use fun analogies like animals, toys, and games. Keep explanations to 2-3 sentences max per concept. Headings should be cheerful questions like "What is a computer?" Break into very small chunks.`,
    elementary: `AGE 9-11: Use clear, friendly language. Can handle slightly longer explanations (4-5 sentences). Use relatable examples (school, hobbies, sports, YouTube). Introduce some technical vocabulary but always explain it. Use numbered lists and bullet points.`,
    middle: `AGE 12-14: Use educational but engaging tone. Can handle paragraphs of 5-6 sentences. Introduce technical concepts with proper terminology. Use real-world connections to technology, social media, careers. Include some challenging "extension" activities.`,
    secondary: `AGE 15-16: Academic but engaging tone. Technical vocabulary expected and used correctly. More detailed explanations. Connect to GCSE/exam-style thinking. Include analytical tasks and critical thinking prompts.`,
    advanced: `AGE 17-18: Near-university level content. Deep technical explanations. Industry-relevant examples. Connect to A-Level / university / career requirements. Include research-style activities and project suggestions.`,
  };
  return contexts[ageGroup];
}

function extractKeyTerms(html: string): string[] {
  const terms: string[] = [];
  // Extract from <dt> tags (definition lists)
  const dtMatches = html.matchAll(/<dt[^>]*>([^<]+)<\/dt>/gi);
  for (const match of dtMatches) {
    terms.push(match[1].trim());
  }
  // Extract from strong tags in glossary sections
  const glossarySection = html.match(/<div class="vocabulary-glossary"[^>]*>([\s\S]*?)<\/div>/i);
  if (glossarySection) {
    const strongMatches = glossarySection[1].matchAll(/<strong>([^<]+)<\/strong>/gi);
    for (const match of strongMatches) {
      terms.push(match[1].trim());
    }
  }
  return [...new Set(terms)].slice(0, 10);
}
