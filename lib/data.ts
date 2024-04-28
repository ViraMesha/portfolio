import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import arcraftImg from "@/public/images/arcraft.png";
import filmotekaImg from "@/public/images/filmoteka.png";
import foodStaImg from "@/public/images/foodsta.png";
import growfyImg from "@/public/images/growfy.png";
import iPhone15ProImg from "@/public/images/iPhone15Pro.png";
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
    title: "iPhone 15 Pro",
    link: "https://github.com/ViraMesha/apple",
    description:
      "A website that looks like the iPhone 15 Pro page from Apple. I used React, Three.js, and GSAP to make it work smoothly on any device.",
    tags: ["React", "TypeScript", "Three.js", "Vite", "GSAP", "TailwindCSS"],
    imageUrl: iPhone15ProImg,
  },
  {
    title: "Valwax",
    link: "https://github.com/ViraMesha/valwax",
    description:
      "A dynamic online shop where users can explore and purchase a variety of candles and boxes, with the unique option to customize their own candles.",
    tags: ["React", "Next.js", "TypeScript", "i18n", "React Hook Form"],
    imageUrl: valwaxImg,
  },
  {
    title: "Arcraft",
    link: "https://github.com/ViraMesha/arcraft",
    description:
      "It's a cutting-edge architect website crafted with NextJS, TailwindCSS, and MDX integrated with Contentlayer for dynamic blog and project posts, complemented by smooth animations powered by Framer Motion.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "MDX",
    ],
    imageUrl: arcraftImg,
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
  {
    title: "Filmoteka",
    link: "https://github.com/RossHaluz/team-project-filmoteka",
    description:
      'A two-page movie catalogue website with adaptive design, dark theme, pagination, and a movie library that lets users add titles to "queue" or "watched" lists. Role: developer (header section)',
    tags: [
      "HTML",
      "SCSS",
      "JavaScript",
      "REST API",
      "Axios",
      "Parcel",
      "Pagination",
      "Animate.css",
    ],
    imageUrl: filmotekaImg,
  },
  {
    title: "FoodSta",
    link: "https://github.com/SlobodianiukDS/foodsta",
    description:
      "It's a user-friendly website for ordering food online with an adaptive layout for convenient use on any device. My role was scrum-master and I also created the offerings section.",
    tags: ["HTML", "SCSS", "JavaScript", "Parcel"],
    imageUrl: foodStaImg,
  },
  {
    title: "Growfy",
    link: "https://github.com/ViraMesha/growfy",
    description:
      "It's an interactive showcase of my HTML, CSS, and JS skills — a user-friendly website with adaptive design, demonstrating expertise in marketing solutions for business growth.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: growfyImg,
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
