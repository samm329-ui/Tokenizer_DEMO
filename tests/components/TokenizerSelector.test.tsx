import { render, screen, fireEvent } from "@testing-library/react";
import TokenizerSelector from "@/components/TokenizerSelector";

describe("TokenizerSelector", () => {
  it("renders all available models", () => {
    render(<TokenizerSelector value="gpt-4o" onChange={() => {}} />);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(4);
  });

  it("calls onModelChange when selection changes", () => {
    const onChange = jest.fn();
    render(<TokenizerSelector value="gpt-4o" onChange={onChange} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "gpt-3.5-turbo" } });
    expect(onChange).toHaveBeenCalledWith("gpt-3.5-turbo");
  });

  it("has default model selected", () => {
    render(<TokenizerSelector value="gpt-4o" onChange={() => {}} />);
    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe("gpt-4o");
  });
});
