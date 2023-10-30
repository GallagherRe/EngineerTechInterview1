import { createAction } from "@ngrx/store";

export enum CounterActionTypes {
  InitCounter = "[Counter] Init Counter",
  IncrementCounter = "[Counter] Increment Counter",
}

export const initCounter = createAction(CounterActionTypes.InitCounter);

export const incrementCounter = createAction(
  CounterActionTypes.IncrementCounter
);
