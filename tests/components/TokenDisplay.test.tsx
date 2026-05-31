import { render, screen, fireEvent } from "@testing-library/react";
import TokenDisplay from "@/components/TokenDisplay";
import type { TokenInfo } from "@/types";

const mockTokens: TokenInfo[] = [
  { id: 1, text: "Hello", isSpecial: false, isWhitespace: false },
  { id: 2, text: " ", isSpecial: false, isWhitespace: true },
  { id: 3, text: "world", isSpecial: false, isWhitespace: false },
];

describe("TokenDisplay", () => {
  it("renders token bubbles correctly", () => {
    render(<TokenDisplay tokens={mockTokens} />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("world")).toBeInTheDocument();
  });

  it("displays token count in header", () => {
    render(<TokenDisplay tokens={mockTokens} />);
    const elements = screen.getAllByText("3");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("shows empty state when no tokens", () => {
    render(<TokenDisplay tokens={[]} />);
    expect(screen.getByText(/Start typing to visualize/)).toBeInTheDocument();
  });

  it("renders copy button", () => {
    render(<TokenDisplay tokens={mockTokens} />);
    expect(screen.getByText("Copy IDs")).toBeInTheDocument();
  });

  it("copy button changes text after click", async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    render(<TokenDisplay tokens={mockTokens} />);
    const copyBtn = screen.getByText("Copy IDs");
    fireEvent.click(copyBtn);
    expect(writeText).toHaveBeenCalledWith("1, 2, 3");
  });

  it("handles empty tokens gracefully", () => {
    const emptyTokens: TokenInfo[] = [
      { id: 1, text: "", isSpecial: false, isWhitespace: false },
    ];
    render(<TokenDisplay tokens={emptyTokens} />);
    expect(screen.getByText("∅")).toBeInTheDocument();
  });
});
