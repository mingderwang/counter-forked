import React from "react";
import useStateDecorator, { StateDecoratorActions } from "state-decorator";
import CounterView from "./CounterView";

// TYPES

type State = {
  counter: number;
};

type Actions = {
  increment: (incr: number) => void;
  decrement: (incr: number) => void;
};

export type CounterViewProps = State & Actions;

// Initial state
export const getInitialState = (): State => ({
  counter: 0
});

// Actions implementation
export const counterActions: StateDecoratorActions<State, Actions> = {
  decrement: (s, [incr]) => ({ counter: s.counter - incr }),
  increment: (s, [incr]) => ({ counter: s.counter + incr })
};

// Container that is managing the state using usetateDecorator hook
const CounterContainer = () => {
  const { state, actions } = useStateDecorator(getInitialState, counterActions);

  return <CounterView {...state} {...actions} />;
};

export default CounterContainer;
