export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Mantine", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Mui", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },

  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "ESLint", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Postman", category: "tools" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "SAIGONTEK",
    position: "Frontend Developer",
    location: "Ho Chi Minh city",
    startDate: "2023-7",
    endDate: "Present",
    description: [
      "Developed and maintained web applications using React and TypeScript",
      "Collaborated with cross-functional teams to deliver high-quality features",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "2",
    company: "TPS Software",
    position: "Fullstack Developer",
    location: "Ho Chi Minh city",
    startDate: "2022-6",
    endDate: "2023-3",
    description: [
      "Maintained and enhanced the existing system as part of an outsourced project.",
      "Worked with Java (Spring Boot, JSF), Angular, PostgreSQL, MySQL, and MongoDB.",
      "Collaborated within an Agile Scrum framework, using Jira for task management.",
      "Managed source code and version control using Git.",
    ],
    technologies: [
      "Java (Spring Boot)",
      "Angular",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Multi-Account Crypto Trading Tool",
    technologies: ["React", "TypeScript", "Vite", "Mantine", "Shadcn"],
    highlights: [
      "Developed a multi-account crypto trading platform allowing users to manage multiple exchange accounts (Binance, Bybit) through securely stored API Keys and Secret Keys.",
      "Built scalable and reusable UI components with multi-language support and dark mode.",
      "Integrated REST and WebSocket APIs to deliver real-time market data, order updates, and account information.",
      "Optimized rendering performance and data-fetching strategies to ensure smooth real-time interactions across devices.",
      "Implemented core trading modules including Order Form, Order Book, Trading History, Filters, Account Management, Orders, Bots, and Economic Calendar.",
      "Collaborated closely with the backend team to refine API specifications, improve data workflows, and enhance platform stability.",
    ],
  },
  {
    id: "2",
    title: "Inventory Management System",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Mui"],
    highlights: [
      "Developed a web-based system for inventory and order workflow management for a Japanese client.",
      "Implemented CRUD modules for Sales Products, Delivery Orders, Purchase Requests, and Stock Management (by Supplier & Product).",
      "Built detail modules including Sales Order Detail, Delivery Order Detail, and Project Detail (status, tracking code, address,timeline, person in charge).",
      "Collaborated closely with BA and customer-provided backend team.",
    ],
    image: "",
  },
  {
    id: "3",
    title: "Multi-platform e-commerce software",
    technologies: [
      "Java",
      "Spring boot",
      "Angular",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
    highlights: [
      "Maintained and enhanced a large-scale e-commerce ecosystem including Web App, Mobile App, Affiliate Web, Tenants Web, Merchant Web, and Admin Portal.",
      "Developed and maintained Angular modules across multiple platforms.",
      "Built and optimized Spring Boot APIs for authentication and order management.",
      "Wrote and optimized SQL queries for PostgreSQL, MySQL, and MongoDB.",
      "Collaborated in a 16-member Agile Scrum team, participating in sprint planning and cross-team integration.",
    ],
  },
  {
    id: "4",
    title: "Expense Tracker Management System",
    description:
      "A web application that helps users track daily income/expenses, manage monthly budgets, and visualize financial insights.",
    technologies: ["React", "TypeScript", "Vite", "Mantine"],
    highlights: [
      "Record income and expenses",
      "Category management",
      "Filter & search by date/month/year",
      "Spending charts: income vs. expenses, category ratios",
      "Budget limits & over-budget alerts",
      "Export to Excel/CSV",
      "User-friendly UI with dark mode support",
    ],
    liveUrl: "https://portfolio-five-teal-oc2qtiydyf.vercel.app/",
    githubUrl: "https://github.com/ndyenchi/ExpenseTracker",
    image: "../src/assets/projects/ExpenseTracker.png",
  },
];

export const education: Education = {
  id: "1",
  school: "Posts and Telecommunications Institute of Technology",
  degree: "Information Systems",
};

export const contactInfo: ContactInfo = {
  email: "nguyendoyenchị@gmail.com",
  location: "Ho Chi Minh city",
  linkedin: "https://www.linkedin.com/in/ndyenchi",
  github: "https://github.com/ndyenchi",
};

export const personalInfo = {
  name: "Yến Chi",
  title: "Frontend Developer",
  bio: "Frontend Developer with nearly 3 years of experience in developing web applications. Strong in TypeScript and modern UI frameworks (Tailwind, MUI, Mantine). Fullstack background with experience in Java Spring Boot, Node.js, and databases (PostgreSQL, MySQL, MongoDB).",
  resumeUrl: "/src/resume.pdf",
  avatar: "/avatar.jpeg",
};
