"use client";

import type { TokenStats } from "@/types";
import { Type, Hash, BarChart3, TrendingDown } from "lucide-react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

interface StatsPanelProps {
  stats: TokenStats;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}

function StatCard({ icon, label, value, suffix = "", decimals = 0 }: StatCardProps) {
  return (
    <div className="bg-surface-card border border-sand/50 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
      <div className="p-1.5 rounded-lg bg-terracotta/10 shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-espresso tabular-nums leading-none">
            <AnimatedNumber value={value} decimals={decimals} />
          </span>
          {suffix && (
            <span className="text-xs font-semibold text-espresso-muted">{suffix}</span>
          )}
        </div>
        <p className="text-[10px] text-espresso-secondary font-medium mt-0.5">{label}</p>
      </div>
    </div>
  );
}

export default function StatsPanel({ stats }: StatsPanelProps) {
  return (
    <div className="grid grid-cols-4 gap-2">
      <StatCard
        icon={<Type className="w-3.5 h-3.5 text-terracotta" />}
        label="Chars"
        value={stats.charCount}
      />
      <StatCard
        icon={<Hash className="w-3.5 h-3.5 text-terracotta" />}
        label="Tokens"
        value={stats.tokenCount}
      />
      <StatCard
        icon={<BarChart3 className="w-3.5 h-3.5 text-terracotta" />}
        label="Avg Len"
        value={stats.avgCharsPerToken}
        decimals={1}
      />
      <StatCard
        icon={<TrendingDown className="w-3.5 h-3.5 text-terracotta" />}
        label="Ratio"
        value={stats.compressionRatio}
        suffix="%"
      />
    </div>
  );
}
