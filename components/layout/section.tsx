import * as React from "react"
import { cn } from "@/utils/cn"

const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24 lg:py-32 w-full", className)}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
