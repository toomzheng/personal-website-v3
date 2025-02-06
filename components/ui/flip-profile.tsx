"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export function FlipProfile(): React.JSX.Element {
  const [rotation, setRotation] = useState(0);

  return (
    <div
      className="relative w-full h-full cursor-pointer perspective-1000"
      onMouseEnter={() => setRotation(prev => prev + 180)}
      onMouseLeave={() => setRotation(prev => prev + 180)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateY: rotation
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden"
          }}
        >
          <Image
            src="/notion-face-portrait.png"
            alt="Notion Portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <Image
            src="/6A7BB9A8-4733-4D54-9DB2-768C844D26DE_1_201_a.jpeg"
            alt="Real Portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
