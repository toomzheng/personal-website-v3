"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { LampContainer } from "./ui/lamp";
import { useStartedStore } from "@/lib/hooks/use-is-started";
import { useAspectRatio } from "@/lib/hooks/use-aspect-ratio";
import { create } from "zustand";

interface LampState {
  showLamp: boolean;
  setShowLamp: (show: boolean) => void;
}

export const useLampStore = create<LampState>((set) => ({
  showLamp: false,
  setShowLamp: (show) => set({ showLamp: show }),
}));

export function ThemeLamp() {
  const { resolvedTheme } = useTheme();
  const isStarted = useStartedStore((state) => state.isStarted);
  const { showLamp, setShowLamp } = useLampStore();
  const { isWideEnough } = useAspectRatio();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resolvedTheme === 'dark' && isStarted) {
      // When switching to dark mode, show lamp after a delay
      timer = setTimeout(() => {
        setShowLamp(true);
      }, 300);
    } else {
      // Hide lamp immediately when switching to light mode
      setShowLamp(false);
    }
    return () => clearTimeout(timer);
  }, [resolvedTheme, isStarted, setShowLamp]);

  const lampVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const textVariants = {
    initial: { opacity: 0.5, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100, transition: { duration: 0.3 } }
  };

  return (
    <AnimatePresence mode="wait">
      {(showLamp && isStarted) && (
        <motion.div
          key="lamp"
          variants={lampVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`${isWideEnough ? 'fixed' : 'absolute'} z-0 transition-all duration-500 ease-in-out`}
          style={{
            inset: isWideEnough ? "0 0 0 0" : "auto 0 0 0",
            height: isWideEnough ? "100vh" : "45vh",
            minHeight: isWideEnough ? "100vh" : "300px",
            top: isWideEnough ? 0 : "auto",
            bottom: isWideEnough ? 0 : "-10vh"
          }}
        >
          <LampContainer 
            className={`absolute transition-all duration-500 ease-in-out ${
              isWideEnough 
                ? "h-[60vh] right-0 w-1/2" 
                : "h-full w-full"
            }`}
          >
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className={`mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ${
                isWideEnough ? "" : "mt-32"
              }`}
            >
              Dark Mode
            </motion.h1>
          </LampContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
