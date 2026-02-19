import React, { forwardRef } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "./src/lib/utils";
import { Dialog, DialogContent } from "./src/components/ui/dialog";

/* Root Command */
const Command = forwardRef(function Command({ className, ...props }, ref) {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )}
      {...props}
    />
  );
});

/* Dialog Wrapper */
function CommandDialog({ children, ...props }) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

/* Input */
const CommandInput = forwardRef(function CommandInput(
  { className, ...props },
  ref
) {
  return (
    <div className="flex items-center border-b px-3">
      <Search className="mr-2 h-4 w-4 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
    </div>
  );
});

/* List */
const CommandList = forwardRef(function CommandList(
  { className, ...props },
  ref
) {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn("max-h-[300px] overflow-y-auto", className)}
      {...props}
    />
  );
});

/* Empty */
const CommandEmpty = forwardRef(function CommandEmpty(props, ref) {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm"
      {...props}
    />
  );
});

/* Group */
const CommandGroup = forwardRef(function CommandGroup(
  { className, ...props },
  ref
) {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn("p-1 text-foreground", className)}
      {...props}
    />
  );
});

/* Item */
const CommandItem = forwardRef(function CommandItem(
  { className, ...props },
  ref
) {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[selected=true]:bg-accent",
        className
      )}
      {...props}
    />
  );
});

/* Separator */
const CommandSeparator = forwardRef(function CommandSeparator(
  { className, ...props },
  ref
) {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn("my-1 h-px bg-border", className)}
      {...props}
    />
  );
});

/* Shortcut */
function CommandShortcut({ className, ...props }) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
