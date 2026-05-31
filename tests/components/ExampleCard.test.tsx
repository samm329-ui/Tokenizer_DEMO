import { render, screen, fireEvent } from "@testing-library/react";
import ExampleCard from "@/components/ExampleCard";
import type { Example } from "@/types";

const mockExample: Example = {
  id: 1,
  name: "Test Example",
  text: "Hello, world!",
  category: "Normal",
  description: "A simple test example",
};

describe("ExampleCard", () => {
  it("renders example name and category", () => {
    render(<ExampleCard example={mockExample} onSelect={() => {}} />);
    expect(screen.getByText("Test Example")).toBeInTheDocument();
    expect(screen.getByText("Normal")).toBeInTheDocument();
  });

  it("calls onSelect when clicked", () => {
    const onSelect = jest.fn();
    render(<ExampleCard example={mockExample} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onSelect).toHaveBeenCalledWith("Hello, world!");
  });

  it("displays example text preview", () => {
    const { container } = render(<ExampleCard example={mockExample} onSelect={() => {}} />);
    expect(container.textContent).toContain("Hello");
  });

  it("renders with keyboard interaction", () => {
    const onSelect = jest.fn();
    render(<ExampleCard example={mockExample} onSelect={onSelect} />);
    const card = screen.getByRole("button");
    fireEvent.keyDown(card, { key: "Enter" });
    expect(onSelect).toHaveBeenCalledWith("Hello, world!");
  });
});
