"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export function HoverArrow() {
  return (
    <motion.div
      className="fixed left-[5%] top-[35%] flex items-center gap-2 text-zinc-800 dark:text-zinc-200 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <span className="text-base font-medium whitespace-nowrap"></span>
      <motion.div
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <IconArrowRight size={24} />
      </motion.div>
    </motion.div>
  );
}
