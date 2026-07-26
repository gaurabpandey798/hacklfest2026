"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { GradientBorder } from "@/components/shared/gradient-border";
import { ctaData } from "@/data/cta";
import { setupScrollReveal } from "@/lib/motion/scroll";
import Link from "next/link";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const mm = setupScrollReveal(sectionRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
    });
    return () => mm.revert();
  }, []);

  return (
    <Section id="register" className="pb-24 pt-12 overflow-hidden">
      <Container>
        <div ref={sectionRef} className="max-w-5xl mx-auto">
          <GradientBorder wrapperClassName="rounded-3xl shadow-2xl">
            <div className="flex flex-col items-center justify-center p-12 md:p-20 text-center bg-card rounded-[23px] relative overflow-hidden">
              {/* Decorative blobs inside the CTA */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />
              
              <Heading level="h2" className="mb-6 relative z-10">{ctaData.headline}</Heading>
              <p className="text-xl text-muted-foreground max-w-2xl mb-10 relative z-10">
                {ctaData.subheadline}
              </p>
              <Button asChild size="lg" className="relative z-10 h-14 px-10 text-lg">
                <Link href={ctaData.button.href}>{ctaData.button.label}</Link>
              </Button>
            </div>
          </GradientBorder>
        </div>
      </Container>
    </Section>
  );
}
