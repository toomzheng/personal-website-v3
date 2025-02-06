"use client";

import { create } from 'zustand';
import { useEffect } from 'react';

interface AspectRatioStore {
  isWideEnough: boolean;
  setIsWideEnough: (isWide: boolean) => void;
}

const useAspectRatioStore = create<AspectRatioStore>((set) => ({
  isWideEnough: true,
  setIsWideEnough: (isWide) => set({ isWideEnough: isWide }),
}));

export function useAspectRatio() {
  const { isWideEnough, setIsWideEnough } = useAspectRatioStore();

  useEffect(() => {
    const updateAspectRatio = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      const minWidth = 1024; // Switch to narrow mode if width is less than 1024px
      setIsWideEnough(aspectRatio >= 11/9 && window.innerWidth >= minWidth);
    };

    updateAspectRatio();
    window.addEventListener('resize', updateAspectRatio);
    return () => window.removeEventListener('resize', updateAspectRatio);
  }, [setIsWideEnough]);

  return { isWideEnough };
}
