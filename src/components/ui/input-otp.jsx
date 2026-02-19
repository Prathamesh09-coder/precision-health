import React, { forwardRef, useContext } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "../../lib/utils";

/* Root Input */
const InputOTP = forwardRef(function InputOTP(
  { className, containerClassName, ...props },
  ref
) {
  return (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 disabled:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
});

/* Group */
const InputOTPGroup = forwardRef(function InputOTPGroup(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("flex items-center", className)} {...props} />;
});

/* Slot */
const InputOTPSlot = forwardRef(function InputOTPSlot(
  { index, className, ...props },
  ref
) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border text-sm",
        isActive && "ring-2 ring-blue-500",
        className
      )}
      {...props}
    >
      {char}

      {hasFakeCaret && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-4 w-px bg-black animate-pulse" />
        </div>
      )}
    </div>
  );
});

/* Separator */
const InputOTPSeparator = forwardRef(function InputOTPSeparator(props, ref) {
  return (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  );
});

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
