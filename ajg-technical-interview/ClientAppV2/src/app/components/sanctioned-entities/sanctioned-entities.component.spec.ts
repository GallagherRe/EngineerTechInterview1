import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionedEntitiesComponent } from './sanctioned-entities.component';

describe('SanctionedEntitiesComponent', () => {
  let component: SanctionedEntitiesComponent;
  let fixture: ComponentFixture<SanctionedEntitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanctionedEntitiesComponent]
    });
    fixture = TestBed.createComponent(SanctionedEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
