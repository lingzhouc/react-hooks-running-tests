import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // give sense of what the DOM looks like
  screen.debug();
  
  const element = screen.queryByText("please pass this test");
  screen.debug(element);
  expect(element).toBeInTheDocument();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
