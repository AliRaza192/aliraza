import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Ali Raza",
  initials: "AR",
  url: "https://aliraza-eight.vercel.app/",
  description:
    "MERN Stack & Next.js Developer || MongoDb, Express.js, React.js,, Node.js || Full-Stack Web Developer",
  summary:
    "Experienced MERN Stack & Next.js Developer with a strong foundation in HTML, CSS, JavaScript, MongoDB, Express.js, React.js, and Node.js. Skilled in building full-stack web applications with clean, scalable code and modern UI/UX practices. Passionate about delivering fast, secure, and user-friendly web solutions using the latest technologies. From responsive front-ends to robust back-ends, I specialize in creating seamless digital experiences. Let's collaborate to turn your ideas into powerful, real-world applications!.",
  avatarUrl: "/ali.png",
  skills: [
    "React Js",
    "Next Js",
    "Node Js",
    "Express Js",
    "MongoDb",
    "HTML",
    "CSS",
    "JavaScipt",
    "Tailwind CSS",
    "Shadcn ui",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "alirazaqasim192@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AliRaza192",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ali-raza-930811219/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "Budget Tracker",
      href: "https://budget-tracker-eight-gold.vercel.app/",
      active: true,
      description:
        "I developed a comprehensive Full Stack Budget Tracker application leveraging the power of Next.js, React, TypeScript, React Query, Prisma, and Tailwind CSS. This project demonstrates my ability to create robust, scalable, and efficient web applications from scratch, ensuring optimal performance and user experience.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://budget-tracker-eight-gold.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/budget-tracker1.png",
    },
    {
      title: "Budget Tracker",
      href: "https://budget-tracker-eight-gold.vercel.app/",
      active: true,
      description:
        "I developed a comprehensive Full Stack Budget Tracker application leveraging the power of Next.js, React, TypeScript, React Query, Prisma, and Tailwind CSS. This project demonstrates my ability to create robust, scalable, and efficient web applications from scratch, ensuring optimal performance and user experience.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://budget-tracker-eight-gold.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/budget-tracker1.png",
    },
  ],
};
