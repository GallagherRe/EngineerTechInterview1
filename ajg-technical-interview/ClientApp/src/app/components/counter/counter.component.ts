import { Component } from "@angular/core";
import { State, Store } from "@ngrx/store";
import * as CounterActions from "./+state/counter.actions";
import { CounterState } from "./+state/counter.reducer";

@Component({
  selector: "app-counter-component",
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  constructor(private counterStore$: Store<State<CounterState>>) {}

  public incrementCounter() {
    this.counterStore$.dispatch(CounterActions.incrementCounter());
  }
}
