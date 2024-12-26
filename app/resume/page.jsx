"use client"

import { FaHtml5, FaCss, FaJs, FaReact, FaPhotoshop, FaFigma } from 'react-icons/fa'

import { SiTailwincss, SiNextdotjs } from "react-icons/si"

//about data
const about = {
  title: 'About me',
  description:"I am a Ui designer with 2 years of experience",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Oluwaseyi Joseph",
    },
    {
      fieldName: "Phone",
      fieldValue: "+234(0)7063319339",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigeria",
    },
    {
      fieldName: "Email",
      fieldValue: "oluwasaejoseph@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Yoruba",
    },
  ],
};

//Experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "thdo uhdbif ifiwbfjl biwurb rvrvrub fiu fqfi fqif fqifhq ffihq fjv",
  items: [
    {
      company: "GreatShibaInu",
      position: "Web Developer",
      duration: "2021"
    },
    {
      company: "Briellaz Collections",
      position: "Graphics Desinger",
      duration: "2022 - Present"
    },
    {
      company: "Rentit App",
      position: "UI Desinger",
      duration: "2023 - Present"
    },
    {
      company: "Leo Saving System",
      position: "Graphics Desinger",
      duration: "2023 - Present"
    },
  ],
};

//Esducation data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My educatiom",
  description: "thdo uhdbif ifiwbfjl biwurb rvrvrub fiu fqfi fqif fqifhq ffihq fjv",
  items: [
    {
      institution: "Federal University Oye Ekiti",
      degree: "Electical & Eletronics Engineering",
      duration: "2018 - 2024"
    },
    {
      institution: "Online Course",
      degree: "Web Development",
      duration: "2018 - 2020"
    },
    {
      institution: "Online Course",
      degree: "Design Course",
      duration: "2020 - 2024"
    },
  ],
};

//Skill
const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5/>,
    name: "HTML5",
    },
    {
      icon: <FaCss/>,
    name: "CSS",
    },
    {
      icon: <FaJs/>,
    name: "JS",
    },
    {
      icon: <FaReact/>,
    name: "react.js",
    },
    {
      icon: <SiNextdotjs/>,
    name: "next.ja",
    },
    {
      icon: <SiTailwincss/>,
    name: "tailwincss",
    },
    {
      icon: <FaFigma/>,
    name: "figma",
    },
    {
      icon: <FaPhotoshop/>,
    name: "photoshop",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
    >
      <div className='container mx-auto'>
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[68px]">
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume
