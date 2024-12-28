import React from "react";

import cybernous from "@/public/images/cybernous.jpeg";
import gridx from "@/public/images/gridx.png";
import gostar from "@/public/images/gostar.png";
import Krooze from "@/public/images/krooze.png";




import { SiFirebase, SiFlutter, SiFreelancer, SiUpwork } from "react-icons/si";

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
    title: "SDE intern at GridxEnergy",
    location: "Remote, Gurgaon, Delhi, IN",
    description:
      "Acquired hands-on experience in Flutter BLE (to fetch low energy data through Blutooth inside the application), Multilingual applicationa and Firebase Cloud Functions. Collaborated on creating innovative solutions to improve functionality and user experience.",
    icon: React.createElement(SiFirebase),
    date: "Sept, 2024 - Present",
  },
  {
    title: "Freelancer",
    location: "Upwork, Remote",
    description:
      "I had Completed 5 plus freelance projects, meeting client specifications and deadlines.",
    icon: React.createElement(SiUpwork),
    date: "Sept, 2023 -  Present",
  },
  {
    title: "SDE intern at Anantkaal",
    location: "Remote, Surat, Gujrat, IN",
    description:
      "As a SDE Intern at Anantkaal, I developed and maintained Mobile application using Flutter, Firebase and REST Apis. I collaborated with cross-functional teams, implemented new features, fixed bugs, and ensured responsive, high-quality user interfaces across various devices and platforms.",
    icon: React.createElement(SiFlutter),
    date: "Mar, 2023 - Sept, 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Krooze - Ride hailing application",
    description:
      "It is a ride sharing and package delivery application for the people of The gambia",
    tags: ["Flutter", "Django", "Postgress", "REST","Maps","goecodeing"],
    imageUrl: Krooze,
    visitURL: "https://apps.apple.com/in/app/krooze-driver/id6572310093",
    githubURL:""
    
  },
  {
    title: "Gostar",
    description:
      "It is a ride hailing application made for the people of Nigeria. With the capablity of realtime ride matching and notification if is a game changer for the people in Nigeria",
    tags: ["Flutter", "Firebase", "Maps", "Google cloud", "Geocoding"],
    imageUrl: gostar,
    visitURL: "https://apps.apple.com/in/app/gostar-taxi/id6504448754",
    githubURL:""
  },
  {
    title: "Cybernous",
    description:
      "It is an EdTech platform made for Cybernous consulting LLC, Bengaluru. With video streaming, learner ranking and leaderboard features it provides a new learing experience for the learners.",
    tags: ["Flutter", "Firebase","Oauth","razorpay","sanity"],
    imageUrl: cybernous,
    visitURL: "https://cyb-lms.web.app/",
    githubURL:""
  },
  {
    title: "GridxEnergy",
    description:
      "This is a battery management application made with GirdxEnergy while working as an intern. This application allows customers to manage their batteries, swap them, recharge and monitor them with live data and alert notifications.",
    tags: ["Flutter", "FireBase", "Cloud Funciton", "Thingsboard" ,"BLE"],
    imageUrl: gridx,
    visitURL: "https://gridxenergy.in/",
    githubURL:""
  },
  // {
  //   title: "Go-gRPC",
  //   description:
  //     "Created a gRPC service using GoLang and Protobuf, enabling efficient communication between microservices. This implementation supports high-performance applications, ensuring low-latency interactions and robust data handling.",
  //   tags: ["Golang", "gRPC", "Protobuf"],
  //   imageUrl: gogrpc,
  //   visitURL: "",
  //   githubURL: "https://github.com/arup1221/go-gRPC",
  // },
  // {
  //   title: "Device Tracker",
  //   description:
  //     "The Realtime Device Tracker is an application that uses Node.js, Socket.io, and Express.js to track device locations in real time, providing users with an interactive map interface for easy navigation.",
  //   tags: ["Node.js", "Socket.io", "Express.js"],
  //   imageUrl: device,
  //   visitURL: "https://devicetracker-hlod.onrender.com/",
  //   githubURL: "https://github.com/arup1221/DeviceTracker",
  // },
  

] as const;




export const skillsData = [
  {
    name: "Flutter ",
    logo: "/icons/Flutter Logo HD.png"
  },
  {
    name: "Firebase",
    logo: "/icons/Firebase Logo HD.png",
  },
  {
    name: "Django",
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
    name: "Django Rest Freamework",
    logo: "/icons/drf.png",
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
