import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerce from "@/public/ecommerce.png";
import netflix from "@/public/netflix.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Teaching Assistant Coding Ninjas",
    location: "Remote",
    description:
      " Assisted 50+ students in learning C++ and Data Structures and Algorithms Took doubt session and resolved 250+ doubts with an average rating of 4.62 Helped students in their assignments",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Executive at MUIEEE",
    location: "Indore , MP",
    description:
      "As an Executive at the C/P team at MUIEEE, I mentored and guided my team members across various programming sections, helping them upskill themselves and excel in their role , to participate in coding contests and sharpen their problem-solving abilities. Together, we strive to achieve our goals and drive success for our organization",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce Application",
    description:
      "Developed an E-commerce application with Features - Cart function , Filter product, place and Track Order , Integrated Payment gateway and Search box ",
    tags: ["React", "Node.js", "MongoDB", "Css", "Express.js"],
    imageUrl: ecommerce,
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a Full-Stack MERN Application Functionality inlcudes login , signup , Responsive Trailer of movie and most resemble with Netflix web app",
    tags: ["React", "Express.js", "Node.js", "Css", "MongoDB"],
    imageUrl: netflix,
  },
  {
    title: "Video Call Application",
    description:
      "Developed Video call based web application using WebRTC , Sockets.io and frontend on Reactjs.Functionality inlcudes Video Calling using a room Id which should be same for both the users",
    tags: ["React", "Sockets.io", "webRTC", "CSS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Note-Taking Application",
    description:
      "Developed Note Taking App on which user can create , Update , delete and view the note with integrated rich text editor and search box",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: wordanalyticsImg,
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
  "Recoil",
  "Express",
  "C++",
  "DSA",
  "JAVA"

] as const;
