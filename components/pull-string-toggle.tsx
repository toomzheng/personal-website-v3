"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useStartedStore } from "@/lib/hooks/use-is-started";
import { useLampStore } from "./theme-lamp";
import { useAspectRatio } from "@/lib/hooks/use-aspect-ratio";

export function PullStringToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isPulling, setIsPulling] = React.useState(false);
  const isStarted = useStartedStore((state) => state.isStarted);
  const { setShowLamp } = useLampStore();
  const { isWideEnough } = useAspectRatio();

  const handlePull = () => {
    if (isPulling) return; // Prevent multiple pulls while animating
    
    setIsPulling(true);
    
    // Add a slight delay to match the pull animation
    setTimeout(() => {
      if (resolvedTheme === 'light') {
        setTheme('dark');
      } else {
        // Start the lamp fade out immediately if screen is wide enough
        if (isWideEnough) {
          setShowLamp(false);
        }
        // Delay the theme change to allow for background transition
        setTimeout(() => {
          setTheme('light');
        }, 600);
      }
    }, 500);

    // Reset pulling state after animation
    setTimeout(() => setIsPulling(false), 600);
  };

  const stringPath = "M10,0 Q8,40 12,80 Q14,120 10,160";
  const knobPath = "M0,0 Q5,-2 10,0 Q15,-2 20,0 Q20,5 17,10 Q10,15 3,10 Q0,5 0,0";

  return (
    <div 
      className="fixed top-0 right-8 z-50 cursor-pointer select-none" 
      onClick={handlePull}
      role="button"
      aria-label="Toggle theme"
    >
      {/* Base mount */}
      <svg width="40" height="20" className="absolute top-0 left-1/2 -translate-x-1/2">
        <path
          d="M0,10 Q20,0 40,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="dark:stroke-white stroke-black"
          style={{ filter: "url(#roughPaper)" }}
        />
      </svg>
      
      {/* String */}
      <motion.svg
        width="20"
        height="160"
        className="relative"
        initial={false}
        animate={isPulling ? { y: [0, 20, 0] } : { y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <defs>
          <filter id="roughPaper" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" />
            <feDisplacementMap in="SourceGraphic" scale="5" />
          </filter>
        </defs>
        
        <path
          d={stringPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="dark:stroke-white stroke-black"
          style={{ filter: "url(#roughPaper)" }}
        />
        
        {/* Pull knob */}
        <g transform="translate(-5,155)">
          <path
            d={knobPath}
            fill="currentColor"
            className="dark:fill-white fill-black"
            style={{ filter: "url(#roughPaper)" }}
          />
          <path
            d="M5,3 L15,3"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="dark:stroke-black stroke-white"
            style={{ filter: "url(#roughPaper)" }}
          />
          <path
            d="M5,6 L15,6"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="dark:stroke-black stroke-white"
            style={{ filter: "url(#roughPaper)" }}
          />
        </g>
      </motion.svg>
    </div>
  );
}
