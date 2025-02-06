"use client";

import React from 'react';
import { useIsStarted } from '@/lib/hooks/use-is-started';

export function DecorativeElements() {
  const isStarted = useIsStarted();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Squiggly line */}
      <svg
        className={`absolute w-24 h-24 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isStarted 
            ? 'top-[20%] right-[15%] rotate-45 scale-75' 
            : 'top-20 right-32'
          }`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50 Q 25 30, 40 50 T 70 50 T 100 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
        />
      </svg>

      {/* Arrow */}
      <svg
        className={`absolute w-24 h-24 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isStarted 
            ? 'top-[53%] left-[30%] rotate-[150deg] scale-90' 
            : 'top-40 left-32'
          }`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 80 C 40 60, 60 40, 80 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
        />
        <path
          d="M60 20 L 80 20 L 80 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
        />
      </svg>

      {/* Circular scribble */}
      <svg
        className={`absolute w-32 h-32 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isStarted 
            ? 'bottom-[10%] left-[90%] rotate-90 scale-125' 
            : 'bottom-32 left-40'
          }`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 20 C 70 20, 80 30, 80 50 C 80 70, 70 80, 50 80 C 30 80, 20 70, 20 50 C 20 30, 30 20, 50 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
        />
      </svg>

      {/* Wavy underline */}
      <svg
        className={`absolute w-40 h-16 text-primary/20 dark:text-primary/10 transition-all duration-1000 ease-in-out
          ${isStarted 
            ? 'bottom-[90%] right-[90%] -rotate-12 scale-150' 
            : 'bottom-20 right-40'
          }`}
        viewBox="0 0 160 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 Q 20 0, 40 20 T 80 20 T 120 20 T 160 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
        />
      </svg>
    </div>
  );
}
