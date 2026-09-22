/**
 * All portfolio content lives here. Edit this file only — every section and the
 * generated resume PDF read from it.
 *
 * Items with `placeholder: true` are shown on the site but left out of the generated resume PDF.
 *
 * Links set to `null` render as a disabled "Coming soon" button, so nothing
 * on the page ever points to a dead URL.
 *
 * IMPORTANT: Everything marked  // PLACEHOLDER  below is sample content added so the
 * Projects / Certifications / Achievements / Contact sections look complete.
 * Replace it with your real details before publishing.
 *
 * This file must stay plain data (no JSX / no imports) because
 * scripts/generate-resume.mjs imports it directly from Node.
 */

export const profile = {
  name: 'Sahil Khan',
  firstName: 'Sahil',
  lastName: 'Khan',
  role: 'Aspiring Software Engineer & CSE Student',
  status: 'Open to Full-Time & Internship Roles',
  intro:
    'Computer Science and Engineering student with knowledge of Java, C++, SQL, Spring Boot and web development. Familiar with OOP, DSA, relational databases, REST APIs and Git/GitHub.',
  quote: 'Better Code. Better Opportunities.',
  skillsQuote: 'Skills turn ideas into reality.',

  // Add your real links here. `null` = "Coming soon".
  email: 'skhan292752@gmail.com', // e.g. 'sahil@example.com'
  github:  'https://github.com/mansuri1122',
  linkedin: 'https://www.linkedin.com/in/sahil-khan-2943b4298', // e.g. 'https://www.linkedin.com/in/your-id'

  resume: '/Sahil_Khan_Resume.pdf',
  resumeFileName: 'Sahil_Khan_Resume.pdf',
}

// Photos live in /public/images. Drop your own files in with the same names to replace them:
//   hero.png   -> transparent PNG cut-out (head & shoulders), shown on the glass card
//   avatar.png -> square face crop for the navbar logo
//   about.jpg  -> portrait, roughly 4:5
//   about1.png -> alternate portrait for the About section
//   skills.png -> transparent PNG cut-out for the Skills header
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
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { key: 'projects', value: '2', label: 'Featured Projects' },
  { key: 'commits', value: 'Git', label: 'Version Control' },
  { key: 'certs', value: '4', label: 'Certifications' },
  { key: 'hackathon', value: '1', label: 'Hackathon Finalist' },
]

export const exploring = ['Spring Boot', 'REST APIs', 'MySQL', 'Data Structures & Algorithms','Docker', 'AWS']

export const about = {
  badge: 'B.Tech CSE Student',
  plateTitle: 'Sahil Khan',
  plateSubtitle: 'Aspiring Software Engineer',
  headingLine1: 'Turning Ideas',
  headingLine2: 'Into',
  headingAccent: 'Real-World Solutions',
  paragraphs: [
    'I am a B.Tech Computer Science & Engineering student at Bansal College of Engineering, passionate about building scalable, clean, and reliable applications. My primary specialization is in Java Full Stack Development, connecting enterprise Spring Boot backends with sleek, reactive user interfaces.',
    'I believe software development is about more than just writing syntax—it’s about understanding real problems, designing clean solutions, and delivering polished, usable digital experiences.',
  ],
  values: [
    { icon: 'puzzle', title: 'Problem Solver', text: 'I enjoy solving real-world challenges through code' },
    { icon: 'book', title: 'Continuous Learner', text: 'Always exploring new technologies' },
    { icon: 'users', title: 'Team Player', text: 'Love collaborating & sharing knowledge' },
    { icon: 'target', title: 'Goal Oriented', text: 'Focused on building a strong career in software engineering' },
  ],
  education: {
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'Bansal College of Engineering, Mandideep',
    session: '2023–2027',
    branch: 'Computer Science & Engineering',
    cgpa: '6.89/10',
  },
}

export const skillGroups = [
  { id: 'programming', title: 'Programming', icon: 'code', items: ['Java', 'C++', 'SQL'] },
  { id: 'frontend', title: 'Web', icon: 'globe', items: ['HTML', 'CSS', 'JavaScript','React'] },
  { id: 'backend', title: 'Backend', icon: 'server', items: ['Spring Boot', 'REST APIs'] },
  { id: 'database', title: 'Database', icon: 'database', items: ['MySQL', 'MongoDB'] },
  { id: 'tools', title: 'Tools', icon: 'wrench', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'] },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    tabLabel: 'Core CS',
    icon: 'layers',
    items: ['DSA', 'DBMS', 'Object-Oriented Programming', 'Collection Framework (List, Set, Map)'],
  },
]

export const skillsIntro = {
  title: 'Technical Skillset',
  text: 'A comprehensive stack across full-stack development, backend systems, databases, and modern tools. Constantly learning and exploring new technologies.',
}

export const projects = [

 {
  title: 'Learning Management System',
  description:
    'Full-stack Learning Management System designed to manage courses, students, instructors and learning content. Provides role-based access, course management, student enrollment and a structured platform for delivering and managing educational resources.',
  tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
  github: 'https://github.com/mansuri1122/LMS',
  live: null,
},
  {
    title: 'Academic Assistance System',
    description:
      'Java Swing and MySQL application with student and teacher modules for attendance, grades, timetable, syllabus and academic notifications. Uses JDBC for database connectivity and separates the application into functional modules.',
    tech: ['Java', 'Java Swing', 'MySQL', 'JDBC'],
    github: 'https://github.com/mansuri1122',
    live: null,
  },
  {
    title: 'EventHive – Event Management System',
    description:
      'Event management platform with event listing, registration, authentication and an admin dashboard. Built with REST APIs, relational database integration and responsive reusable components.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    github: 'https://github.com/mansuri1122/Event-hive-project',
    live: null,
  },
]

export const certifications = [
  { title: 'Java Programming Certificate', issuer: null, year: null, link: null },
  {
    title: 'AWS: Zero To Hero',
    issuer: 'TrainWithShubham',
    year: '06 Nov 2025',
    link: '/images/certificate-aws.png',
    image: '/images/certificate-aws.png',
  },
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'Cisco Networking Academy',
    year: '17 Sep 2025',
    link: '/images/certificate-cisco.png',
    image: '/images/certificate-cisco.png',
  },
  { title: 'Introduction to MS Excel', issuer: 'Simplilearn SkillUp', year: null, link: null },
]

export const achievements = [
  { icon: 'trophy', title: 'BGI Hackathon Top Finalist', text: 'Selected as a top finalist among participating teams.' },
  { icon: 'folder', title: 'Startup Pitch Competition', text: 'Presented a startup idea and its business model at Bansal College of Engineering.' },
]

export const contact = {
  heading: 'Let’s build something together',
  text: 'I’m open to full-time roles and internships. Send a message and I’ll get back to you.',
}
