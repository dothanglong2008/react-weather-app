import renderer from "react-test-renderer";
import HourlyWeather from "../HourlyWeather";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("Test HourlyWeather component", () => {
  it("renders HourlyWeather correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HourlyWeather />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
