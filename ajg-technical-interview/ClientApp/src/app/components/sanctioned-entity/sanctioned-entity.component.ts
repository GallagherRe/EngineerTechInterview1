import { Component } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sanctioned-entity',
  templateUrl: './sanctioned-entity.component.html'
})
export class SanctionedEntityComponent {
  public entity: SanctionedEntity;

    constructor(private entitiesService: SanctionedEntitiesService,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            entitiesService.getSanctionedEntity(params['id']).subscribe(entity => {
                this.entity = entity;
            });
        });
  }
}
