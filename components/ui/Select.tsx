"use client";

import { cn } from "@/lib/utils";
import { type SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, children, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-xs text-espresso-secondary font-medium">{label}</label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full h-11 px-4 pr-9 rounded-xl text-sm font-medium text-espresso",
              "bg-white/60 backdrop-blur-xl border border-white/40",
              "appearance-none cursor-pointer",
              "shadow-[0_4px_16px_rgba(0,0,0,.06),0_1px_4px_rgba(0,0,0,.04)]",
              "hover:bg-white/70 hover:border-terracotta/30 hover:shadow-[0_4px_20px_rgba(200,100,50,.1)]",
              "transition-all duration-200 ease-premium",
              "[&>option]:bg-surface-card [&>option]:text-espresso [&>option]:py-2",
              className
            )}
            style={{ outline: 'none', boxShadow: 'none' }}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.boxShadow = 'none';
              e.target.style.borderColor = 'rgba(200, 100, 50, 0.4)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso-muted pointer-events-none" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
