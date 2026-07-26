"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, textReveal, fadeUp } from "@/lib/motion/variants";
import { heroData } from "@/data/hero";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import the animated background so it doesn't block the main thread
const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <Section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20">
      <AnimatedBackground />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="px-4 py-1 text-sm md:text-base border border-secondary/20 shadow-sm backdrop-blur-md bg-secondary/10">
              {heroData.badge}
            </Badge>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div variants={textReveal}>
              <Heading level="h1" as="h1" className="text-5xl md:text-7xl lg:text-8xl tracking-tighter drop-shadow-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">Reimagining Nepal</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Through Technology</span>
              </Heading>
            </motion.div>
          </div>

          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance"
          >
            {heroData.subheadline}
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8">
              <Link href={heroData.primaryCTA.href}>{heroData.primaryCTA.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-background/50 backdrop-blur-sm">
              <Link href={heroData.secondaryCTA.href}>{heroData.secondaryCTA.label}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
