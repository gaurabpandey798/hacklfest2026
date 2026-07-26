"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/shared/glass-card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    // The eventDate is explicitly anchored to +05:45 in config/site.ts
    const targetDate = new Date(siteConfig.eventDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsPassed(true);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="py-12 md:py-16 relative z-20 -mt-16 md:-mt-24">
      <Container>
        <div aria-live="polite" aria-atomic="true">
          {isPassed ? (
            <GlassCard className="max-w-3xl mx-auto p-8 text-center border-primary/30">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Event is Live! Welcome to HackFest 2026.
              </h2>
            </GlassCard>
          ) : (
            <GlassCard className="max-w-4xl mx-auto p-6 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                {[
                  { label: "Days", value: timeLeft?.days },
                  { label: "Hours", value: timeLeft?.hours },
                  { label: "Minutes", value: timeLeft?.minutes },
                  { label: "Seconds", value: timeLeft?.seconds },
                ].map((unit) => (
                  <div key={unit.label} className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl font-heading font-bold text-foreground tabular-nums tracking-tighter">
                      {unit.value !== undefined ? String(unit.value).padStart(2, '0') : "00"}
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider mt-2">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          )}
        </div>
      </Container>
    </Section>
  );
}
