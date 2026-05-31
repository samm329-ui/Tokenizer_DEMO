import { encode, decode } from "gpt-tokenizer";
import type { TokenInfo } from "@/types";

export function encodeText(text: string): number[] {
  if (!text) return [];
  try {
    return encode(text);
  } catch {
    return [];
  }
}

export function decodeTokens(ids: number[]): string {
  if (!ids.length) return "";
  try {
    return decode(ids);
  } catch {
    return "";
  }
}

export function getTokenDetails(text: string): TokenInfo[] {
  if (!text) return [];
  try {
    const ids = encode(text);
    return ids.map((id) => {
      const decoded = decode([id]);
      const isSpecial =
        decoded.startsWith("<<ENDOFSPECIAL>>") ||
        decoded.includes("endoftext") ||
        decoded.includes("im_start") ||
        decoded.includes("im_end") ||
        (decoded.startsWith("<") && decoded.endsWith(">") && decoded.length > 2);
      const isWhitespace = /^\s+$/.test(decoded) && decoded.length > 0;
      return {
        id,
        text: decoded,
        isSpecial,
        isWhitespace,
      };
    });
  } catch {
    return [];
  }
}

export function getTokenCount(text: string): number {
  return encodeText(text).length;
}

export function getAllTokenIds(text: string): number[] {
  return encodeText(text);
}
