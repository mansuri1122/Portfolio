/**
 * All portfolio content lives here. Edit this file only — every section and the
 * generated resume PDF read from it.
 *
 * Items with `placeholder: true` are shown on the site but left out of the generated resume PDF.
 *
 * Links set to `null` render as a disabled "Coming soon" button, so nothing
 * on the page ever points to a dead URL.
 */

export const profile = {
  name: 'Saif Uddin',
  firstName: 'Saif',
  lastName: 'Uddin',
  role: 'Backend Developer & CSE Student',
  status: 'Open to Backend & Software Engineering Roles',
  intro:
    'Backend-focused Computer Science undergraduate with hands-on experience building scalable REST APIs and backend services using Python, FastAPI, PostgreSQL, SQLAlchemy, Docker, and Git. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and DBMS.',
  quote: 'Designing reliable, maintainable, and high-performance backend systems.',
  skillsQuote: 'Clean architecture and performance turn code into scale.',

  email: 'saifu8n@gmail.com',
  github: 'https://github.com/saifu8nnn',
  linkedin: 'https://www.linkedin.com/in/saifu8n',

  resume: '/Saif_Uddin_Resume.pdf',
  resumeFileName: 'Saif_Uddin_Resume.pdf',
}

// Photos live in /public/images.
export const images = {
  hero: '/images/hero.png',
  avatar: '/images/avatar.png',
  about: '/images/about.jpg',
  about1: '/images/about1.png',
  skills: '/images/skills.png',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { key: 'projects', value: '2+', label: 'Backend Projects' },
  { key: 'commits', value: '220+', label: 'DSA Problems Solved' },
  { key: 'certs', value: '8.55', label: 'College CGPA' },
  { key: 'hackathon', value: 'Finalist', label: 'Smart IDEA 2025' },
]

export const exploring = [
  'FastAPI',
  'PostgreSQL',
  'Docker & Compose',
  'Locust Load Testing',
  'Groq LLaMA API',
  'Async SQLAlchemy',
]

export const about = {
  badge: 'B.Tech CSE Student (2023–2027)',
  plateTitle: 'Saif Uddin',
  plateSubtitle: 'Backend Developer',
  headingLine1: 'Architecting Scalable',
  headingLine2: 'And Reliable',
  headingAccent: 'Backend Systems',
  paragraphs: [
    'I am a Computer Science and Engineering undergraduate at Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) / Bansal College of Engineering, passionate about backend engineering, API architecture, and database performance optimization.',
    'With hands-on experience building asynchronous RESTful services using Python, FastAPI, and PostgreSQL, I specialize in designing normalized database schemas, implementing robust authentication, and optimizing connection pool latencies under heavy concurrent loads.',
    'Beyond backend code, I have solved 220+ algorithmic challenges across LeetCode & HackerRank, and actively organize major technical and cultural events coordinating 1,000+ students.',
  ],
  values: [
    { icon: 'puzzle', title: 'Problem Solver', text: '220+ algorithmic problems solved across LeetCode & HackerRank' },
    { icon: 'book', title: 'Continuous Learner', text: 'Exploring GenAI APIs, microservices, and high-concurrency systems' },
    { icon: 'users', title: 'Leader & Organizer', text: 'Coordinated campus events and marathons for 1,000+ participants' },
    { icon: 'target', title: 'Performance Driven', text: 'Focus on low latency, connection pooling, and resilient APIs' },
  ],
  education: {
    degree: 'Bachelor of Technology – Computer Science Engineering',
    school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)',
    session: '2023 – 2027',
    branch: 'Computer Science & Engineering',
    cgpa: '8.55 / 10',
  },
}

export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'server',
    items: ['FastAPI', 'RESTful APIs', 'API Design', 'CRUD Operations', 'JWT Authentication', 'Asynchronous Architecture'],
  },
  {
    id: 'programming',
    title: 'Languages',
    icon: 'code',
    items: ['Python', 'C++', 'SQL'],
  },
  {
    id: 'database',
    title: 'Databases & ORM',
    icon: 'database',
    items: ['PostgreSQL', 'SQLAlchemy ORM', 'Relational Database Design', 'SQL Queries', 'Indexing', 'Connection Pooling'],
  },
  {
    id: 'tools',
    title: 'DevOps & Tools',
    icon: 'wrench',
    items: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Postman', 'JSON', 'Environment Configuration'],
  },
  {
    id: 'testing',
    title: 'Testing & Performance',
    icon: 'layers',
    items: ['Pytest', 'Locust', 'API Testing', 'Load Testing', 'Performance Analysis', 'Error Handling'],
  },
  {
    id: 'ai-integration',
    title: 'AI & External APIs',
    tabLabel: 'AI & APIs',
    icon: 'globe',
    items: ['OpenAI API', 'Groq API (LLaMA)', 'Gemini API', 'Third-party API Integration'],
  },
  {
    id: 'core-cs',
    title: 'Computer Science Fundamentals',
    tabLabel: 'Core CS',
    icon: 'layers',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
]

export const skillsIntro = {
  title: 'Technical Skillset',
  text: 'A strong backend engineering foundation spanning scalable API development, relational databases, load testing, containerization, and modern AI integration.',
}

export const projects = [
  {
    title: 'Scalable URL Shortener Service',
    description:
      'Asynchronous URL shortening REST API using FastAPI, PostgreSQL, and SQLAlchemy. Features Base62 short-code generation, URL expiration, request validation, and modular routing. Load-tested with 15,000+ requests using Locust, achieving 135.17 RPS consistently and optimizing database connection-pool bottlenecks.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Locust'],
    github: 'https://github.com/saifu8nnn',
    live: null,
  },
  {
    title: 'AI Study Notes API',
    description:
      'RESTful CRUD backend service built with FastAPI and SQLAlchemy ORM with PostgreSQL persistence. Integrates Groq LLaMA API for automated note summaries with modular architecture design, automatic OpenAPI docs, and containerized Docker Compose deployment.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Groq API', 'SQLAlchemy'],
    github: 'https://github.com/saifu8nnn',
    live: null,
  },
]

export const certifications = []

export const achievements = [
  {
    icon: 'trophy',
    title: 'Smart IDEA Hackathon 2025',
    text: 'Selected for Smart IDEA Hackathon 2025 for proposing an innovative AI-based software solution.',
  },
  {
    icon: 'commit',
    title: '220+ DSA Problems Solved',
    text: 'Solved 220+ programming challenges across LeetCode & HackerRank strengthening algorithmic problem solving.',
  },
  {
    icon: 'grad',
    title: 'Academic Excellence (8.55 CGPA)',
    text: 'Maintaining a 8.55/10 CGPA in Computer Science Engineering at RGPV Mandideep.',
  },
  {
    icon: 'folder',
    title: 'Student Organizer & Leader',
    text: 'Coordinated technical & cultural events for 1,000+ students and managed Bansal Pankh Marathon (300+ participants).',
  },
]

export const contact = {
  heading: 'Let’s build scalable backends together',
  text: 'I’m open to full-time backend and software engineering roles, internships, and collaborations. Reach out and I’ll get back to you promptly!',
}
