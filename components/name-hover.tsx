"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const swapVariants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};

export default function NameHover() {
  const [hovered, setHovered] = useState(false);
  const label = hovered ? "nandodani" : "Fernando Apóstolo";

  return (
    <motion.h1
      className="text-3xl md:text-5xl font-bold tracking-tight text-foreground w-sm md:w-lg"
      initial={false}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={label}
          className="inline-block"
          variants={swapVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </motion.h1>
  );
}
