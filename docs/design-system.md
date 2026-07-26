# Design System

## Typography
- **Heading/Display**: Space Grotesk (next/font/google) mapped to `var(--font-heading)`
- **Body/UI**: Inter (next/font/google) mapped to `var(--font-sans)`

## Colors
- **Primary**: Blue (`#1e40af` light / `#3b82f6` dark)
- **Secondary**: Cyan (`#06b6d4` light / `#22d3ee` dark)
- **Background**: White light / Slate 950 dark

## Animations
Motion guidelines strictly rely on `lib/motion/variants.ts` rather than wrapper components. Apply the exported Framer Motion variants using `variants={fadeUp}` on your motion components.
