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
  description: string;
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
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

// Sample Data (replace with your actual data)
export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "PostgreSQL", category: "backend" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Company",
    position: "Software Engineer",
    location: "San Francisco, CA",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Developed and maintained web applications using React and TypeScript",
      "Collaborated with cross-functional teams to deliver high-quality features",
      "Improved application performance by 40% through code optimization",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    highlights: [
      "Fully responsive design",
      "Dark mode support",
      "Optimized performance",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    school: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "City, State",
    startDate: "2018-09",
    endDate: "2022-05",
    gpa: "3.8",
  },
];

export const contactInfo: ContactInfo = {
  email: "nguyendoyenchị@gmail.com",
  location: "Ho Chi Minh city",
  linkedin: "https://www.linkedin.com/in/ndyenchi",
  github: "https://github.com/ndyenchi",
};

export const personalInfo = {
  name: "Yến Chi",
  title: "Software Engineer",
  bio: "Passionate software engineer with expertise in building modern web applications. Focused on creating exceptional user experiences with clean, maintainable code.",
  resumeUrl: "/resume.pdf",
};
