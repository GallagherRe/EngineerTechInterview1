import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddSanctionedEntityRequest } from 'src/app/models/requests/add-sanctioned-entity-request';
import { SanctionedEntity } from 'src/app/models/sanctioned-entity';
import { SanctionedEntitiesService } from 'src/app/services/sanctioned-entities.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sanctioned-entity-form',
  templateUrl: './sanctioned-entity-form.component.html',
})
export class SanctionedEntityFormComponent implements OnInit {
  @Input() entities: SanctionedEntity[];
  @Output() entitiesChange = new EventEmitter<SanctionedEntity[]>();

  entityForm: FormGroup;
  entityFormInitialValues: any;

  displayAddEntityForm : boolean = false;

  constructor(
    private fb: FormBuilder,
    private sanctionedEntitiesService: SanctionedEntitiesService
  ) {
  }

  ngOnInit() : void{
    this.entityForm = this.fb.group({
      name: new FormControl('', Validators.required),
      domicile: new FormControl('', Validators.required),
      accepted: new FormControl(false),
    });

    this.entityFormInitialValues = this.entityForm.value;
  }

  saveEntity() : void{
    if (!this.entityForm.valid) {
      return;
    }
      
    this.addNewEntity();
  }

  toggleAddEntityForm() : void {
    this.displayAddEntityForm = !this.displayAddEntityForm;
  }

  addNewEntity() {
    let entity : AddSanctionedEntityRequest = {
      name: this.entityForm.get('name').value,
      domicile: this.entityForm.get('domicile').value,
      accepted: this.entityForm.get('accepted').value
    }
    this.sanctionedEntitiesService.addSanctionedEntity(entity)
    .subscribe((_) => {
      this.sanctionedEntitiesService.getSanctionedEntities().subscribe((entities) => {
        this.entitiesChange.emit(entities);

        this.entityForm.reset(this.entityFormInitialValues);
        this.toggleAddEntityForm();
      })
    }, 
    error => { // TODO get a global error handler and a messaging service for popup errors
      if (error.error && error.error.detail && error.error.detail !== ''){
        alert(error.error.detail);
      }
    });
  }
}