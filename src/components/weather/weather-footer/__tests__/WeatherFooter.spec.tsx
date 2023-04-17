import renderer from "react-test-renderer";
import WeatherFooter from "../WeatherFooter";

describe("Test WeatherFooter component", () => {
  it("renders WeatherFooter correctly", () => {
    const tree = renderer.create(<WeatherFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
