import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page Test case", () => {
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  it("should load submit button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    const submitButton = screen.getByText("Submit");
    const nameInput = screen.getByPlaceholderText("name");

    expect(button).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });

  it("should load 2 input boxes", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    //   console.log(inputs);//JSX element(React element/React fiber node/virtualDOM object)
    expect(inputs.length).toEqual(2);
  });
});
