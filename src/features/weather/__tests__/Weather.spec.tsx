import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Weather from "../Weather";
import { store } from "../../../app/store";
import renderer from "react-test-renderer";

describe("Test Weather component", () => {
  it("renders Weather correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Weather />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders 'Search for a city or get current location'", () => {
    render(
      <Provider store={store}>
        <Weather />
      </Provider>
    );
    const text = screen.getByText(/Search for a city or get current location/i);
    expect(text).toBeInTheDocument();
  });
});
