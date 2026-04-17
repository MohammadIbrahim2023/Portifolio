export const PORTFOLIO = {
  name: "Mohammad Ibrahim Hussaini",
  initials: "MIH",
  title: "Senior Full Stack Developer",
  tagline:
    "Senior Full Stack Developer with 10+ years of experience building robust web applications and scalable systems.",
  summary:
    "Experienced Full Stack Developer with a strong background in web application and software development. Skilled in backend and frontend development using modern technologies, with extensive experience in database management and system migrations. Known for delivering robust solutions, enhancing performance, and collaborating across teams to meet project goals.",
  email: "moh.ibrahimhussaini@gmail.com",
  phone: "+93 771 585 267",
  linkedin: "https://linkedin.com/in/mohammad-ibrahim-hussaini",
  cvPath: "/Portifolio/Mohammad_Ibrahim_Hussaini_CV.pdf",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS: Record<string, string[]> = {
  "Languages & Frameworks": [
    "Node.js",
    "Express.js",
    "NestJS",
    "Angular",
    "React",
    "Next.js",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  "Development Tools": ["Git", "Firebase", "Prisma", "TypeORM"],
  "Other Skills": [
    "REST API",
    "GraphQL",
    "PG Loader",
    "Project Lifecycle Management",
    "OOP",
    "MVC",
    "Trello",
    "Zoho",
    "Jira",
  ],
};

export const PROJECTS = [
  {
    company: "Afghanistan Holding Group (Moore)",
    name: "HesabPay",
    description:
      "Afghanistan's mobile payment application with merchant integration, third-party payment gateways (M-Paisa, PayPal, Stripe, iVery), and hybrid cryptography for secure data traffic.",
    links: [{ label: "Web App", url: "https://web.hesab.com/" }],
  },
  {
    company: "Peace Global Logistics",
    name: "PGL System",
    description:
      "Full logistics management system migrated from PHP to Nest.js, Next.js, and PostgreSQL — including a public-facing website, client portal, and admin dashboard.",
    links: [
      { label: "Website", url: "https://peacegl.com/" },
      { label: "Client Portal", url: "https://pglsystem.com/en/auth/signin" },
      { label: "Admin Panel", url: "https://admin.pglsystem.com" },
    ],
  },
  {
    company: "Doobert",
    name: "BarkPass",
    description:
      "Pet travel and transport platform built with PHP Laravel, featuring a public-facing site and an admin dashboard for managing operations.",
    links: [
      { label: "Website", url: "https://barkpass.com" },
      { label: "Admin Panel", url: "https://admin.barkpass.com/login" },
    ],
  },
];

export const EXPERIENCES = [
  {
    title: "Sr. Software Engineer",
    company: "Doobert",
    location: "USA, Remote",
    period: "Jan 2025 – Present",
    points: [
      "Developed and implemented new features in BarkPass (barkpass.com) using the PHP Laravel framework to enhance application functionality and user experience.",
      "Debugged and resolved complex technical issues to ensure smooth and reliable performance.",
      "Collaborated with cross-functional teams to improve application quality and maintain robust code standards.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    company: "Peace Global Logistic",
    location: "USA, Hybrid",
    period: "May 2023 – Dec 2025",
    points: [
      "Migrated legacy system from PHP to Nest.js, Next.js, and PostgreSQL, significantly improving system efficiency.",
      "Developed backend REST APIs and collaborated on frontend development, enhancing user interface and experience.",
      "Responsible for database migration from MySQL to PostgreSQL using pgloader and deploying the project on a VPS server.",
    ],
  },
  {
    title: "Sr. Full Stack Developer",
    company: "HAMI Economic and Development Services",
    location: "Kabul, Afghanistan",
    period: "Oct 2022 – May 2023",
    points: [
      "Led backend and frontend development for various applications, implementing complex REST APIs using Node.js and Express.",
      "Designed and developed MongoDB databases and developed dynamic UIs with React.js.",
    ],
  },
  {
    title: "Interface Programmer",
    company: "Tetra Tech, USAID, Engineering Support Program (ESP)",
    location: "Kabul, Afghanistan",
    period: "Jun 2021 – Nov 2021",
    points: [
      "Designed and developed user interfaces for the Afghanistan Civil Aviation Authority using Angular, implementing responsive and user-friendly features.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Afghanistan Holding Group (Moore Afghanistan)",
    location: "Kabul, Afghanistan",
    period: "Nov 2016 – Nov 2020",
    points: [
      "Server, web application, and database development of Afghanistan's mobile payment app, HesabPay and HesabPay's merchant app.",
      "Integrating HesabPay with third party APIs and payment gateways such as M-Paisa, PayPal, Stripe, and iVery.",
      "Securing data traffic using hybrid cryptography, RSA and AES.",
      "Development of REST API for a biometric registration and salary disbursement system for Ministry of Education.",
      "Developed the APIs for Zaytuna Kits Apps for Zaytuna College (Hamza Yusuf).",
      "Design and development of databases and REST API for multiple survey apps.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "Afghanistan Development & Registry Addressing Service (ADRAS)",
    location: "Kabul, Afghanistan",
    period: "Nov 2013 – Nov 2016",
    points: [
      "Full stack development of Case Registration System for Ministry of Interior Affairs' Criminal Investigation System (CID).",
      "Full stack development of Document Management System and Report Generating System using Sphinx search engine.",
      "Developed Afghanistan Police Incident Reporting System (APIRS) for Ministry of Interior Affairs.",
      "Full stack development of AMOD-I, a biometric system for Ministry of Defense.",
      "Full stack development of Letter Tracking and Mailing system for Ministry of Defense.",
    ],
  },
];

export const EDUCATION = [
  {
    period: "2010 – 2013",
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of Calicut, Kerala, India",
  },
  {
    period: "Aug 2011 – Jul 2012",
    degree: "Diploma in Information Technology",
    institution: "University of Calicut, Kerala, India",
  },
];

export const LANGUAGES = [
  { name: "Dari", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 90 },
  { name: "Pashto", level: "Fluent", percent: 90 },
  { name: "Urdu", level: "Good", percent: 70 },
];

export const ACHIEVEMENTS = [
  {
    icon: "\u{1F3C6}",
    title: "Best Employee Award",
    description:
      "Peace Global Logistics (2024) — Recognized for exceptional contributions to system migration and project deployment.",
  },
  {
    icon: "\u{1F393}",
    title: "Full Merit Scholarship",
    description:
      "Awarded a full merit scholarship by the Government of India to pursue a B.Sc. in Computer Science.",
  },
  {
    icon: "\u{2B50}",
    title: "Appreciation Certificate",
    description:
      "Afghanistan Holding Group — For contributions to various projects.",
  },
];
