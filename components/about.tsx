"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      

      <p className="mb-5">
      Hi, I'm Arup Gope, a final-year undergraduate at Sir M. Visvesvaraya Institute of Technology with a passion for web development. Currently, I'm a <span className="font-bold">Frontend Intern</span>  at SetMyCareer, where I enjoy tackling complex problems and bringing ideas to life. My core stack includes <span className="italic">React, Next.js, Node.js,</span> and <span className="italic">MongoDB</span> , with additional expertise in Django Rest Framework, Java, TypeScript, Express.js, Tailwind CSS, and Go. I've successfully completed <span className="font-bold">two freelance projects</span>—a Next.js web application and a full-stack app using ReactJS and Golang.
      </p>
      <p>
      I've also completed the <span className="font-bold">LFX Mentorship program at Cloudforet</span>, gaining hands-on experience with <span className="italic">Docker, Kubernetes, gRPC, Protocol Buffer, ArgoCD,</span> and <span className="italic"> GitHub Actions</span>.  As a lifelong learner and tech enthusiast, I'm always exploring new technologies and seeking opportunities to grow. I'm currently looking for a full-time software developer role where I can contribute to impactful projects and collaborate with professionals.
      </p>
    </motion.section>
  );
}
