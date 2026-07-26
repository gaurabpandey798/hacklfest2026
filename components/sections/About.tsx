"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { aboutData } from "@/data/about";
import { setupScrollReveal } from "@/lib/motion/scroll";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const mm = setupScrollReveal(sectionRef.current);
    
    if (imageRef.current) {
      const mmImage = setupScrollReveal(imageRef.current, {
        y: 40,
        opacity: 0,
        delay: 0.2,
      });
      return () => {
        mm.revert();
        mmImage.revert();
      };
    }
    return () => mm.revert();
  }, []);

  return (
    <Section ref={sectionRef} id="about" className="overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Heading level="h2">{aboutData.headline}</Heading>
            <Divider className="w-16 h-1 bg-primary border-none rounded" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {aboutData.content}
            </p>
          </div>
          <div ref={imageRef} className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
