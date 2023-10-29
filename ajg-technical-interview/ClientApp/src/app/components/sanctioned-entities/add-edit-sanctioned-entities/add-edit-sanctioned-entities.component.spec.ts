import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from "@angular/core/testing";

import { AddEditSanctionedEntitiesComponent } from "./add-edit-sanctioned-entities.component";
import { StatusPipe } from "./../../../pipes/status.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SanctionedEntitiesService } from "./../../../services/sanctioned-entities.service";

import { RouterTestingModule } from "@angular/router/testing";
import { SanctionedEntity } from "src/app/models/sanctioned-entity";
import { of } from "rxjs";
import { Router } from "@angular/router";

describe("AddEditSanctionedEntitiesComponent", () => {
  let component: AddEditSanctionedEntitiesComponent;
  let fixture: ComponentFixture<AddEditSanctionedEntitiesComponent>;
  let sanctionedEntitiesService: SanctionedEntitiesService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditSanctionedEntitiesComponent, StatusPipe],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        SanctionedEntitiesService,
        { provide: "BASE_URL", useValue: "http://localhost" },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSanctionedEntitiesComponent);
    sanctionedEntitiesService = TestBed.get(SanctionedEntitiesService);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(sanctionedEntitiesService, "createSanctionedEntity").and.returnValue(
      of(new SanctionedEntity())
    );

    fixture.detectChanges();
  });

  it("should mark the name control as invalid when empty", () => {
    const nameControl = component.name;
    expect(nameControl.valid).toBeFalsy();
  });

  it("should mark the domicile control as invalid when empty", () => {
    const nameControl = component.domicile;
    expect(nameControl.valid).toBeFalsy();
  });

  it("should mark the name control as valid when it has a value", () => {
    const nameControl = component.name;
    nameControl.setValue("Test");
    expect(nameControl.valid).toBeTruthy();
  });

  it("should mark the domicile control as valid when it has a value", () => {
    const domicileControl = component.domicile;
    domicileControl.setValue("Test");
    expect(domicileControl.valid).toBeTruthy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call onSubmit method when the form is submitted", () => {
    spyOn(component, "onSubmit");
    const submitButton = fixture.nativeElement.querySelector("button");
    submitButton.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it("should call sanctionedEntitiesService when the form is valid and navigate to 'sanctioned-entities' route", fakeAsync(() => {
    spyOn(router, "navigate");
    const domicileControl = component.domicile;
    domicileControl.setValue("Test");
    const nameControl = component.name;
    nameControl.setValue("Test");
    const submitButton = fixture.nativeElement.querySelector("button");
    submitButton.click();
    expect(sanctionedEntitiesService.createSanctionedEntity).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalled();
  }));

  it("should not call sanctionedEntitiesService when the form is invalid", () => {
    spyOn(component, "onSubmit");
    const submitButton = fixture.nativeElement.querySelector("button");
    submitButton.click();
    expect(
      sanctionedEntitiesService.createSanctionedEntity
    ).not.toHaveBeenCalled();
  });
});
