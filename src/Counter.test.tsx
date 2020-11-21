import { testSyncAction } from "state-decorator";
import { getInitialState, counterActions } from "./Counter";

describe("Counter", () => {
  it("has a correct default state", () => {
    expect(getInitialState()).toEqual({ counter: 0 });
  });

  it("increments correctly", () => {
    return testSyncAction(counterActions.increment, action => {
      const state = { counter: 10 };
      let newState = action(state, [10], null);
      expect(newState.counter).toEqual(20);
      newState = action(newState, [5], null);
      expect(newState.counter).toEqual(25);
    });
  });

  it("decrements correctly", () => {
    return testSyncAction(counterActions.decrement, action => {
      const state = { counter: 30 };
      let newState = action(state, [10], null);
      expect(newState.counter).toEqual(20);
      newState = action(newState, [5], null);
      expect(newState.counter).toEqual(15);
    });
  });
});
