import React, { forwardRef } from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../lib/utils";

/* Root */
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

/* Sub Trigger */
const ContextMenuSubTrigger = forwardRef(function ContextMenuSubTrigger(
  { className, inset, children, ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm focus:bg-accent",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  );
});

/* Content */
const ContextMenuContent = forwardRef(function ContextMenuContent(
  { className, ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(
          "z-50 min-w-[8rem] rounded-md border bg-white p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
});

/* Item */
const ContextMenuItem = forwardRef(function ContextMenuItem(
  { className, inset, ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        "flex items-center rounded-sm px-2 py-1.5 text-sm cursor-default hover:bg-gray-100",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
});

/* Checkbox Item */
const ContextMenuCheckboxItem = forwardRef(function ContextMenuCheckboxItem(
  { className, children, checked, ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      checked={checked}
      className={cn("flex items-center pl-8 pr-2 py-1.5 text-sm", className)}
      {...props}
    >
      <span className="absolute left-2">
        <ContextMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
});

/* Radio Item */
const ContextMenuRadioItem = forwardRef(function ContextMenuRadioItem(
  { className, children, ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn("flex items-center pl-8 pr-2 py-1.5 text-sm", className)}
      {...props}
    >
      <span className="absolute left-2">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
});

/* Label */
const ContextMenuLabel = forwardRef(function ContextMenuLabel(
  { className, inset, ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
      {...props}
    />
  );
});

/* Separator */
const ContextMenuSeparator = forwardRef(function ContextMenuSeparator(
  { className, ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn("my-1 h-px bg-gray-200", className)}
      {...props}
    />
  );
});

/* Shortcut */
function ContextMenuShortcut({ className, ...props }) {
  return (
    <span className={cn("ml-auto text-xs text-gray-500", className)} {...props} />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
