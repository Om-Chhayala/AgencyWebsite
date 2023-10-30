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
      <p className="mb-3">
        while graduating with a degree in{" "}
        <span className="font-medium">Computer Science engineering</span>, I decided to pursue my
        passion for programming. I have learned{" "}
        <span className="font-medium">full-stack web development in Mern Technology</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">have solved</span> over
        400+ DSA problems on leetcode , codestudio and different platforms beside problem solving my devlopment techstack 
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express.js  and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Internship / contract </span> as a software
        developer.
      </p>
    </motion.section>
  );
}
