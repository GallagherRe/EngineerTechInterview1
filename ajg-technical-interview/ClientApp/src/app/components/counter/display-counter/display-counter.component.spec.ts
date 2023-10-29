import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DisplayCounterComponent } from "./display-counter.component";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { MemoizedSelector, Store } from "@ngrx/store";
import { CounterState } from "../+state/counter.reducer";
import { getCount } from "../+state/counter.selectors";

describe("DisplayCounterComponent", () => {
  let component: DisplayCounterComponent;
  let fixture: ComponentFixture<DisplayCounterComponent>;
  let mockStore: MockStore<CounterState>;
  let mockCounterSelector: MemoizedSelector<CounterState, number>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCounterComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCounterComponent);
    component = fixture.debugElement.componentInstance;
    mockStore = TestBed.get(Store);
    mockCounterSelector = mockStore.overrideSelector(getCount, 0);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should start with count 0, then increments by 1", async () => {
    expect(getCounterText()).toBe("0");
    fixture.detectChanges();

    mockCounterSelector.setResult(1);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(getCounterText()).toBe("1");
  });

  function getCounterText() {
    const compiled = fixture.debugElement.nativeElement;
    return compiled.querySelector("p").querySelector("strong").textContent;
  }
});
