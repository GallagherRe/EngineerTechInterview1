import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html'
})
export class SanctionedEntitiesComponent {

  public entities$: Observable<SanctionedEntity[]> 
      = this.entitiesService.sanctionedEntities$;

  sanctionedForm=new FormGroup({
        name:new FormControl('', [Validators.required]),
        domicile:new FormControl('',[Validators.required]),
        status:new FormControl(false),
  });  

  constructor(private entitiesService: SanctionedEntitiesService) { }

  saveEntity():void {
    const {name, domicile,status:accepted}=this.sanctionedForm.value;
    const newEntity=new SanctionedEntity('id', name, domicile, accepted);
    this.entitiesService.createSanctionedEntity(newEntity);
}

}
