"use client"

import * as React from "react"
import * as Progress from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof Progress.Root>,
  React.ComponentPropsWithoutRef<typeof Progress.Root> & {
    value?: number
  }
>(({ className, value, ...props }, ref) => (
  <Progress.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <Progress.Indicator
      className="h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Progress.Root>
))

ProgressBar.displayName = "ProgressBar"

export { ProgressBar }
