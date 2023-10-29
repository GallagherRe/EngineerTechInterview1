import { Component, OnInit } from "@angular/core";
import { State, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as CounterSelectors from "../+state/counter.selectors";
import * as CounterActions from "../+state/counter.actions";
import { CounterState } from "../+state/counter.reducer";

@Component({
  selector: "app-display-counter",
  templateUrl: "./display-counter.component.html",
})
export class DisplayCounterComponent implements OnInit {
  public counter$: Observable<number>;

  constructor(private counterStore$: Store<State<CounterState>>) {}

  ngOnInit() {
    this.counter$ = this.counterStore$.select(CounterSelectors.getCount);
  }
}
