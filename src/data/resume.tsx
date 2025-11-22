import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const RESUME_DATA = {
  name: "Mohamed Aziz Khedhri",
  initials: "MK",
  location: "Bizerte, Tunisia",
  locationLink: "https://www.google.com/maps/place/Bizerte",
  about:
    "Passionate Information Systems Development student in my final year at ISET Jendouba, specializing in full-stack web and mobile development with a strong foundation in modern technologies.",
  summary:
    "Through professional internships and diverse personal projects, I have developed expertise in the MERN stack, PHP/MySQL, React Native, and Spring Boot. I'm driven by a passion for creating elegant solutions to complex problems and am eager to contribute my skills in a collaborative, innovative environment.",
  avatarUrl: "/pfp.jpg",
  personalWebsiteUrl: "https://portfolio.com",
  contact: {
    email: "aziz.khedhri.2003@gmail.com",
    tel: "+216-58-179-854",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MedAzizKhedhri",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aziz-khedhri-b9536b2a5",
        icon: Linkedin,
      },
      {
        name: "Email",
        url: "mailto:aziz.khedhri.2003@gmail.com",
        icon: Mail,
      },
      {
        name: "Phone",
        url: "tel:+21658179854",
        icon: Phone,
      },
    ],
  },
  education: [
    {
      school: "ISET Jendouba",
      degree: "License in Information Technology",
      start: "2023",
      end: "2026",
    },
    {
      school: "Lycée Habib Thamer Bizerte",
      degree: "Baccalauréat in Economics and Management",
      start: "2022",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Telecommunications Operator",
      link: "",
      badges: ["Intern"],
      title: "Full Stack Developer Intern",
      start: "Jan 2025",
      end: "Present",
      description:
        "Developed an internal system management application using PHP and MySQL. Designed and implemented database architecture for employee and resource tracking. Collaborated with IT team to gather requirements and deliver functional solution.",
    },
    {
      company: "Telecommunications Operator",
      link: "",
      badges: ["Intern"],
      title: "Web Development Intern",
      start: "Jan 2024",
      end: "Feb 2024",
      description:
        "Built invoice management system using PHP and MySQL. Created user-friendly interface for generating, tracking, and managing invoices. Implemented data validation and reporting features.",
    },
  ],
  skills: [
    "Java",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML/CSS",
    "XML",
    "React.js",
    "React Native",
    "Angular",
    "Spring Boot",
    "Node.js",
    "Express.js",
    "PyTorch",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "MongoDB",
    "Git",
    "Docker",
  ],
  projects: [
    {
      title: "Transport Solution App",
      techStack: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      description: "Full-stack web application built with MERN stack.",
      link: {
        label: "GitHub",
        href: "#",
      },
      image: "/transport solution.png",
    },
    {
      title: "Doctor-Patient System",
      techStack: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      description:
        "Healthcare management platform using MERN stack with appointment scheduling and patient records.",
      link: {
        label: "GitHub",
        href: "#",
      },
      image: "/doctor app.png",
    },
    {
      title: "E-Commerce Website",
      techStack: ["PHP", "MySQL"],
      description:
        "Online shopping platform developed with PHP and MySQL featuring product catalog and cart functionality.",
      link: {
        label: "GitHub",
        href: "#",
      },
      image: "/e-commerce.png",
    },
    {
      title: "Expense Tracker",
      techStack: ["React Native"],
      description:
        "Mobile application built with React Native for personal finance management.",
      link: {
        label: "GitHub",
        href: "#",
      },
      image: "/BudgetBuddy (expensetracker.png",
    },
    {
      title: "Rock Paper Scissors",
      techStack: ["Spring Boot"],
      description:
        "Backend application developed with Spring Boot demonstrating REST API design.",
      link: {
        label: "GitHub",
        href: "#",
      },
      image: "/rock paper scissors springboot.png",
    },
    {
      title: "Weather App",
      techStack: ["JavaScript"],
      description:
        "Dynamic weather application using JavaScript and external API integration.",
      link: {
        label: "GitHub",
        href: "#",
      },
      image: "/weather app.png",
    },
  ],
} as const;
