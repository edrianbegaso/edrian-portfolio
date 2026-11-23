// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit this file to update text, links and projects. No other file needs to
// change for ordinary content updates.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Edrian Begaso',
  initials: 'EB',
  title: 'Aspiring Full-Stack Developer',
  tagline:
    'Building modern digital experiences through creativity, technology, and continuous learning.',
  intro:
    'A 3rd-year BSIT student passionate about programming and web development. I enjoy building digital experiences, exploring modern technologies, and continuously improving my development skills.',
  email: 'begaso.edrian@filamer.edu.ph',
  photo: '/profile.jpg',
  education: {
    degree: 'Bachelor of Science in Information Technology',
    short: 'BS Information Technology',
    year: '3rd Year College',
    section: 'BSIT 3B',
  },
  // Optional. Leave empty ('') to hide. Add a full URL to show the icon.
  socials: {
    github: 'https://github.com/edrianbegaso',
  },
}

export const typewriterTitles = [
  'Aspiring Full-Stack Developer',
  'BSIT Student',
  'Web Development Enthusiast',
  'Python Programmer',
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

// `icon` values map to Lucide icons inside components/Icons.jsx
export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    items: [
      { name: 'HTML5', icon: 'code' },
      { name: 'CSS3', icon: 'palette' },
      { name: 'JavaScript', icon: 'braces' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: [{ name: 'Basic Backend Development', icon: 'server' }],
  },
  {
    title: 'Programming',
    icon: 'terminal',
    items: [{ name: 'Python', icon: 'terminal' }],
  },
  {
    title: 'Database',
    icon: 'database',
    items: [
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'SQL', icon: 'file' },
    ],
  },
]

export const learning = [
  { name: 'React.js', icon: 'atom' },
  { name: 'Advanced Frontend Development', icon: 'layers' },
  { name: 'Full-Stack Development', icon: 'blocks' },
]

// Replace `image` with your own screenshot (put it in /public/projects).
// Add `github` and/or `demo` URLs when they exist. Empty values are hidden.
export const projects = [
  {
    id: 'hand-face-tracking',
    title: 'Hand & Face Tracking System',
    description:
      'A Python project that tracks hands and faces through a camera feed, responding to what it sees in real time.',
    image: '/projects/hand-face-tracking.svg',
    imageAlt: 'Illustration of face and hand tracking points over a camera frame',
    tags: ['Python', 'Hand Tracking', 'Face Tracking', 'Real-time Camera'],
    github: '',
    demo: '',
  },
  {
    id: 'qr-code-system',
    title: 'QR Code Integration System',
    description:
      'A system that uses the camera to scan QR codes and recognize the data stored inside them.',
    image: '/projects/qr-code-system.svg',
    imageAlt: 'Illustration of a camera scanning a QR-style pattern',
    tags: ['QR Code Scanning', 'Camera Integration', 'Data Recognition'],
    github: '',
    demo: '',
  },
  {
    id: 'web-development',
    title: 'Web Development Projects',
    description:
      'A collection of websites built with core web technologies, focused on clean layouts that adapt to any screen.',
    image: '/projects/web-development.svg',
    imageAlt: 'Illustration of responsive layouts on desktop and mobile screens',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: '',
    demo: '',
  },
]

// Edit freely. Add a `date` string to any step to display it.
// Left undated on purpose; nothing here claims a date or an award.
export const journey = [
  {
    stage: 'Foundations',
    icon: 'code',
    text: 'Learning how the web is built with HTML5, CSS3 and JavaScript, and making pages responsive.',
  },
  {
    stage: 'Programming with Python',
    icon: 'terminal',
    text: 'Applying Python to hands-on projects such as hand and face tracking and QR code scanning with a camera.',
  },
  {
    stage: 'Data & Backend Basics',
    icon: 'database',
    text: 'Working with SQL and PostgreSQL, and learning the basics of backend development.',
  },
  {
    stage: 'Modern Frontend',
    icon: 'atom',
    text: 'Currently learning React.js and advanced frontend development to build richer interfaces.',
    current: true,
  },
  {
    stage: 'Full-Stack Development',
    icon: 'rocket',
    text: 'The goal: connecting frontend, backend and database into complete, working applications.',
    upcoming: true,
  },
]