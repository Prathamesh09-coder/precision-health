import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Input = forwardRef(function Input(
  { className, type = "text", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});

export { Input };
