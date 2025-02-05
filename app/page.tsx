'use client';

import Image from 'next/image';
import { motion, MotionConfig } from 'framer-motion';
import { useStartedStore } from '@/lib/hooks/use-is-started';
import { PullMeArrow } from '@/components/pull-me-arrow';

export default function Home() {
  const { isStarted, setIsStarted } = useStartedStore();

  const springConfig = {
    type: "spring",
    stiffness: 40,
    damping: 25,
    restDelta: 0.001,
    restSpeed: 0.001
  };

  return (
    <MotionConfig transition={springConfig}>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 transition-colors bg-background text-foreground overflow-x-hidden">
        <PullMeArrow />
        <motion.div 
          layout
          className="relative w-full max-w-7xl mx-auto"
        >
          <motion.div 
            layout
            className="flex flex-col items-center justify-center gap-8"
            style={{
              alignItems: isStarted ? 'flex-start' : 'center',
              paddingLeft: isStarted ? '3rem' : '0'
            }}
          >
            {/* Circle with photo */}
            <motion.div 
              layout
              initial={false}
              animate={{
                width: isStarted ? 400 : 256,
                height: isStarted ? 400 : 256,
                y: isStarted ? -40 : 0,
                scale: 1
              }}
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid',
                borderColor: 'var(--border-color)',
                position: 'relative'
              }}
            >
              <Image
                src="/notion-face-portrait.png"
                alt="Tom Zheng"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Begin Button */}
            {!isStarted && (
              <motion.button
                layout
                onClick={() => setIsStarted(true)}
                className="mt-8 px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full text-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                begin
              </motion.button>
            )}

            {/* Text Content */}
            {isStarted && (
              <motion.div
                layout
                className="w-full max-w-[400px] space-y-6"
                style={{
                  y: 40,
                  opacity: 1
                }}
              >
                <motion.div layout>
                  <motion.h1 
                    layout
                    className="text-2xl sm:text-3xl md:text-4xl font-normal text-zinc-900 dark:text-zinc-100 leading-tight"
                  >
                    Hey! I'm
                  </motion.h1>
                  <motion.h1 
                    layout
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight relative inline-block"
                  >
                    <span className="relative z-10">Tom Zheng</span>
                    <motion.div
                      layout
                      className="absolute bottom-0 left-0 h-3 w-full bg-zinc-200 dark:bg-zinc-800 -z-10"
                    />
                  </motion.h1>
                </motion.div>

                <motion.div 
                  layout 
                  className="space-y-3"
                >
                  <motion.p 
                    layout
                    className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400"
                  >
                    I'm a self taught builder, shipper, and creator studying data science @ UCSD on the side
                  </motion.p>
                  <motion.p 
                    layout
                    className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400"
                  >
                    6 months ago I printed 'hello world' for the first time. I'm now building to improve productivity with technology
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </main>
    </MotionConfig>
  );
}
