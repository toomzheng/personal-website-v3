"use client";

import { useState, useEffect } from 'react';

export function useAspectRatio() {
  const [aspectRatio, setAspectRatio] = useState(16/9);
  const [isWideEnough, setIsWideEnough] = useState(true);

  useEffect(() => {
    const updateAspectRatio = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setAspectRatio(ratio);
      setIsWideEnough(ratio > 11/9);
    };

    // Initial check
    updateAspectRatio();

    // Add resize listener
    window.addEventListener('resize', updateAspectRatio);

    // Cleanup
    return () => window.removeEventListener('resize', updateAspectRatio);
  }, []);

  return { aspectRatio, isWideEnough };
}
