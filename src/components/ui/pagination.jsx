import React, { forwardRef } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";

/* Wrapper */
const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

/* UL container */
const PaginationContent = forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex items-center gap-2", className)} {...props} />
));

/* LI */
const PaginationItem = forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));

/* Link button */
const PaginationLink = ({ className, isActive, ...props }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex items-center justify-center h-9 min-w-9 px-3 rounded-md text-sm border",
      isActive
        ? "bg-gray-200 text-black"
        : "hover:bg-gray-100 text-gray-700",
      className
    )}
    {...props}
  />
);

/* Previous */
const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    Previous
  </PaginationLink>
);

/* Next */
const PaginationNext = ({ className, ...props }) => (
  <PaginationLink className={cn("gap-1 pr-2.5", className)} {...props}>
    Next
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);

/* Dots */
const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
