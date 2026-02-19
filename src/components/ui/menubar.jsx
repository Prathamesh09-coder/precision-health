import React, { forwardRef } from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../lib/utils";

/* Root */
const Menubar = forwardRef(function Menubar({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cn("flex h-10 items-center space-x-1 rounded-md border p-1 bg-white", className)}
      {...props}
    />
  );
});

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

/* Trigger */
const MenubarTrigger = forwardRef(function MenubarTrigger({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn("px-3 py-1.5 text-sm rounded-sm cursor-default hover:bg-gray-100", className)}
      {...props}
    />
  );
});

/* Content */
const MenubarContent = forwardRef(function MenubarContent({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        className={cn("z-50 min-w-[12rem] rounded-md border bg-white p-1 shadow-md", className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
});

/* Item */
const MenubarItem = forwardRef(function MenubarItem({ className, inset, ...props }, ref) {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      className={cn("px-2 py-1.5 text-sm rounded-sm cursor-default hover:bg-gray-100", inset && "pl-8", className)}
      {...props}
    />
  );
});

/* Checkbox */
const MenubarCheckboxItem = forwardRef(function MenubarCheckboxItem(
  { className, children, checked, ...props },
  ref
) {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      checked={checked}
      className={cn("pl-8 pr-2 py-1.5 text-sm", className)}
      {...props}
    >
      <span className="absolute left-2">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
});

/* Radio */
const MenubarRadioItem = forwardRef(function MenubarRadioItem(
  { className, children, ...props },
  ref
) {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cn("pl-8 pr-2 py-1.5 text-sm", className)}
      {...props}
    >
      <span className="absolute left-2">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
});

/* Label */
const MenubarLabel = forwardRef(function MenubarLabel({ className, inset, ...props }, ref) {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
      {...props}
    />
  );
});

/* Separator */
const MenubarSeparator = forwardRef(function MenubarSeparator({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      className={cn("my-1 h-px bg-gray-200", className)}
      {...props}
    />
  );
});

/* Shortcut */
function MenubarShortcut({ className, ...props }) {
  return <span className={cn("ml-auto text-xs text-gray-500", className)} {...props} />;
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
