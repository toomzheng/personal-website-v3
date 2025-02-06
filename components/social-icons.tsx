"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useStartedStore } from '@/lib/hooks/use-is-started';
import { useAspectRatio } from '@/lib/hooks/use-aspect-ratio';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/toomzheng',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    endPosition: { x: -1005, y: +237 },
  },
  {
    name: 'GitHub',
    url: 'https://github.com/toomzheng',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    endPosition: { x: -950, y: +225 },
  },
  {
    name: 'Substack',
    url: 'https://toomzheng.substack.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
      </svg>
    ),
    endPosition: { x: -900, y: +200 },
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/toomzheng',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    endPosition: { x: -860, y: +160 },
  },
];

export function SocialIcons() {
  const { isStarted } = useStartedStore();
  const { isWideEnough } = useAspectRatio();
  const [initialPositions, setInitialPositions] = useState<{ [key: string]: { x: number, y: number } }>({});
  const iconsRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isStarted && !hasAnimated.current) {
      const positions: { [key: string]: { x: number, y: number } } = {};
      socialLinks.forEach(social => {
        const element = iconsRef.current[social.name];
        if (element) {
          const rect = element.getBoundingClientRect();
          positions[social.name] = {
            x: rect.left,
            y: rect.top
          };
        }
      });
      setInitialPositions(positions);
    }
    if (isStarted) {
      hasAnimated.current = true;
    }
  }, [isStarted]);

  const setRef = (name: string) => (el: HTMLAnchorElement | null) => {
    iconsRef.current[name] = el;
  };

  return (
    <motion.div
      layout="preserve-aspect"
      initial={false}
      className="relative"
      style={{
        width: isStarted ? '0' : 'auto',
        height: isStarted ? '0' : 'auto',
      }}
    >
      {socialLinks.map((social, index) => {
        const getPosition = () => {
          if (!isStarted) return { x: 0, y: 0 };
          if (isWideEnough) {
            return social.endPosition;
          }
          return { x: 0, y: index * 60 };
        };

        return (
          <motion.a
            key={social.name}
            ref={setRef(social.name)}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors absolute ${
              isStarted ? '' : 'position-initial'
            }`}
            initial={false}
            animate={{
              x: getPosition().x,
              y: getPosition().y,
              opacity: 1,
              scale: 1,
              position: isStarted ? 'absolute' : 'relative',
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: isStarted ? index * 0.1 : 0,
              },
            }}
            style={{
              position: isStarted ? 'absolute' : 'relative',
              display: 'inline-flex',
              marginLeft: !isStarted ? '1.5rem' : '0',
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-3">
              {social.icon}
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
