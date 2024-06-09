"use client";
import { motion } from "framer-motion";
import {
  Project,
  ProjectDescription,
  ProjectLink,
  ProjectTags,
  ProjectTitle,
} from "./Project";
import { Title } from "./Title";
export const Projects = () => {
  const projects = [
    {
      title: "CRUD Pokemon",
      tags: ["NextJS", "Typescript", "TailwindCSS"],
      github: "https://github.com/valclmb/pokemon",
      link: "https://pokemon-beta-ten.vercel.app/",
      description: "Pokemon CRUD with NextJS and TailwindCSS",
    },
    {
      title: "Map",
      tags: ["NextJS", "Typescript", "TailwindCSS", "shadcn/ui", "mongodb"],
      link: "https://map-lime.vercel.app/",
      github: "https://github.com/valclmb/map",
      description:
        "Geographic mini-game where the goal is to find the name of the country and its capital",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 2.7 }}
    >
      <Title>Projects</Title>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 3.2 }}
        className="flex items-start gap-10"
      >
        {projects.map((project) => (
          <Project key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} />
            <ProjectLink github href={project.github} />
            <ProjectTags tags={project.tags} />
          </Project>
        ))}
      </motion.div>
    </motion.section>
  );
};
