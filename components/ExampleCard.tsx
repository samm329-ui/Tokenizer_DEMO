"use client";

import type { Example } from "@/types";
import { truncateText } from "@/lib/utils";
import {
  FileText,
  Code2,
  Smile,
  FileSearch,
  Globe,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

interface ExampleCardProps {
  example: Example;
  onSelect: (text: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Normal: <FileText className="w-3.5 h-3.5" />,
  Code: <Code2 className="w-3.5 h-3.5" />,
  Emoji: <Smile className="w-3.5 h-3.5" />,
  Long: <FileSearch className="w-3.5 h-3.5" />,
  Multilingual: <Globe className="w-3.5 h-3.5" />,
  "Edge Case": <AlertTriangle className="w-3.5 h-3.5" />,
};

const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
  Normal: { bg: "bg-blue-50", text: "text-blue-700", accent: "#3B82F6" },
  Code: { bg: "bg-emerald-50", text: "text-emerald-700", accent: "#10B981" },
  Emoji: { bg: "bg-amber-50", text: "text-amber-700", accent: "#F59E0B" },
  Long: { bg: "bg-purple-50", text: "text-purple-700", accent: "#8B5CF6" },
  Multilingual: { bg: "bg-rose-50", text: "text-rose-700", accent: "#F43F5E" },
  "Edge Case": { bg: "bg-stone-100", text: "text-stone-700", accent: "#78716C" },
};

export default function ExampleCard({ example, onSelect }: ExampleCardProps) {
  const colors = categoryColors[example.category] || categoryColors.Normal;

  return (
    <div
      onClick={() => onSelect(example.text)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(example.text);
        }
      }}
      className="bg-surface-card rounded-xl border border-sand/60 px-4 py-3 cursor-pointer transition-all duration-200
                 hover:border-terracotta/50 hover:shadow-lg hover:shadow-terracotta/10 hover:bg-surface-card/80
                 hover:scale-[1.02] active:scale-[0.98] group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold ${colors.bg} ${colors.text} shrink-0`}
          >
            {categoryIcons[example.category]}
            {example.category}
          </span>
          <h4 className="text-sm font-medium text-espresso truncate group-hover:text-terracotta transition-colors">
            {example.name}
          </h4>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-espresso-muted/40 group-hover:text-terracotta group-hover:translate-x-0.5 transition-all shrink-0" />
      </div>
      <p className="text-xs text-espresso-muted/80 font-mono truncate leading-snug">
        {truncateText(example.text || "(empty)", 60)}
      </p>
    </div>
  );
}
