"use client";

import { categories, type CategoryFilter } from "@/lib/examples";
import {
  FileText,
  Code2,
  Smile,
  FileSearch,
  Globe,
  AlertTriangle,
} from "lucide-react";

interface ExampleFiltersProps {
  selected: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Normal: <FileText className="w-3 h-3" />,
  Code: <Code2 className="w-3 h-3" />,
  Emoji: <Smile className="w-3 h-3" />,
  Long: <FileSearch className="w-3 h-3" />,
  Multilingual: <Globe className="w-3 h-3" />,
  "Edge Case": <AlertTriangle className="w-3 h-3" />,
};

export default function ExampleFilters({
  selected,
  onChange,
}: ExampleFiltersProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {categories.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium
              transition-all duration-150 active:scale-95
              ${
                isActive
                  ? "bg-terracotta text-white shadow-sm"
                  : "text-espresso-muted hover:text-espresso hover:bg-sand/40"
              }
            `}
          >
            {iconMap[cat]}
            {cat}
          </button>
        );
      })}
    </div>
  );
}
