import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

/* Base Alert */
const Alert = forwardRef(function Alert(
  { className, variant = "default", ...props },
  ref
) {
  const variantStyle =
    variant === "destructive"
      ? "border-red-500 text-red-500 bg-red-500/10"
      : "bg-background text-foreground border";

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg p-4",
        variantStyle,
        className
      )}
      {...props}
    />
  );
});

/* Title */
const AlertTitle = forwardRef(function AlertTitle(
  { className, ...props },
  ref
) {
  return (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  );
});

/* Description */
const AlertDescription = forwardRef(function AlertDescription(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("text-sm leading-relaxed", className)}
      {...props}
    />
  );
});

export { Alert, AlertTitle, AlertDescription };
