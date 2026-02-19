import React, { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../lib/utils";

/* Root */
const Drawer = ({ shouldScaleBackground = true, ...props }) => {
  return <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />;
};

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

/* Overlay */
const DrawerOverlay = forwardRef(function DrawerOverlay(
  { className, ...props },
  ref
) {
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  );
});

/* Content */
const DrawerContent = forwardRef(function DrawerContent(
  { className, children, ...props },
  ref
) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-xl border bg-white",
          className
        )}
        {...props}
      >
        {/* drag handle */}
        <div className="mx-auto mt-4 h-2 w-24 rounded-full bg-gray-300" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});

/* Header */
const DrawerHeader = ({ className, ...props }) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);

/* Footer */
const DrawerFooter = ({ className, ...props }) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);

/* Title */
const DrawerTitle = forwardRef(function DrawerTitle(
  { className, ...props },
  ref
) {
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
});

/* Description */
const DrawerDescription = forwardRef(function DrawerDescription(
  { className, ...props },
  ref
) {
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  );
});

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
