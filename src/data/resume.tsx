import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Ali Raza",
  initials: "AR",
  url: "https://dillion.io",
  description:
    "Front-end Developer | Figma to HTML, CSS, Tailwind CSS, Shadcn ui | Wordpress Developer | React.js, Nextjs | Freelancer.",
  summary:
    "Highly skilled Front-end Developer and Wordpress Expert with 5 years of experience in crafting exceptional digital experiences. Proficient in translating Figma designs into pixel-perfect HTML, CSS, and Tailwind CSS, with a keen eye for detail and a passion for responsive design. Adept in building dynamic user interfaces with React.js and Next.js. Proven track record of delivering high-quality solutions on time, with a strong focus on customer satisfaction. Let's collaborate to bring your vision to life!.",
  avatarUrl: "/ali.webp",
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React JS",
    "Next JS",
    "Shadcn ui",
    "Wordpress",
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
  ]
}
