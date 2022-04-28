import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html'
})
export class SanctionedEntitiesComponent {
  public entities: SanctionedEntity[];
  getSub: Subscription;
  createSub: Subscription;
  message: string;
  showToast: boolean;
  alertType = '';
  constructor(private entitiesService: SanctionedEntitiesService, private modalService: NgbModal) {

  }
  ngOnInit() {
    this.getSanctionedEntities();
  }
  ngOnDestroy() {
    if (this.getSub) {
      this.getSub.unsubscribe();//to prevent memory leak
    }
    if (this.createSub) {
      this.createSub.unsubscribe()
    }
  }
  getSanctionedEntities() {
    this.getSub = this.entitiesService.getSanctionedEntities().subscribe(entities => {
      this.entities = entities;
    });
  }

  open() {
    this.modalService.open(ModalComponent).result.then((result) => {
      if (result) {
        this.createSanctionEntity(result)
      }
    }, (reason) => {
      console.log(reason);
    });
  }
  closeAlert() {
    this.showToast = false;
  }
  createSanctionEntity(payload: SanctionedEntity) {
    this.createSub = this.entitiesService.createSanctionedEntity(payload).subscribe(
      (entity) => {
        this.alertType = "success";
        this.showToast = true;
        this.message = 'Created successfully';
        this.getSanctionedEntities();
      },
      (err) => {
        this.showToast = true;
        this.alertType = "danger"; 
        this.message = err.error;
      }
    )
  }

 
}
