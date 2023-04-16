import renderer from "react-test-renderer";
import DailyWeather from "../DailyWeather";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("Test DailyWeather component", () => {
  it("renders DailyWeather correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DailyWeather />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
