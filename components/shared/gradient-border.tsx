import * as React from "react"
import { cn } from "@/utils/cn"

export interface GradientBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  wrapperClassName?: string
}

const GradientBorder = React.forwardRef<HTMLDivElement, GradientBorderProps>(
  ({ className, wrapperClassName, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative rounded-xl p-[1px] overflow-hidden bg-gradient-to-r from-primary to-secondary",
          wrapperClassName
        )}
      >
        <div
          ref={ref}
          className={cn("h-full w-full bg-card rounded-[11px]", className)}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  }
)
GradientBorder.displayName = "GradientBorder"

export { GradientBorder }
