"use client";
import { motion } from "framer-motion";
import { Icon } from "./Icon";
export const Presentation = () => {
  return (
    <>
      <h1 className="relative text-5xl font-semibold">
        <Icon className="absolute -left-16 top-1/2 -translate-y-1/2 hover:scale-105 transition-all" />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Valentin COULOMB
        </motion.span>
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="font-light ml-2 my-5 text-2xl"
      >
        <p>Web developer from France.</p>
        <p className="font-thin text-white/90">
          Passionate about design, code and learning new things!
        </p>
      </motion.div>
    </>
  );
};
