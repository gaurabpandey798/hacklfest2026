"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { philosophyData } from "@/data/philosophy";
import { setupScrollReveal } from "@/lib/motion/scroll";
import { gsap } from "gsap";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const mm = setupScrollReveal(sectionRef.current);
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Staggered cards reveal
      gsap.from(".philosophy-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <Section ref={sectionRef} id="philosophy" className="bg-muted/10 overflow-hidden">
      <Container>
        <Heading level="h2" className="text-center mb-12 md:mb-16">
          {philosophyData.headline}
        </Heading>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {philosophyData.pillars.map((pillar, index) => (
            <Card key={index} className="philosophy-card border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <IconWrapper icon={pillar.icon} size={32} className="w-16 h-16 mb-4" />
                <CardTitle>{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
