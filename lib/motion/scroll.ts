import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable GSAP scroll reveal setup that automatically handles prefers-reduced-motion
 */
export const setupScrollReveal = (
  element: Element | string,
  options?: gsap.AnimationVars & { scrollTrigger?: ScrollTrigger.Vars }
) => {
  const mm = gsap.matchMedia();

  // Full animation for users who don't prefer reduced motion
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
        ...(typeof options?.scrollTrigger === "object" ? options.scrollTrigger : {})
      },
      ...(typeof options === "object" ? options : {})
    });
  });

  // Simplified/no-op animation for reduced motion (just fade in, no movement)
  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.from(element, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
        toggleActions: "play none none none",
      }
    });
  });

  return mm;
};
