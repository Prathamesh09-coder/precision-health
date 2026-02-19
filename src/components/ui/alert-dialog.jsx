import React, { forwardRef } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib/utils";

/* Root */
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

/* Overlay */
const AlertDialogOverlay = forwardRef(function AlertDialogOverlay(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80",
        className
      )}
      {...props}
    />
  );
});

/* Content */
const AlertDialogContent = forwardRef(function AlertDialogContent(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-background p-6 shadow-lg rounded-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
});

/* Layout helpers */
function AlertDialogHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
  );
}

function AlertDialogFooter({ className, ...props }) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
  );
}

/* Title */
const AlertDialogTitle = forwardRef(function AlertDialogTitle(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
});

/* Description */
const AlertDialogDescription = forwardRef(function AlertDialogDescription(
  { className, ...props },
  ref
) {
  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

/* Buttons */
const AlertDialogAction = forwardRef(function AlertDialogAction(props, ref) {
  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className="px-4 py-2 rounded-md bg-primary text-white hover:opacity-90"
      {...props}
    />
  );
});

const AlertDialogCancel = forwardRef(function AlertDialogCancel(props, ref) {
  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className="px-4 py-2 rounded-md border mt-2 sm:mt-0"
      {...props}
    />
  );
});

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
