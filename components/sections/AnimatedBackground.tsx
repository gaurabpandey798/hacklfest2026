"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    // Fallback static background for reduced motion or SSR
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]" />
      </div>
    );
  }

  // Dynamic CSS animated gradient mesh
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background selection:bg-primary/30">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[100px] animate-[ping_12s_ease-in-out_infinite]" />
      
      {/* Optional faint grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
}
