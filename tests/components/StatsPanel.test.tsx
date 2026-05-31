import { render, screen } from "@testing-library/react";
import StatsPanel from "@/components/StatsPanel";
import type { TokenStats } from "@/types";

const mockStats: TokenStats = {
  charCount: 100,
  tokenCount: 25,
  avgCharsPerToken: 4.0,
  compressionRatio: 75.0,
};

describe("StatsPanel", () => {
  it("renders all stat cards", () => {
    render(<StatsPanel stats={mockStats} />);
    expect(screen.getByText("Chars")).toBeInTheDocument();
    expect(screen.getByText("Tokens")).toBeInTheDocument();
    expect(screen.getByText("Avg Len")).toBeInTheDocument();
    expect(screen.getByText("Ratio")).toBeInTheDocument();
  });

  it("displays correct stat values", () => {
    render(<StatsPanel stats={mockStats} />);
    expect(screen.getByText("Chars")).toBeInTheDocument();
    expect(screen.getByText("Tokens")).toBeInTheDocument();
    expect(screen.getByText("%")).toBeInTheDocument();
  });

  it("renders with zero values", () => {
    const zeroStats: TokenStats = {
      charCount: 0,
      tokenCount: 0,
      avgCharsPerToken: 0,
      compressionRatio: 0,
    };
    render(<StatsPanel stats={zeroStats} />);
    expect(screen.getByText("Chars")).toBeInTheDocument();
    expect(screen.getByText("Tokens")).toBeInTheDocument();
  });
});
