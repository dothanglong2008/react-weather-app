import weatherSlice, { initialState } from "./weatherSlice";

describe("tests for ListSlice", () => {
  test("initialize slice with initialValue", () => {
    const weatherSliceState = weatherSlice(initialState, { type: "unknown" });
    expect(weatherSliceState).toBe(initialState);
  });
});
