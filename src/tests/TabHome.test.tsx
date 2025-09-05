import React from 'react';
import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import TabHome from "../pages/TabHome";

it("renders without crashing", () => {
  const { baseElement } = render(<TabHome />);
  expect(baseElement).toBeDefined();
});
