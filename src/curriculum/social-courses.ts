import type { CourseDefinition } from '../types.js';

function makeSocialCourse(
  slug: string, title: string, categorySlug: string,
  ageGroup: CourseDefinition['ageGroup'], type: string,
  description: string, imagePrompt: string, tags: string[],
  s1Title: string, lessons1: string[], q1: string,
  s2Title: string, lessons2: string[], q2: string,
): CourseDefinition {
  const mkL = (t: string, i: number) => ({ title: t, slug: `${slug}-lesson-${i + 1}`, order: i + 1 });
  const mkQ = (q: string) => ({ question: q, type: 'multiple_choice' as const });
  const dqs = [
    `What is the central concept of this section?`, `Which definition best matches the key term?`,
    `How does this concept apply to real-world situations?`, `Which of the following is TRUE?`,
    `What is the best example of the idea explored here?`, `How would this principle affect behaviour or society?`,
    `Which theorist or theory is most relevant here?`, `What is the most important takeaway from this section?`,
  ];
  return {
    title, slug, description, excerpt: description.slice(0, 120) + '...',
    categorySlug, ageGroup, type, hasCertification: true, imagePrompt, tags,
    sections: [
      { title: s1Title, order: 1, lessons: lessons1.map((t, i) => mkL(t, i)), quizzes: [{ title: q1, slug: `${slug}-quiz-1`, questions: dqs.map(mkQ) }] },
      { title: s2Title, order: 2, lessons: lessons2.map((t, i) => mkL(t, i + lessons1.length)), quizzes: [{ title: q2, slug: `${slug}-quiz-2`, questions: dqs.map(mkQ) }] },
    ],
  };
}

// ── Psychology & Social Sciences ──────────────────────────────────────────────

export const PSYCHOLOGY_COURSES: CourseDefinition[] = [
  makeSocialCourse(
    'understanding-people', 'Understanding People & Behaviour', 'psychology-social-sciences', 'middle', 'psychology',
    'Explore why people think and act the way they do — emotions, behaviour, social influence, and mental wellbeing.',
    'Colorful brain with emotions as characters, social situations, thought bubbles, flat design, no text',
    ['psychology', 'behaviour', 'emotions', 'social skills', 'middle'],
    'The Human Mind',
    ['What is Psychology?', 'Emotions — Types and Functions', 'Perception — How We See the World', 'Memory — How We Remember', 'Personality Types', 'Nature vs Nurture'],
    'Understanding People Quiz 1',
    'Social Behaviour',
    ['Social Influence — Conformity and Obedience', 'Stereotypes and Prejudice', 'Empathy and Compassion', 'Group Dynamics', 'Communication — Verbal and Non-Verbal', 'Mental Health Basics'],
    'Understanding People Quiz 2',
  ),
  makeSocialCourse(
    'intro-psychology', 'Introduction to Psychology', 'psychology-social-sciences', 'secondary', 'psychology',
    'A systematic introduction to psychological science — approaches, research methods, and key areas of psychology.',
    'Psychology textbook, brain scan, experiment setup, Freud silhouette, colorful flat design, no text',
    ['psychology', 'introduction', 'research methods', 'approaches', 'secondary'],
    'Approaches & Methods',
    ['History of Psychology — Wundt to Today', 'Major Approaches — Behaviourist, Cognitive, Biological', 'Humanistic Psychology — Maslow, Rogers', 'Psychodynamic Approach — Freud', 'Research Methods — Experiments', 'Ethics in Psychology Research'],
    'Psychology Quiz 1',
    'Core Topics',
    ['Memory — Models and Forgetting', 'Attachment — Bowlby and Early Development', 'Psychopathology — Mental Illness', 'Biopsychology — The Brain and Behaviour', 'Social Influence — Milgram, Asch', 'Cognition — Perception and Thinking'],
    'Psychology Quiz 2',
  ),
  makeSocialCourse(
    'social-psychology', 'Social Psychology', 'psychology-social-sciences', 'secondary', 'psychology',
    'Examine how people influence each other — attitudes, group behaviour, prejudice, aggression, and altruism.',
    'Social psychology experiment, group dynamics, attitudes chart, helping behaviour, colorful flat design, no text',
    ['social psychology', 'attitudes', 'group behaviour', 'prejudice', 'secondary'],
    'Attitudes & Influence',
    ['Attitudes — Formation and Change', 'Cognitive Dissonance', 'Persuasion and Propaganda', 'Conformity — Asch Experiments', 'Obedience — Milgram Studies', 'Social Roles — Zimbardo'],
    'Social Psychology Quiz 1',
    'Aggression & Prosocial',
    ['Aggression — Theories and Research', 'Media and Violence', 'Prejudice and Discrimination', 'Reducing Prejudice — Contact Hypothesis', 'Altruism and Helping Behaviour', 'Bystander Effect'],
    'Social Psychology Quiz 2',
  ),
  makeSocialCourse(
    'developmental-psychology', 'Developmental Psychology', 'psychology-social-sciences', 'secondary', 'psychology',
    'Trace human development from infancy to adulthood — cognitive, social, emotional, and moral development.',
    'Child development timeline, Piaget stages, attachment, growing child, colorful flat design, no text',
    ['developmental psychology', 'stages', 'piaget', 'attachment', 'secondary'],
    'Cognitive Development',
    ['Piaget\'s Stages of Development', 'Vygotsky — Social Learning', 'Language Development', 'Theory of Mind', 'Moral Development — Kohlberg', 'Intelligence — Theories and Testing'],
    'Developmental Psychology Quiz 1',
    'Social & Emotional Development',
    ['Attachment Theory — Bowlby and Ainsworth', 'Parenting Styles', 'Peer Relationships and Adolescence', 'Identity Formation — Erikson', 'Resilience and Risk Factors', 'Development Across the Lifespan'],
    'Developmental Psychology Quiz 2',
  ),
  makeSocialCourse(
    'sociology-anthropology', 'Sociology & Anthropology', 'psychology-social-sciences', 'advanced', 'psychology',
    'Study human societies and cultures — social structure, institutions, inequality, globalisation, and culture.',
    'Diverse world cultures, social structure diagram, anthropology field, sociology icons, colorful flat design, no text',
    ['sociology', 'anthropology', 'culture', 'society', 'advanced'],
    'Society & Structure',
    ['Introduction to Sociology', 'Social Structure — Class, Gender, Ethnicity', 'Social Institutions — Family, Education, Religion', 'Socialisation — Primary and Secondary', 'Social Stratification and Inequality', 'Theories — Functionalism, Conflict, Interactionism'],
    'Sociology Quiz 1',
    'Culture & Globalisation',
    ['Introduction to Anthropology', 'Culture — Definition and Components', 'Ethnocentrism and Cultural Relativism', 'Ritual, Religion, and Belief Systems', 'Globalisation and Cultural Change', 'Identity — Race, Gender, Nationality'],
    'Anthropology Quiz 2',
  ),
];

// ── Philosophy & Ethics ───────────────────────────────────────────────────────

export const PHILOSOPHY_COURSES: CourseDefinition[] = [
  makeSocialCourse(
    'big-questions', 'Big Questions — Why? What? How?', 'philosophy-ethics', 'elementary', 'philosophy',
    'Explore life\'s biggest questions — what is real, what is fair, what is good — through stories, games, and discussion.',
    'Question marks, lightbulbs, thinking characters, books, philosophical imagery, colorful flat design, no text',
    ['philosophy', 'ethics', 'thinking', 'questions', 'elementary'],
    'Reality & Knowledge',
    ['What is Philosophy?', 'What is Real? — Introduction to Metaphysics', 'How Do We Know Things? — Epistemology', 'Dreams and Reality', 'The Trolley Problem — A Moral Dilemma', 'What Makes Something Beautiful?'],
    'Big Questions Quiz 1',
    'Right & Wrong',
    ['What is Fairness?', 'Rules and Why We Have Them', 'Is It Always Wrong to Lie?', 'What Do We Owe Each Other?', 'Animal Rights — Do Animals Have Rights?', 'What Would a Perfect World Look Like?'],
    'Big Questions Quiz 2',
  ),
  makeSocialCourse(
    'intro-philosophy', 'Introduction to Philosophy', 'philosophy-ethics', 'middle', 'philosophy',
    'A systematic introduction to philosophy — metaphysics, epistemology, ethics, and political philosophy.',
    'Philosopher thinking, ancient Greek columns, modern thought, philosophy books, colorful flat design, no text',
    ['philosophy', 'metaphysics', 'epistemology', 'ethics', 'middle'],
    'Metaphysics & Epistemology',
    ['What Exists? — Metaphysics and Ontology', 'Plato\'s Theory of Forms', 'Descartes and the Mind-Body Problem', 'Knowledge vs Belief — Justified True Belief', 'Scepticism — Can We Know Anything?', 'Rationalism vs Empiricism'],
    'Philosophy Quiz 1',
    'Ethics & Politics',
    ['Moral Philosophy — What is Good?', 'Consequentialism — Utilitarianism', 'Deontology — Kant\'s Ethics', 'Virtue Ethics — Aristotle', 'Social Contract Theory — Hobbes, Locke', 'What is Justice? — Plato and Rawls'],
    'Philosophy Quiz 2',
  ),
  makeSocialCourse(
    'ethics-moral-reasoning', 'Ethics & Moral Reasoning', 'philosophy-ethics', 'secondary', 'philosophy',
    'Develop ethical reasoning skills — major ethical theories, applied ethics, and moral dilemmas in real contexts.',
    'Ethics scales, moral dilemma scenarios, diverse perspectives, colorful flat design, no text',
    ['ethics', 'moral philosophy', 'reasoning', 'dilemmas', 'secondary'],
    'Ethical Theories',
    ['Why Study Ethics?', 'Metaethics — Moral Realism vs Relativism', 'Consequentialism and Utilitarianism in Depth', 'Deontological Ethics — Rights and Duties', 'Virtue Ethics in Practice', 'Care Ethics and Feminist Philosophy'],
    'Ethics Quiz 1',
    'Applied Ethics',
    ['Bioethics — Abortion, Euthanasia', 'Environmental Ethics', 'Business Ethics and Corporate Responsibility', 'Animal Ethics', 'Technology Ethics — AI and Privacy', 'Global Justice and Obligations to Distant Others'],
    'Ethics Quiz 2',
  ),
  makeSocialCourse(
    'logic-critical-thinking', 'Logic & Critical Thinking', 'philosophy-ethics', 'secondary', 'philosophy',
    'Strengthen your reasoning — formal and informal logic, fallacies, argument analysis, and critical thinking skills.',
    'Logic puzzle, argument diagram, fallacy examples, brain with reasoning gears, colorful flat design, no text',
    ['logic', 'critical thinking', 'reasoning', 'arguments', 'secondary'],
    'Logic Foundations',
    ['What is an Argument?', 'Validity and Soundness', 'Deductive vs Inductive Reasoning', 'Propositional Logic — And, Or, Not', 'Categorical Syllogisms', 'Formal Logic — Truth Tables'],
    'Logic Quiz 1',
    'Critical Thinking',
    ['Informal Fallacies — Ad Hominem, Straw Man', 'Cognitive Biases — Confirmation Bias', 'Evaluating Sources and Evidence', 'Statistical Thinking and Misleading Data', 'Argument Mapping', 'Applied Critical Thinking — Everyday Decisions'],
    'Critical Thinking Quiz 2',
  ),
];

// ── Economics & Finance ───────────────────────────────────────────────────────

export const ECONOMICS_COURSES: CourseDefinition[] = [
  makeSocialCourse(
    'money-basics-saving', 'Money Basics & Saving', 'economics-finance', 'elementary', 'economics',
    'Learn the fundamentals of money — earning, spending, saving, and making wise financial decisions from a young age.',
    'Colorful coins, piggy bank, saving chart, shopping, money basics icons, flat design, no text',
    ['money', 'finance', 'saving', 'economics basics', 'elementary'],
    'Understanding Money',
    ['What is Money? — History and Forms', 'Earning Money — Jobs and Businesses', 'Spending and Budgeting', 'Saving — Why It Matters', 'Needs vs Wants', 'Banking — Where Money Lives'],
    'Money Basics Quiz 1',
    'Financial Thinking',
    ['Opportunity Cost — The Cost of Choices', 'Simple Interest', 'Borrowing and Debt', 'Giving and Charity', 'Making Wise Decisions', 'Your Financial Future'],
    'Money Basics Quiz 2',
  ),
  makeSocialCourse(
    'financial-literacy', 'Financial Literacy for Teens', 'economics-finance', 'middle', 'economics',
    'Essential money skills for teenagers — budgeting, banking, credit, investing basics, and financial independence.',
    'Teen with bank account, budget chart, investment app, credit card, colorful flat design, no text',
    ['financial literacy', 'budgeting', 'banking', 'teenagers', 'middle'],
    'Money Management',
    ['Creating a Personal Budget', 'Bank Accounts — Current and Savings', 'Debit vs Credit', 'Understanding Interest Rates', 'Insurance — What and Why', 'Tax — How It Works'],
    'Financial Literacy Quiz 1',
    'Investing & Planning',
    ['Introduction to Investing', 'Stocks, Bonds, and Mutual Funds', 'Compound Interest — The Magic of Time', 'Setting Financial Goals', 'Avoiding Scams and Fraud', 'Planning for Your Future'],
    'Financial Literacy Quiz 2',
  ),
  makeSocialCourse(
    'personal-finance-budgeting', 'Personal Finance & Budgeting', 'economics-finance', 'secondary', 'economics',
    'Master personal finance — income, expenditure, taxes, investment, pension, and financial planning for life.',
    'Personal finance dashboard, income vs expenses, investment portfolio, retirement planning, flat design, no text',
    ['personal finance', 'budgeting', 'investment', 'tax', 'secondary'],
    'Income & Budgeting',
    ['Income — Salary, Self-Employment, Passive', 'Tax System — Income Tax, NI, VAT', 'Building a Monthly Budget', 'Emergency Fund — The 3-Month Rule', 'Managing Debt — Good Debt vs Bad Debt', 'Credit Scores and Reports'],
    'Personal Finance Quiz 1',
    'Investing & Planning',
    ['Investment Basics — Risk and Return', 'ISAs, SIPPs, and Pension Planning', 'Property — Renting vs Buying', 'Insurance — Life, Health, Home', 'Estate Planning and Wills', 'Financial Independence and FIRE Movement'],
    'Personal Finance Quiz 2',
  ),
  makeSocialCourse(
    'microeconomics', 'Microeconomics', 'economics-finance', 'advanced', 'economics',
    'Study individual economic decisions — supply and demand, market structures, externalities, and pricing theory.',
    'Supply demand diagram, market structure comparison, consumer surplus graph, colorful economics illustration, no text',
    ['microeconomics', 'supply demand', 'markets', 'a-level', 'advanced'],
    'Markets & Prices',
    ['Introduction to Microeconomics', 'Demand — Factors and Elasticity', 'Supply — Factors and Elasticity', 'Price Determination — Equilibrium', 'Consumer and Producer Surplus', 'Price Controls — Floors and Ceilings'],
    'Microeconomics Quiz 1',
    'Market Structures',
    ['Perfect Competition', 'Monopoly — Power and Welfare Effects', 'Oligopoly — Game Theory', 'Monopolistic Competition', 'Market Failure — Externalities and Public Goods', 'Government Intervention in Markets'],
    'Microeconomics Quiz 2',
  ),
  makeSocialCourse(
    'macroeconomics-global-markets', 'Macroeconomics & Global Markets', 'economics-finance', 'advanced', 'economics',
    'Understand the big picture — GDP, inflation, unemployment, fiscal and monetary policy, and global economic systems.',
    'GDP chart, inflation graph, central bank, global trade map, macroeconomics icons, colorful flat design, no text',
    ['macroeconomics', 'gdp', 'inflation', 'monetary policy', 'advanced'],
    'National Economy',
    ['Macroeconomic Objectives — Growth, Inflation, Unemployment', 'GDP — Measuring Economic Output', 'The Business Cycle', 'Inflation — Causes and Consequences', 'Unemployment — Types and Policies', 'Fiscal Policy — Government Spending and Tax'],
    'Macroeconomics Quiz 1',
    'Global Economy',
    ['Monetary Policy — Interest Rates and Money Supply', 'Exchange Rates and Current Account', 'International Trade — Comparative Advantage', 'Globalisation — Benefits and Costs', 'Development Economics', 'Economic Crises and Policy Responses'],
    'Macroeconomics Quiz 2',
  ),
];

// ── Business & Entrepreneurship ───────────────────────────────────────────────

export const BUSINESS_COURSES: CourseDefinition[] = [
  makeSocialCourse(
    'my-first-business-idea', 'My First Business Idea', 'business-entrepreneurship', 'elementary', 'business',
    'Turn your ideas into action — discover entrepreneurship, create a business plan, and learn from real young entrepreneurs.',
    'Young entrepreneur with lightbulb, business plan, lemonade stand, coins, colorful flat design, no text',
    ['business', 'entrepreneurship', 'ideas', 'elementary', 'young entrepreneurs'],
    'Ideas & Planning',
    ['What is a Business?', 'Entrepreneurs — People Who Build', 'Finding a Problem to Solve', 'Your Business Idea', 'Understanding Customers — Who Needs This?', 'Simple Business Plan'],
    'First Business Quiz 1',
    'Launch & Sell',
    ['Pricing Your Product or Service', 'Marketing — Telling People About Your Business', 'Making and Selling', 'Money In vs Money Out — Profit', 'Learning from Failure', 'Young Entrepreneurs Who Made It'],
    'First Business Quiz 2',
  ),
  makeSocialCourse(
    'entrepreneurship-juniors', 'Entrepreneurship for Young Minds', 'business-entrepreneurship', 'middle', 'business',
    'Develop entrepreneurial thinking — innovation, creativity, business models, pitching, and launching ventures.',
    'Young entrepreneur pitching idea, startup pitch, business model canvas, innovation icons, colorful flat design, no text',
    ['entrepreneurship', 'innovation', 'business model', 'pitch', 'middle'],
    'Entrepreneurial Thinking',
    ['Entrepreneurial Mindset', 'Design Thinking — Problem to Solution', 'Business Model Canvas', 'Value Proposition — What Makes You Different?', 'Target Market Analysis', 'Competition and Competitive Advantage'],
    'Entrepreneurship Quiz 1',
    'Building a Venture',
    ['Branding — Name, Logo, Story', 'Social Media for Business', 'Customer Feedback and Iteration', 'Finance — Startup Costs and Revenue', 'The Elevator Pitch', 'Young Enterprise Competition'],
    'Entrepreneurship Quiz 2',
  ),
  makeSocialCourse(
    'business-studies', 'Business Studies', 'business-entrepreneurship', 'secondary', 'business',
    'Comprehensive GCSE-level business — business functions, human resources, marketing, finance, and operations.',
    'Business operations diagram, HR, marketing funnel, accounts, factory, colorful flat design, no text',
    ['business studies', 'gcse', 'marketing', 'finance', 'hr', 'secondary'],
    'Business Fundamentals',
    ['Business Ownership — Sole Trader to PLC', 'Stakeholders — Interests and Influence', 'Human Resources — Recruitment and Training', 'Organisational Structures', 'Motivation Theories — Maslow, Herzberg', 'Business Communication'],
    'Business Studies Quiz 1',
    'Marketing & Finance',
    ['Marketing Mix — 4Ps', 'Market Research', 'Product Life Cycle', 'Financial Documents — P&L, Cash Flow', 'Break-Even Analysis', 'Business and the External Environment — PESTLE'],
    'Business Studies Quiz 2',
  ),
  makeSocialCourse(
    'marketing-branding', 'Marketing & Branding', 'business-entrepreneurship', 'secondary', 'business',
    'Master the art and science of marketing — consumer behaviour, digital marketing, brand building, and campaigns.',
    'Marketing campaign visuals, brand identity, social media ads, consumer journey, colorful flat design, no text',
    ['marketing', 'branding', 'digital marketing', 'consumer behaviour', 'secondary'],
    'Marketing Principles',
    ['The Marketing Mix — 4Ps and 7Ps', 'Consumer Behaviour and Decision Making', 'Market Segmentation, Targeting, Positioning', 'Branding — Identity and Equity', 'Content Marketing and Storytelling', 'Market Research Methods'],
    'Marketing Quiz 1',
    'Digital Marketing',
    ['Social Media Marketing', 'SEO and Content Strategy', 'Email Marketing', 'Digital Advertising — PPC, Display', 'Influencer Marketing', 'Measuring Marketing — KPIs and Analytics'],
    'Marketing Quiz 2',
  ),
  makeSocialCourse(
    'startup-innovation', 'Startup & Innovation', 'business-entrepreneurship', 'advanced', 'business',
    'Build and scale a startup — lean methodology, fundraising, growth hacking, innovation, and the startup ecosystem.',
    'Startup ecosystem, venture capital, MVP iteration, growth chart, unicorn startup, colorful flat design, no text',
    ['startup', 'innovation', 'lean startup', 'fundraising', 'advanced'],
    'Building a Startup',
    ['The Startup Ecosystem', 'Lean Startup Methodology — MVP', 'Finding Product-Market Fit', 'Growth Hacking Strategies', 'Team Building — Culture and Hiring', 'Operations — Systems and Scaling'],
    'Startup Quiz 1',
    'Finance & Growth',
    ['Startup Funding — Bootstrapping, Angels, VCs', 'Pitch Deck Creation', 'Financial Modelling — Runway and Projections', 'Legal Basics — IP, Contracts, Equity', 'Scaling — International Expansion', 'Exit Strategies — IPO, Acquisition'],
    'Startup Quiz 2',
  ),
];

// ── Combined Export ───────────────────────────────────────────────────────────

export const SOCIAL_COURSES: CourseDefinition[] = [
  ...PSYCHOLOGY_COURSES,
  ...PHILOSOPHY_COURSES,
  ...ECONOMICS_COURSES,
  ...BUSINESS_COURSES,
];
