import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanctionedEntitiesService } from 'src/app/services/sanctioned-entities.service';

@Component({
  selector: 'app-add-sanctioned-entity',
  templateUrl: './add-sanctioned-entity.component.html',
  styleUrls: ['./add-sanctioned-entity.component.css']
})
export class AddSanctionedEntityComponent {
  entityForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)] ],
    domicile: ['',[Validators.required, Validators.minLength(3)] ],
    isSanctioned: [false, Validators.required]

  });


  constructor(
    private fb: FormBuilder,
    private service: SanctionedEntitiesService
    ) {

    }


  onSubmit() {
    if (this.entityForm.valid) {
      // Create a new entity based on the form values
      const newEntity = {
        id: '',
        name: this.entityForm.value.name,
        domicile: this.entityForm.value.domicile,
        accepted: this.entityForm.value.isSanctioned
      };
      this.service.addSanctionedEntity(newEntity).subscribe(
        (response) => {
          console.log(response);
          this.entityForm.reset();
        },
        (error) => {
          console.log(error);
        }

      );



      // Call your service to add the new entity
      console.log(newEntity);
    }
  }
}
