import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import "jest-dom/extend-expect";
import LoginForm from "../../components/shared/header/LoginForm";

afterEach(cleanup);

describe("<LoginForm />", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<LoginForm />);

    const button = getByText("Log In");
    expect(button).toHaveTextContent("Log In");
  });

  it("should display validation error", () => {
    const { getByText, container } = render(<LoginForm />);

    const emailInput = container.querySelector("#userEmail");
    const button = getByText("Log In");

    fireEvent.change(emailInput, { target: { value: "dude@email.com" } });

    fireEvent.click(button);

    const error = getByText("fill all fields appropriately");
    expect(error).toHaveTextContent("fill all fields appropriately");
  });

  it("should attempt to submit the form", () => {
    const { getByText, container } = render(<LoginForm />);

    const emailInput = container.querySelector("#userEmail");
    const passwordInput = container.querySelector("#userPassword");
    const button = getByText("Log In");

    fireEvent.change(emailInput, { target: { value: "dude@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "secretpassword" } });

    fireEvent.click(button);

    // response
  });
});
