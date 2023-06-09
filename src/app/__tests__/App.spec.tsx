import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App";

test("renders React Weather App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/React Weather App/i)).toBeInTheDocument();
});
