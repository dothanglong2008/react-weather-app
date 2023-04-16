import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import LocationSuggestion from "../LocationSuggestion";
import { store } from "../../../../app/store";

describe("Test Suggestion component", () => {
  it("renders Suggestion correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <LocationSuggestion />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
