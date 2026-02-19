import React, { forwardRef } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { cn } from "../lib/utils";   // fix path (no @ alias)

const NavLink = forwardRef(function NavLink(
  { className, activeClassName, pendingClassName, to, ...props },
  ref
) {
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      className={({ isActive, isPending }) =>
        cn(
          className,
          isActive ? activeClassName : "",
          isPending ? pendingClassName : ""
        )
      }
      {...props}
    />
  );
});

export { NavLink };
