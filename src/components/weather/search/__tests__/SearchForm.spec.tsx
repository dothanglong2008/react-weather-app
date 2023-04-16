import renderer from "react-test-renderer";
import SearchForm from "../SearchForm";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";

describe("Test SearchForm component", () => {
  it("renders SearchForm correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SearchForm />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
