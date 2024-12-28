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
      Hi, I'm Utkarsh, a seasoned freelancer final-year undergraduate at Sir M. Visvesvaraya Institute of Technology with a passion for Mobile App development. Currently, I'm a <span className="font-bold">SDE Intern</span>  at GridxEnergy, where I enjoy tackling complex problems and bringing ideas to life. My core stack includes <span className="italic">Flutter, Djnago, Firebase,</span> and <span className="italic">Postgress SQL</span> , with additional expertise in Django Rest Framework, Java, Google cloud , and AWS. I've successfully completed <span className="font-bold">more that 5 freelance projects</span>
      </p>
      <p>
      I've also completed  <span className="font-bold">3 internships</span>, gaining hands-on experience with <span className="italic">Flutter and Django</span> and <span className="italic"> Firebase</span>.  As a lifelong learner and tech enthusiast, I'm always exploring new technologies and seeking opportunities to grow. I'm currently looking for a full-time software developer role where I can contribute to impactful projects and collaborate with professionals.
      </p>
    </motion.section>
  );
}
