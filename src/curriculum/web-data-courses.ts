import type { CourseDefinition } from '../types.js';

export const WEB_DATA_COURSES: CourseDefinition[] = [
  // ═══════════════════════════════════════════════════════════
  // WEB & APP DEVELOPMENT (8 courses)
  // ═══════════════════════════════════════════════════════════
  {
    title: 'HTML & CSS: Building Your First Webpage',
    slug: 'html-css-basics',
    description: 'Learn the building blocks of the web! Create your own websites with HTML structure and CSS styling.',
    categorySlug: 'web-app-development',
    ageGroup: 'middle',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'Colorful HTML tags as building blocks and CSS paint brushes decorating a webpage, bright flat design for middle schoolers, no text',
    tags: ['html', 'css', 'web', 'age-10-14', 'beginners'],
    sections: [
      {
        title: 'HTML Fundamentals',
        lessons: [
          { title: 'What is HTML?', topic: 'Structure of the web, HTML document anatomy, DOCTYPE, head, body', order: 1, includesCode: true, programmingLanguage: 'html' },
          { title: 'Text, Headings and Paragraphs', topic: 'h1-h6, p, strong, em, br, hr — text content elements', order: 2, includesCode: true, programmingLanguage: 'html' },
          { title: 'Links and Images', topic: 'anchor tags, href, image elements, alt text, relative vs absolute URLs', order: 3, includesCode: true, programmingLanguage: 'html' },
          { title: 'Lists, Tables and Forms', topic: 'ul, ol, li, table, form, input, button elements', order: 4, includesCode: true, programmingLanguage: 'html' },
          { title: 'Semantic HTML5', topic: 'header, nav, main, article, section, aside, footer — meaningful markup', order: 5, includesCode: true, programmingLanguage: 'html' },
        ],
        quizzes: [{ title: 'HTML Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'CSS Styling',
        lessons: [
          { title: 'Introduction to CSS', topic: 'Selectors, properties, values, inline vs internal vs external CSS', order: 6, includesCode: true, programmingLanguage: 'css' },
          { title: 'Colors, Fonts and Text Styling', topic: 'Color values, Google Fonts, text-align, font-weight, letter-spacing', order: 7, includesCode: true, programmingLanguage: 'css' },
          { title: 'Box Model and Spacing', topic: 'margin, padding, border, width, height, box-sizing', order: 8, includesCode: true, programmingLanguage: 'css' },
          { title: 'Flexbox Layout', topic: 'display: flex, justify-content, align-items, flex-direction, flex-wrap', order: 9, includesCode: true, programmingLanguage: 'css' },
          { title: 'CSS Grid Layout', topic: 'grid-template-columns, grid-template-rows, gap, grid areas', order: 10, includesCode: true, programmingLanguage: 'css' },
        ],
        quizzes: [],
      },
      {
        title: 'Your First Website Project',
        lessons: [
          { title: 'CSS Variables and Custom Properties', topic: '--custom-properties, :root, theming with CSS variables', order: 11, includesCode: true, programmingLanguage: 'css' },
          { title: 'Project: Personal Portfolio Website', topic: 'Build a complete personal website with HTML and CSS', order: 12, includesCode: true, programmingLanguage: 'html' },
        ],
        quizzes: [{ title: 'HTML & CSS Certificate', order: 2, questionCount: 10 }],
      },
    ],
  },
  {
    title: 'Responsive Web Design & CSS Animations',
    slug: 'responsive-web-design',
    description: 'Create websites that look great on any device! Master responsive design, media queries, CSS animations, and modern layouts.',
    categorySlug: 'web-app-development',
    ageGroup: 'secondary',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'Desktop, tablet, and mobile showing the same website adapting to each screen, CSS animation arrows, flat design, no text',
    tags: ['responsive-design', 'css', 'animations', 'age-12-15', 'mobile-first'],
    sections: [
      {
        title: 'Responsive Design',
        lessons: [
          { title: 'Mobile-First Design Philosophy', topic: 'Why mobile-first matters, viewport meta tag, fluid layouts', order: 1, includesCode: true, programmingLanguage: 'css' },
          { title: 'Media Queries', topic: 'Breakpoints, min-width, max-width, responsive typography and images', order: 2, includesCode: true, programmingLanguage: 'css' },
          { title: 'Responsive Images and Videos', topic: 'srcset, sizes, object-fit, aspect-ratio, lazy loading', order: 3, includesCode: true, programmingLanguage: 'html' },
          { title: 'CSS Clamp and Fluid Typography', topic: 'clamp(), min(), max() — fluid sizing without media queries', order: 4, includesCode: true, programmingLanguage: 'css' },
        ],
        quizzes: [{ title: 'Responsive Design Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'CSS Animations',
        lessons: [
          { title: 'CSS Transitions', topic: 'transition property, timing functions, hover effects', order: 5, includesCode: true, programmingLanguage: 'css' },
          { title: 'CSS Animations with @keyframes', topic: 'animation property, keyframe percentages, animation-play-state', order: 6, includesCode: true, programmingLanguage: 'css' },
          { title: 'CSS Transforms', topic: '2D/3D transforms — translate, rotate, scale, skew, perspective', order: 7, includesCode: true, programmingLanguage: 'css' },
          { title: 'Advanced CSS: Custom Properties and Houdini', topic: 'CSS variables for animation, Paint API, CSS motion path', order: 8, includesCode: true, programmingLanguage: 'css' },
          { title: 'Project: Animated Landing Page', topic: 'Build a stunning animated product landing page', order: 9, includesCode: true, programmingLanguage: 'css' },
        ],
        quizzes: [],
      },
      {
        title: 'Modern CSS Frameworks',
        lessons: [
          { title: 'Tailwind CSS: Utility-First Styling', topic: 'Tailwind classes, responsive prefixes, dark mode, customizing config', order: 10, includesCode: true, programmingLanguage: 'css' },
          { title: 'CSS Architecture: BEM and SCSS', topic: 'Naming conventions, SCSS variables, nesting, mixins, partials', order: 11, includesCode: true, programmingLanguage: 'css' },
          { title: 'Project: Responsive E-Commerce Homepage', topic: 'Full responsive product page with animations and Tailwind', order: 12, includesCode: true, programmingLanguage: 'html' },
        ],
        quizzes: [{ title: 'Responsive Web Design Certificate', order: 2, questionCount: 10 }],
      },
    ],
  },
  {
    title: 'React: Modern Frontend Development',
    slug: 'react-frontend',
    description: 'Learn React — the world\'s most popular JavaScript library for building user interfaces, used by Facebook, Netflix, and Airbnb.',
    categorySlug: 'web-app-development',
    ageGroup: 'advanced',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'React atom logo spinning with component tree diagram, hooks symbols, colorful flat design, no text',
    tags: ['react', 'javascript', 'frontend', 'age-14-18', 'spa'],
    sections: [
      {
        title: 'React Fundamentals',
        lessons: [
          { title: 'Introduction to React', topic: 'What is React, Virtual DOM, JSX, creating a React project with Vite', order: 1, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Components: Building Blocks of React', topic: 'Functional components, props, children, component composition', order: 2, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'State with useState Hook', topic: 'useState, state updates, immutability, controlled inputs', order: 3, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Rendering Lists and Conditional UI', topic: 'map() for lists, keys, conditional rendering with && and ternary', order: 4, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'React Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'React Hooks & Data',
        lessons: [
          { title: 'useEffect: Side Effects in React', topic: 'Data fetching, subscriptions, cleanup functions, dependency arrays', order: 5, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'useContext: Global State', topic: 'Context API, createContext, useContext, theme and auth providers', order: 6, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'useReducer and Custom Hooks', topic: 'Complex state management, action patterns, building custom hooks', order: 7, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'React Router: Multi-Page Apps', topic: 'react-router-dom, BrowserRouter, Routes, Link, useParams, useNavigate', order: 8, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Data Fetching with TanStack Query', topic: 'useQuery, useMutation, caching, loading/error states', order: 9, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [],
      },
      {
        title: 'Production React',
        lessons: [
          { title: 'State Management with Zustand', topic: 'Global state store, actions, selectors', order: 10, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'React Performance Optimization', topic: 'useMemo, useCallback, React.memo, lazy loading components', order: 11, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Testing React Components', topic: 'Vitest, React Testing Library, user event simulation', order: 12, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Project: Social Media Dashboard', topic: 'Full React application with auth, routing, and API integration', order: 13, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'React Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'Next.js: Full Stack Web Development',
    slug: 'nextjs-fullstack',
    description: 'Build production-ready full-stack web applications with Next.js — the React framework used by Vercel, TikTok, and Twitch.',
    categorySlug: 'web-app-development',
    ageGroup: 'advanced',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'Next.js logo with server-side rendering diagram and Vercel deployment cloud, modern full-stack flat design, no text',
    tags: ['nextjs', 'react', 'fullstack', 'age-15-18', 'ssr'],
    sections: [
      {
        title: 'Next.js Core',
        lessons: [
          { title: 'Introduction to Next.js App Router', topic: 'App Router vs Pages Router, file-based routing, layouts, templates', order: 1, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Server and Client Components', topic: 'RSC model, "use client" directive, when to use each', order: 2, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Data Fetching in Next.js', topic: 'fetch() with caching, revalidation, generateStaticParams, loading.tsx', order: 3, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Server Actions and Forms', topic: 'useFormState, server mutations, form submissions without API routes', order: 4, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'Next.js Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Full Stack with Next.js',
        lessons: [
          { title: 'API Routes with Route Handlers', topic: 'Building REST endpoints in Next.js, GET/POST/PUT/DELETE', order: 5, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Database with Prisma ORM', topic: 'Prisma schema, migrations, queries, relations with PostgreSQL', order: 6, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Authentication with NextAuth.js', topic: 'OAuth providers, credential auth, session management, middleware', order: 7, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'File Uploads to Cloudinary', topic: 'Handling file uploads, image optimization, CDN delivery', order: 8, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [],
      },
      {
        title: 'Deployment and Projects',
        lessons: [
          { title: 'Deploying to Vercel', topic: 'Environment variables, preview deployments, production checklist', order: 9, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'SEO and Metadata in Next.js', topic: 'Metadata API, Open Graph, structured data, sitemaps', order: 10, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Next.js Performance', topic: 'Image optimization, font optimization, bundle analysis, Edge Runtime', order: 11, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Project: Course Platform (like this one!)', topic: 'Build a full-stack learning platform with Next.js, Prisma, and NextAuth', order: 12, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'Next.js Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'React Native: Cross-Platform Mobile Apps',
    slug: 'react-native-mobile',
    description: 'Build iOS and Android apps with one codebase using React Native and Expo. Share your apps with the world!',
    categorySlug: 'web-app-development',
    ageGroup: 'advanced',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'React Native logo with iOS and Android phones showing the same app, cross-platform arrow, flat design, no text',
    tags: ['react-native', 'mobile', 'ios', 'android', 'expo', 'age-15-18'],
    sections: [
      {
        title: 'React Native Fundamentals',
        lessons: [
          { title: 'Introduction to React Native & Expo', topic: 'What is RN, Expo vs bare workflow, creating your first project', order: 1, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Core Components', topic: 'View, Text, TextInput, Image, ScrollView, FlatList, TouchableOpacity', order: 2, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Styling in React Native', topic: 'StyleSheet API, Flexbox in RN, platform-specific styles', order: 3, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Navigation with Expo Router', topic: 'File-based routing, Stack, Tabs, Drawer navigation', order: 4, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'React Native Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Native Features',
        lessons: [
          { title: 'State Management with Context and Zustand', topic: 'Managing global state across screens', order: 5, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Device APIs: Camera, Location, Notifications', topic: 'Expo Camera, Location, Notifications APIs', order: 6, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'AsyncStorage and Local Data', topic: 'Persisting data on device with AsyncStorage and Expo SecureStore', order: 7, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Animations with Reanimated', topic: 'Smooth 60fps animations, gesture handling, interpolation', order: 8, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [],
      },
      {
        title: 'App Store Projects',
        lessons: [
          { title: 'Connecting to a Backend API', topic: 'Fetching data, authentication tokens, error handling', order: 9, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Push Notifications', topic: 'Expo Push Notifications, deep links, handling notification responses', order: 10, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Building and Publishing Your App', topic: 'EAS Build, App Store submission, Google Play submission', order: 11 },
          { title: 'Project: Habit Tracking App', topic: 'Full mobile app with navigation, persistence, notifications', order: 12, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'React Native Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'Flutter: Beautiful Cross-Platform Apps',
    slug: 'flutter-mobile',
    description: 'Build stunning iOS, Android, web, and desktop apps with Flutter and Dart — Google\'s modern cross-platform framework.',
    categorySlug: 'web-app-development',
    ageGroup: 'advanced',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'Flutter bird logo with colorful Material Design widgets and multiple platform screens, bright flat design, no text',
    tags: ['flutter', 'dart', 'mobile', 'cross-platform', 'age-15-18'],
    sections: [
      {
        title: 'Dart & Flutter Basics',
        lessons: [
          { title: 'Introduction to Dart Language', topic: 'Dart syntax, null safety, types, OOP basics for Flutter', order: 1, includesCode: true, programmingLanguage: 'dart' },
          { title: 'Flutter Architecture and Widgets', topic: 'Widget tree, StatelessWidget, StatefulWidget, hot reload', order: 2, includesCode: true, programmingLanguage: 'dart' },
          { title: 'Material Design Widgets', topic: 'Scaffold, AppBar, Column, Row, Container, Text, Button widgets', order: 3, includesCode: true, programmingLanguage: 'dart' },
          { title: 'State Management with setState', topic: 'Stateful widgets, setState, lifting state up', order: 4, includesCode: true, programmingLanguage: 'dart' },
        ],
        quizzes: [{ title: 'Flutter Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Flutter Navigation & State',
        lessons: [
          { title: 'Navigation and Routing in Flutter', topic: 'Navigator 2.0, go_router package, deep linking', order: 5, includesCode: true, programmingLanguage: 'dart' },
          { title: 'State Management with Riverpod', topic: 'Providers, StateNotifier, ConsumerWidget — modern Flutter state', order: 6, includesCode: true, programmingLanguage: 'dart' },
          { title: 'HTTP Requests and REST APIs', topic: 'http package, async/await in Dart, JSON serialization', order: 7, includesCode: true, programmingLanguage: 'dart' },
          { title: 'Local Storage with Hive and SQLite', topic: 'Hive for key-value storage, sqflite for relational data', order: 8, includesCode: true, programmingLanguage: 'dart' },
        ],
        quizzes: [],
      },
      {
        title: 'Flutter Projects',
        lessons: [
          { title: 'Custom Painting and Animations', topic: 'CustomPainter, AnimationController, Tween animations', order: 9, includesCode: true, programmingLanguage: 'dart' },
          { title: 'Firebase with Flutter', topic: 'FlutterFire, Authentication, Firestore real-time database', order: 10, includesCode: true, programmingLanguage: 'dart' },
          { title: 'Publishing Flutter Apps', topic: 'Building for iOS/Android/Web, store submission, flavors', order: 11 },
          { title: 'Project: Notes & Todo App', topic: 'Full-featured app with CRUD, categories, search, cloud sync', order: 12, includesCode: true, programmingLanguage: 'dart' },
        ],
        quizzes: [{ title: 'Flutter Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'Game Development with Scratch & Python',
    slug: 'game-dev-scratch-python',
    description: 'Design and build real games! Start with Scratch game mechanics and progress to Python Pygame for real game development.',
    categorySlug: 'web-app-development',
    ageGroup: 'elementary',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'Colorful video game controller with Scratch sprites and Pygame elements floating around, fun game design flat illustration, no text',
    tags: ['game-development', 'scratch', 'pygame', 'age-9-12', 'fun'],
    sections: [
      {
        title: 'Game Design Fundamentals',
        lessons: [
          { title: 'What Makes a Great Game?', topic: 'Game loops, rules, win/lose conditions, fun mechanics', order: 1 },
          { title: 'Game Genres and Mechanics', topic: 'Platformers, puzzles, shooters, RPGs — how different games work', order: 2 },
          { title: 'Build a Pong Clone in Scratch', topic: 'Ball bouncing, paddles, score tracking — classic arcade game', order: 3, includesCode: true, programmingLanguage: 'scratch' },
          { title: 'Build a Maze Game in Scratch', topic: 'Maze level design, collision detection, keys and doors', order: 4, includesCode: true, programmingLanguage: 'scratch' },
        ],
        quizzes: [{ title: 'Game Design Quiz', order: 1, questionCount: 6 }],
      },
      {
        title: 'Python Pygame',
        lessons: [
          { title: 'Introduction to Pygame', topic: 'Installing Pygame, game loop, display, clock, events', order: 5, includesCode: true, programmingLanguage: 'python' },
          { title: 'Drawing Shapes and Colors', topic: 'pygame.draw functions, colors, rectangles, circles', order: 6, includesCode: true, programmingLanguage: 'python' },
          { title: 'Sprites and Animation', topic: 'Sprite class, loading images, animation frames', order: 7, includesCode: true, programmingLanguage: 'python' },
          { title: 'Collision Detection', topic: 'AABB collision, sprite groups, masks', order: 8, includesCode: true, programmingLanguage: 'python' },
          { title: 'Sound and Music', topic: 'Loading and playing sounds, background music, sound effects', order: 9, includesCode: true, programmingLanguage: 'python' },
        ],
        quizzes: [],
      },
      {
        title: 'Complete Game Projects',
        lessons: [
          { title: 'Build a Space Shooter', topic: 'Player ship, enemy waves, bullets, explosions, score', order: 10, includesCode: true, programmingLanguage: 'python' },
          { title: 'Build a Platformer with Physics', topic: 'Gravity, jumping, platforms, coins, health points', order: 11, includesCode: true, programmingLanguage: 'python' },
          { title: 'Game Polish and Distribution', topic: 'Title screen, high scores, saving progress, sharing your game', order: 12, includesCode: true, programmingLanguage: 'python' },
        ],
        quizzes: [{ title: 'Game Developer Certificate', order: 2, questionCount: 10 }],
      },
    ],
  },
  {
    title: 'Game Development with Unity & C#',
    slug: 'game-dev-unity',
    description: 'Create professional 2D and 3D games with Unity — the game engine behind thousands of commercial games. Use C# to bring your worlds to life.',
    categorySlug: 'web-app-development',
    ageGroup: 'advanced',
    type: 'web-dev',
    hasCertification: true,
    imagePrompt: 'Unity game engine logo with 3D game scene, gameobjects, and C# code panel, colorful professional flat design, no text',
    tags: ['unity', 'csharp', 'game-development', '3d', 'age-13-18'],
    sections: [
      {
        title: 'Unity Fundamentals',
        lessons: [
          { title: 'Unity Editor Overview', topic: 'Scene view, hierarchy, inspector, project, game view — Unity workspace', order: 1 },
          { title: 'GameObjects and Components', topic: 'GameObject-Component architecture, Transform, Rigidbody, Colliders', order: 2, includesCode: true, programmingLanguage: 'csharp' },
          { title: 'Your First C# Script', topic: 'MonoBehaviour, Start, Update, GetComponent, input system', order: 3, includesCode: true, programmingLanguage: 'csharp' },
          { title: 'Physics in Unity', topic: 'Rigidbody2D/3D, forces, gravity, collision events, triggers', order: 4, includesCode: true, programmingLanguage: 'csharp' },
        ],
        quizzes: [{ title: 'Unity Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: '2D Game Development',
        lessons: [
          { title: 'Sprites, Tilemaps and 2D World', topic: 'Importing sprites, sprite sheets, tile palette, rule tiles', order: 5 },
          { title: 'Player Movement and Camera', topic: '2D character controller, jumping, camera follow', order: 6, includesCode: true, programmingLanguage: 'csharp' },
          { title: 'Enemies and AI Navigation', topic: 'NavMesh2D, patrol behavior, state machine AI', order: 7, includesCode: true, programmingLanguage: 'csharp' },
          { title: 'UI System: Health, Score, Menus', topic: 'Canvas, TextMeshPro, UI buttons, SceneManager', order: 8, includesCode: true, programmingLanguage: 'csharp' },
        ],
        quizzes: [],
      },
      {
        title: '3D Games and Deployment',
        lessons: [
          { title: '3D World Building', topic: 'Terrain, lighting, materials, shaders in Unity', order: 9 },
          { title: 'Animations with Animator', topic: 'Animation clips, Animator Controller, Blend Trees, triggers', order: 10, includesCode: true, programmingLanguage: 'csharp' },
          { title: 'Audio: Music and Sound Effects', topic: 'AudioSource, AudioClip, AudioMixer, spatial audio', order: 11 },
          { title: 'Building and Publishing Your Game', topic: 'Build settings, WebGL build, itch.io publishing, mobile builds', order: 12 },
          { title: 'Project: 2D Platformer Complete Game', topic: 'Full game: 3 levels, enemies, collectibles, save system', order: 13, includesCode: true, programmingLanguage: 'csharp' },
        ],
        quizzes: [{ title: 'Unity Game Developer Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DATA, CLOUD & DEVOPS (6 courses)
  // ═══════════════════════════════════════════════════════════
  {
    title: 'SQL & Databases: The Language of Data',
    slug: 'sql-databases',
    description: 'Learn SQL — the language used by every professional developer. Query, manipulate, and design databases for real applications.',
    categorySlug: 'data-cloud-devops',
    ageGroup: 'secondary',
    type: 'data-cloud',
    hasCertification: true,
    imagePrompt: 'Database server with colorful SQL queries flowing through tables and connecting to applications, flat design, no text',
    tags: ['sql', 'databases', 'postgresql', 'age-13-18', 'data'],
    sections: [
      {
        title: 'SQL Fundamentals',
        lessons: [
          { title: 'Introduction to Databases', topic: 'What are databases, RDBMS, tables, rows, columns, primary keys', order: 1 },
          { title: 'SELECT Queries', topic: 'SELECT, FROM, WHERE, ORDER BY, LIMIT — retrieving data', order: 2, includesCode: true, programmingLanguage: 'sql' },
          { title: 'Filtering and Sorting Data', topic: 'AND/OR/NOT, BETWEEN, LIKE, IN, NULL handling', order: 3, includesCode: true, programmingLanguage: 'sql' },
          { title: 'Aggregate Functions', topic: 'COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING', order: 4, includesCode: true, programmingLanguage: 'sql' },
        ],
        quizzes: [{ title: 'SQL Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Advanced SQL',
        lessons: [
          { title: 'JOINs: Combining Tables', topic: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN with real examples', order: 5, includesCode: true, programmingLanguage: 'sql' },
          { title: 'Subqueries and CTEs', topic: 'Nested queries, WITH clause (Common Table Expressions)', order: 6, includesCode: true, programmingLanguage: 'sql' },
          { title: 'Creating and Modifying Tables', topic: 'CREATE TABLE, ALTER TABLE, constraints, foreign keys', order: 7, includesCode: true, programmingLanguage: 'sql' },
          { title: 'Transactions and ACID Properties', topic: 'BEGIN, COMMIT, ROLLBACK, isolation levels', order: 8, includesCode: true, programmingLanguage: 'sql' },
          { title: 'Indexing and Performance', topic: 'How indexes work, EXPLAIN, query optimization', order: 9, includesCode: true, programmingLanguage: 'sql' },
        ],
        quizzes: [],
      },
      {
        title: 'NoSQL and Projects',
        lessons: [
          { title: 'NoSQL Databases: MongoDB', topic: 'Document stores, collections, CRUD with MongoDB shell', order: 10, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Database Design and Normalization', topic: 'Entity-relationship diagrams, 1NF/2NF/3NF, schema design', order: 11 },
          { title: 'Project: School Database System', topic: 'Design and query a complete school database system', order: 12, includesCode: true, programmingLanguage: 'sql' },
        ],
        quizzes: [{ title: 'SQL & Databases Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'Cloud Computing: AWS, Azure & GCP',
    slug: 'cloud-computing',
    description: 'Learn cloud computing concepts and services from AWS, Azure, and Google Cloud — the platforms powering modern applications.',
    categorySlug: 'data-cloud-devops',
    ageGroup: 'advanced',
    type: 'data-cloud',
    hasCertification: true,
    imagePrompt: 'Three cloud providers AWS, Azure, GCP logos with cloud architecture diagrams, servers, and global network, flat design, no text',
    tags: ['aws', 'azure', 'gcp', 'cloud', 'age-15-18'],
    sections: [
      {
        title: 'Cloud Fundamentals',
        lessons: [
          { title: 'What is Cloud Computing?', topic: 'IaaS, PaaS, SaaS, public/private/hybrid cloud, benefits', order: 1 },
          { title: 'AWS Core Services', topic: 'EC2, S3, RDS, Lambda, IAM — the essential AWS services', order: 2 },
          { title: 'Azure Fundamentals', topic: 'Azure VMs, Blob Storage, Azure Functions, Azure AD', order: 3 },
          { title: 'Google Cloud Platform', topic: 'Compute Engine, Cloud Storage, BigQuery, Cloud Run', order: 4 },
        ],
        quizzes: [{ title: 'Cloud Fundamentals Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Serverless & Containers',
        lessons: [
          { title: 'Serverless Computing', topic: 'AWS Lambda, Azure Functions, Google Cloud Functions — FaaS', order: 5, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Docker: Containerization', topic: 'Docker images, containers, Dockerfile, docker-compose', order: 6, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Kubernetes: Container Orchestration', topic: 'Pods, deployments, services, ingress — K8s fundamentals', order: 7 },
          { title: 'Cloud Databases: RDS, Firestore, Cosmos', topic: 'Managed databases in the cloud — setup, scaling, backups', order: 8 },
        ],
        quizzes: [],
      },
      {
        title: 'Cloud Projects',
        lessons: [
          { title: 'CI/CD: Automated Deployment', topic: 'GitHub Actions, AWS CodePipeline, automated build and deploy', order: 9, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Cloud Security Best Practices', topic: 'IAM roles, security groups, encryption, compliance', order: 10 },
          { title: 'Cost Optimization and Monitoring', topic: 'CloudWatch, Azure Monitor, cost calculators, right-sizing', order: 11 },
          { title: 'Project: Deploy a Full-Stack App to the Cloud', topic: 'End-to-end cloud deployment of a web application', order: 12 },
        ],
        quizzes: [{ title: 'Cloud Computing Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'Git & Version Control: Collaborate Like a Pro',
    slug: 'git-version-control',
    description: 'Master Git — the version control system used by every developer. Collaborate on GitHub, manage branches, and work in teams.',
    categorySlug: 'data-cloud-devops',
    ageGroup: 'middle',
    type: 'data-cloud',
    hasCertification: true,
    imagePrompt: 'Git branch tree diagram with colorful commits and merges, GitHub logo, collaborative code icons, flat design, no text',
    tags: ['git', 'github', 'version-control', 'age-12-18', 'collaboration'],
    sections: [
      {
        title: 'Git Basics',
        lessons: [
          { title: 'Why Version Control?', topic: 'History of version control, why Git, Git vs other VCS', order: 1 },
          { title: 'Git Setup and First Commit', topic: 'git init, git add, git commit, git log — the core workflow', order: 2, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Branching Strategy', topic: 'git branch, git checkout, git merge — parallel development', order: 3, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Merge Conflicts: Resolving Disputes', topic: 'How conflicts happen, resolving them, avoiding them', order: 4, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'Git Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'GitHub and Collaboration',
        lessons: [
          { title: 'GitHub: Remote Repositories', topic: 'git push, git pull, git fetch, remote origins, SSH keys', order: 5, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Pull Requests and Code Reviews', topic: 'Opening PRs, reviewing code, requesting changes, merging', order: 6 },
          { title: 'GitHub Actions: Automation', topic: 'Workflows, triggers, jobs, steps — automating tests and deployments', order: 7, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Open Source: Contributions', topic: 'Finding projects, forking, issues, good first contributions', order: 8 },
          { title: 'Advanced Git: Rebase, Cherry-pick', topic: 'git rebase, git cherry-pick, git bisect, reflog', order: 9, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [],
      },
      {
        title: 'Professional Workflows',
        lessons: [
          { title: 'Git Flow and Trunk-Based Development', topic: 'Feature branches, release branches, hotfixes, team workflows', order: 10 },
          { title: 'Semantic Versioning and Changelogs', topic: 'semver, conventional commits, automated changelog generation', order: 11 },
          { title: 'Project: Collaborative Open Source Project', topic: 'Simulate a full team Git workflow with PRs and reviews', order: 12 },
        ],
        quizzes: [{ title: 'Git & GitHub Certificate', order: 2, questionCount: 10 }],
      },
    ],
  },
  {
    title: 'DevOps & CI/CD Fundamentals',
    slug: 'devops-fundamentals',
    description: 'Learn DevOps culture, CI/CD pipelines, infrastructure as code, monitoring, and the practices that power modern software delivery.',
    categorySlug: 'data-cloud-devops',
    ageGroup: 'advanced',
    type: 'data-cloud',
    hasCertification: true,
    imagePrompt: 'DevOps infinity loop with development and operations icons, pipeline stages, colorful flat design, no text',
    tags: ['devops', 'cicd', 'docker', 'kubernetes', 'age-15-18'],
    sections: [
      {
        title: 'DevOps Culture',
        lessons: [
          { title: 'What is DevOps?', topic: 'DevOps culture, principles, how it bridges dev and ops teams', order: 1 },
          { title: 'Linux Fundamentals for DevOps', topic: 'File system, commands, processes, bash scripting basics', order: 2, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Docker Deep Dive', topic: 'Images, containers, volumes, networking, multi-stage builds', order: 3, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Docker Compose', topic: 'Multi-container applications, service definitions, networks', order: 4, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'DevOps Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'CI/CD and Infrastructure',
        lessons: [
          { title: 'CI/CD Pipelines with GitHub Actions', topic: 'Build, test, deploy automation — complete pipeline setup', order: 5, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Infrastructure as Code with Terraform', topic: 'HCL syntax, providers, resources, state management', order: 6 },
          { title: 'Kubernetes in Depth', topic: 'Deployments, StatefulSets, ConfigMaps, Secrets, HPA', order: 7 },
          { title: 'Service Mesh: Istio Basics', topic: 'Traffic management, observability, security in microservices', order: 8 },
        ],
        quizzes: [],
      },
      {
        title: 'Monitoring and Reliability',
        lessons: [
          { title: 'Monitoring with Prometheus & Grafana', topic: 'Metrics, dashboards, alerting, SLI/SLO/SLA', order: 9 },
          { title: 'Logging with ELK Stack', topic: 'Elasticsearch, Logstash, Kibana — centralized logging', order: 10 },
          { title: 'Site Reliability Engineering (SRE)', topic: 'Error budgets, toil reduction, incident management', order: 11 },
          { title: 'Project: Full DevOps Pipeline', topic: 'End-to-end CI/CD with Docker, K8s, monitoring, and alerting', order: 12 },
        ],
        quizzes: [{ title: 'DevOps Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'Cybersecurity Essentials',
    slug: 'cybersecurity-essentials',
    description: 'Learn how to stay safe online and understand cybersecurity concepts, ethical hacking basics, and how to protect systems from threats.',
    categorySlug: 'data-cloud-devops',
    ageGroup: 'secondary',
    type: 'data-cloud',
    hasCertification: true,
    imagePrompt: 'Shield with lock icon protecting a network, firewall and security icons, colorful cyber-security themed flat design, no text',
    tags: ['cybersecurity', 'network-security', 'ethical-hacking', 'age-13-18'],
    sections: [
      {
        title: 'Security Fundamentals',
        lessons: [
          { title: 'Introduction to Cybersecurity', topic: 'CIA triad (Confidentiality, Integrity, Availability), threat landscape', order: 1 },
          { title: 'Common Threats and Attacks', topic: 'Malware, phishing, ransomware, social engineering, DDOS', order: 2 },
          { title: 'Password Security and Authentication', topic: 'Password strength, 2FA, MFA, password managers, breach databases', order: 3 },
          { title: 'Network Security Basics', topic: 'Firewalls, VPNs, protocols, network segmentation, DNS security', order: 4 },
        ],
        quizzes: [{ title: 'Security Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Ethical Hacking',
        lessons: [
          { title: 'Ethical Hacking and Penetration Testing', topic: 'Legal framework, penetration testing methodology, career paths', order: 5 },
          { title: 'OWASP Top 10 Web Vulnerabilities', topic: 'SQL injection, XSS, CSRF, broken auth — the most critical web flaws', order: 6, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Reconnaissance and OSINT', topic: 'Open-source intelligence, footprinting, network scanning with nmap', order: 7 },
          { title: 'Cryptography: How Data is Protected', topic: 'Symmetric/asymmetric encryption, hashing, TLS/SSL, PKI', order: 8 },
        ],
        quizzes: [],
      },
      {
        title: 'Security in Practice',
        lessons: [
          { title: 'Secure Coding Practices', topic: 'Input validation, prepared statements, sanitization, secure defaults', order: 9, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Security Incident Response', topic: 'Detection, containment, eradication, recovery, post-incident review', order: 10 },
          { title: 'Bug Bounties and CTF Challenges', topic: 'How to find vulnerabilities legally, CTF competitions, career paths', order: 11 },
          { title: 'Building a Career in Cybersecurity', topic: 'CompTIA Security+, CEH, OSCP — certifications and study paths', order: 12 },
        ],
        quizzes: [{ title: 'Cybersecurity Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // EMERGING TECHNOLOGIES (6 courses)
  // ═══════════════════════════════════════════════════════════
  {
    title: 'Blockchain & Web3: The Decentralized Web',
    slug: 'blockchain-web3',
    description: 'Understand blockchain technology, cryptocurrencies, smart contracts, and the vision of a decentralized internet (Web3).',
    categorySlug: 'emerging-technologies',
    ageGroup: 'advanced',
    type: 'emerging-tech',
    hasCertification: true,
    imagePrompt: 'Chain of connected blocks with locks, Ethereum logo, smart contract icons, decentralized network nodes, colorful flat design, no text',
    tags: ['blockchain', 'web3', 'ethereum', 'smart-contracts', 'age-15-18'],
    sections: [
      {
        title: 'Blockchain Fundamentals',
        lessons: [
          { title: 'What is Blockchain?', topic: 'Distributed ledger, consensus mechanisms, immutability, nodes', order: 1 },
          { title: 'Bitcoin and Cryptocurrency', topic: 'How Bitcoin works, mining, wallets, transactions, UTXO model', order: 2 },
          { title: 'Ethereum and Smart Contracts', topic: 'Ethereum platform, EVM, gas, accounts, smart contract concept', order: 3 },
          { title: 'Cryptography in Blockchain', topic: 'Public/private keys, digital signatures, hash functions in blockchain', order: 4 },
        ],
        quizzes: [{ title: 'Blockchain Fundamentals Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Smart Contracts with Solidity',
        lessons: [
          { title: 'Solidity Programming Language', topic: 'Solidity syntax, data types, functions, state variables', order: 5, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Building Your First Smart Contract', topic: 'Simple token contract, storage, events, Remix IDE', order: 6, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'DeFi: Decentralized Finance', topic: 'DEXes, lending protocols, liquidity pools, yield farming concepts', order: 7 },
          { title: 'NFTs: Non-Fungible Tokens', topic: 'ERC-721 standard, metadata, digital ownership, use cases', order: 8 },
        ],
        quizzes: [],
      },
      {
        title: 'Web3 Development',
        lessons: [
          { title: 'Web3.js and Ethers.js', topic: 'Connecting frontend to blockchain, signing transactions, reading data', order: 9, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'The Future of Web3', topic: 'Layer 2 scaling, Web3 UX challenges, regulation, real-world adoption', order: 10 },
          { title: 'Blockchain Beyond Finance', topic: 'Supply chain, healthcare, voting, identity — blockchain applications', order: 11 },
          { title: 'Project: Deploy a Token Contract', topic: 'Create, test, and deploy an ERC-20 token on a testnet', order: 12, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'Blockchain & Web3 Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
  {
    title: 'Quantum Computing: Computing\'s Next Frontier',
    slug: 'quantum-computing',
    description: 'Explore the fascinating world of quantum computing — qubits, superposition, entanglement, and quantum algorithms that will transform computing.',
    categorySlug: 'emerging-technologies',
    ageGroup: 'advanced',
    type: 'emerging-tech',
    hasCertification: true,
    imagePrompt: 'Quantum computer with qubits spinning in superposition, glowing blue quantum circuits, futuristic educational flat design, no text',
    tags: ['quantum-computing', 'physics', 'algorithms', 'age-16-18', 'advanced'],
    sections: [
      {
        title: 'Quantum Foundations',
        lessons: [
          { title: 'Classical vs Quantum Computing', topic: 'Bits vs qubits, exponential power, limitations and use cases', order: 1 },
          { title: 'Superposition and Measurement', topic: 'Quantum superposition, wave function collapse, probability amplitudes', order: 2 },
          { title: 'Quantum Entanglement', topic: 'EPR pairs, Bell states, non-local correlations, teleportation', order: 3 },
          { title: 'Quantum Gates and Circuits', topic: 'Pauli gates, Hadamard, CNOT, universal gate set', order: 4 },
        ],
        quizzes: [{ title: 'Quantum Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Quantum Algorithms',
        lessons: [
          { title: 'Quantum Algorithms Overview', topic: "Deutsch's algorithm, Deutsch-Jozsa, Bernstein-Vazirani, Simon's", order: 5 },
          { title: "Shor's Algorithm: Breaking Encryption", topic: 'Integer factoring, RSA implications, post-quantum cryptography', order: 6 },
          { title: "Grover's Algorithm: Quantum Search", topic: 'Quadratic speedup for search, oracle functions, amplitude amplification', order: 7 },
          { title: 'Quantum Machine Learning', topic: 'QSVM, variational quantum circuits, hybrid quantum-classical ML', order: 8 },
        ],
        quizzes: [],
      },
      {
        title: 'Programming Quantum Computers',
        lessons: [
          { title: 'Qiskit: IBM Quantum Programming', topic: 'Building and running circuits on IBM Quantum with Python/Qiskit', order: 9, includesCode: true, programmingLanguage: 'python' },
          { title: 'Current Quantum Hardware', topic: 'IBM Quantum, Google Sycamore, IonQ, photonic quantum computers', order: 10 },
          { title: 'Quantum Error Correction', topic: 'Decoherence, noise, surface codes, fault-tolerant quantum computing', order: 11 },
          { title: 'The Quantum Future', topic: 'Quantum advantage, timeline, careers, preparing for the quantum era', order: 12 },
        ],
        quizzes: [{ title: 'Quantum Computing Certificate', order: 2, questionCount: 10 }],
      },
    ],
  },
  {
    title: 'Internet of Things: Smart Devices & Sensors',
    slug: 'internet-of-things',
    description: 'Build smart devices with Arduino and Raspberry Pi! Connect physical sensors to the internet and create IoT projects.',
    categorySlug: 'emerging-technologies',
    ageGroup: 'middle',
    type: 'emerging-tech',
    hasCertification: true,
    imagePrompt: 'Smart home with connected devices, Arduino board with sensors, WiFi signals connecting everything, colorful flat design, no text',
    tags: ['iot', 'arduino', 'raspberry-pi', 'sensors', 'age-12-18'],
    sections: [
      {
        title: 'IoT Fundamentals',
        lessons: [
          { title: 'What is the Internet of Things?', topic: 'IoT definition, architecture, everyday examples, smart cities', order: 1 },
          { title: 'Introduction to Arduino', topic: 'Arduino Uno board, IDE, digital/analog pins, your first sketch', order: 2, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Digital Inputs and Outputs', topic: 'LEDs, buttons, digitalRead, digitalWrite, delays', order: 3, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Analog Sensors', topic: 'Temperature, light, moisture sensors, analogRead, ADC', order: 4, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [{ title: 'IoT Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Connected Devices',
        lessons: [
          { title: 'Raspberry Pi: A Full Computer', topic: 'Pi setup, GPIO, Linux basics, Python on Raspberry Pi', order: 5, includesCode: true, programmingLanguage: 'python' },
          { title: 'WiFi and MQTT Communication', topic: 'ESP8266/ESP32, MQTT protocol, publishing and subscribing', order: 6, includesCode: true, programmingLanguage: 'python' },
          { title: 'IoT Cloud Platforms', topic: 'AWS IoT, Azure IoT Hub, ThingSpeak, IFTTT for IoT', order: 7 },
          { title: 'Displays and Actuators', topic: 'LCD screens, servo motors, DC motors, stepper motors', order: 8, includesCode: true, programmingLanguage: 'javascript' },
        ],
        quizzes: [],
      },
      {
        title: 'IoT Projects',
        lessons: [
          { title: 'Build a Weather Station', topic: 'Temperature, humidity, pressure sensors + data to cloud', order: 9, includesCode: true, programmingLanguage: 'python' },
          { title: 'Smart Home Automation', topic: 'Motion detection, relay control, smart lighting project', order: 10, includesCode: true, programmingLanguage: 'python' },
          { title: 'IoT Security', topic: 'Securing IoT devices, authentication, firmware updates, vulnerabilities', order: 11 },
          { title: 'The Future of IoT', topic: 'Smart cities, healthcare IoT, industrial IoT, edge computing', order: 12 },
        ],
        quizzes: [{ title: 'IoT Certificate', order: 2, questionCount: 10 }],
      },
    ],
  },
  {
    title: '3D Printing & CAD Design',
    slug: '3d-printing-cad',
    description: 'Design and print real objects! Learn CAD with Tinkercad and Fusion 360, then bring your designs to life with 3D printing.',
    categorySlug: 'emerging-technologies',
    ageGroup: 'middle',
    type: 'emerging-tech',
    hasCertification: true,
    imagePrompt: '3D printer creating a colorful object, CAD design software on screen, engineering tools around it, flat design, no text',
    tags: ['3d-printing', 'cad', 'design', 'engineering', 'age-11-18'],
    sections: [
      {
        title: '3D Design Basics',
        lessons: [
          { title: 'Introduction to 3D Printing', topic: 'How FDM printing works, printer anatomy, materials (PLA, ABS, PETG)', order: 1 },
          { title: 'Tinkercad: Your First 3D Design', topic: 'Tinkercad interface, basic shapes, combining, subtracting, sizing', order: 2 },
          { title: 'Designing for Print: Rules and Limits', topic: 'Overhangs, supports, tolerances, layer height, infill', order: 3 },
          { title: 'Slicing with Cura', topic: 'Import STL, slicer settings, supports, preview, exporting G-code', order: 4 },
        ],
        quizzes: [{ title: '3D Printing Basics Quiz', order: 1, questionCount: 6 }],
      },
      {
        title: 'Advanced CAD',
        lessons: [
          { title: 'Fusion 360: Professional CAD', topic: 'Parametric design, sketching, extrudes, revolves, fillets', order: 5 },
          { title: 'Assemblies and Mechanical Design', topic: 'Multiple parts, joints, motion simulation in Fusion 360', order: 6 },
          { title: 'Organic Shapes with Blender', topic: 'Introduction to Blender for organic 3D modeling', order: 7 },
          { title: 'Scanning Real Objects', topic: 'Photogrammetry, 3D scanning apps, mesh cleaning', order: 8 },
        ],
        quizzes: [],
      },
      {
        title: 'Projects',
        lessons: [
          { title: 'Design a Phone Stand', topic: 'Practical CAD project — design, print, and test', order: 9 },
          { title: 'Prosthetics and Medical 3D Printing', topic: 'How 3D printing is revolutionizing medicine and accessibility', order: 10 },
          { title: 'Project: Design Your Dream Device', topic: 'Create an original useful object from concept to print', order: 11 },
          { title: 'Careers in 3D Design and Manufacturing', topic: 'Industrial design, biomedical engineering, architecture careers', order: 12 },
        ],
        quizzes: [{ title: '3D Printing & CAD Certificate', order: 2, questionCount: 8 }],
      },
    ],
  },
  {
    title: 'AR & VR: Augmented and Virtual Reality',
    slug: 'ar-vr-technology',
    description: 'Explore the immersive world of AR and VR! Learn how these technologies work and build your first AR experiences.',
    categorySlug: 'emerging-technologies',
    ageGroup: 'secondary',
    type: 'emerging-tech',
    hasCertification: true,
    imagePrompt: 'VR headset with virtual world inside and AR phone overlaying digital information on real world, colorful flat design, no text',
    tags: ['ar', 'vr', 'xr', 'metaverse', 'age-13-18'],
    sections: [
      {
        title: 'XR Fundamentals',
        lessons: [
          { title: 'Understanding AR, VR, and MR', topic: 'Spectrum of immersion, use cases, hardware overview', order: 1 },
          { title: 'How VR Headsets Work', topic: 'Optics, tracking, 6DOF, latency, presence — the tech inside VR', order: 2 },
          { title: 'Augmented Reality Basics', topic: 'Marker-based AR, markerless AR, SLAM, spatial mapping', order: 3 },
          { title: 'WebXR: AR/VR in the Browser', topic: 'A-Frame, WebXR API, creating basic VR scenes in HTML', order: 4, includesCode: true, programmingLanguage: 'html' },
        ],
        quizzes: [{ title: 'XR Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Building XR Experiences',
        lessons: [
          { title: 'Unity for VR Development', topic: 'XR Interaction Toolkit, VR rig setup, teleportation, grabbing', order: 5, includesCode: true, programmingLanguage: 'csharp' },
          { title: 'AR with ARKit and ARCore', topic: 'Plane detection, object placement, light estimation', order: 6, includesCode: true, programmingLanguage: 'csharp' },
          { title: '3D User Interface Design for VR', topic: 'Spatial UI principles, comfort guidelines, locomotion', order: 7 },
          { title: 'Haptics and Spatial Audio', topic: 'Immersion through touch feedback and 3D audio', order: 8 },
        ],
        quizzes: [],
      },
      {
        title: 'XR Applications & Future',
        lessons: [
          { title: 'VR in Education and Training', topic: 'Medical simulation, architectural walkthroughs, virtual field trips', order: 9 },
          { title: 'AR in Industry: Manufacturing and Healthcare', topic: 'Heads-up displays, guided assembly, surgical AR applications', order: 10 },
          { title: 'The Metaverse: Vision and Reality', topic: 'What the metaverse is, social VR, digital economies, criticism', order: 11 },
          { title: 'Project: Build an AR Scavenger Hunt', topic: 'Create a real-world AR experience with markers and digital objects', order: 12 },
        ],
        quizzes: [{ title: 'AR & VR Certificate', order: 2, questionCount: 10 }],
      },
    ],
  },
  {
    title: 'Ethical Hacking & Penetration Testing',
    slug: 'ethical-hacking',
    description: 'Learn cybersecurity from an attacker\'s perspective — penetration testing, vulnerability assessment, and ethical hacking methodologies.',
    categorySlug: 'emerging-technologies',
    ageGroup: 'advanced',
    type: 'emerging-tech',
    hasCertification: true,
    imagePrompt: 'Ethical hacker with laptop showing security terminal, shield and lock icons, penetration testing tools, dark blue and green colors, flat design, no text',
    tags: ['ethical-hacking', 'penetration-testing', 'security', 'age-15-18', 'ctf'],
    sections: [
      {
        title: 'Hacking Methodology',
        lessons: [
          { title: 'Introduction to Ethical Hacking', topic: 'Legal requirements, permission, scope, responsible disclosure', order: 1 },
          { title: 'Reconnaissance: Gathering Information', topic: 'OSINT, Shodan, Maltego, DNS enumeration, Google dorking', order: 2, includesCode: true, programmingLanguage: 'python' },
          { title: 'Network Scanning and Enumeration', topic: 'nmap, netcat, banner grabbing, service detection', order: 3, includesCode: true, programmingLanguage: 'python' },
          { title: 'Vulnerability Assessment', topic: 'Nessus, OpenVAS, CVSS scoring, vulnerability databases', order: 4 },
        ],
        quizzes: [{ title: 'Ethical Hacking Basics Quiz', order: 1, questionCount: 8 }],
      },
      {
        title: 'Exploitation Techniques',
        lessons: [
          { title: 'Web Application Penetration Testing', topic: 'Burp Suite, OWASP Top 10, hands-on web hacking', order: 5, includesCode: true, programmingLanguage: 'python' },
          { title: 'SQL Injection Lab', topic: 'Manual SQLi, sqlmap, blind injection, prevention', order: 6, includesCode: true, programmingLanguage: 'python' },
          { title: 'XSS and CSRF Attacks', topic: 'Reflected, stored, DOM XSS, CSRF bypass, defenses', order: 7, includesCode: true, programmingLanguage: 'javascript' },
          { title: 'Password Attacks', topic: 'Brute force, credential stuffing, rainbow tables, Hashcat, John', order: 8, includesCode: true, programmingLanguage: 'python' },
        ],
        quizzes: [],
      },
      {
        title: 'CTF and Careers',
        lessons: [
          { title: 'Capture the Flag Competitions', topic: 'CTF categories, platforms (HackTheBox, TryHackMe), team strategies', order: 9 },
          { title: 'Wireless Security Testing', topic: 'WiFi protocols, WPA cracking concepts, rogue AP detection', order: 10 },
          { title: 'Writing Penetration Test Reports', topic: 'Executive summary, technical findings, CVSS ratings, remediation', order: 11 },
          { title: 'Bug Bounty Programs and Security Career', topic: 'HackerOne, Bugcrowd, responsible disclosure, OSCP certification path', order: 12 },
        ],
        quizzes: [{ title: 'Ethical Hacking Certificate', order: 2, questionCount: 12 }],
      },
    ],
  },
];
