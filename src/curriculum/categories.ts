import type { CategoryDefinition } from '../types.js';

/**
 * Full category hierarchy for the Applaa Kids Academy.
 * Top-level categories + age-group sub-categories.
 */
export const CATEGORIES: CategoryDefinition[] = [
  // ── Top-Level Categories ─────────────────────────────────────
  {
    name: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Learn about Artificial Intelligence, Machine Learning, and the future of technology — from friendly robots to deep learning.',
    imagePrompt: 'Friendly AI robot with colorful brain circuits and glowing blue eyes, educational illustration for kids, flat design, bright colors, no text',
  },
  {
    name: 'Programming Languages',
    slug: 'programming-languages',
    description: 'Master modern programming languages from Scratch to Python, JavaScript, C#, Node.js and beyond with hands-on code examples.',
    imagePrompt: 'Colorful code blocks floating around a laptop screen with rainbow sparks, educational programming illustration, flat design, no text',
  },
  {
    name: 'Web & App Development',
    slug: 'web-app-development',
    description: 'Build websites, apps, and games using HTML, CSS, JavaScript, React, Flutter and more.',
    imagePrompt: 'Colorful web browser with UI components floating around it, mobile app mockups, bright flat design illustration, no text',
  },
  {
    name: 'Data, Cloud & DevOps',
    slug: 'data-cloud-devops',
    description: 'Explore databases, cloud computing, cybersecurity, and software development practices used by real engineers.',
    imagePrompt: 'Clouds with data icons and database symbols connected by glowing lines, digital illustration, flat design, bright colors, no text',
  },
  {
    name: 'Emerging Technologies',
    slug: 'emerging-technologies',
    description: 'Discover blockchain, quantum computing, IoT, AR/VR, 3D printing and the technologies shaping our future.',
    imagePrompt: 'Futuristic holographic displays, VR headset, blockchain chains, glowing circuits in bright colors, flat design, no text',
  },
  {
    name: 'Mathematics',
    slug: 'mathematics',
    description: 'From counting and arithmetic to calculus and discrete mathematics — a complete math journey for every age.',
    imagePrompt: 'Colorful mathematical symbols, geometric shapes, numbers floating in space with stars and sparkles, flat design, no text',
  },
  {
    name: 'Physics',
    slug: 'physics',
    description: 'Discover the laws of the universe — forces, motion, electricity, waves, light, and advanced physics.',
    imagePrompt: 'Planets, atoms, energy waves, and physics experiments with colorful energy fields, educational illustration, flat design, no text',
  },
  {
    name: 'Chemistry',
    slug: 'chemistry',
    description: 'Explore matter, atoms, reactions, and the chemistry that powers our world.',
    imagePrompt: 'Colorful chemistry lab with glowing test tubes, molecular models, bubbling beakers, flat design, no text',
  },
  {
    name: 'Biology',
    slug: 'biology',
    description: 'Journey through the living world — from animals and plants to DNA, genetics, and biotechnology.',
    imagePrompt: 'Vibrant nature scene with plants, animals, DNA strands, and cells under microscope, flat design, bright colors, no text',
  },
  {
    name: 'Earth & Space Sciences',
    slug: 'earth-space-sciences',
    description: 'Study our planet, weather, climate, astronomy, and the universe beyond.',
    imagePrompt: 'Beautiful planet Earth with weather patterns, mountains, oceans, and stars around it, flat design, bright colors, no text',
  },
  {
    name: 'Spanish',
    slug: 'spanish-language',
    description: 'Learn Spanish from beginner to mastery — vocabulary, grammar, conversation, and culture.',
    imagePrompt: 'Spanish flag colors, flamenco dancer, sun, colorful speech bubbles with Spanish words, flat design, no text',
  },
  {
    name: 'French',
    slug: 'french-language',
    description: 'Learn French from beginner to mastery — the language of art, cuisine, and diplomacy.',
    imagePrompt: 'Eiffel Tower, French flag colors, croissant, colorful speech bubbles, flat design illustration, no text',
  },
  {
    name: 'German',
    slug: 'german-language',
    description: 'Learn German — the language of science, engineering, and European culture.',
    imagePrompt: 'German flag colors, Brandenburg Gate, books, colorful speech bubbles, flat design illustration, no text',
  },
  {
    name: 'Mandarin Chinese',
    slug: 'mandarin-chinese',
    description: 'Learn Mandarin Chinese including pinyin, tones, characters, and culture.',
    imagePrompt: 'Chinese dragon, cherry blossoms, Chinese lanterns, colorful speech bubbles, flat design, bright colors, no text',
  },
  {
    name: 'Japanese',
    slug: 'japanese-language',
    description: 'Learn Japanese — hiragana, katakana, kanji, and Japanese culture.',
    imagePrompt: 'Mount Fuji, Japanese torii gate, sakura flowers, colorful speech bubbles, flat design, no text',
  },
  {
    name: 'Arabic',
    slug: 'arabic-language',
    description: 'Learn Modern Standard Arabic — script, vocabulary, grammar, and culture.',
    imagePrompt: 'Arabian desert, crescent moon, stars, geometric patterns, colorful speech bubbles, flat design, no text',
  },
  {
    name: 'Portuguese',
    slug: 'portuguese-language',
    description: 'Learn Portuguese — spoken by 250+ million people across Brazil, Portugal, and Africa.',
    imagePrompt: 'Brazilian carnival colors, tropical birds, colorful speech bubbles, Portuguese tiles pattern, flat design, no text',
  },
  {
    name: 'Italian',
    slug: 'italian-language',
    description: 'Learn Italian — the language of art, music, and cuisine.',
    imagePrompt: 'Colosseum, Italian flag colors, pizza, colorful speech bubbles, flat design illustration, no text',
  },
  {
    name: 'Hindi',
    slug: 'hindi-language',
    description: 'Learn Hindi — one of the world\'s most spoken languages.',
    imagePrompt: 'Taj Mahal, Indian peacock, rangoli patterns, colorful speech bubbles, flat design, bright colors, no text',
  },
  {
    name: 'Korean',
    slug: 'korean-language',
    description: 'Learn Korean — Hangul script, K-pop culture, and modern Korea.',
    imagePrompt: 'Korean traditional palace, K-pop music notes, Hangul symbols as decoration, colorful flat design, no text',
  },
  {
    name: 'Russian',
    slug: 'russian-language',
    description: 'Learn Russian — Cyrillic alphabet, vocabulary, grammar, and culture.',
    imagePrompt: 'St Basil Cathedral, Russian matryoshka dolls, snowflakes, colorful speech bubbles, flat design, no text',
  },
  {
    name: 'English (ESL/EFL)',
    slug: 'english-esl',
    description: 'Learn English as a second language — from beginner to advanced.',
    imagePrompt: 'Big Ben, colorful alphabet blocks, books, speech bubbles, British and American flags, flat design, no text',
  },
  {
    name: 'Latin',
    slug: 'latin-language',
    description: 'Learn classical Latin — the foundation of Romance languages and Western scholarship.',
    imagePrompt: 'Roman Colosseum, laurel wreath, Roman columns, ancient scroll, flat design, bright colors, no text',
  },
  {
    name: 'Swahili',
    slug: 'swahili-language',
    description: 'Learn Swahili — the lingua franca of East and Central Africa.',
    imagePrompt: 'African savanna with acacia trees, Mount Kilimanjaro, colorful African patterns, speech bubbles, flat design, no text',
  },
  {
    name: 'English Language & Literature',
    slug: 'english-literature',
    description: 'Reading, writing, grammar, creative writing, poetry, and classic literature.',
    imagePrompt: 'Open storybook with characters jumping out, quill pen, books, and magical library scene, flat design, bright colors, no text',
  },
  {
    name: 'History',
    slug: 'history',
    description: 'Explore world history from ancient civilizations to modern times.',
    imagePrompt: 'Timeline of historical events with castles, pyramids, ships, and cultural artifacts in colorful journey through time, flat design, no text',
  },
  {
    name: 'Geography',
    slug: 'geography',
    description: 'Discover our world — physical landscapes, human geography, and global connections.',
    imagePrompt: 'Colorful world map with mountains, oceans, cities, and diverse landscapes, compass rose, flat design, no text',
  },
  {
    name: 'Social Studies & Civics',
    slug: 'social-studies-civics',
    description: 'Understand society, government, democracy, economics, and global citizenship.',
    imagePrompt: 'Diverse children from different cultures holding hands around a globe, government buildings, flat design, bright colors, no text',
  },
  {
    name: 'Psychology & Social Sciences',
    slug: 'psychology-social-sciences',
    description: 'Explore the human mind, behavior, society, and social dynamics.',
    imagePrompt: 'Colorful brain with gears, lightbulbs, thought bubbles, and emotions as friendly characters, flat design, no text',
  },
  {
    name: 'Philosophy & Ethics',
    slug: 'philosophy-ethics',
    description: 'Think deeply about life\'s big questions — logic, morality, reality, and human existence.',
    imagePrompt: 'Question marks, lightbulbs, books, thinking figures, scales of justice in thoughtful colorful scene, flat design, no text',
  },
  {
    name: 'Economics & Finance',
    slug: 'economics-finance',
    description: 'Learn how economies work, manage money wisely, and understand global markets.',
    imagePrompt: 'Colorful coins, charts going up, shopping cart, piggy bank, and marketplace with friendly characters, flat design, no text',
  },
  {
    name: 'Business & Entrepreneurship',
    slug: 'business-entrepreneurship',
    description: 'Build business skills, entrepreneurial thinking, and leadership from a young age.',
    imagePrompt: 'Young entrepreneur with briefcase, lightbulb ideas, bar charts, and business icons in bright colors, flat design, no text',
  },
  {
    name: 'Art & Design',
    slug: 'art-design',
    description: 'Express creativity through drawing, painting, digital art, photography, and graphic design.',
    imagePrompt: "Artist's palette with colorful paint splashes, brushes, canvas, digital tablet, and creative tools, flat design, no text",
  },
  {
    name: 'Music',
    slug: 'music',
    description: 'Discover music theory, learn instruments, compose, and produce music.',
    imagePrompt: 'Musical notes floating from piano, guitar, headphones, colorful sound waves, flat design, bright colors, no text',
  },
  {
    name: 'Drama & Performance',
    slug: 'drama-performance',
    description: 'Develop confidence through drama, theatre, public speaking, debate, and film studies.',
    imagePrompt: 'Stage spotlight on theatrical masks, curtains, performance elements with stars, flat design, bright colors, no text',
  },
  {
    name: 'Physical Education & Health',
    slug: 'physical-education-health',
    description: 'Stay active, healthy, and well — sports science, fitness, nutrition, and mental health.',
    imagePrompt: 'Children playing sports, fitness icons, healthy food, and active movement in bright outdoor setting, flat design, no text',
  },
  {
    name: 'Life Skills',
    slug: 'life-skills',
    description: 'Essential skills for life — emotional intelligence, financial literacy, communication, leadership, and career readiness.',
    imagePrompt: 'Life skill icons: calendar, money, handshake, brain, heart, and career symbols in bright colors, flat design, no text',
  },
  {
    name: 'World Cultures & Religions',
    slug: 'world-cultures-religions',
    description: 'Celebrate global diversity — explore cultures, traditions, religions, and world heritage.',
    imagePrompt: 'World flags, cultural landmarks, diverse traditional costumes, and celebrations around a globe, flat design, no text',
  },
  {
    name: 'Environmental & Sustainability Studies',
    slug: 'environment-sustainability',
    description: 'Understand and protect our planet — ecology, climate change, conservation, and sustainability.',
    imagePrompt: 'Beautiful forest, solar panels, wind turbines, clean water, healthy Earth with nature elements, flat design, no text',
  },
  {
    name: 'STEM Special Topics',
    slug: 'stem-special-topics',
    description: 'Advanced STEM explorations — engineering, architecture, marine science, astrophysics, forensics, and medical science.',
    imagePrompt: 'Laboratory, engineering tools, telescope, circuits, and STEM equipment in exciting science setting, flat design, no text',
  },
];
