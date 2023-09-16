import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanctionedEntitiesService } from 'src/app/services/sanctioned-entities.service';

@Component({
  selector: 'app-add-sanctioned-entity',
  templateUrl: './add-sanctioned-entity.component.html',
  styleUrls: ['./add-sanctioned-entity.component.css']
})
export class AddSanctionedEntityComponent implements OnInit {

  entityForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private service: SanctionedEntitiesService
    ) {
      this.entityForm = this.fb.group({
        name: ['',[Validators.required, Validators.minLength(3)] ],
        domicile: ['',[Validators.required, Validators.minLength(3)] ],
        isSanctioned: [false, Validators.required]
      });


    }

  ngOnInit() {
  }

  onSubmit() {
    if (this.entityForm.valid) {
      // Create a new entity based on the form values
      const newEntity = {
        name: this.entityForm.value.name,
        domicile: this.entityForm.value.domicile,
        accepted: this.entityForm.value.isSanctioned
      };

      // Call your service to add the new entity
      console.log(newEntity);
    }
  }
}
