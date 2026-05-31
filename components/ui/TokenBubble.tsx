"use client";

import { cn } from "@/lib/utils";
import type { TokenInfo } from "@/types";

interface TokenBubbleProps {
  token: TokenInfo;
  index: number;
}

const TOKEN_COLORS = [
  { bg: "#C86432", text: "#FFF" },
  { bg: "#D26F2E", text: "#FFF" },
  { bg: "#DD7B29", text: "#FFF" },
  { bg: "#E58825", text: "#FFF" },
  { bg: "#F1B12D", text: "#3A2418" },
];

function getDisplayText(text: string): string {
  return text
    .replace(/\t/g, "→")
    .replace(/\n/g, "↵")
    .replace(/\r/g, "");
}

function getTokenColor(index: number): { bg: string; text: string } {
  return TOKEN_COLORS[index % TOKEN_COLORS.length];
}

export default function TokenBubble({ token, index }: TokenBubbleProps) {
  const displayText = getDisplayText(token.text);
  const isEmpty = token.text === "";
  const color = isEmpty ? { bg: "#3A3430", text: "#9B8A80" } : getTokenColor(index);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 h-[36px] px-3 rounded-lg text-[13px] font-mono font-medium",
        "transition-all duration-150 cursor-default select-none group relative",
        "hover:brightness-110 hover:scale-105",
        "animate-token-appear",
        isEmpty && "border border-dashed border-dark-muted"
      )}
      style={{
        backgroundColor: color.bg,
        color: color.text,
        animationDelay: `${Math.min(index * 20, 400)}ms`,
      }}
      title={`Token ID: ${token.id}`}
    >
      <span className="max-w-[160px] truncate leading-none">
        {isEmpty ? "∅" : displayText}
      </span>
      <span className="hidden group-hover:inline-block text-[10px] opacity-50 ml-0.5 font-sans">
        {token.id}
      </span>
    </div>
  );
}
