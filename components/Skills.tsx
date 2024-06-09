"use client";
import { motion } from "framer-motion";
import { SkillsBlock } from "./SkillsBlock";
import { Title } from "./Title";
import { skillsList } from "./skillsList";
export const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 1.7 }}
    >
      <Title className="mb-5">Skills</Title>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 2.3 }}
        className="flex gap-32 text-md"
      >
        {skillsList.map((skillBlock, index) => (
          <SkillsBlock key={index} {...skillBlock} />
        ))}
      </motion.div>
    </motion.section>
  );
};
