export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return Promise.resolve();
}

export function formatTokenId(id: number): string {
  return `Token ID: ${id}`;
}

export function getEstimatedCost(tokenCount: number, model: string): string {
  // Approximate pricing per 1M tokens (input)
  const prices: Record<string, number> = {
    "gpt-4o": 2.5,
    "gpt-4o-mini": 0.15,
    "gpt-3.5-turbo": 0.5,
    cl100k_base: 0.5,
  };
  const price = prices[model] || 0.5;
  const cost = (tokenCount / 1_000_000) * price;
  if (cost < 0.0001) return "< $0.0001";
  return `$${cost.toFixed(4)}`;
}
