import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",

    category: "Featured",

    description:
      "A modern and responsive personal portfolio built using React, TypeScript, Material UI, SCSS and Framer Motion showcasing experience, projects, technical skills and achievements.",

    technologies: [
      "ReactJS",
      "TypeScript",
      "Material UI",
      "SCSS",
      "Framer Motion",
      "Vite",
    ],

    github: "",

    live: "",

    featured: true,
  },

  {
    title: "Authentication & Authorization API",

    category: ".NET",

    description:
      "Secure Authentication and Authorization microservice using ASP.NET Core, JWT authentication and role-based access control.",

    technologies: ["C#", "ASP.NET Core", "JWT", "REST APIs", "Microservices"],

    github: "",

    live: "",

    featured: true,
  },

  {
    title: "Product Management API",

    category: "Microservices",

    description:
      "Product management backend service developed using ASP.NET Core and Microservices architecture supporting CRUD operations and REST endpoints.",

    technologies: ["C#", ".NET", "REST API", "Microservices"],

    github: "",

    live: "",

    featured: true,
  },

  {
    title: "AI Chat Assistant",

    category: "AI",

    description:
      "AI-powered assistant built using Azure OpenAI concepts, prompt engineering techniques and modern conversational AI practices.",

    technologies: [
      "Azure OpenAI",
      "Generative AI",
      "Prompt Engineering",
      "Copilot",
    ],

    github: "",

    live: "",

    featured: true,
  },

  {
    title: "Employee Management System",

    category: "Full Stack",

    description:
      "Full-stack employee management application supporting employee records, user management and business operations.",

    technologies: ["ReactJS", "TypeScript", "C#", "ASP.NET Core", "REST APIs"],

    github: "",

    live: "",

    featured: false,
  },

  {
    title: "Expense Tracker",

    category: "Full Stack",

    description:
      "Personal finance management application for tracking income, expenses and analytics dashboards.",

    technologies: ["ReactJS", "ASP.NET Core", "TypeScript", "REST APIs"],

    github: "",

    live: "",

    featured: false,
  },

  {
    title: "Weather Dashboard",

    category: "Frontend",

    description:
      "Weather application consuming third-party APIs, displaying location-based forecasts and weather insights with responsive UI.",

    technologies: [
      "ReactJS",
      "TypeScript",
      "REST API Integration",
      "Material UI",
    ],

    github: "",

    live: "",

    featured: false,
  },

  {
    title: "Enterprise Frontend Platform",

    category: "Professional Experience",

    description:
      "Developed reusable enterprise frontend modules using ReactJS, Redux Toolkit and Material UI while working on business applications.",

    technologies: [
      "ReactJS",
      "Redux Toolkit",
      "TypeScript",
      "Material UI",
      "SCSS",
    ],

    github: "",

    live: "",

    featured: false,
  },
];
