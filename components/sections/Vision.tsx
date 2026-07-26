"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { GlassCard } from "@/components/shared/glass-card";
import { visionData } from "@/data/vision";
import { setupScrollReveal } from "@/lib/motion/scroll";

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const mm = setupScrollReveal(sectionRef.current, {
      y: 0,
      x: -50, // slide in from left
      duration: 1,
    });
    return () => mm.revert();
  }, []);

  return (
    <Section id="vision" className="relative overflow-hidden bg-primary/5">
      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <Container>
        <GlassCard ref={sectionRef as React.RefObject<HTMLDivElement>} className="max-w-4xl mx-auto p-8 md:p-16 border-primary/20 bg-background/60">
          <Heading level="h2" className="text-center mb-8">{visionData.headline}</Heading>
          <p className="text-xl md:text-2xl text-center text-foreground font-medium leading-relaxed text-balance">
            &quot;{visionData.content}&quot;
          </p>
        </GlassCard>
      </Container>
    </Section>
  );
}
