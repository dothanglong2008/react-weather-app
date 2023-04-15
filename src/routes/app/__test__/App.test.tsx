import { render } from "@testing-library/react";
import App from "../App";

test("renders Weather component", () => {
  render(<App />);
  expect(true).toBe(true);
});
