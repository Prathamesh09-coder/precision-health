import React, { forwardRef } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../../lib/utils";

/* Root */
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

/* Content */
const HoverCardContent = forwardRef(function HoverCardContent(
  { className, align = "center", sideOffset = 4, ...props },
  ref
) {
  return (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-64 rounded-md border bg-white p-4 shadow-md",
        className
      )}
      {...props}
    />
  );
});

export { HoverCard, HoverCardTrigger, HoverCardContent };
