# Architecture Documentation

## Core Technologies
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & GSAP
- **Scroll**: Lenis (Smooth Scrolling)

## Directory Structure
- `/app`: Next.js pages and layouts (Routing layer)
- `/components`: Presentation UI divided into `ui` (atoms), `shared` (molecules), and `sections` (organisms)
- `/providers`: Context providers (Theme, Lenis, etc.)
- `/hooks`: Custom React hooks
- `/lib`: Third-party integration logic (motion variants, specific library setups)
- `/utils`: Pure functions with NO React dependencies
- `/data`: Content data to keep UI separated from content

## Routing Strategy
The application utilizes a single-page architecture where `app/page.tsx` strictly acts as a composer of `<Section />` components. No business logic should reside in the `page.tsx` file.
