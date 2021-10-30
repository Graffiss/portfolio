import rootReducer, { initialState } from "./root.reducer"

test("returns the initial state", () => {
  expect(rootReducer(undefined)).toEqual(initialState)
})
