import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import threeDportfolio from "@/public/threeDportfolio.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ecom from "@/public/e-com.png"
import videocall from "@/public/video-call.png"

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
    title: "Software Devlopment Engineering Intern - MittArv",
    location: "Hybrid",
    description:
      "worked on Web and Android devlopment created dynamic websites , components in accordance to figma design Skills - React js , Node js , Express js , Flutter , Jira , Problem Solving ",
    icon: React.createElement(LuGraduationCap),
    date: "01/02/2023 (currently working)" ,  //shubham's Experience
  },
  {
    title: "Teaching Assistant Coding Ninjas",
    location: "Remote",
    description:
      " Assisted 50+ students in learning C++ and Data Structures and Algorithms Took doubt session and resolved 250+ doubts with an average rating of 4.62 Helped students in their assignments",
    icon: React.createElement(LuGraduationCap),
    date: "01/06/2022 to 15/10/2022",
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
    title: "3D portfolio Website",
    description:
      "We designed this website in immersive 3D, creating a visually captivating experience. Explore seamless interactivity, making your online presence truly unforgettable.",
    tags: ["ThreeJS", "Framer Motion", "TailwindCSS","TypeScript",],
    imageUrl: threeDportfolio,
    link:"omchhayala.vercel.app"
  },
  {
    title: "Video Call Application",
    description:
      "Developed Video call based web application using WebRTC , Sockets.io and frontend on Reactjs.Functionality inlcudes Video Calling using a room Id which should be same for both the users",
    tags: ["React", "Sockets.io", "webRTC", "CSS"],
    imageUrl: videocall,
    link:"https://aalok-video-call-app.vercel.app/"
  },
  {
    title: "E-com Website",
    description:
      "Developed a Full-Stack MERN Application Functionality inlcudes login and signup using authentication tools and having various Functionality which gives user a seemless Experience",
    tags: ["React", "Express.js", "Node.js", "Css", "MongoDB"],
    imageUrl: ecom,
    link:"https://aalokshop.vercel.app/"
  },
  {
    title: "Note-Taking Application",
    description:
      "Developed Note Taking App on which user can create , Update , delete and view the note with integrated rich text editor and search box",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: wordanalyticsImg,
    link:"https://take-your-notes.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MUI",
  "DaisyUI",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.Js",
  "SQL DataBases",
  "MongoDB",
  "Prisma ORM",
  "Recoil",
  "Redux",
  "Flutter",
  "Getx",
  "Dart",

] as const;
