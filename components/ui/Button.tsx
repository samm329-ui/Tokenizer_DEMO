"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 ease-premium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-95";

    const variants = {
      primary:
        "bg-terracotta text-white hover:bg-terracotta-hover focus:ring-terracotta shadow-sm hover:shadow-md",
      secondary:
        "bg-surface-card text-espresso border border-sand hover:border-terracotta/30 hover:bg-white focus:ring-terracotta/30",
      ghost:
        "text-espresso-secondary hover:text-espresso hover:bg-sand/30 focus:ring-sand",
    };

    const sizes = {
      sm: "px-4 py-2 text-[13px] gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
