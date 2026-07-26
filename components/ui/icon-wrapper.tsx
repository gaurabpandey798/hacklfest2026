import * as React from "react"
import { cn } from "@/utils/cn"
import { type LucideIcon } from "lucide-react"

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  size?: number
  iconClassName?: string
}

const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  ({ className, icon: Icon, size = 24, iconClassName, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-primary/10 text-primary p-2",
          className
        )}
        {...props}
      >
        <Icon size={size} className={cn(iconClassName)} />
      </div>
    )
  }
)
IconWrapper.displayName = "IconWrapper"

export { IconWrapper }
