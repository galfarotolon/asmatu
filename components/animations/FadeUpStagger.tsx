import { motion } from "framer-motion";
import React from "react";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const FadeUpStagger: React.FC<{
  heading: string;
  description: string;
  link: string;
  linkText: string;
}> = ({ heading, description, link, linkText }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h2
        className="text-5xl font-bold font-display mb-4"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {heading}
      </motion.h2>
      <motion.p className="text-lg mb-4" variants={FADE_UP_ANIMATION_VARIANTS}>
        {description}
      </motion.p>
      <motion.a
        href={link}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {linkText}
      </motion.a>
    </motion.div>
  );
};

export default FadeUpStagger;
