import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App.js";

test("renders correctly", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
