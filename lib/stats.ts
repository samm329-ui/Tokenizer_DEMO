import type { TokenStats } from "@/types";
import { getTokenCount } from "./tokenizers";

export function calculateStats(text: string): TokenStats {
  const charCount = text.length;
  const tokenCount = getTokenCount(text);
  const avgCharsPerToken =
    tokenCount > 0 ? Number((charCount / tokenCount).toFixed(2)) : 0;
  const compressionRatio =
    tokenCount > 0
      ? Number(((1 - tokenCount / Math.max(charCount, 1)) * 100).toFixed(1))
      : 0;

  return {
    charCount,
    tokenCount,
    avgCharsPerToken,
    compressionRatio,
  };
}
