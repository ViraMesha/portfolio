import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import remoteDeminingImg from "@/public/images/remoteDemining.png";
import valwaxImg from "@/public/images/valwax.png";
import yourPetImg from "@/public/images/yourPet.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated GoIT",
    location: "online",
    description:
      "After 11 months of studying, I graduated and was continually improving my skills while gaining valuable experience through volunteer projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Baza Trainee Ukraine",
    description:
      "I volunteered as a front-end developer for about 3 months on a real project. During this time, I collaborated with a team, gaining valuable experience in the tech industry and expanding my skills.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Aug 2023",
  },
  {
    title: "Front-End Developer",
    location: "Team Challenge",
    description:
      "I've been actively contributing as a front-end developer to a meaningful real-life volunteer project, where I've had the opportunity to apply my skills and collaborate with a dedicated team. I'm open to full-time opportunities.",
    icon: React.createElement(SiNextdotjs),
    date: "Jun 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Valwax",
    link: "https://github.com/ViraMesha/valwax",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "TypeScript", "i18n", "React Hook Form"],
    imageUrl: valwaxImg,
  },
  {
    title: "Remote demining",
    link: "https://github.com/ViraMesha/remote-demining",
    description:
      "Interactive platform for Remote Demining awareness. Features sliders, info cards, news, and admin section for content management.",
    tags: ["React", "Next.js", "TypeScript", "React Hook Form", "React Slick"],
    imageUrl: remoteDeminingImg,
  },
  {
    title: "Your pet",
    link: "https://github.com/ViraMesha/project-42-front",
    description:
      "Using React, Redux, and related technologies, this web app is a haven for pet lovers. It enables users to post ads, register, customize themes, manage favorites, search, and apply filters.",
    tags: ["React", "Redux Toolkit", "Formik", "Styled Components"],
    imageUrl: yourPetImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
