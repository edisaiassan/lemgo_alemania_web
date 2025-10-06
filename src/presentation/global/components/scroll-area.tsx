"use client"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { type ClassValue, clsx } from "clsx"
import { isValidElement } from "react"
import { twMerge } from "tailwind-merge"

// Tipos de props de Radix
type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaProps & {
  isVerticalCenter?: boolean
}

type ScrollBarProps = ScrollAreaPrimitive.ScrollAreaScrollbarProps & {
  thumbClassName?: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function ScrollArea({
  className,
  children,
  isVerticalCenter,
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(
          "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
          isVerticalCenter && "flex flex-col items-center justify-center-safe min-h-full"
        )}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  thumbClassName,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none z-50",
        orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={cn("relative flex-1 rounded-full", thumbClassName)}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}


export { ScrollArea, ScrollBar }
