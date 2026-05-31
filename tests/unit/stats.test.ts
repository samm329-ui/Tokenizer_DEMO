import { calculateStats } from "@/lib/stats";

describe("calculateStats()", () => {
  it("correctly computes character count", () => {
    const stats = calculateStats("Hello world");
    expect(stats.charCount).toBe(11);
  });

  it("correctly computes token count", () => {
    const stats = calculateStats("Hello world");
    expect(stats.tokenCount).toBeGreaterThan(0);
  });

  it("correctly computes tokens per character ratio", () => {
    const stats = calculateStats("Hello world");
    expect(stats.avgCharsPerToken).toBeGreaterThan(0);
    expect(typeof stats.avgCharsPerToken).toBe("number");
  });

  it("handles zero tokens gracefully", () => {
    const stats = calculateStats("");
    expect(stats.charCount).toBe(0);
    expect(stats.tokenCount).toBe(0);
    expect(stats.avgCharsPerToken).toBe(0);
    expect(stats.compressionRatio).toBe(0);
  });

  it("returns valid compression ratio", () => {
    const stats = calculateStats("This is a test sentence with some words.");
    expect(typeof stats.compressionRatio).toBe("number");
    expect(stats.compressionRatio).toBeLessThan(100);
  });
});
