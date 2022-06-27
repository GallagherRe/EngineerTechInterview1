import { Component } from '@angular/core';
import { SanctionedEntity } from '../../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../../services/sanctioned-entities.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sanctioned-entity',
  templateUrl: './add-sanctioned-entity.component.html'
})
export class AddSanctionedEntityComponent {
  entityName = new FormControl('', Validators.required);
  entityDomicile = new FormControl('', Validators.required);
  entityStatus = new FormControl (false);
  hasErrors = false;
  errorMessage = "";
  constructor(private entitiesService: SanctionedEntitiesService) {
  }

  async addSanctionedEntity()
  {
    if (this.entityName.valid && this.entityDomicile.valid)
    {
      if (await this.sanctionedEntityExists(this.entityName.value, this.entityDomicile.value))
      {
        return;
      }

      var sanctionedEntity = new SanctionedEntity();
      sanctionedEntity.name = this.entityName.value;
      sanctionedEntity.domicile = this.entityDomicile.value,
      sanctionedEntity.accepted = this.entityStatus.value
      this.entitiesService.addSanctionedEntity(sanctionedEntity).subscribe();
      alert("Sanctioned entity added successfully");
    }
  }

  async sanctionedEntityExists(entityName: string, entityDomicile: string) : Promise<boolean>
  {
    var entities = await this.entitiesService.getSanctionedEntitiesAsync();
    var foundEntities = entities.filter(
      (x) => x.name == entityName && x.domicile == entityDomicile
    );
    if (foundEntities.length > 0) {
      this.hasErrors = true;
      this.errorMessage =
        "Sanctioned entity with the same name and domicile already exists!";
      return true;
    } else {
      this.hasErrors = false;
      this.errorMessage = "";
      return false;
    }
  }
}
