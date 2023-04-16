import Item from "../Item";
import renderer from "react-test-renderer";

describe("Test Item component", () => {
  it("renders Item correctly", () => {
    const table = [
      { field: "RealFeel", value: 1 },
      { field: "Wind", value: 2 },
      { field: "Wind Gust", value: 3 },
      { field: "Humidity", value: 4 },
      { field: "Dew Point", value: 5 },
      { field: "UV", value: 1 },
    ];

    const tree = renderer
      .create(
        <Item
          key={1}
          time={"02:00"}
          icon={"icon"}
          temp={37}
          humidity={2}
          chanceOfRain={1}
          extraTable={table}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
