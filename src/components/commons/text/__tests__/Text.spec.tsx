import Text from "../Text";
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
  render(<Text content="Hello" />);
  const text = screen.getByText(/Hello/i);
  expect(text).toBeInTheDocument();
});

it("match snapshot with empty text", () => {
  const component = renderer.create(<Text content="" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a piece of text with content 'Hello'", () => {
  const content = "Hello";
  const component = renderer.create(<Text content={content} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
