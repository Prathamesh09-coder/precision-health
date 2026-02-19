import React, { forwardRef } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

/* Root */
const NavigationMenu = forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

/* List */
const NavigationMenuList = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("flex list-none items-center space-x-2", className)}
    {...props}
  />
));

/* Item */
const NavigationMenuItem = NavigationMenuPrimitive.Item;

/* Trigger Button */
const NavigationMenuTrigger = forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="ml-2 h-4 w-4 transition-transform" />
  </NavigationMenuPrimitive.Trigger>
));

/* Dropdown Content */
const NavigationMenuContent = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "absolute top-full left-0 mt-2 rounded-md border bg-white p-4 shadow-lg",
      className
    )}
    {...props}
  />
));

/* Link */
const NavigationMenuLink = NavigationMenuPrimitive.Link;

/* Viewport */
const NavigationMenuViewport = forwardRef(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center w-full">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        "relative mt-2 overflow-hidden rounded-md border bg-white shadow-md",
        className
      )}
      {...props}
    />
  </div>
));

/* Indicator arrow */
const NavigationMenuIndicator = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn("flex items-end justify-center h-2", className)}
    {...props}
  >
    <div className="h-2 w-2 rotate-45 bg-gray-300" />
  </NavigationMenuPrimitive.Indicator>
));

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
