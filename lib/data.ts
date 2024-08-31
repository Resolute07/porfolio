import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import movieVerse from "@/public/movieverse.png";
import apiwrapper from "@/public/apiwrapper.png";
import music from "@/public/music.png";
import nexi from "@/public/nexi.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Nexi - A Video Calling Web Applicaion",
    description:
      "It is a video calling web application. It has features like video calling,upcoming/previous call logs, personal rooms and recording.",
    tags: ["Next.js", "React.js", "Tailwind", "Stream API"],
    imageUrl: nexi,
    visitURL: "https://react-icons.github.io/react-icons/search/#q=share",
    githubURL: "https://react-icons.github.io/react-icons/search/#q=share",
  },
  {
    title: "Music Academy Website",
    description:
      "It is a responsive music academy website built using Next.js, Aceternity-UI, and other industry-standard technologies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Aceternity-UI"],
    imageUrl: music,
    visitURL: "https://react-icons.github.io/react-icons/search/#q=share",
    githubURL: "https://react-icons.github.io/react-icons/search/#q=share",
  },
  {
    title: "MovieVerse",
    description:
      "It is responsive movie/series review website built using React, Tailwind and FireBase as backend.Here any user come login and give review to any movie/series or add any movie/series.",
    tags: ["React", "Next.js",  "Tailwind", "FireBase"],
    imageUrl: movieVerse,
    visitURL: "https://react-icons.github.io/react-icons/search/#q=share",
    githubURL: "https://react-icons.github.io/react-icons/search/#q=share",
  },
  {
    title: "Interactsh Api Wrapper",
    description:
      "Developed and implemented an API wrapper using Python scripting and FastAPI for InteractSh, an open-source tool designed for detecting out-of-band interactions",
    tags: ["Python", "FastAPI", "Docker", "GoLang"],
    imageUrl: apiwrapper,
    visitURL: "",
    githubURL: "https://react-icons.github.io/react-icons/search/#q=share",
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
  "Express.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "MySQL",
  "Python",
  "Django Rest Freamework",
  "Golang",
  "Java",
  "Docker",
  "GitHub Actions",
  "Redis",
] as const;
