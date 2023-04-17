import renderer from "react-test-renderer";
import WeatherHeader from "../WeatherHeader";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("Test WeatherHeader component", () => {
  it("renders WeatherHeader correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <WeatherHeader />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
