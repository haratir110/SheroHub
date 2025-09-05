import React from 'react';
import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import TabDetails from "../pages/TabDetails";

it("renders without crashing", () => {
  const { baseElement } = render(<TabDetails />);
  expect(baseElement).toBeDefined();
});
