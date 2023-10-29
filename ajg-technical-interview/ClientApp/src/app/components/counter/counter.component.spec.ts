import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";

import { CounterComponent } from "./counter.component";
import { DisplayCounterComponent } from "./display-counter/display-counter.component";
import * as CounterActions from "./+state/counter.actions";
import { Store } from "@ngrx/store";

describe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore<{ count: number }>;
  const initialState = {
    counter: 0,
  };

  let dispatchSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent, DisplayCounterComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    dispatchSpy = spyOn(store, "dispatch");
    fixture.detectChanges();
  });

  it("should display a title", async(() => {
    const titleText = fixture.nativeElement.querySelector("h1").textContent;
    expect(titleText).toEqual("Counter");
  }));

  it("should display counter component", () => {
    const subComponent = TestBed.createComponent(DisplayCounterComponent);
    subComponent.detectChanges();
    const compiled = subComponent.debugElement.nativeElement;
    expect(compiled.querySelector("app-display-counter")).toBeDefined();
  });

  it("should dispatch action to increment counter", () => {
    const parentComponent = fixture.componentInstance;
    parentComponent.incrementCounter();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(CounterActions.incrementCounter());
  });
});
