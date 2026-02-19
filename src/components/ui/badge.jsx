import React from "react";
import { cn } from "../../lib/utils";

function Badge({ className, variant = "default", ...props }) {
  const styles = {
    default: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    destructive: "bg-red-500 text-white",
    outline: "border text-foreground",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        styles[variant] || styles.default,
        className
      )}
      {...props}
    />
  );
}

export { Badge };
