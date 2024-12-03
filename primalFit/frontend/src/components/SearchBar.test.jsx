import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("renders input field and icon", () => {
    render(<SearchBar onChange={() => {}} />);
    
    // Verify input is rendered
    const inputElement = screen.getByPlaceholderText(/search foods/i);
    expect(inputElement).toBeInTheDocument();
    
    // Verify SVG is rendered (using getByTitle)
  const iconElement = screen.getByTitle(/search icon/i);
  expect(iconElement).toBeInTheDocument();
});

  it("calls onChange handler when input value changes", () => {
    const handleQueryMock = jest.fn();
    render(<SearchBar onChange={handleQueryMock} />);
    
    const inputElement = screen.getByPlaceholderText(/search foods/i);
    
    // Simulate user typing
    fireEvent.change(inputElement, { target: { value: "apple" } });
    
    // Assert the handler was called with the correct value
    expect(handleQueryMock).toHaveBeenCalledTimes(1);
    expect(handleQueryMock).toHaveBeenCalledWith("apple");
  });
});
