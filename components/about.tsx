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
      <SectionHeading>About us</SectionHeading>
      <p className="mb-3">
        Welcome to our agency, where a team of talented individuals converges to
        transform ideas into reality. Specializing in crafting bespoke websites
        and mobile apps for diverse purposes, we're dedicated to bringing your
        vision to life with creativity and precision. Elevate your online
        presence with our team's expertise—crafting engaging and responsive
        websites that captivate audiences and leave a lasting impression. Let
        your digital footprint reflect innovation and user-centric design.
      </p>
    </motion.section>
  );
}
