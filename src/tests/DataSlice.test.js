import reducer, { initialState, UserData } from "../reducers/DataSlice";

describe("data", () => {
  test("should return initialState", () => {
    const nextState = initialState;
    expect(undefined).toEqual(nextState);
  });

  test("should return userData", () => {
    const payload = { data: "20", ID: 2, day: 2, FakeYear: 2021 };
    const nextState = reducer(initialState, UserData(payload));
    expect(nextState.value).toEqual(initialState);
  });
});
