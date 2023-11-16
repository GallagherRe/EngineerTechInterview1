import { Component } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { FormGroup, FormControl } from '@angular/forms';
//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'add-entity',
  templateUrl: './add-entity.component.html'
})
export class AddEntityComponent {

  requiredForm: FormGroup | undefined;
  public entities: SanctionedEntity[] | undefined;
  private _entitiesService: SanctionedEntitiesService;
  postFailureReason: string | undefined;
  postSuccessMessage: string | undefined;

  constructor(private entitiesService: SanctionedEntitiesService) {
   this._entitiesService = entitiesService;
  }

  onSubmit(contactForm: { value: SanctionedEntity; }) {

    this.postSuccessMessage = ""
    this.postFailureReason = ""
    this.postSuccessMessage = "Saving..."

    console.log(contactForm.value);

    let ent: SanctionedEntity = {
      id: "",
      accepted: !(contactForm.value.accepted == false),
      domicile: contactForm.value.domicile,
      name: contactForm.value.name
    }

    this._entitiesService.addSantionedEntity(ent).subscribe(
      (data) => {

        let newEntity = data as SanctionedEntity;
        this.postSuccessMessage = "Entity has been added with id: " + newEntity.id;
      },
      (error) => {

        console.log(error);

        this.postSuccessMessage = "";

        if (error.status == 409) {
          this.postFailureReason = "Update failed, there is already an entity with the name you selected";
        }
        else {
          this.postFailureReason = "Update failed: " + error.status;
        }
      }
    );
  }
}
