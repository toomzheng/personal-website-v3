"use client";

import { useState, useEffect } from 'react';
import { useSpring } from 'framer-motion';

export function useAspectRatio() {
  const [aspectRatio, setAspectRatio] = useState(16/9);
  const [isWideEnough, setIsWideEnough] = useState(true);
  
  // Smoothly animated aspect ratio value
  const smoothAspectRatio = useSpring(aspectRatio, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const updateAspectRatio = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setAspectRatio(ratio);
      setIsWideEnough(ratio > 11/9);
    };

    // Initial check
    updateAspectRatio();

    // Throttled resize handler
    let timeoutId: NodeJS.Timeout;
    const throttledResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(updateAspectRatio, 100);
    };

    window.addEventListener('resize', throttledResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', throttledResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { aspectRatio: smoothAspectRatio, isWideEnough };
}
