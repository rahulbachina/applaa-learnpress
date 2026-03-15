import type { CourseDefinition } from '../types.js';

// ── Helper: Build a language course ──────────────────────────────────────────

function makeLanguageCourse(params: {
  lang: string;
  langSlug: string;
  categorySlug: string;
  level: 1 | 2 | 3 | 4 | 5;
  ageGroup: string;
  ageRange: string;
  levelLabel: string;
  nativeName: string;
  flag: string;
  topics: string[];
  quizTopics: string[];
  imagePrompt: string;
  tags: string[];
}): CourseDefinition {
  const levelNames = ['Starters', 'Elementary', 'Intermediate', 'Advanced', 'Mastery'];
  const levelName = levelNames[params.level - 1];
  const slug = `${params.langSlug}-${levelName.toLowerCase()}`;
  const title = `${params.lang} ${levelName} (${params.ageRange})`;

  const lessons = params.topics.map((topic, i) => ({
    title: topic,
    slug: `${slug}-lesson-${i + 1}`,
    order: i + 1,
    includesCode: false,
  }));

  return {
    title,
    slug,
    description: `Learn ${params.lang} at the ${levelName} level — vocabulary, grammar, conversation, and culture. Designed for learners aged ${params.ageRange}.`,
    excerpt: `${params.lang} ${levelName} course for ages ${params.ageRange}. Build language skills through engaging lessons in vocabulary, grammar, and conversation.`,
    categorySlug: params.categorySlug,
    ageGroup: params.ageGroup as any,
    type: 'language',
    hasCertification: true,
    imagePrompt: params.imagePrompt,
    tags: params.tags,
    sections: [
      {
        title: `${params.lang} ${levelName} — Module 1`,
        order: 1,
        lessons: lessons.slice(0, Math.ceil(lessons.length / 2)),
        quizzes: [
          {
            title: `${params.lang} ${levelName} Quiz 1: ${params.quizTopics[0]}`,
            slug: `${slug}-quiz-1`,
            questions: [
              { question: `What does "${params.quizTopics[0]}" mean?`, type: 'multiple_choice' },
              { question: `How do you say "Hello" in ${params.lang}?`, type: 'multiple_choice' },
              { question: `Which sentence is grammatically correct in ${params.lang}?`, type: 'multiple_choice' },
              { question: `Match the ${params.lang} word to its English translation.`, type: 'multiple_choice' },
              { question: `Complete the sentence in ${params.lang}.`, type: 'multiple_choice' },
              { question: `What is the plural form of this ${params.lang} noun?`, type: 'multiple_choice' },
              { question: `Choose the correct verb form in ${params.lang}.`, type: 'multiple_choice' },
              { question: `Which phrase would you use to introduce yourself in ${params.lang}?`, type: 'multiple_choice' },
            ],
          },
        ],
      },
      {
        title: `${params.lang} ${levelName} — Module 2`,
        order: 2,
        lessons: lessons.slice(Math.ceil(lessons.length / 2)),
        quizzes: [
          {
            title: `${params.lang} ${levelName} Quiz 2: ${params.quizTopics[1] ?? params.quizTopics[0]}`,
            slug: `${slug}-quiz-2`,
            questions: [
              { question: `What is the correct ${params.lang} expression for this situation?`, type: 'multiple_choice' },
              { question: `Translate this sentence into ${params.lang}.`, type: 'multiple_choice' },
              { question: `Which response best fits this ${params.lang} conversation?`, type: 'multiple_choice' },
              { question: `Choose the correct preposition/conjunction in ${params.lang}.`, type: 'multiple_choice' },
              { question: `Identify the grammatical error in this ${params.lang} sentence.`, type: 'multiple_choice' },
              { question: `What tense is used in this ${params.lang} sentence?`, type: 'multiple_choice' },
              { question: `Select the word that best completes the ${params.lang} sentence.`, type: 'multiple_choice' },
              { question: `Which cultural fact about ${params.lang}-speaking countries is correct?`, type: 'multiple_choice' },
            ],
          },
        ],
      },
    ],
  };
}

// ── Spanish ───────────────────────────────────────────────────────────────────

const spanishImageBase = 'Spanish flag colors, flamenco dancer, sun, colorful speech bubbles, flat design illustration, no text';

export const SPANISH_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Spanish', langSlug: 'spanish', categorySlug: 'spanish-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'Español', flag: '🇪🇸',
    topics: [
      'Hola! — Greetings and Introductions', 'Numbers 1–20 (Los Números)', 'Colors in Spanish (Los Colores)',
      'Family Members (La Familia)', 'Animals (Los Animales)', 'Food and Drinks (La Comida)',
      'Days of the Week (Los Días)', 'My Body (Mi Cuerpo)', 'Classroom Objects (La Clase)',
      'Simple Questions — ¿Cómo te llamas?', 'Weather Words (El Tiempo)', 'Spanish Culture & Celebrations',
    ],
    quizTopics: ['Greetings & Numbers', 'Family & Animals'],
    imagePrompt: `${spanishImageBase}, children learning Spanish, bright primary colors`,
    tags: ['spanish', 'language learning', 'beginners', 'kids', 'vocabulary'],
  }),
  makeLanguageCourse({
    lang: 'Spanish', langSlug: 'spanish', categorySlug: 'spanish-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'Español', flag: '🇪🇸',
    topics: [
      'Present Tense Verbs — Ser and Estar', 'Regular -AR Verbs', 'Regular -ER and -IR Verbs',
      'Describing People and Places', 'School Life (La Vida Escolar)', 'Sports and Hobbies (Los Deportes)',
      'Shopping and Money (Las Compras)', 'My Home (Mi Casa)', 'Daily Routines (Las Rutinas)',
      'Past Tense Basics — Pretérito', 'Reading Short Stories in Spanish', 'Spanish-Speaking Countries',
    ],
    quizTopics: ['Present Tense Verbs', 'Daily Life Vocabulary'],
    imagePrompt: `${spanishImageBase}, school, Spanish grammar books, bright illustration`,
    tags: ['spanish', 'grammar', 'verbs', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Spanish', langSlug: 'spanish', categorySlug: 'spanish-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'Español', flag: '🇪🇸',
    topics: [
      'Imperfect vs Preterite Tenses', 'Reflexive Verbs', 'Direct and Indirect Object Pronouns',
      'Subjunctive Mood Introduction', 'Comparing and Contrasting in Spanish', 'Future Tense',
      'Conditional Tense', 'Writing Paragraphs and Essays in Spanish', 'Listening Comprehension',
      'Spanish Literature Excerpts', 'Business Spanish Basics', 'Latin American Culture',
    ],
    quizTopics: ['Past Tenses', 'Pronouns & Verbs'],
    imagePrompt: `${spanishImageBase}, intermediate learners, conversation, Latin America`,
    tags: ['spanish', 'intermediate', 'grammar', 'conversation'],
  }),
  makeLanguageCourse({
    lang: 'Spanish', langSlug: 'spanish', categorySlug: 'spanish-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'Español', flag: '🇪🇸',
    topics: [
      'Advanced Subjunctive Tenses', 'Passive Voice in Spanish', 'Advanced Vocabulary Building',
      'Debate and Argumentation in Spanish', 'Spanish Poetry and Literature', 'Current Events in Spanish',
      'Regional Dialects and Accents', 'Advanced Reading Comprehension', 'Formal Writing in Spanish',
      'Spanish Film and Media', 'Idioms and Colloquialisms', 'GCSE Spanish Preparation',
    ],
    quizTopics: ['Advanced Grammar', 'Literature & Culture'],
    imagePrompt: `${spanishImageBase}, advanced study, literature, culture`,
    tags: ['spanish', 'advanced', 'gcse', 'literature'],
  }),
  makeLanguageCourse({
    lang: 'Spanish', langSlug: 'spanish', categorySlug: 'spanish-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'Español', flag: '🇪🇸',
    topics: [
      'A-Level Spanish — Language Systems', 'Translation: English to Spanish', 'Translation: Spanish to English',
      'Critical Analysis of Spanish Literature', 'Hispanic Society and Culture', 'Spanish Cinema Analysis',
      'Writing Extended Essays in Spanish', 'Oral Examination Preparation', 'Spanish for Academic Purposes',
      'Advanced Listening and Comprehension', 'Contemporary Issues in the Spanish-Speaking World', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation Skills', 'A-Level Topics'],
    imagePrompt: `${spanishImageBase}, university preparation, mastery level, sophisticated`,
    tags: ['spanish', 'mastery', 'a-level', 'advanced'],
  }),
];

// ── French ────────────────────────────────────────────────────────────────────

const frenchImageBase = 'Eiffel Tower, French flag colors, croissant, colorful speech bubbles, flat design illustration, no text';

export const FRENCH_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'French', langSlug: 'french', categorySlug: 'french-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'Français', flag: '🇫🇷',
    topics: [
      'Bonjour! — Greetings in French', 'Les Nombres — Numbers 1–20', 'Les Couleurs — Colors',
      'Ma Famille — My Family', 'Les Animaux — Animals', 'La Nourriture — Food',
      'Les Jours — Days of the Week', 'Mon Corps — My Body', 'La Classe — Classroom',
      'Simple Questions in French', 'La Météo — Weather', 'French Traditions and Culture',
    ],
    quizTopics: ['Bonjour Vocabulary', 'Family & Animals'],
    imagePrompt: `${frenchImageBase}, children learning French, playful`,
    tags: ['french', 'language', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'French', langSlug: 'french', categorySlug: 'french-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'Français', flag: '🇫🇷',
    topics: [
      'Être and Avoir — To Be and To Have', 'Regular -ER Verbs', 'Regular -IR and -RE Verbs',
      'Describing People (Les Adjectifs)', 'La Vie Scolaire — School Life', 'Les Loisirs — Hobbies',
      'Les Courses — Shopping', 'Ma Maison — My House', 'Les Routines — Daily Routines',
      'Passé Composé Introduction', 'French Short Readings', 'Francophone Countries',
    ],
    quizTopics: ['Verb Conjugation', 'Daily Vocabulary'],
    imagePrompt: `${frenchImageBase}, school, grammar, colorful`,
    tags: ['french', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'French', langSlug: 'french', categorySlug: 'french-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'Français', flag: '🇫🇷',
    topics: [
      'Imparfait vs Passé Composé', 'Verbes Pronominaux — Reflexive Verbs', 'Pronoms COD et COI',
      'Subjonctif Introduction', 'Comparatives and Superlatives', 'Le Futur Simple',
      'Le Conditionnel', 'Paragraph Writing in French', 'Listening Comprehension',
      'French Literature Excerpts', 'Business French Basics', 'French-Speaking Africa',
    ],
    quizTopics: ['Past Tenses', 'Intermediate Grammar'],
    imagePrompt: `${frenchImageBase}, intermediate level, Paris, conversation`,
    tags: ['french', 'intermediate', 'conversation'],
  }),
  makeLanguageCourse({
    lang: 'French', langSlug: 'french', categorySlug: 'french-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'Français', flag: '🇫🇷',
    topics: [
      'Advanced Subjunctive', 'Voix Passive — Passive Voice', 'Advanced Vocabulary',
      'Debate in French', 'French Literature and Poetry', 'Current Affairs in French',
      'Regional French Varieties', 'Advanced Reading', 'Formal Writing',
      'French Cinema', 'Idioms and Expressions', 'GCSE French Preparation',
    ],
    quizTopics: ['Advanced Grammar', 'Culture & Literature'],
    imagePrompt: `${frenchImageBase}, advanced study, literature, sophisticated`,
    tags: ['french', 'advanced', 'gcse'],
  }),
  makeLanguageCourse({
    lang: 'French', langSlug: 'french', categorySlug: 'french-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'Français', flag: '🇫🇷',
    topics: [
      'A-Level French Language Systems', 'English–French Translation', 'French–English Translation',
      'Literary Analysis in French', 'French Society and Identity', 'Francophone Cinema',
      'Extended Essays in French', 'Oral Exam Preparation', 'Academic French',
      'Advanced Listening Skills', 'Contemporary Francophone Issues', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation', 'A-Level French'],
    imagePrompt: `${frenchImageBase}, university level, mastery, sophisticated`,
    tags: ['french', 'mastery', 'a-level'],
  }),
];

// ── German ────────────────────────────────────────────────────────────────────

const germanImageBase = 'German flag colors, Brandenburg Gate, books, colorful speech bubbles, flat design illustration, no text';

export const GERMAN_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'German', langSlug: 'german', categorySlug: 'german-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'Deutsch', flag: '🇩🇪',
    topics: [
      'Hallo! — German Greetings', 'Die Zahlen — Numbers 1–20', 'Die Farben — Colors',
      'Meine Familie — My Family', 'Die Tiere — Animals', 'Das Essen — Food',
      'Die Wochentage — Days of the Week', 'Mein Körper — My Body', 'Im Klassenzimmer — Classroom',
      'Simple Phrases in German', 'Das Wetter — Weather', 'German Culture and Traditions',
    ],
    quizTopics: ['Greetings & Numbers', 'Family & Food'],
    imagePrompt: `${germanImageBase}, children, playful, beginners`,
    tags: ['german', 'language', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'German', langSlug: 'german', categorySlug: 'german-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'Deutsch', flag: '🇩🇪',
    topics: [
      'Sein and Haben — To Be and To Have', 'Regular Verbs in Present Tense', 'Nouns and Gender (Der/Die/Das)',
      'Nominative and Accusative Cases', 'School and Subjects', 'Hobbies and Free Time',
      'Shopping in German', 'Mein Haus — My House', 'Daily Routines',
      'Simple Past — Perfekt', 'Short Texts in German', 'Germany, Austria, Switzerland',
    ],
    quizTopics: ['German Grammar Basics', 'Everyday Vocabulary'],
    imagePrompt: `${germanImageBase}, school, grammar, elementary`,
    tags: ['german', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'German', langSlug: 'german', categorySlug: 'german-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'Deutsch', flag: '🇩🇪',
    topics: [
      'Dative Case', 'Genitive Case', 'Modal Verbs', 'Separable Verbs',
      'Imperfect Tense — Präteritum', 'Future Tense — Futur I', 'Reflexive Verbs',
      'Adjective Endings', 'Writing in German', 'Listening Skills',
      'German Literature Basics', 'German-Speaking World Culture',
    ],
    quizTopics: ['Four Cases', 'Verb Forms'],
    imagePrompt: `${germanImageBase}, intermediate, conversation, culture`,
    tags: ['german', 'intermediate', 'grammar'],
  }),
  makeLanguageCourse({
    lang: 'German', langSlug: 'german', categorySlug: 'german-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'Deutsch', flag: '🇩🇪',
    topics: [
      'Subjunctive II — Konjunktiv II', 'Passive Voice', 'Advanced Adjective Declension',
      'Infinitive Constructions', 'German Literature and Poetry', 'Current Affairs in German',
      'Debate and Discussion in German', 'Advanced Reading Texts', 'Formal Writing',
      'German Media and Film', 'Idiomatic Expressions', 'GCSE German Preparation',
    ],
    quizTopics: ['Advanced Grammar', 'Literature & Society'],
    imagePrompt: `${germanImageBase}, advanced, Berlin, sophisticated`,
    tags: ['german', 'advanced', 'gcse'],
  }),
  makeLanguageCourse({
    lang: 'German', langSlug: 'german', categorySlug: 'german-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'Deutsch', flag: '🇩🇪',
    topics: [
      'A-Level German Language Systems', 'Translation Skills', 'Literary Analysis in German',
      'German Society and Culture', 'German Cinema Analysis', 'Extended Essays',
      'Oral Examination Skills', 'Academic German', 'Advanced Listening',
      'Contemporary Issues in Germany', 'German Philosophy and Thought', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation', 'A-Level German'],
    imagePrompt: `${germanImageBase}, university, mastery, philosophy`,
    tags: ['german', 'mastery', 'a-level'],
  }),
];

// ── Mandarin Chinese ──────────────────────────────────────────────────────────

const mandarinImageBase = 'Chinese dragon, cherry blossoms, Chinese lanterns, colorful speech bubbles, flat design, bright colors, no text';

export const MANDARIN_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Mandarin Chinese', langSlug: 'mandarin', categorySlug: 'mandarin-chinese',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: '普通话', flag: '🇨🇳',
    topics: [
      'Nǐ Hǎo! — Basic Greetings', 'Tones in Mandarin — The 4 Tones', 'Pinyin Pronunciation Guide',
      'Numbers 1–20 (Yī Èr Sān...)', 'Colors (Yánsè)', 'Family Members (Jiātíng)',
      'Animals (Dòngwù)', 'Food and Drink (Shíwù)', 'Days of the Week (Xīngqī)',
      'Simple Phrases — Wǒ ài...',  'Chinese Characters Introduction', 'Chinese New Year',
    ],
    quizTopics: ['Tones & Pinyin', 'Basic Vocabulary'],
    imagePrompt: `${mandarinImageBase}, children learning, pinyin, tones`,
    tags: ['mandarin', 'chinese', 'pinyin', 'tones', 'beginners'],
  }),
  makeLanguageCourse({
    lang: 'Mandarin Chinese', langSlug: 'mandarin', categorySlug: 'mandarin-chinese',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: '普通话', flag: '🇨🇳',
    topics: [
      'Basic Sentence Structure — SVO', 'Question Particles — Ma, Ne', 'Measure Words (Liàngcí)',
      'Common Verbs — Yǒu, Shì, Zuò', 'School Vocabulary (Xuéxiào)', 'Hobbies (Àihào)',
      'Shopping — Duōshǎo Qián?', 'Describing Places', 'Time Expressions',
      'Introduction to Characters — Radicals', 'Short Reading Passages', 'Chinese Festivals',
    ],
    quizTopics: ['Sentence Structure', 'Characters & Vocabulary'],
    imagePrompt: `${mandarinImageBase}, school, characters, elementary`,
    tags: ['mandarin', 'characters', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Mandarin Chinese', langSlug: 'mandarin', categorySlug: 'mandarin-chinese',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: '普通话', flag: '🇨🇳',
    topics: [
      'Aspect Particles — Le, Guo, Zhe', 'Resultative Complements', 'Potential Complements',
      'Directional Complements', 'Complex Sentences — Yīnwèi...suǒyǐ', 'Passive Voice — Bèi Construction',
      'Reading Authentic Texts', 'Writing Chinese Paragraphs', 'HSK 3 Vocabulary',
      'Chinese Pop Culture', 'Business Chinese Introduction', 'China — History and Geography',
    ],
    quizTopics: ['Aspect Particles', 'HSK Vocabulary'],
    imagePrompt: `${mandarinImageBase}, intermediate, Shanghai, modern China`,
    tags: ['mandarin', 'intermediate', 'hsk', 'characters'],
  }),
  makeLanguageCourse({
    lang: 'Mandarin Chinese', langSlug: 'mandarin', categorySlug: 'mandarin-chinese',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: '普通话', flag: '🇨🇳',
    topics: [
      'Advanced Grammar Patterns', 'Chéngyǔ — Four-Character Idioms', 'Formal Written Chinese',
      'Chinese Literature Excerpts', 'Media and Current Affairs', 'Debate in Mandarin',
      'HSK 4–5 Vocabulary', 'Advanced Reading and Comprehension', 'Oral Presentation Skills',
      'Chinese Calligraphy Basics', 'Contemporary Chinese Society', 'GCSE Chinese Preparation',
    ],
    quizTopics: ['Chéngyǔ & Idioms', 'Advanced Grammar'],
    imagePrompt: `${mandarinImageBase}, advanced, Beijing, literature, calligraphy`,
    tags: ['mandarin', 'advanced', 'hsk', 'gcse'],
  }),
  makeLanguageCourse({
    lang: 'Mandarin Chinese', langSlug: 'mandarin', categorySlug: 'mandarin-chinese',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: '普通话', flag: '🇨🇳',
    topics: [
      'A-Level Chinese Language Mastery', 'Classical Chinese Introduction', 'Literary Analysis',
      'Translation: Chinese–English', 'Translation: English–Chinese', 'Chinese Philosophy',
      'Chinese Film and Media Analysis', 'Extended Writing in Chinese', 'Oral Examination',
      'HSK 5–6 Preparation', 'Modern China and Global Issues', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation Skills', 'Classical Chinese'],
    imagePrompt: `${mandarinImageBase}, mastery, classical, philosophy`,
    tags: ['mandarin', 'mastery', 'a-level', 'hsk6'],
  }),
];

// ── Japanese ──────────────────────────────────────────────────────────────────

const japaneseImageBase = 'Mount Fuji, Japanese torii gate, sakura flowers, colorful speech bubbles, flat design, no text';

export const JAPANESE_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Japanese', langSlug: 'japanese', categorySlug: 'japanese-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: '日本語', flag: '🇯🇵',
    topics: [
      'Konnichiwa! — Japanese Greetings', 'Hiragana — あいうえお (Vowels)', 'Hiragana — かきくけこ–さしすせそ',
      'Hiragana — たちつてと–なにぬねの', 'Hiragana — はひふへほ–まみむめも', 'Hiragana — やゆよ–らりるれろ–わをん',
      'Numbers in Japanese (Ichi, Ni, San...)', 'Colors (Iro)', 'Animals (Doubutsu)',
      'Food (Tabemono)', 'Family (Kazoku)', 'Japanese Culture — Seasons and Festivals',
    ],
    quizTopics: ['Hiragana Recognition', 'Basic Vocabulary'],
    imagePrompt: `${japaneseImageBase}, hiragana chart, children, colorful`,
    tags: ['japanese', 'hiragana', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'Japanese', langSlug: 'japanese', categorySlug: 'japanese-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: '日本語', flag: '🇯🇵',
    topics: [
      'Katakana — アイウエオ (Complete)', 'Basic Sentence Structure — Topic-Comment', 'Desu and Masu Forms',
      'Particles — Wa, Ga, Wo, Ni, De', 'School Vocabulary (Gakkou)', 'Hobbies (Shumi)',
      'Numbers and Counters', 'Common Adjectives — i-adjectives', 'Common Adjectives — na-adjectives',
      'Introduction to Kanji — Numbers and Days', 'Simple Conversations', 'Japanese School Life',
    ],
    quizTopics: ['Katakana & Particles', 'Adjectives & Kanji'],
    imagePrompt: `${japaneseImageBase}, katakana, school, elementary`,
    tags: ['japanese', 'katakana', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Japanese', langSlug: 'japanese', categorySlug: 'japanese-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: '日本語', flag: '🇯🇵',
    topics: [
      'Past Tense — Ta-form', 'Te-form and Its Uses', 'Expressing Ability — Koto ga Dekiru',
      'Giving and Receiving — Ageru/Morau/Kureru', 'Conditional Forms', 'Relative Clauses',
      'JLPT N4 Kanji (100 characters)', 'Reading Short Passages', 'Writing Paragraphs',
      'Japanese Pop Culture — Anime and Manga', 'Shopping and Services', 'Japan — Geography and Society',
    ],
    quizTopics: ['Verb Forms', 'Kanji N4'],
    imagePrompt: `${japaneseImageBase}, intermediate, Tokyo, modern Japan`,
    tags: ['japanese', 'intermediate', 'kanji', 'jlpt'],
  }),
  makeLanguageCourse({
    lang: 'Japanese', langSlug: 'japanese', categorySlug: 'japanese-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: '日本語', flag: '🇯🇵',
    topics: [
      'Passive and Causative Forms', 'Keigo — Honorific Language', 'Advanced Kanji — N3 Level',
      'Japanese Literature Excerpts', 'Media and Current Events', 'Formal Writing',
      'Business Japanese Introduction', 'Advanced Reading', 'Oral Presentation',
      'Japanese History and Culture', 'Debate in Japanese', 'GCSE Japanese Preparation',
    ],
    quizTopics: ['Keigo & Passives', 'Literature & Society'],
    imagePrompt: `${japaneseImageBase}, advanced, literature, Kyoto, temple`,
    tags: ['japanese', 'advanced', 'keigo', 'gcse'],
  }),
  makeLanguageCourse({
    lang: 'Japanese', langSlug: 'japanese', categorySlug: 'japanese-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: '日本語', flag: '🇯🇵',
    topics: [
      'JLPT N2/N1 Preparation', 'Classical Japanese Introduction', 'Advanced Literary Analysis',
      'Translation Practice', 'Japanese Philosophy and Aesthetics', 'Media Analysis',
      'Extended Essays in Japanese', 'Oral Examination Skills', 'Academic Japanese',
      'Japanese Society and Global Role', 'Contemporary Issues in Japan', 'Final Mastery Assessment',
    ],
    quizTopics: ['JLPT N2', 'Advanced Translation'],
    imagePrompt: `${japaneseImageBase}, mastery, philosophy, classical, sophisticated`,
    tags: ['japanese', 'mastery', 'jlpt', 'n1'],
  }),
];

// ── Arabic ────────────────────────────────────────────────────────────────────

const arabicImageBase = 'Arabian desert, crescent moon, stars, geometric patterns, colorful speech bubbles, flat design, no text';

export const ARABIC_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Arabic', langSlug: 'arabic', categorySlug: 'arabic-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'العربية', flag: '🌙',
    topics: [
      'Arabic Alphabet — Alef to Yaa', 'Writing Direction — Right to Left', 'Vowel Marks (Harakaat)',
      'Numbers in Arabic (١٢٣...)', 'Greetings — Marhaba, As-salamu Alaykum', 'Colors in Arabic',
      'Animals (Hayawanat)', 'Family (Aila)', 'Food (Akl)', 'Days of the Week',
      'Simple Sentences in Arabic', 'Arab Culture and Traditions',
    ],
    quizTopics: ['Arabic Alphabet', 'Basic Vocabulary'],
    imagePrompt: `${arabicImageBase}, Arabic alphabet, children learning, colorful`,
    tags: ['arabic', 'alphabet', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'Arabic', langSlug: 'arabic', categorySlug: 'arabic-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'العربية', flag: '🌙',
    topics: [
      'Nouns — Masculine and Feminine', 'Definite Article — Al', 'Singular, Dual, Plural',
      'Basic Verbs in Present Tense', 'Personal Pronouns', 'School Vocabulary',
      'Descriptive Adjectives', 'Simple Sentences and Questions', 'Numbers 1–100',
      'Short Reading Passages', 'Arabic Culture', 'Arab Countries and Capitals',
    ],
    quizTopics: ['Nouns & Gender', 'Present Tense Verbs'],
    imagePrompt: `${arabicImageBase}, school, grammar, elementary`,
    tags: ['arabic', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Arabic', langSlug: 'arabic', categorySlug: 'arabic-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'العربية', flag: '🌙',
    topics: [
      'Past Tense Verbs', 'Future Tense', 'Verb Patterns (Awzaan)', 'Attached Pronouns',
      'Relative Clauses — Alladhi/Allati', 'Numbers and Dates in Arabic', 'Reading Newspaper Excerpts',
      'Arabic Letter Sounds — Advanced', 'Writing Paragraphs in Arabic', 'Modern Standard Arabic vs Dialect',
      'Arabic Literature Introduction', 'Arab World — History and Geography',
    ],
    quizTopics: ['Verb Patterns', 'Reading Comprehension'],
    imagePrompt: `${arabicImageBase}, intermediate, Cairo, modern Arabic`,
    tags: ['arabic', 'intermediate', 'msa', 'verbs'],
  }),
  makeLanguageCourse({
    lang: 'Arabic', langSlug: 'arabic', categorySlug: 'arabic-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'العربية', flag: '🌙',
    topics: [
      'Advanced Verb Forms — Derived Forms', 'Passive Voice in Arabic', 'Conditional Sentences',
      'Arabic Rhetoric — Balaaghah Basics', 'Classical Arabic Text Reading', 'Media Arabic',
      'Formal Writing — Essays', 'Advanced Vocabulary', 'Oral Communication Skills',
      'Contemporary Arab Literature', 'Social Issues in Arab World', 'GCSE Arabic Preparation',
    ],
    quizTopics: ['Derived Verb Forms', 'Literature & Media'],
    imagePrompt: `${arabicImageBase}, advanced, literature, calligraphy, sophisticated`,
    tags: ['arabic', 'advanced', 'msa', 'gcse'],
  }),
  makeLanguageCourse({
    lang: 'Arabic', langSlug: 'arabic', categorySlug: 'arabic-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'العربية', flag: '🌙',
    topics: [
      'A-Level Arabic Language Mastery', 'Quranic Arabic Introduction', 'Classical Poetry Analysis',
      'Translation: Arabic–English', 'Translation: English–Arabic', 'Media Analysis in Arabic',
      'Extended Academic Writing', 'Oral Examination', 'Arabic Philosophy and Thought',
      'Contemporary Arab Society', 'Global Issues in Arabic', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation & Classical Arabic', 'A-Level Topics'],
    imagePrompt: `${arabicImageBase}, mastery, classical, philosophy, manuscript`,
    tags: ['arabic', 'mastery', 'a-level', 'classical'],
  }),
];

// ── Portuguese ────────────────────────────────────────────────────────────────

const portugueseImageBase = 'Brazilian carnival colors, tropical birds, colorful speech bubbles, Portuguese tiles pattern, flat design, no text';

export const PORTUGUESE_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Portuguese', langSlug: 'portuguese', categorySlug: 'portuguese-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'Português', flag: '🇧🇷',
    topics: [
      'Olá! — Greetings in Portuguese', 'Os Números — Numbers 1–20', 'As Cores — Colors',
      'Minha Família — My Family', 'Os Animais — Animals', 'Comida e Bebida — Food',
      'Os Dias — Days of the Week', 'Meu Corpo — My Body', 'A Sala de Aula — Classroom',
      'Simple Phrases in Portuguese', 'O Tempo — Weather', 'Brazil and Portugal Culture',
    ],
    quizTopics: ['Basic Portuguese', 'Family & Animals'],
    imagePrompt: `${portugueseImageBase}, children learning, beginners, colorful`,
    tags: ['portuguese', 'language', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'Portuguese', langSlug: 'portuguese', categorySlug: 'portuguese-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'Português', flag: '🇧🇷',
    topics: [
      'Ser and Estar — To Be', 'Regular -AR Verbs', 'Regular -ER/-IR Verbs',
      'Articles — O, A, Os, As, Um, Uma', 'Adjectives and Agreement', 'School and Subjects',
      'Hobbies and Activities', 'Shopping', 'My Home', 'Daily Routines',
      'Pretérito Perfeito — Simple Past', 'Portuguese-Speaking Countries',
    ],
    quizTopics: ['Ser vs Estar', 'Everyday Grammar'],
    imagePrompt: `${portugueseImageBase}, school, grammar, Brazil, Portugal`,
    tags: ['portuguese', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Portuguese', langSlug: 'portuguese', categorySlug: 'portuguese-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'Português', flag: '🇧🇷',
    topics: [
      'Imperfeito vs Pretérito Perfeito', 'Reflexive Verbs', 'Object Pronouns',
      'Subjuntivo Introduction', 'Future and Conditional', 'Comparative and Superlative',
      'Writing in Portuguese', 'Listening Comprehension', 'Brazilian Portuguese vs European',
      'Portuguese Literature Basics', 'Brazilian Pop Culture', 'Lusophone Africa',
    ],
    quizTopics: ['Past Tenses', 'Brazilian vs European Portuguese'],
    imagePrompt: `${portugueseImageBase}, intermediate, Rio, culture`,
    tags: ['portuguese', 'intermediate', 'grammar'],
  }),
  makeLanguageCourse({
    lang: 'Portuguese', langSlug: 'portuguese', categorySlug: 'portuguese-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'Português', flag: '🇧🇷',
    topics: [
      'Advanced Subjunctive', 'Passive Voice', 'Advanced Vocabulary', 'Formal Writing',
      'Portuguese Literature and Poetry', 'Current Affairs in Portuguese', 'Debate in Portuguese',
      'Advanced Reading', 'Brazilian and Portuguese Film', 'Idioms and Expressions',
      'Oral Communication', 'Exam Preparation',
    ],
    quizTopics: ['Advanced Grammar', 'Literature & Culture'],
    imagePrompt: `${portugueseImageBase}, advanced, Lisbon, literature, sophisticated`,
    tags: ['portuguese', 'advanced', 'literature'],
  }),
  makeLanguageCourse({
    lang: 'Portuguese', langSlug: 'portuguese', categorySlug: 'portuguese-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'Português', flag: '🇧🇷',
    topics: [
      'Language Mastery — Register and Style', 'Literary Analysis', 'Translation Skills',
      'Portuguese-Speaking World', 'Contemporary Issues', 'Academic Writing',
      'Oral Examination Preparation', 'Media and Society', 'Extended Essays',
      'Global Perspectives in Portuguese', 'Portuguese Philosophy', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation', 'Academic Portuguese'],
    imagePrompt: `${portugueseImageBase}, mastery, academic, sophisticated`,
    tags: ['portuguese', 'mastery', 'academic'],
  }),
];

// ── Italian ───────────────────────────────────────────────────────────────────

const italianImageBase = 'Colosseum, Italian flag colors, pizza, colorful speech bubbles, flat design illustration, no text';

export const ITALIAN_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Italian', langSlug: 'italian', categorySlug: 'italian-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'Italiano', flag: '🇮🇹',
    topics: [
      'Ciao! — Italian Greetings', 'I Numeri — Numbers 1–20', 'I Colori — Colors',
      'La Mia Famiglia — My Family', 'Gli Animali — Animals', 'Il Cibo — Food',
      'I Giorni — Days of the Week', 'Il Mio Corpo — My Body', 'La Classe — Classroom',
      'Simple Phrases in Italian', 'Il Tempo — Weather', 'Italian Culture — Pasta, Art, Music',
    ],
    quizTopics: ['Ciao! Greetings', 'Food & Family'],
    imagePrompt: `${italianImageBase}, children, beginners, Rome, colorful`,
    tags: ['italian', 'language', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'Italian', langSlug: 'italian', categorySlug: 'italian-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'Italiano', flag: '🇮🇹',
    topics: [
      'Essere and Avere', 'Regular -ARE Verbs', 'Regular -ERE/-IRE Verbs',
      'Articles — Il, La, Un, Una', 'Adjectives in Italian', 'School and Subjects',
      'Hobbies and Sports', 'Shopping', 'Home and Furniture', 'Daily Routines',
      'Passato Prossimo — Perfect Tense', 'Italian Cities and Regions',
    ],
    quizTopics: ['Verb Conjugation', 'Italian Articles & Adjectives'],
    imagePrompt: `${italianImageBase}, school, grammar, Venice, Florence`,
    tags: ['italian', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Italian', langSlug: 'italian', categorySlug: 'italian-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'Italiano', flag: '🇮🇹',
    topics: [
      'Imperfetto vs Passato Prossimo', 'Reflexive Verbs', 'Direct and Indirect Pronouns',
      'Congiuntivo Introduction', 'Future and Conditional Tense', 'Comparatives',
      'Italian Literature Basics', 'Listening Practice', 'Writing in Italian',
      'Italian Art and Renaissance', 'Italian Pop Culture', 'Italy — Culture and Society',
    ],
    quizTopics: ['Past Tenses', 'Intermediate Grammar'],
    imagePrompt: `${italianImageBase}, intermediate, Renaissance, art, culture`,
    tags: ['italian', 'intermediate', 'renaissance'],
  }),
  makeLanguageCourse({
    lang: 'Italian', langSlug: 'italian', categorySlug: 'italian-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'Italiano', flag: '🇮🇹',
    topics: [
      'Advanced Congiuntivo', 'Passive and Impersonal Forms', 'Advanced Vocabulary',
      'Italian Literature — Dante, Petrarca', 'Current Affairs in Italian', 'Formal Writing',
      'Italian Cinema', 'Debate in Italian', 'Advanced Reading', 'Idioms and Proverbs',
      'Italian Society and Politics', 'Exam Preparation',
    ],
    quizTopics: ['Literature & Grammar', 'Society & Culture'],
    imagePrompt: `${italianImageBase}, advanced, Dante, literature, Rome`,
    tags: ['italian', 'advanced', 'literature', 'dante'],
  }),
  makeLanguageCourse({
    lang: 'Italian', langSlug: 'italian', categorySlug: 'italian-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'Italiano', flag: '🇮🇹',
    topics: [
      'Italian Language Mastery', 'Translation Skills', 'Literary Analysis in Italian',
      'Italian Philosophy and Thought', 'Academic Writing in Italian', 'Oral Skills',
      'Extended Essays', 'Italian Cinema and Media', 'Contemporary Italian Society',
      'Italian in Global Context', 'Revision and Final Assessment', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation', 'Literary Analysis'],
    imagePrompt: `${italianImageBase}, mastery, philosophy, academic, Milan`,
    tags: ['italian', 'mastery', 'academic'],
  }),
];

// ── Hindi ─────────────────────────────────────────────────────────────────────

const hindiImageBase = 'Taj Mahal, Indian peacock, rangoli patterns, colorful speech bubbles, flat design, bright colors, no text';

export const HINDI_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Hindi', langSlug: 'hindi', categorySlug: 'hindi-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'हिन्दी', flag: '🇮🇳',
    topics: [
      'Hindi Script — Devanagari Vowels (Swar)', 'Devanagari Consonants — Ka to Na',
      'Devanagari Consonants — Pa to Ha', 'Matra — Vowel Signs', 'Numbers in Hindi (Ek, Do, Teen...)',
      'Namaste! — Greetings in Hindi', 'Colors (Rang)', 'Animals (Janwar)', 'Family (Parivaar)', 'Food (Khaana)',
      'Days of the Week (Vaara)', 'Indian Culture — Festivals and Traditions',
    ],
    quizTopics: ['Devanagari Script', 'Basic Vocabulary'],
    imagePrompt: `${hindiImageBase}, children learning, Devanagari, colorful`,
    tags: ['hindi', 'devanagari', 'beginners', 'kids', 'india'],
  }),
  makeLanguageCourse({
    lang: 'Hindi', langSlug: 'hindi', categorySlug: 'hindi-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'हिन्दी', flag: '🇮🇳',
    topics: [
      'Nouns — Gender in Hindi', 'Singular and Plural', 'Personal Pronouns (Main, Tum, Aap)',
      'Present Tense Verbs', 'Simple Sentences — Subject-Object-Verb', 'School Vocabulary',
      'Hobbies and Activities', 'Simple Questions — Kya? Kaun? Kahan?', 'Numbers 1–100',
      'Short Reading in Devanagari', 'India — Geography and Culture', 'Hindi Stories',
    ],
    quizTopics: ['Hindi Grammar Basics', 'Reading Devanagari'],
    imagePrompt: `${hindiImageBase}, school, grammar, Devanagari, elementary`,
    tags: ['hindi', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Hindi', langSlug: 'hindi', categorySlug: 'hindi-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'हिन्दी', flag: '🇮🇳',
    topics: [
      'Past Tense in Hindi', 'Future Tense', 'Postpositions (Ne, Ko, Se, Mein...)',
      'Adjectives and Adverbs', 'Compound Verbs', 'Honorific Levels — Aap/Tum/Tu',
      'Reading Hindi Texts', 'Writing Hindi Paragraphs', 'Hindi Literature Introduction',
      'Bollywood Culture', 'India — History and Society', 'Regional Languages of India',
    ],
    quizTopics: ['Past & Future Tenses', 'Postpositions'],
    imagePrompt: `${hindiImageBase}, intermediate, Bollywood, Delhi, culture`,
    tags: ['hindi', 'intermediate', 'bollywood'],
  }),
  makeLanguageCourse({
    lang: 'Hindi', langSlug: 'hindi', categorySlug: 'hindi-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'हिन्दी', flag: '🇮🇳',
    topics: [
      'Advanced Hindi Grammar', 'Passive Voice in Hindi', 'Formal Written Hindi',
      'Hindi Literature — Premchand, Harivansh Rai', 'Media and Current Events',
      'Debate and Discussion', 'Advanced Vocabulary', 'Poetry in Hindi',
      'Oral Communication', 'Sanskrit Influence on Hindi', 'Modern Indian Society', 'Exam Preparation',
    ],
    quizTopics: ['Literature & Culture', 'Advanced Grammar'],
    imagePrompt: `${hindiImageBase}, advanced, literature, classical, sophisticated`,
    tags: ['hindi', 'advanced', 'literature'],
  }),
  makeLanguageCourse({
    lang: 'Hindi', langSlug: 'hindi', categorySlug: 'hindi-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'हिन्दी', flag: '🇮🇳',
    topics: [
      'Hindi Language Mastery', 'Literary Analysis', 'Translation Skills',
      'Academic Hindi Writing', 'Hindi in Global Context', 'Contemporary Indian Literature',
      'Oral Examination Preparation', 'Media Analysis in Hindi', 'Extended Essays',
      'Indian Philosophy and Hindi', 'India in the 21st Century', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation', 'Academic Hindi'],
    imagePrompt: `${hindiImageBase}, mastery, academic, Mumbai, sophisticated`,
    tags: ['hindi', 'mastery', 'academic'],
  }),
];

// ── Korean ────────────────────────────────────────────────────────────────────

const koreanImageBase = 'Korean traditional palace, K-pop music notes, Hangul symbols as decoration, colorful flat design, no text';

export const KOREAN_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Korean', langSlug: 'korean', categorySlug: 'korean-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: '한국어', flag: '🇰🇷',
    topics: [
      'Hangul — Vowels (Moeum)', 'Hangul — Basic Consonants (Jaeum)', 'Hangul — Complex Consonants',
      'Reading Hangul Syllable Blocks', 'Annyeong! — Korean Greetings', 'Numbers (Il, I, Sam...)',
      'Colors (Saek)', 'Animals (Dongmul)', 'Food (Eumsik)', 'Family (Gajok)',
      'Days of the Week', 'Korean Culture — K-pop and Traditions',
    ],
    quizTopics: ['Hangul Reading', 'Basic Vocabulary'],
    imagePrompt: `${koreanImageBase}, Hangul chart, children, K-pop, colorful`,
    tags: ['korean', 'hangul', 'beginners', 'kids', 'kpop'],
  }),
  makeLanguageCourse({
    lang: 'Korean', langSlug: 'korean', categorySlug: 'korean-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: '한국어', flag: '🇰🇷',
    topics: [
      'Sentence Structure — SOV', 'Topic Particle — Eun/Neun', 'Subject and Object Particles',
      'Basic Verbs in Present Tense', 'Formal vs Informal Speech', 'School Vocabulary',
      'Hobbies and Interests', 'Numbers — Native and Sino-Korean', 'Describing People and Things',
      'Short Conversations', 'Korean Food Culture', 'Korea — North and South',
    ],
    quizTopics: ['Particles & Structure', 'Vocabulary in Context'],
    imagePrompt: `${koreanImageBase}, school, Seoul, elementary, Korean food`,
    tags: ['korean', 'grammar', 'elementary', 'particles'],
  }),
  makeLanguageCourse({
    lang: 'Korean', langSlug: 'korean', categorySlug: 'korean-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: '한국어', flag: '🇰🇷',
    topics: [
      'Past Tense — Aesseo/Eosseo', 'Future and Intent — Gesseo', 'Connective Endings — Go, Seo, Neunde',
      'Expressing Desire — Go Sipeo', 'Causative and Passive', 'Levels of Politeness',
      'Reading Korean Texts', 'Writing Paragraphs', 'TOPIK Beginner Vocabulary',
      'Korean Drama Culture', 'Korean History', 'Contemporary Korean Society',
    ],
    quizTopics: ['Verb Endings', 'TOPIK Vocabulary'],
    imagePrompt: `${koreanImageBase}, intermediate, Seoul, Korean drama, modern`,
    tags: ['korean', 'intermediate', 'topik', 'kdrama'],
  }),
  makeLanguageCourse({
    lang: 'Korean', langSlug: 'korean', categorySlug: 'korean-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: '한국어', flag: '🇰🇷',
    topics: [
      'Honorific Verb Forms', 'Advanced Connective Endings', 'Idiomatic Expressions',
      'Korean Literature Excerpts', 'Media Korean — News and Articles', 'Formal vs Colloquial',
      'Korean Business Language', 'Advanced Reading', 'Oral Communication',
      'K-pop Lyric Analysis', 'Korean Society and Technology', 'Exam Preparation',
    ],
    quizTopics: ['Honorifics & Idioms', 'Literature & Media'],
    imagePrompt: `${koreanImageBase}, advanced, literature, Seoul skyline, sophisticated`,
    tags: ['korean', 'advanced', 'honorifics', 'literature'],
  }),
  makeLanguageCourse({
    lang: 'Korean', langSlug: 'korean', categorySlug: 'korean-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: '한국어', flag: '🇰🇷',
    topics: [
      'TOPIK Advanced Preparation', 'Literary Korean and Classical Forms', 'Translation Skills',
      'Academic Writing in Korean', 'Korean Philosophy', 'Advanced Media Analysis',
      'Oral Examination Skills', 'Extended Essays', 'Korea in the Global Context',
      'Korean Technology and Innovation', 'Contemporary Korean Culture', 'Final Mastery Assessment',
    ],
    quizTopics: ['TOPIK Advanced', 'Translation & Academic'],
    imagePrompt: `${koreanImageBase}, mastery, TOPIK, academic, sophisticated`,
    tags: ['korean', 'mastery', 'topik', 'academic'],
  }),
];

// ── Russian ───────────────────────────────────────────────────────────────────

const russianImageBase = 'St Basil Cathedral, Russian matryoshka dolls, snowflakes, colorful speech bubbles, flat design, no text';

export const RUSSIAN_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Russian', langSlug: 'russian', categorySlug: 'russian-language',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'Русский', flag: '🇷🇺',
    topics: [
      'Russian Alphabet — Cyrillic (Part 1)', 'Russian Alphabet — Cyrillic (Part 2)',
      'Reading Cyrillic Words', 'Privet! — Russian Greetings', 'Numbers in Russian (Odin, Dva, Tri...)',
      'Colors (Tsveta)', 'Animals (Zhivotnye)', 'Family (Semya)', 'Food (Eda)',
      'Days of the Week', 'Simple Russian Phrases', 'Russian Culture — Snow, Bears, Ballet',
    ],
    quizTopics: ['Cyrillic Alphabet', 'Basic Russian Vocabulary'],
    imagePrompt: `${russianImageBase}, children learning, Cyrillic, colorful`,
    tags: ['russian', 'cyrillic', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'Russian', langSlug: 'russian', categorySlug: 'russian-language',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'Русский', flag: '🇷🇺',
    topics: [
      'Nouns — Gender in Russian', 'Nouns — Nominative Case', 'Verbs — Present Tense Conjugation',
      'Personal Pronouns', 'Adjectives — Agreement', 'Simple Sentences',
      'School and Subjects', 'Hobbies', 'Numbers 1–100', 'Short Reading in Russian',
      'Russian History Basics', 'Russia — Geography and Culture',
    ],
    quizTopics: ['Russian Nouns & Verbs', 'Vocabulary'],
    imagePrompt: `${russianImageBase}, school, Moscow, elementary`,
    tags: ['russian', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'Russian', langSlug: 'russian', categorySlug: 'russian-language',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'Русский', flag: '🇷🇺',
    topics: [
      'The Six Cases in Russian', 'Accusative and Genitive', 'Dative and Instrumental',
      'Prepositional Case', 'Aspects — Perfective and Imperfective', 'Past and Future Tense',
      'Motion Verbs (Idti/Ekhat)', 'Reading Russian Texts', 'Writing in Russian',
      'Russian Literature Introduction', 'Russian Art and Music', 'Russia Today',
    ],
    quizTopics: ['Russian Cases', 'Verb Aspects'],
    imagePrompt: `${russianImageBase}, intermediate, St Petersburg, culture, art`,
    tags: ['russian', 'intermediate', 'cases', 'grammar'],
  }),
  makeLanguageCourse({
    lang: 'Russian', langSlug: 'russian', categorySlug: 'russian-language',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'Русский', flag: '🇷🇺',
    topics: [
      'Advanced Case Usage', 'Conditional and Subjunctive', 'Participles and Gerunds',
      'Russian Literature — Pushkin, Tolstoy', 'Media and Current Events', 'Formal Writing',
      'Russian Poetry', 'Debate in Russian', 'Advanced Vocabulary', 'Oral Communication',
      'Russian Society and History', 'GCSE Russian Preparation',
    ],
    quizTopics: ['Advanced Grammar', 'Russian Literature'],
    imagePrompt: `${russianImageBase}, advanced, Tolstoy, literature, St Petersburg`,
    tags: ['russian', 'advanced', 'literature', 'gcse'],
  }),
  makeLanguageCourse({
    lang: 'Russian', langSlug: 'russian', categorySlug: 'russian-language',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'Русский', flag: '🇷🇺',
    topics: [
      'Russian Language Mastery', 'Literary Analysis — Dostoevsky, Chekhov', 'Translation Skills',
      'Academic Russian Writing', 'Russian Philosophy', 'Media Analysis',
      'Oral Examination Skills', 'Extended Essays', 'Russia in Global Context',
      'Contemporary Russian Society', 'A-Level Russian Topics', 'Final Mastery Assessment',
    ],
    quizTopics: ['Translation', 'Literary Analysis'],
    imagePrompt: `${russianImageBase}, mastery, Dostoevsky, academic, sophisticated`,
    tags: ['russian', 'mastery', 'a-level', 'dostoevsky'],
  }),
];

// ── English (ESL/EFL) ─────────────────────────────────────────────────────────

const eslImageBase = 'Big Ben, colorful alphabet blocks, books, speech bubbles, British and American flags, flat design, no text';

export const ENGLISH_ESL_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'English (ESL)', langSlug: 'english-esl', categorySlug: 'english-esl',
    level: 1, ageGroup: 'juniors', ageRange: '6–8', levelLabel: 'Starters',
    nativeName: 'English', flag: '🇬🇧',
    topics: [
      'Hello! — Greetings in English', 'The Alphabet — A to Z', 'Numbers 1–20',
      'Colors', 'Animals', 'Food and Drink', 'Family Members', 'My Body',
      'Classroom Objects', 'Days of the Week', 'Simple Questions and Answers', 'English-Speaking Countries',
    ],
    quizTopics: ['Alphabet & Numbers', 'Basic Vocabulary'],
    imagePrompt: `${eslImageBase}, children learning English, ABC, colorful`,
    tags: ['english', 'esl', 'beginners', 'kids'],
  }),
  makeLanguageCourse({
    lang: 'English (ESL)', langSlug: 'english-esl', categorySlug: 'english-esl',
    level: 2, ageGroup: 'elementary', ageRange: '9–11', levelLabel: 'Elementary',
    nativeName: 'English', flag: '🇬🇧',
    topics: [
      'Present Simple Tense', 'Present Continuous Tense', 'Articles — A, An, The',
      'Singular and Plural Nouns', 'Common Adjectives', 'School and Hobbies',
      'Telling the Time', 'Simple Comparatives', 'Short Paragraphs', 'Reading Short Stories',
      'Basic Spelling Rules', 'British and American English',
    ],
    quizTopics: ['Present Tenses', 'Articles & Nouns'],
    imagePrompt: `${eslImageBase}, school, grammar, London, New York`,
    tags: ['english', 'esl', 'grammar', 'elementary'],
  }),
  makeLanguageCourse({
    lang: 'English (ESL)', langSlug: 'english-esl', categorySlug: 'english-esl',
    level: 3, ageGroup: 'middle', ageRange: '12–14', levelLabel: 'Intermediate',
    nativeName: 'English', flag: '🇬🇧',
    topics: [
      'Past Simple and Past Continuous', 'Present Perfect', 'Future Forms',
      'Modal Verbs — Can, Could, Would, Should', 'Conditionals — Zero and First', 'Passive Voice Basics',
      'Reading Comprehension — Articles and Stories', 'Writing Essays and Paragraphs', 'Vocabulary Building',
      'Listening Skills', 'Speaking Practice', 'IELTS/Cambridge Young Learners Introduction',
    ],
    quizTopics: ['Past Tenses & Perfect', 'Modal Verbs'],
    imagePrompt: `${eslImageBase}, intermediate, conversation, English exam prep`,
    tags: ['english', 'esl', 'intermediate', 'ielts'],
  }),
  makeLanguageCourse({
    lang: 'English (ESL)', langSlug: 'english-esl', categorySlug: 'english-esl',
    level: 4, ageGroup: 'secondary', ageRange: '15–16', levelLabel: 'Advanced',
    nativeName: 'English', flag: '🇬🇧',
    topics: [
      'Second and Third Conditionals', 'Reported Speech', 'Advanced Passive Constructions',
      'Gerunds and Infinitives', 'Academic Vocabulary — AWL', 'Essay Writing Skills',
      'Reading Academic Texts', 'Listening to Lectures', 'Formal Speaking and Presentations',
      'Literature in English — Excerpts', 'IELTS Academic Preparation', 'Idiomatic English',
    ],
    quizTopics: ['Advanced Grammar', 'Academic Vocabulary'],
    imagePrompt: `${eslImageBase}, advanced, academic, IELTS, sophisticated`,
    tags: ['english', 'esl', 'advanced', 'ielts', 'academic'],
  }),
  makeLanguageCourse({
    lang: 'English (ESL)', langSlug: 'english-esl', categorySlug: 'english-esl',
    level: 5, ageGroup: 'advanced', ageRange: '17–18', levelLabel: 'Mastery',
    nativeName: 'English', flag: '🇬🇧',
    topics: [
      'Advanced Academic Writing', 'Critical Reading and Analysis', 'Research Essays',
      'IELTS 7–9 Band Preparation', 'C1/C2 Cambridge Preparation', 'Argumentation and Rhetoric',
      'Presentation and Debate', 'Literary Analysis', 'Translation into English',
      'Professional English', 'Global Englishes', 'Final Mastery Assessment',
    ],
    quizTopics: ['IELTS Advanced', 'C2 Vocabulary & Grammar'],
    imagePrompt: `${eslImageBase}, mastery, IELTS band 9, Cambridge C2, university`,
    tags: ['english', 'esl', 'mastery', 'ielts', 'cambridge'],
  }),
];

// ── Latin ─────────────────────────────────────────────────────────────────────

const latinImageBase = 'Roman Colosseum, laurel wreath, Roman columns, ancient scroll, flat design, bright colors, no text';

export const LATIN_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Latin', langSlug: 'latin', categorySlug: 'latin-language',
    level: 1, ageGroup: 'middle', ageRange: '10–13', levelLabel: 'Starters',
    nativeName: 'Lingua Latina', flag: '🏛️',
    topics: [
      'Introduction to Latin — Why Learn Latin?', 'Latin Alphabet and Pronunciation',
      'First Declension Nouns', 'Present Tense — First Conjugation', 'Basic Sentence Structure',
      'Second Declension Nouns', 'Present Tense — Second Conjugation', 'Nominative and Accusative Cases',
      'Latin Numbers (Unus, Duo, Tres...)', 'Simple Latin Reading — Stage 1', 'Roman Daily Life', 'Roman Gods',
    ],
    quizTopics: ['Latin Declensions', 'Present Tense'],
    imagePrompt: `${latinImageBase}, beginners, Roman forum, tablet`,
    tags: ['latin', 'classical', 'roman', 'declensions'],
  }),
  makeLanguageCourse({
    lang: 'Latin', langSlug: 'latin', categorySlug: 'latin-language',
    level: 2, ageGroup: 'secondary', ageRange: '13–16', levelLabel: 'Elementary',
    nativeName: 'Lingua Latina', flag: '🏛️',
    topics: [
      'All Five Declensions', 'Perfect Tense', 'Imperfect Tense', 'Genitive and Dative Cases',
      'Ablative Case', 'Relative Pronouns', 'Participles — Introduction', 'Deponent Verbs',
      'Reading Adapted Latin Texts', 'Roman History', 'Latin Influence on English', 'GCSE Latin Introduction',
    ],
    quizTopics: ['Five Declensions', 'Past Tenses & Relative Pronouns'],
    imagePrompt: `${latinImageBase}, elementary, Julius Caesar, Roman soldiers`,
    tags: ['latin', 'gcse', 'declensions', 'roman history'],
  }),
  makeLanguageCourse({
    lang: 'Latin', langSlug: 'latin', categorySlug: 'latin-language',
    level: 3, ageGroup: 'advanced', ageRange: '16–18', levelLabel: 'Advanced',
    nativeName: 'Lingua Latina', flag: '🏛️',
    topics: [
      'Subjunctive Mood — All Tenses', 'Indirect Statement — Accusative + Infinitive', 'Purpose and Result Clauses',
      'Conditional Sentences', 'Reading Cicero — Adapted Prose', 'Reading Virgil — Adapted Verse',
      'Unseen Translation Techniques', 'Latin Literature Context', 'Roman Philosophy — Stoicism',
      'A-Level Latin Comprehension', 'Historical Context for Latin Authors', 'Final Assessment',
    ],
    quizTopics: ['Subjunctive & Indirect Speech', 'Unseen Translation'],
    imagePrompt: `${latinImageBase}, advanced, Cicero, Virgil, manuscript, sophisticated`,
    tags: ['latin', 'a-level', 'cicero', 'virgil', 'subjunctive'],
  }),
];

// ── Swahili ───────────────────────────────────────────────────────────────────

const swahiliImageBase = 'African savanna with acacia trees, Mount Kilimanjaro, colorful African patterns, speech bubbles, flat design, no text';

export const SWAHILI_COURSES: CourseDefinition[] = [
  makeLanguageCourse({
    lang: 'Swahili', langSlug: 'swahili', categorySlug: 'swahili-language',
    level: 1, ageGroup: 'elementary', ageRange: '9–12', levelLabel: 'Starters',
    nativeName: 'Kiswahili', flag: '🌍',
    topics: [
      'Habari! — Swahili Greetings', 'Swahili Alphabet and Pronunciation', 'Noun Classes — M-Wa Class',
      'Noun Classes — Ki-Vi and Other Classes', 'Numbers in Swahili (Moja, Mbili...)', 'Colors (Rangi)',
      'Family (Familia)', 'Animals of East Africa', 'Food in East Africa', 'Days of the Week',
      'Simple Sentences in Swahili', 'East African Culture and Traditions',
    ],
    quizTopics: ['Swahili Greetings & Noun Classes', 'Basic Vocabulary'],
    imagePrompt: `${swahiliImageBase}, children, beginners, Nairobi, colorful`,
    tags: ['swahili', 'east africa', 'beginners', 'noun classes'],
  }),
  makeLanguageCourse({
    lang: 'Swahili', langSlug: 'swahili', categorySlug: 'swahili-language',
    level: 2, ageGroup: 'middle', ageRange: '12–15', levelLabel: 'Elementary',
    nativeName: 'Kiswahili', flag: '🌍',
    topics: [
      'Subject Prefixes and Object Infixes', 'Present, Past, Future Tenses', 'Verb Extensions — Passive, Causative',
      'Adjective Agreement', 'Common Prepositions (Kwa, Na, Katika)', 'Shopping and Market Vocabulary',
      'Directions in Swahili', 'Short Reading Passages', 'Swahili Literature Introduction',
      'Tanzania, Kenya, Uganda Culture', 'Swahili in East Africa', 'Writing Short Paragraphs',
    ],
    quizTopics: ['Verb Tenses & Extensions', 'Subject/Object Concords'],
    imagePrompt: `${swahiliImageBase}, elementary, Zanzibar, Swahili coast, culture`,
    tags: ['swahili', 'grammar', 'elementary', 'verb extensions'],
  }),
  makeLanguageCourse({
    lang: 'Swahili', langSlug: 'swahili', categorySlug: 'swahili-language',
    level: 3, ageGroup: 'secondary', ageRange: '14–18', levelLabel: 'Intermediate',
    nativeName: 'Kiswahili', flag: '🌍',
    topics: [
      'Advanced Noun Classes and Agreements', 'Complex Verb Tenses', 'Conditional Sentences in Swahili',
      'Swahili Proverbs (Methali)', 'Reading Authentic Swahili Texts', 'Swahili Literature — Poetry',
      'Formal and Informal Registers', 'Writing Essays in Swahili', 'Swahili Media and Culture',
      'East African History through Swahili', 'Oral Skills and Conversation', 'Final Assessment',
    ],
    quizTopics: ['Advanced Grammar', 'Swahili Literature & Culture'],
    imagePrompt: `${swahiliImageBase}, intermediate, East Africa, literature, sophisticated`,
    tags: ['swahili', 'intermediate', 'literature', 'proverbs'],
  }),
];

// ── Combined Export ───────────────────────────────────────────────────────────

export const LANGUAGE_COURSES: CourseDefinition[] = [
  ...SPANISH_COURSES,
  ...FRENCH_COURSES,
  ...GERMAN_COURSES,
  ...MANDARIN_COURSES,
  ...JAPANESE_COURSES,
  ...ARABIC_COURSES,
  ...PORTUGUESE_COURSES,
  ...ITALIAN_COURSES,
  ...HINDI_COURSES,
  ...KOREAN_COURSES,
  ...RUSSIAN_COURSES,
  ...ENGLISH_ESL_COURSES,
  ...LATIN_COURSES,
  ...SWAHILI_COURSES,
];
