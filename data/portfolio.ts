export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  project?: string;
  rating: number;
  content: string;
}

export const personalData = {
  name: "Senthil Kumar",
  title: "Full Stack Developer",
  shortRole: "Full Stack Developer",
  tagline: "Passion for Design & Development",
  heroDescription:
    "A full stack developer passionate about building intuitive and high-performing digital experiences. I blend creativity with technical expertise to develop seamless, scalable web applications.",
  aboutDescription:
    "Full Stack Developer with 2.5+ years of experience engineering scalable enterprise web applications, internal business platforms, and independent full stack products. Skilled across Node.js, Express.js, PostgreSQL, RESTful APIs, and JWT authentication on the backend, alongside React.js, Next.js, TypeScript, and Tailwind CSS on the frontend.",
  startDate: "2024-06-01",
  stats: [
    { label: "Years Experience", valueKey: "experience" },
    { label: "Projects Completed", value: "5+" },
    { label: "Companies Worked", value: "1+" },
  ],
  contact: {
    email: "senthilkumarsusi2002@gmail.com",
    phone: "+91 6369316704",
    location: "Tamil Nadu, India",
    resumePdf: "/assets/Senthil_kumar_cv.pdf",
    web3FormsKey: "6d4d1462-58ef-4049-bf0f-058a5136e779",
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/senthil-kumar-418b692a5/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/Classy-x",
      icon: "github",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_classy.x__/",
      icon: "instagram",
    },
    {
      name: "Telegram",
      url: "https://t.me/+s6rMgXARy9ExYWRl",
      icon: "send",
    },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Context API",
      "HTML5 / CSS3",
      "Sass / SCSS",
      "Tailwind CSS",
      "Bootstrap"
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "PostgreSQL",
      "Oracle SQL",
      "SQL Query Tuning",
    ],
  },
  {
    category: "Security & Authentication",
    skills: [
      "JWT Authentication",
      "Role-Based Access (RBAC)",
      "Content Security Policy (CSP)",
      "XSS Protection",
      "CSRF Mitigation",
    ],
  },
  {
    category: "DevOps, Cloud & Tools",
    skills: [
      "Git & GitHub",
      "CI/CD Pipelines",
      "Microsoft Azure",
      "SonarQube Analysis",
    ],
  },
  {
    category: "AI Tools & Workflow",
    skills: [
      "GitHub Copilot",
      "ChatGPT",
      "Claude",
      "Google Gemini",
      "Antigravity",
      "Codex",
    ],
  },
];

export const experienceData: Experience[] = [
  {
    role: "Software Developer",
    company: "Arizon Digital",
    period: "Sep 2025 - Present",
    current: true,
    description:
      "Working as a Software Developer focusing on building and maintaining web applications. Developed responsive UI components and collaborated with designers and backend developers to deliver client-ready solutions. Gained hands-on experience with modern web technologies and real-world project workflows.",
  },
  {
    role: "Junior Software Developer",
    company: "Magiva Technologies",
    period: "May 2024 - Sep 2025",
    current: false,
    description:
      "Designed and developed responsive, user-friendly web applications. Collaborated with cross-functional teams to enhance UI/UX, optimize performance, and implement interactive features.",
  },
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Engineering",
    institution: "Builders Engineering College (Anna University)",
    period: "2019 - 2023",
    description:
      "Leveraged analytical and problem-solving skills to transition into web development, creating seamless digital experiences.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gov High Sec School",
    period: "2017 - 2019",
    description:
      "Built a strong foundation in mathematics, science, and logical reasoning, enhancing strong analytical thinking and problem-solving skills.",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Gov High Sec School",
    period: "2016 - 2017",
    description:
      "Built a strong academic foundation with a focus on mathematics and science, developing a strong analytical mindset and attention to detail.",
  },
];

export const projectsData: Project[] = [
  {
    id: "watermarking",
    title: "Invisible Watermarking",
    description:
      "An advanced technique for embedding hidden watermarks in images to protect digital assets while maintaining visual integrity and copyright ownership.",
    image: "/assets/img/project1.png",
    tags: ["Image Processing", "Security", "Web Dev"],
  },
  {
    id: "fit-tracker",
    title: "Fit Tracker",
    description:
      "A comprehensive fitness tracking web app that empowers users to set goals, log workouts, track calories, and monitor progress toward a healthier lifestyle.",
    image: "/assets/img/project2.png",
    tags: ["React", "UI/UX", "Dashboard", "Health Tech"],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A responsive, modern portfolio website highlighting frontend skills, projects, and professional experience with high-performance animations and sleek typography.",
    image: "/assets/img/project3.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    name: "Engineering Manager",
    role: "Product & Engineering Stakeholder",
    company: "Arizon Digital (US Client)",
    project: "Event Management Platform",
    rating: 5,
    content:
      "Senthil demonstrated exceptional ownership on our enterprise Event Management Platform. Working directly with our US stakeholders, he translated complex business rules into robust full stack features across both the Exhibitor Portal and Admin Panel. His proactive communication and reliable delivery made a major impact on our release cycles.",
  },
  {
    name: "Technical Lead",
    role: "Full Stack Technical Lead",
    company: "Arizon Digital",
    project: "Full Stack Architecture",
    rating: 5,
    content:
      "A talented Full Stack Developer who excels across the entire stack. Senthil's ability to design clean RESTful Express.js endpoints, tune PostgreSQL queries, and build responsive, secure Next.js/TypeScript frontends is top-tier. He also mentored three junior engineers, ensuring high code quality and smooth sprint execution.",
  },
  {
    name: "Project Lead",
    role: "Software Development Lead",
    company: "Magiva Technologies",
    project: "Allowance & Chiller Systems",
    rating: 5,
    content:
      "Senthil played an integral role in delivering our Allowance and Chiller Management Systems. He designed and implemented multi-level approval workflows with role-based security, resolved critical production defects with rapid hotfixes, and optimized UI performance with lazy loading and asset tuning.",
  },
];

