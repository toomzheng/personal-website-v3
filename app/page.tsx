'use client';

import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import { useStartedStore } from '@/lib/hooks/use-is-started';
import { PullMeArrow } from '@/components/pull-me-arrow';
import { useAspectRatio } from '@/lib/hooks/use-aspect-ratio';
import { SocialIcons } from '@/components/social-icons';
import { DraggableBar } from '@/components/ui/draggable-bar';
import { useState } from 'react';
import { FlipProfile } from '@/components/ui/flip-profile';
import { HoverArrow } from '@/components/hover-arrow';

export default function Home() {
  const { isStarted, setIsStarted } = useStartedStore();
  const { isWideEnough } = useAspectRatio();
  const [barPosition, setBarPosition] = useState({ x: 100, y: 100 });

  const springConfig = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  return (
    <MotionConfig transition={springConfig}>
      <main className="min-h-screen w-full transition-colors bg-background text-foreground overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-8 md:p-16 lg:p-24">
          <PullMeArrow />
          <DraggableBar x={barPosition.x} y={barPosition.y} />
          <div className="relative w-full">
            <motion.div
              layout="preserve-aspect"
              className="flex flex-col items-center justify-center gap-8"
              style={{
                alignItems: isStarted ? (isWideEnough ? 'flex-start' : 'center') : 'center',
                transform: isStarted ? (isWideEnough ? 'translate(-8%, 5vh)' : 'translate(0, 5vh)') : 'none',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {/* Circle with photo */}
              <motion.div
                layout="preserve-aspect"
                initial={false}
                animate={{
                  width: isStarted ? 400 : 256,
                  height: isStarted ? 400 : 256,
                  y: isStarted ? -50 : 0,  // Move up by 50px when started
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                  }
                }}
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: 'black',
                  position: 'relative'
                }}
                className="z-10"
              >
                <FlipProfile />
                <HoverArrow />
              </motion.div>


              {/* Social Icons */}
              <motion.div
                layout="preserve-aspect"
                initial={false}
                className={`mt-8 flex ${isStarted
                    ? (isWideEnough ? 'absolute -right-32 top-32' : 'fixed right-8 top-1/2 -translate-y-1/2')
                    : 'justify-center w-full'
                  }`}
                style={{
                  zIndex: 20
                }}
              >
                <SocialIcons />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <AnimatePresence mode="wait">
              {isStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.3
                    }
                  }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: '460px',
                    transform: isWideEnough ? 'translateX(-90px)' : 'translateX(-50%)',
                    left: isWideEnough ? '0' : '50%',
                    width: '100%',
                    maxWidth: '400px',
                    zIndex: 10
                  }}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: 0.1
                    }}
                  >
                    <motion.h1
                      className="text-2xl sm:text-3xl md:text-4xl font-normal text-zinc-900 dark:text-zinc-100 leading-tight"
                    >
                      Hey! I'm
                    </motion.h1>
                    <motion.h1
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight relative inline-block"
                    >
                      <span className="relative z-10">Tom Zheng</span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.23, 1, 0.32, 1],
                          delay: 0.3
                        }}
                        className="absolute bottom-0 left-0 h-3 w-full bg-zinc-200 dark:bg-zinc-800 -z-10 origin-left"
                      />
                    </motion.h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: 0.2
                    }}
                    className="space-y-3"
                  >
                    <p className={`text-sm sm:text-base text-zinc-600 dark:text-zinc-400`}>
                      I'm a self taught builder, constantly shipping and greating while studying data science @ UCSD on the side
                    </p>
                    <p className={`text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-[45vh]`}>
                      6 months ago I printed 'hello world' for the first time. I'm now building to improve productivity with technology. <b><em>Flip the switch</em></b> in the top right to see my projects!
                    </p>
                    <p className={`text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-[45vh]`}>
                      If you're looking to build something cool, reach out and let's chat! - <a href="mailto:tomzheng1012@gmail.com?subject=let's%20chat" className="font-bold hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">tomzheng1012@gmail.com</a> - I always respond.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </MotionConfig>
  );
}
