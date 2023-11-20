import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreateSanctionedEntity } from '../../models/create-sanctioned-entity';


@Component({
  selector: 'app-create-sanctioned-entity',
  templateUrl: './create-sanctioned-entity.component.html'
})

export class CreateSanctionedEntityComponent implements OnDestroy {
  public errorMessage: string;
  public successMessage: string;
  public initialValues: any;
  public statusText = 'Rejected';
  public createSubject = new Subject<void>();

  public createSanctionedFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    domicile: new FormControl('', Validators.required),
    accepted: new FormControl(false)
  });

  constructor(private sanctionedEntitiesService: SanctionedEntitiesService) {
    this.initialValues = this.createSanctionedFormGroup.value;
  }

  public ngOnDestroy(): void {
    this.createSubject.next();
    this.createSubject.unsubscribe();
  }

  public onStatusChange(event: any) {
    this.statusText = event.target.checked ? 'Accepted' : 'Rejected';
  }

  public onSubmit(): void {

    if (!this.createSanctionedFormGroup.valid) {
      this.createSanctionedFormGroup.markAllAsTouched();
      return;
    }

    this.sanctionedEntitiesService
        .createSanctionedEntity(this.createSanctionedFormGroup.value as CreateSanctionedEntity)
      .pipe(takeUntil(this.createSubject))
        .subscribe((sanctioned: CreateSanctionedEntity) => {
        this.successfulSave(sanctioned);
      }, (error) => {
        this.errorSaving(error);
      });
  }

  public errorSaving(error: any): void {
    this.successMessage = '';
    if (error.error) {
      this.errorMessage = error.error;
    } else {
      this.errorMessage = error;
    }
  }

    public successfulSave(sanctioned: CreateSanctionedEntity): void {
    this.errorMessage = '';
    this.successMessage = `${sanctioned.name} - ${sanctioned.domicile} has been saved`;
    this.createSanctionedFormGroup.reset(this.initialValues);
  }
}
