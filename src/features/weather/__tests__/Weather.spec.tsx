import Weather from "../Weather";
import renderer from "react-test-renderer";
import { cleanup, render, screen } from "@testing-library/react";

type Container = HTMLDivElement | null;

let container: Container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(cleanup);

it("renders Hello text", () => {
  render(<Weather />);
  const text = screen.getByText(/Hello/i);
  expect(text).toBeInTheDocument();
});

it("match snapshot with empty text", () => {
  const component = renderer.create(<Weather />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
