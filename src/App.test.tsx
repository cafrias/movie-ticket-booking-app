import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe(App.name, () => {
  test("renders correctly", () => {
    render(<App />);

    const elem = screen.queryByText("Hello Charles");

    expect(elem).not.toBeNull();
  });
});
