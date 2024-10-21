'use client';
import SectionHeading from '@/components/section-heading'
import React from 'react'
import { projectsData } from '@/lib/data'
import Project from '@/components/project';
import Link from "next/link";
import { motion } from 'framer-motion';


const AllProjects = () => {
    return (
        <>
            <SectionHeading>My projects</SectionHeading>
            <div className='flex flex-col justify-center items-center'>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
            <div className="flex justify-center items-center pt-10 pb-10 ">
                <Link href="/">
                    <motion.button
                        className="bg-[#E0DAF8] text-[#1A202C] dark:bg-[#4A3B58] dark:text-[#E0DAF8] rounded-3xl p-2 w-32"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Home
                    </motion.button>
                </Link>
            </div>
        </>
    )
}

export default AllProjects