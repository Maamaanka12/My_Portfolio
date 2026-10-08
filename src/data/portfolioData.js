// ============================================================
// portfolioData.js — Centralized configuration for ABDIRAHMAN's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// Source material: abdirahman_portfolio_information.txt + both CVs.
// ============================================================

export const personalInfo = {
  name: "Abdirahman Mohamed Abdirahman",
  firstName: "Abdirahman",
  brandName: "ABDIRAHMAN",
  title: "Front-End Developer",
  location: "",
  phone: "+252 615464136",
  email: "teyteyley3@gmail.com",
  emails: {
    primary: "teyteyley3@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Application student at Jamhuriya University of Science and Technology with a strong foundation in HTML, CSS, JavaScript, Java, Python, SQL Server, and Node.js. Hands-on experience building responsive web applications, full-stack academic projects, and AI-powered education tools. Currently focused on front-end development and seeking practical internship opportunities, with a long-term goal of becoming an AI Engineer.",
  resumeUrl: "Abdirahman_Mohamed_Abdirahman_Software_Engineer_CV.pdf",
};

export const socialLinks = {
  github: "https://github.com/Maamaanka12",
  linkedin: null,
  discord: null,
};

export const heroContent = {
  greeting: "Hi, I'm Abdirahman",
  titleHighlight: "Front-End Developer",
  rotatingTitles: [
    "Web Developer",
    "Future AI Engineer",
  ],
  subtitle:
    "I build for the web, experiment with intelligent systems, and am working toward becoming an AI engineer.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact-form",
  },
  ctaResume: {
    text: "View Resume",
    href: personalInfo.resumeUrl,
  },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-slate-900 text-xl font-black mx-1 tracking-wide uppercase">ABDIRAHMAN</span>. I enjoy turning ideas into responsive, useful web applications.`,
  paragraphs: [
    "I'm a 3rd-year Computer Application student at Jamhuriya University of Science and Technology, expected to graduate in 2029. My focus is front-end development — clean, responsive interfaces built with HTML5, CSS3, JavaScript, and Tailwind CSS.",
    "I also work across the stack with Node.js, Express.js, and Microsoft SQL Server: from my university Hotel Management System to AI-focused builds like MemoryMate AI and Tutor Mind.",
    "Outside the browser I design with Adobe Photoshop and Adobe Illustrator, and I speak Somali, English, and Arabic. My long-term goal is to become an AI Engineer.",
  ],
  techStack: ["HTML5", "CSS3", "JavaScript", "Node.js"],
};

export const skillsContent = {
  badge: "MY PROCESS",
  heading: "How I Build",
  description:
    "From a rough idea to a working interface — I plan the structure, build it carefully, and keep refining the details.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I start by understanding the problem and what the final experience should achieve, then break the idea into clear goals before writing any code.",
      keywords: ["Idea", "Goals", "Requirements"],
      icon: "understand",
    },
    {
      number: "02",
      title: "Design",
      text: "I shape the structure first — layout, visual hierarchy, and responsive behaviour across mobile, tablet, and laptop — so the build never loses direction.",
      keywords: ["Layout", "Responsive", "UI"],
      icon: "design",
    },
    {
      number: "03",
      title: "Build",
      text: "I turn the structure into a real product with modern web technologies: clean markup, reusable components, and a Node.js/Express backend when the project needs one.",
      keywords: ["HTML", "CSS", "JavaScript", "Node.js"],
      icon: "build",
    },
    {
      number: "04",
      title: "Refine",
      text: "After the first version works, I test it on real screens, fix what breaks, and polish the details — spacing, responsiveness, and the interactions that make it feel complete.",
      keywords: ["Testing", "Performance", "Polish"],
      icon: "refine",
    },
  ],
};

export const technicalSkills = {
  categories: [
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 88 },
        { name: "DOM Manipulation", level: 85 },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 75 },
        { name: "Java (Basic)", level: 55 },
        { name: "JSON", level: 85 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: 78 },
        { name: "Express.js", level: 74 },
        { name: "REST APIs", level: 75 },
        { name: "npm", level: 80 },
        { name: "Postman", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "Microsoft SQL Server", level: 82 },
        { name: "SQL", level: 82 },
        { name: "Database Design", level: 78 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Git Bash", level: 75 },
      ],
    },
    {
      title: "AI Concepts",
      skills: [
        { name: "LLM Fundamentals", level: 70 },
        { name: "Prompt Engineering", level: 72 },
        { name: "AI Agents", level: 65 },
        { name: "RAG Concepts", level: 62 },
        { name: "API Integration", level: 75 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "CREATIVE SIDE",
  heading: "Beyond Code",
  description:
    "I don't only build interfaces — I also design brand visuals and explore AI tooling alongside my development work.",
  categories: [
    {
      title: "Graphic Design",
      description:
        "Brand identity, logo design, social media posts, and flyers — laid out and finished in Adobe Photoshop and Adobe Illustrator.",
      practice: "DESIGN PRACTICE",
      tools: ["Photoshop", "Illustrator", "Logo Design"],
      icon: "design",
    },
    {
      title: "Illustration & Assets",
      description:
        "Illustrator shape-builder workflows, car illustrations, and PNG/background removal for clean, reusable assets.",
      practice: "ILLUSTRATION PRACTICE",
      tools: ["Shape Builder", "Car Illustration", "Background Removal"],
      icon: "editing",
    },
    {
      title: "AI Exploration",
      description:
        "Working with LLMs, prompt engineering, and AI study tools — from MemoryMate AI to browser automation with browser-use and Playwright.",
      practice: "AI PRACTICE",
      tools: ["LLMs", "Prompt Engineering", "AI Agents"],
      icon: "motion",
    },
    {
      title: "Code × Design",
      description:
        "I like working where development and visual design meet — functional products with responsive layouts and details that feel intentional.",
      practice: "MY APPROACH",
      tools: ["Web Development", "Responsive Design", "Creative Problem Solving"],
      icon: "code-design",
    },
  ],
};

// Beyond Code journey data
export const leadershipList = [
  {
    category: "EDUCATION",
    title: "Jamhuriya University",
    description:
      "I'm studying Computer Application at Jamhuriya University of Science and Technology — 3rd year, expected graduation 2029 — with coursework in web development, computer programming, and database systems.",
    label: "BSc COMPUTER APPLICATIONS",
    motif: "brackets",
  },
  {
    category: "FOCUS",
    title: "Front-End Development",
    description:
      "My day-to-day work happens in the browser: responsive layouts, clean structure, and interactive interfaces built with HTML5, CSS3, JavaScript, and Tailwind CSS.",
    tools: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    motif: "layers",
  },
  {
    category: "BUILDING",
    title: "Hotel Management System",
    description:
      "A full-stack university project covering a dashboard, rooms, guests, bookings, and payments — Node.js and Express.js on the back end, Microsoft SQL Server for data, and a face-recognition component built with OpenCV.",
    label: "FULL-STACK PROJECT",
    link: "#projects",
    motif: "cursor",
  },
  {
    category: "AI",
    title: "MemoryMate AI",
    description:
      "An AI study assistant built for the WemakeDevs Cognee Hackathon. It ingests study materials, summarises them, generates quizzes, and keeps long-term memory of a student's progress through Cognee.",
    label: "COGNEE HACKATHON",
    link: "#projects",
    motif: "layout",
  },
  {
    category: "AI LEARNING",
    title: "Anthropic Academy",
    description:
      "I've completed AI-focused training through Anthropic Academy and keep studying LLMs, prompt engineering, agents, and RAG — the direction I want my career to move in.",
    areas: ["AI Fluency for Students", "Claude 101", "Frameworks & Foundations"],
    motif: "motion",
  },
  {
    category: "CREATIVE",
    title: "Graphic Design",
    description:
      "Outside of code I design — brand identity, logos, social media graphics, and flyers in Adobe Photoshop and Illustrator, including shape-builder illustration and background removal.",
    tools: ["Photoshop", "Illustrator", "Brand Identity"],
    motif: "cube",
  },
  {
    category: "GROWTH",
    title: "Always Learning",
    description:
      "I continuously explore new territory — AI agents, browser automation, computer vision, OSINT, and cybersecurity — while staying grounded in front-end fundamentals. Long-term goal: AI Engineer.",
    label: "LEARN → BUILD → SPECIALIZE",
    motif: "orbit",
  },
];

export const internshipsList = [
  {
    organization: "WemakeDevs Cognee Hackathon",
    role: "Participant — MemoryMate AI",
    duration: "AI Hackathon",
    skills: [
      "AI study assistant development",
      "Document processing workflows",
      "Quiz and summary generation",
      "Full-stack feature delivery",
    ],
    tech: ["React", "Vite", "Node.js", "Express.js", "MSSQL", "Cognee", "Gemini API"],
    badge: "Hackathon",
  },
  {
    organization: "Devpost — Prometheus September AI 2",
    role: "Participant — Tutor Mind",
    duration: "AI Project",
    skills: [
      "AI study companion design",
      "Structured prompt/service architecture",
      "JSON validation before storage",
      "Adaptive learning flows",
    ],
    tech: ["React", "Node.js", "Express.js", "Gemini API"],
    badge: "AI Project",
  },
  {
    organization: "Jamhuriya University of Science and Technology",
    role: "Full-Stack Project Work — HMS",
    duration: "Academic Project",
    skills: [
      "Full-stack application development",
      "Database integration",
      "Responsive interfaces",
      "Version control with Git/GitHub",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MSSQL", "Git"],
    badge: "University",
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "problem-solving",
    desc: "Breaking complex tasks — from database schemas to interface behaviour — into clear, logical steps.",
  },
  {
    name: "Analytical Thinking",
    icon: "analysis",
    desc: "Looking carefully at requirements, data, and behaviour before deciding how to build something.",
  },
  {
    name: "Communication",
    icon: "communication",
    desc: "Clear, professional communication in English and Somali across academic and team settings.",
  },
  {
    name: "Teamwork",
    icon: "collaboration",
    desc: "Cross-functional teamwork on university projects, hackathons, and collaborative work through Git and GitHub.",
  },
  {
    name: "Adaptability",
    icon: "adaptability",
    desc: "Quick to pick up new tools and stacks — from Tailwind CSS and Express.js to AI and LLM APIs.",
  },
  {
    name: "Time Management",
    icon: "time",
    desc: "Balancing full-time study, personal projects, hackathons, and continuous learning.",
  },
];

export const projects = [
  {
    id: "hms",
    number: "01",
    badge: "Full-Stack Web App",
    title: "Hotel Management System",
    description:
      "A responsive hotel management system for daily operations: dashboard, room management, customer and guest records, bookings, and payments. A Node.js/Express API talks to a Microsoft SQL Server database (HMS), with a face-recognition component built on OpenCV for guest handling.",
    techTags: ["HTML5", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "Microsoft SQL Server", "OpenCV"],
    image: null,
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "memorymate",
    number: "02",
    badge: "AI Study Assistant",
    title: "MemoryMate AI",
    description:
      "An AI-powered study assistant built at the WemakeDevs Cognee Hackathon. It accepts PDF, DOC, DOCX, PPT, and PPTX study materials, then summarises them, generates multiple-choice, true/false, and short-answer quizzes, tracks strong and weak topics, and keeps long-term memory with Cognee — with an optional downloadable PDF of questions, answers, and corrections.",
    techTags: ["React", "Vite", "Node.js", "Express.js", "MSSQL", "JWT", "Cognee", "Gemini API"],
    image: null,
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "tutormind",
    number: "03",
    badge: "AI Education",
    title: "Tutor Mind",
    description:
      "An AI study companion for the Devpost / Prometheus September AI 2 project, built around Study → Practice → Evaluate → Improve: AI summaries, flashcards, quizzes, exam mode, weak-topic detection, and a Learning Twin that uses accumulated performance context to shape tutoring.",
    techTags: ["React", "Node.js", "Express.js", "Gemini API", "JSON Validation"],
    image: null,
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "browser-agent",
    number: "04",
    badge: "AI Automation",
    title: "Browser AI Agent",
    description:
      "An experimentation project for driving a real browser with an AI agent — navigation, interaction, and web automation. Built with Python, browser-use 0.13.7, and Playwright, with Gemini (ChatGoogle) as the model layer.",
    techTags: ["Python", "browser-use", "Playwright", "Gemini"],
    image: null,
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "portfolio",
    number: "05",
    badge: "Personal Platform",
    title: "Portfolio",
    description:
      "A modern personal portfolio website — the site you're on — presenting my projects, skills, and CV through a clean, responsive React interface with scroll-driven motion and a print-ready resume viewer.",
    techTags: ["React", "Vite", "JavaScript", "Tailwind CSS", "AOS", "Framer Motion"],
    image: null,
    links: {
      github: "https://github.com/Maamaanka12",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AI Fluency for Students",
      issuer: "Anthropic Academy",
    },
    {
      name: "Claude 101",
      issuer: "Anthropic Academy",
    },
    {
      name: "AI Fluency: Frameworks & Foundations",
      issuer: "Anthropic Academy",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "Bachelor of Science in Computer Applications",
  institution: "Jamhuriya University of Science and Technology",
    level: "3rd year",
  graduation: "2029",
  coursework: "Web Development, Computer Programming, Database Systems",
};

export const languages = ["Somali", "English", "Arabic"];

export const footerContent = {
  taglines: [
    "Front-End Development",
    "HTML · CSS · JavaScript · Node.js",
    "AI & Software Development",
  ],
  credential: "Computer Applications · Expected 2029",
  copyright: `© ${new Date().getFullYear()} Abdirahman Mohamed Abdirahman | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
