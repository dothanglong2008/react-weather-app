import renderer from "react-test-renderer";
import Result from "../Result";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("Test Result component", () => {
  it("renders Result correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Result />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
