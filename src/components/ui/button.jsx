import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

/*
variants:
default
destructive
outline
secondary
ghost
link

sizes:
default
sm
lg
icon
*/

const Button = forwardRef(function Button(
  { className, variant = "default", size = "default", ...props },
  ref
) {
  const variantStyles = {
    default: "bg-primary text-white hover:opacity-90",
    destructive: "bg-red-500 text-white hover:opacity-90",
    outline: "border border-input bg-background hover:bg-accent",
    secondary: "bg-secondary text-white hover:opacity-90",
    ghost: "hover:bg-accent",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant] || variantStyles.default,
        sizeStyles[size] || sizeStyles.default,
        className
      )}
      {...props}
    />
  );
});

export { Button };
