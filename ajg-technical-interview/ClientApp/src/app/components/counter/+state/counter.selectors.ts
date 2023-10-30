import { createFeatureSelector, createSelector } from "@ngrx/store";
import { COUNTER_FEATURE_KEY, CounterState } from "./counter.reducer";

export const getCounterState =
  createFeatureSelector<CounterState>(COUNTER_FEATURE_KEY);

export const getCount = createSelector(
  getCounterState,
  (state: CounterState) => state.count
);
