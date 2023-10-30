import { Component, OnDestroy, OnInit } from "@angular/core";
import { SanctionedEntity } from "../../models/sanctioned-entity";
import { SanctionedEntitiesService } from "../../services/sanctioned-entities.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sanctioned-entities",
  templateUrl: "./sanctioned-entities.component.html",
})
export class SanctionedEntitiesComponent implements OnInit, OnDestroy {
  public entities: SanctionedEntity[];
  subscription = new Subscription();

  constructor(private entitiesService: SanctionedEntitiesService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.entitiesService.getSanctionedEntities().subscribe((entities) => {
        this.entities = entities;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
