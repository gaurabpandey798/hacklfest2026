import * as React from "react"
import { cn } from "@/utils/cn"
import { Card } from "./card"

const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "bg-background/40 backdrop-blur-md border-white/20 shadow-xl",
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
