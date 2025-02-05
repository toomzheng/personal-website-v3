'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="relative">
        {/* Circle with photo */}
        <motion.div 
          layout
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: isStarted ? -600 : -128,
            y: isStarted ? -200 : -128,
            width: isStarted ? '400px' : '256px',
            height: isStarted ? '400px' : '256px',
          }}
          transition={{ 
            duration: 0.8,
            layout: { duration: 0.8 },
            width: {
              type: "spring",
              stiffness: 100,
              damping: 20
            },
            height: {
              type: "spring",
              stiffness: 100,
              damping: 20
            }
          }}
          className="rounded-full overflow-hidden relative border-4 border-zinc-900"
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
        <AnimatePresence>
          {!isStarted && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsStarted(true)}
              className="absolute left-1/2 -translate-x-1/2 mt-8 px-8 py-3 bg-zinc-900 text-white rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              begin
            </motion.button>
          )}
        </AnimatePresence>

        {/* Text Content */}
        <AnimatePresence>
          {isStarted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -left-[600px] top-[420px] w-[400px]"
            >
              <div className="space-y-6">
                <div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl font-normal text-zinc-900 leading-tight"
                  >
                    Hey! I'm
                  </motion.h1>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: [1, 1.05, 1],
                      transition: {
                        duration: 1,
                        delay: 0.9,
                        scale: {
                          times: [0, 0.5, 1],
                          duration: 1000
                        }
                      }
                    }}
                    className="text-4xl font-bold text-zinc-900 leading-tight relative"
                  >
                    <span className="relative z-10">Tom Zheng</span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 1,
                        transition: {
                          delay: 1.2,
                          duration: 10,
                          ease: "linear"
                        }
                      }}
                      style={{ originX: 0 }}
                      className="absolute bottom-0 left-0 h-3 w-full bg-zinc-200 -z-10"
                    />
                  </motion.h1>
                </div>

                <div className="space-y-3">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="text-base text-zinc-600"
                  >
                    I'm a self taught builder, shipper, and creator studying data science @ UCSD on the side
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-base text-zinc-600"
                  >
                    6 months ago I printed 'hello world' for the first time. I'm now building to improve productivity with technology
                  </motion.p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
