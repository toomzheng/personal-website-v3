"use client";

import React, { useEffect, useState } from 'react';
import { useIsStarted } from '@/lib/hooks/use-is-started';
import { useAspectRatio } from "@/lib/hooks/use-aspect-ratio";
import { motion } from "framer-motion";
import { ThemeLamp } from "./theme-lamp";

export function DecorativeElements() {
  const isStarted = useIsStarted();
  const { isWideEnough } = useAspectRatio();
  const [textBottom, setTextBottom] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const textElement = document.getElementById('text-content');
      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        setTextBottom(rect.bottom + window.scrollY);
      }
    };

    // Update position initially and on resize
    updatePosition();
    window.addEventListener('resize', updatePosition);
    
    // Update position periodically to handle dynamic content changes
    const interval = setInterval(updatePosition, 100);

    return () => {
      window.removeEventListener('resize', updatePosition);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        ...(isWideEnough 
          ? {
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)'
            }
          : {
              left: '50%',
              transform: 'translateX(-50%)',
              top: textBottom ? `${textBottom + 50}px` : '100vh', // Add 50px spacing
              zIndex: 0
            }
        )
      }}
    >
      {/* Squiggly line */}
      <svg
        className={`absolute w-24 h-24 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isWideEnough ? '-left-12 top-24' : '-left-12 -top-24'}`}
        viewBox="0 0 100 100"
      >
        <path
          d="M10 50 Q25 25, 40 50 T70 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>

      {/* Dots */}
      <svg
        className={`absolute w-24 h-24 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isWideEnough ? '-left-12 top-48' : '-left-12 -top-48'}`}
        viewBox="0 0 100 100"
      >
        <circle cx="20" cy="50" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="40" cy="50" r="3" fill="currentColor" className="animate-pulse delay-75" />
        <circle cx="60" cy="50" r="3" fill="currentColor" className="animate-pulse delay-150" />
      </svg>

      {/* Spiral */}
      <svg
        className={`absolute w-24 h-24 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isWideEnough ? '-left-12 top-72' : '-left-12 -top-72'}`}
        viewBox="0 0 100 100"
      >
        <path
          d="M50 10 C70 10, 70 30, 50 30 C30 30, 30 50, 50 50 C70 50, 70 70, 50 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>

      {/* Wave */}
      <svg
        className={`absolute w-24 h-24 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isWideEnough ? '-left-12 top-96' : '-left-12 -top-96'}`}
        viewBox="0 0 100 100"
      >
        <path
          d="M10 50 C20 40, 30 60, 40 50 C50 40, 60 60, 70 50 C80 40, 90 60, 100 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw"
        />
      </svg>

      <ThemeLamp />
    </motion.div>
  );
}
