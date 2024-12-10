import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import movieVerse from "@/public/images/movieverse.png";
import apiwrapper from "@/public/images/apiwrapper.png";
import music from "@/public/images/music.png";
import nexi from "@/public/images/nexi.png";
import gogrpc from "@/public/images/gogrpc.png";
import currency from "@/public/images/currency.png";
import carbide from "@/public/images/carbide.png";
import imdb from "@/public/images/imdb.png";
import lightning from "@/public/images/lightning.png";
import password from "@/public/images/password.png";
import todo from "@/public/images/Todo.png";
import device from "@/public/images/device.png";
import lift from "@/public/images/lift.png";


import { SiFreelancer } from "react-icons/si";

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
    title: "LFX Mentee at Cloudforet",
    location: "Remote",
    description:
      "Acquired hands-on experience in Kubernetes, ArgoCD, GitHub Actions, Protocol Buffers, and gRPC through mentorship at Cloudforet, enhancing proficiency in container orchestration and continuous delivery. Collaborated on plugin development with mentors and peers, creating innovative solutions to improve functionality and user experience.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov, 2023 - Feb, 2024",
  },
  {
    title: "Freelancing",
    location: "Remote",
    description:
      "I had Completed two freelance projects, one entailed developing a Next.js website, while the other involved crafting a React frontend coupled with a Golang backend application, meeting client specifications and deadlines.",
    icon: React.createElement(SiFreelancer),
    date: "Feb, 2024",
  },
  {
    title: "Frontend Intern at SetMyCareer",
    location: "Remote",
    description:
      "As a Frontend Intern at SetMyCareer, I developed and maintained web application using React and Next.js. I collaborated with cross-functional teams, implemented new features, fixed bugs, and ensured responsive, high-quality user interfaces across various devices and platforms.",
    icon: React.createElement(FaReact),
    date: "Jun, 2024 - Sept, 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Nexi - A Video Calling Web Applicaion",
    description:
      "It is a video calling web application. It has features like video calling,upcoming/previous call logs, personal rooms and recording.",
    tags: ["Next.js", "React.js", "Tailwind", "Stream API"],
    imageUrl: nexi,
    visitURL: "https://nexi-green.vercel.app/",
    githubURL: "https://github.com/arup1221/Nexi",
  },
  {
    title: "Music Academy Website",
    description:
      "It is a responsive music academy website built using Next.js, Aceternity-UI, and other industry-standard technologies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Aceternity-UI"],
    imageUrl: music,
    visitURL: "https://music-academy-azhx.vercel.app/",
    githubURL: "https://github.com/arup1221/MusicAcademy",
  },
  {
    title: "MovieVerse",
    description:
      "It is responsive movie/series review website built using React, Tailwind and FireBase as backend.Here any user come login and give review to any movie/series or add any movie/series.",
    tags: ["React", "Next.js", "Tailwind", "FireBase"],
    imageUrl: movieVerse,
    visitURL: "https://movieverse-one.vercel.app/",
    githubURL: "https://github.com/arup1221/movieverse",
  },
  {
    title: "Interactsh Api Wrapper",
    description:
      "Developed and implemented an API wrapper using Python scripting and FastAPI for InteractSh, an open-source tool designed for detecting out-of-band interactions",
    tags: ["Python", "FastAPI", "Docker", "GoLang"],
    imageUrl: apiwrapper,
    visitURL: "",
    githubURL: "https://github.com/arup1221/api-wrapper",
  },
  {
    title: "Go-gRPC",
    description:
      "Created a gRPC service using GoLang and Protobuf, enabling efficient communication between microservices. This implementation supports high-performance applications, ensuring low-latency interactions and robust data handling.",
    tags: ["Golang", "gRPC", "Protobuf"],
    imageUrl: gogrpc,
    visitURL: "",
    githubURL: "https://github.com/arup1221/go-gRPC",
  },
  {
    title: "Device Tracker",
    description:
      "The Realtime Device Tracker is an application that uses Node.js, Socket.io, and Express.js to track device locations in real time, providing users with an interactive map interface for easy navigation.",
    tags: ["Node.js", "Socket.io", "Express.js"],
    imageUrl: device,
    visitURL: "https://devicetracker-hlod.onrender.com/",
    githubURL: "https://github.com/arup1221/DeviceTracker",
  },
  {
    title: "Currency Converter",
    description:
      "Developed a simple yet effective currency converter application using React and Tailwind CSS. It enables users to convert between various currencies easily and quickly, ensuring accurate real-time rates.",
    tags: ["ReactJs", "Tailwind CSS"],
    imageUrl: currency,
    visitURL: "https://currency-converter-indol-two.vercel.app/",
    githubURL: "https://github.com/arup1221/Currency-Converter",
  },
  {
    title: "Todo Application",
    description:
      "This Todo Application allows users to manage their tasks efficiently. Built with React.js and Tailwind CSS, it features local storage support to ensure tasks persist across sessions for better productivity.",
    tags: ["ReactJs", "Tailwind CSS"],
    imageUrl: todo,
    visitURL: "https://todo-local-storage-sandy.vercel.app/",
    githubURL: "https://github.com/arup1221/TodoLocalStorage",
  },
  {
    title: "Password Generator",
    description:
      "A Password Generator built using React.js and Tailwind CSS that allows users to create strong, random passwords. This tool emphasizes security and user-friendly design for effortless password management.",
    tags: ["ReactJs", "Tailwind CSS"],
    imageUrl: password,
    visitURL: "https://password-generator-delta-gules.vercel.app/",
    githubURL: "https://github.com/arup1221/password_generator",
  },
  {
    title: "IMDB API Clone",
    description:
      "The IMDB API Clone is a movie database API built with Django Rest Framework. It provides functionality similar to IMDB, allowing users to search for movies and retrieve detailed information easily.",
    tags: ["Python", "Django Rest Framework"],
    imageUrl: imdb,
    visitURL: "",
    githubURL: "https://github.com/arup1221/movieapi",
  },
  {
    title: "Lift Model",
    description:
      "The Lift Model is a simple web application created with HTML, CSS, and JavaScript. It simulates a lift's operations, providing users with insights into how lifts function and manage requests effectively.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: lift,
    visitURL: "https://arup1221.github.io/Lift-/",
    githubURL: "https://github.com/arup1221/Lift-",
  },
  {
    title: "Freelance Project 1",
    description:
      "Here I  created a landing page using NextJs, Shadcn and other technologies.",
    tags: ["NextJs", "Framer Motion", "Shadcn", "Tailwind css"],
    imageUrl: carbide,
    visitURL: "https://carbide-tools-sro.vercel.app/",
    githubURL: "",
  },
  {
    title: "Freelance Project 2",
    description:
      "Here I created a landing page using NextJs, Shadcn and other technologies.",
    tags: ["NextJs", "Framer Motion", "Shadcn", "Tailwind css"],
    imageUrl: lightning,
    visitURL: "https://lightning-two.vercel.app/",
    githubURL: "",
  },


] as const;




export const skillsData = [
  {
    name: "NextJS ",
    logo: "/icons/next.png"
  },
  {
    name: "Reactjs",
    logo: "/icons/react.png",
  },
  {
    name: "Redux",
    logo: "/icons/redux.png",
  },
  {
    name: "TailwindCSS",
    logo: "/icons/tailwind.png",
  },
  {
    name: "JavaScript",
    logo: "/icons/js.png",
  },
  {
    name: "TypeScript",
    logo: "/icons/ts.png",
  },
  {
    name: "ExpressJS",
    logo: "/icons/express.png",
  }, {
    name: "NodeJs",
    logo: "/icons/node.png",
  },
  {
    name: "Django Rest Freamework",
    logo: "/icons/drf.png",
  },
  {
    name: "FastAPI",
    logo: "/icons/fastapi.png",
  },
  {
    name: "MongoDB",
    logo: "/icons/mongo.png",
  },
  {
    name: "MySQL",
    logo: "/icons/mysql.png",
  },
  {
    name: "Redis",
    logo: "/icons/redis.png",
  },
  {
    name: "HTML",
    logo: "/icons/html.png"
  },
  {
    name: "CSS",
    logo: "/icons/css.png"
  },
  {
    name: "Python",
    logo: "/icons/python.jpeg"
  },
  {
    name: "Java",
    logo: "/icons/java.png",
  },
  {
    name: "Golang",
    logo: "/icons/go.png",
  },

  {
    name: "Docker",
    logo: "/icons/docker.png",
  },

  {
    name: "Git",
    logo: "/icons/git.png",
  },
  {
    name: "Github Actions",
    logo: "/icons/githubaction.png",
  },
  {
    name: "GraphQL",
    logo: "/icons/GraphQL.png",
  }, {
    name: "Ngnix",
    logo: "/icons/ngnix.png",
  },
] as const;
