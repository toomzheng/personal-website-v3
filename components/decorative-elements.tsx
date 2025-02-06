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

      <ThemeLamp />
    </motion.div>
  );
}
