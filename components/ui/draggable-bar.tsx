"use client";

import { motion } from "framer-motion";
import { useAspectRatio } from "@/lib/hooks/use-aspect-ratio";

interface BarProps {
  x?: number;
  y?: number;
}

export function DraggableBar({ x = 0, y = 0 }: BarProps) {
  const { isWideEnough } = useAspectRatio();

  return (
    <motion.div
      style={{
        width: isWideEnough ? "30rem" : "20rem",
        height: "0.2rem",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        position: "fixed",
        zIndex: 50,
        borderRadius: "0rem",
        transform: `translate(${x+649.5}px, ${y+85}px)`,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 200,
      }}
    />
  );
}
