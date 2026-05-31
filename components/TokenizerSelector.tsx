"use client";

import Select from "@/components/ui/Select";
import type { ModelType, ModelOption } from "@/types";
import { Sparkles } from "lucide-react";

const modelOptions: ModelOption[] = [
  { value: "gpt-4o", label: "GPT-4o", description: "Latest flagship" },
  { value: "gpt-4o-mini", label: "GPT-4o Mini", description: "Fast & cheap" },
  { value: "cl100k_base", label: "cl100k_base", description: "Base encoding" },
  { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo", description: "Legacy" },
];

interface TokenizerSelectorProps {
  value: ModelType;
  onChange: (model: ModelType) => void;
}

export default function TokenizerSelector({
  value,
  onChange,
}: TokenizerSelectorProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center gap-1.5 text-espresso-muted">
        <Sparkles className="w-3.5 h-3.5 text-terracotta" />
        <span className="text-xs font-medium">Model</span>
      </div>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value as ModelType)}
        className="min-w-[220px]"
      >
        {modelOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label} — {opt.description}
          </option>
        ))}
      </Select>
    </div>
  );
}
