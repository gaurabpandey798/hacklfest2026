# Component Inventory

This document tracks all foundational UI components available in Phase 1 for composing the layout. 

## Atoms (`components/ui/`)

### 1. Button
- **Props**: `variant` (default, destructive, outline, secondary, ghost, link), `size` (default, sm, lg, icon), `asChild`.
- **Usage**: General interactions, links that look like buttons, form submissions. Accessible out of the box with standard focus rings.

### 2. Badge
- **Props**: `variant` (default, secondary, destructive, outline).
- **Usage**: Small status indicators, tags, or unclickable labels.

### 3. Chip
- **Props**: `variant` (default, secondary, outline).
- **Usage**: Interactive tags or filtering UI. (Often rounded, slightly different visual weight than badges).

### 4. Divider
- **Props**: `orientation` (horizontal, vertical).
- **Usage**: Thematic break or layout separation. Maps to semantic `<hr>`.

### 5. Heading
- **Props**: `level` (h1, h2, h3, h4, h5, h6), `as` (optional polymorphic element override).
- **Usage**: Standardized, responsive typographic headers mapping to `font-heading`.

### 6. IconWrapper
- **Props**: `icon` (LucideIcon), `size`, `iconClassName`.
- **Usage**: Standardizes the presentation of lucide-react icons inside a thematic bounded box (often primary background with opacity).

## Molecules (`components/shared/`)

### 7. Card
- **Sub-components**: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
- **Usage**: The standard thematic content container.

### 8. GlassCard
- **Props**: Inherits `Card` props.
- **Usage**: Used for premium, floating UI elements over animated or complex backgrounds. Integrates `backdrop-blur` and translucent borders.

### 9. GradientBorder
- **Props**: `wrapperClassName`.
- **Usage**: Wraps content in a 1px animated or static gradient border (primary to secondary).

## Layouts (`components/layout/`)

### 10. Container
- **Usage**: Sets the maximum width (`max-w-7xl`) and auto margins (`mx-auto`) to center content on large screens, with responsive padding.

### 11. Section
- **Usage**: Standardized vertical spacing (`py-16` to `py-32`) wrapper for major page sections. Semantic `<section>`.
