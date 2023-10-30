import { Action, createReducer, on } from "@ngrx/store";
import * as CounterActions from "./counter.actions";

export const COUNTER_FEATURE_KEY = "counter";

export interface CounterState {
  count: number;
}

export interface CounterPartialState {
  readonly [COUNTER_FEATURE_KEY]: CounterState;
}

export const initialCounterState: CounterState = {
  // set initial required properties
  count: 0,
};

const reducer = createReducer(
  initialCounterState,
  on(CounterActions.initCounter, (state) => ({ count: 0 })),
  on(CounterActions.incrementCounter, (state) => ({
    ...state,
    count: state.count + 1,
  }))
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return reducer(state, action);
}
