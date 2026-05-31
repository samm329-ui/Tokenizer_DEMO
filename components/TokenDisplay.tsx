"use client";

import { useState } from "react";
import TokenBubble from "@/components/ui/TokenBubble";
import Button from "@/components/ui/Button";
import type { TokenInfo } from "@/types";
import { copyToClipboard } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

interface TokenDisplayProps {
  tokens: TokenInfo[];
}

export default function TokenDisplay({ tokens }: TokenDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyIds = async () => {
    const ids = tokens.map((t) => t.id).join(", ");
    await copyToClipboard(ids);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (tokens.length === 0) {
    return (
      <div className="bg-dark rounded-2xl p-6 min-h-[140px] flex items-center justify-center">
        <p className="text-sm text-white/40 font-medium">
          Start typing to visualize how AI sees your text
        </p>
      </div>
    );
  }

  return (
    <div className="bg-dark rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/8">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-white/90">Token Breakdown</h3>
          <span className="inline-flex items-center px-2 py-0.5 bg-terracotta/20 text-terracotta rounded-full text-[11px] font-semibold">
            {tokens.length}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopyIds}
          className="gap-1 text-white/50 hover:text-white/80 hover:bg-white/8 text-xs"
        >
          {copied ? (
            <span className="flex items-center gap-1 text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              Copied
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Copy className="w-3.5 h-3.5" />
              Copy IDs
            </span>
          )}
        </Button>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5">
          {tokens.map((token, idx) => (
            <TokenBubble
              key={`${token.id}-${idx}`}
              token={token}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
