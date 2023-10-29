import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { SanctionedEntity } from "./../../../models/sanctioned-entity";
import { SanctionedEntitiesService } from "./../../../services/sanctioned-entities.service";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";
import { EMPTY } from "rxjs";
import { ApiCustomError } from "./../../../models/api-custom-error";

@Component({
  selector: "app-add-edit-sanctioned-entities",
  templateUrl: "./add-edit-sanctioned-entities.component.html",
  styleUrls: ["./add-edit-sanctioned-entities.component.css"],
})
export class AddEditSanctionedEntitiesComponent implements OnInit {
  sanctionedEntity: SanctionedEntity;
  errorMessage: ApiCustomError = null;

  sanctionedEntityFormGroup = this.fb.group({
    name: new FormControl("", Validators.required),
    domicile: new FormControl("", Validators.required),
    accepted: new FormControl(true),
  });

  constructor(
    private fb: FormBuilder,
    private sanctionedEntitiesService: SanctionedEntitiesService,
    private router: Router
  ) {}

  ngOnInit() {}

  get name() {
    return this.sanctionedEntityFormGroup.get("name")!;
  }
  get domicile() {
    return this.sanctionedEntityFormGroup.get("domicile")!;
  }
  get status() {
    return this.sanctionedEntityFormGroup.get("accepted")!;
  }

  onSubmit() {
    if (this.sanctionedEntityFormGroup.valid) {
      this.sanctionedEntity = this.sanctionedEntityFormGroup
        .value as SanctionedEntity;

      this.sanctionedEntitiesService
        .createSanctionedEntity(this.sanctionedEntity)
        .pipe(take(1))
        .subscribe({
          next: () => this.router.navigate(["sanctioned-entities"]),
          error: (err: ApiCustomError) => {
            this.errorMessage = err;
            this.hideAlert();
          },
          complete: () => EMPTY,
        });
    } else {
      this.name.markAsDirty();
      this.domicile.markAsDirty();
    }
  }

  hideAlert() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }
}
