import { Component } from '@angular/core';
import { SanctionedEntity } from 'src/app/models/sanctioned-entity';
import { SanctionedEntitiesService } from 'src/app/services/sanctioned-entities.service';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html',
  styleUrls: ['./sanctioned-entities.component.sass']
})
export class SanctionedEntitiesComponent {

  public entities: SanctionedEntity[] = [];

  constructor(private entitiesService: SanctionedEntitiesService) {
    entitiesService.getSanctionedEntities().subscribe(entities => {
      this.entities = entities;
    });
  }

}
