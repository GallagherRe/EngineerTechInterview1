import { Component, OnInit } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';

@Component({
    selector: 'app-sanctioned-entities',
    templateUrl: './sanctioned-entities.component.html'
})
export class SanctionedEntitiesComponent implements OnInit {
    public entities: SanctionedEntity[];

    constructor(private entitiesService: SanctionedEntitiesService) {
    }

    ngOnInit(): void {
        this.entitiesService.getSanctionedEntities().subscribe(entities => {
            this.entities = entities;
        });
    }
}