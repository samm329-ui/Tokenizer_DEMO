export type ExampleCategory =
  | "Normal"
  | "Code"
  | "Emoji"
  | "Long"
  | "Multilingual"
  | "Edge Case";

export interface Example {
  id: number;
  name: string;
  text: string;
  category: ExampleCategory;
  description?: string;
}

export interface TokenInfo {
  id: number;
  text: string;
  isSpecial: boolean;
  isWhitespace: boolean;
}

export interface TokenStats {
  charCount: number;
  tokenCount: number;
  avgCharsPerToken: number;
  compressionRatio: number;
}

export type ModelType = "gpt-4o" | "gpt-4o-mini" | "cl100k_base" | "gpt-3.5-turbo";

export interface ModelOption {
  value: ModelType;
  label: string;
  description: string;
}
