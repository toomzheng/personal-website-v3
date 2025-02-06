"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function PullMeArrow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-12 right-16 z-50 pointer-events-none"
    >
      <svg
        width="160"
        height="100"
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-100 dark:scale-100"
      >
        {/* Curved Text Path */}
        <path
          id="textPath"
          d="M20,40 Q40,20 60,40 T100,40"
          fill="none"
          className="dark:stroke-white stroke-black"
          style={{ opacity: 0 }}
        />
        <text className="font-indie-flower text-[14px] dark:fill-white fill-black">
          <textPath href="#textPath" startOffset="50%" textAnchor="middle">
            pull me!
          </textPath>
        </text>

        {/* Fun Arrow with Loop */}
        <motion.path
          d="M20,45 Q40,25 60,45 T120,45 L110,45 Q120,45 115,35 Q110,25 105,35 Q100,45 110,45 L140,45 L135,40 L140,45 L135,50"
          className="dark:stroke-white stroke-black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            delay: 2,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  );
}
