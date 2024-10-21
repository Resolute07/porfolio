"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import MoreButton from "./morebutton";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.slice(0, 4).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center items-center pt-10">
        <Link href="/AllProjects">
          <motion.button
            className="bg-[#E0DAF8] text-[#1A202C] dark:bg-[#4A3B58] dark:text-[#E0DAF8] rounded-3xl p-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex gap-x-2">
              All Projects <FaArrowRight className="mt-1" />
            </div>
          </motion.button>
        </Link>
      </div>

    </section>
  );
}
