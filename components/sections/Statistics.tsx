"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/shared/card";
import { statsData } from "@/data/stats";
import { gsap } from "gsap";
import { setupScrollReveal } from "@/lib/motion/scroll";

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Overall section reveal
    const mm = setupScrollReveal(sectionRef.current, {
      y: 30,
      duration: 0.8
    });

    // Custom GSAP counter logic strictly inside matchMedia to respect reduced-motion
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const counters = gsap.utils.toArray<HTMLElement>('.stat-counter', sectionRef.current);
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || "0");
        gsap.fromTo(counter, 
          { innerHTML: 0 }, 
          {
            innerHTML: target,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            snap: { innerHTML: 1 },
            onUpdate: function() {
              counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString();
            }
          }
        );
      });
    });
    // If prefers-reduced-motion: reduce, the fallback is just the initial server-rendered value!

    return () => mm.revert();
  }, []);

  return (
    <Section ref={sectionRef} id="statistics" className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statsData.map((stat, i) => (
            <Card key={i} className="bg-background border-none shadow-none text-center">
              <CardContent className="pt-6">
                <div className="flex items-baseline justify-center gap-1 font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary">
                  {stat.prefix && <span className="text-2xl md:text-3xl">{stat.prefix}</span>}
                  <span className="stat-counter tabular-nums tracking-tighter" data-target={stat.value}>
                    {stat.value}
                  </span>
                  {stat.suffix && <span className="text-3xl md:text-4xl">{stat.suffix}</span>}
                </div>
                <p className="mt-2 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
