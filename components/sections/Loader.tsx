"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Simulate initial cinematic loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, prefersReducedMotion ? 500 : 2200);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          aria-live="polite"
          role="status"
          aria-label="Loading MBMC HackFest 2026"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: prefersReducedMotion ? 0 : "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground"
            >
              MBMC HackFest
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-4">
            <motion.p
              initial={{ y: prefersReducedMotion ? 0 : "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-muted-foreground tracking-widest uppercase text-sm"
            >
              System Initializing
            </motion.p>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[2px] w-48 bg-primary mt-8 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
