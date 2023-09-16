import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronCounterComponent } from './jumbotron-counter.component';

describe('JumbotronCounterComponent', () => {
  let component: JumbotronCounterComponent;
  let fixture: ComponentFixture<JumbotronCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JumbotronCounterComponent]
    });
    fixture = TestBed.createComponent(JumbotronCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
