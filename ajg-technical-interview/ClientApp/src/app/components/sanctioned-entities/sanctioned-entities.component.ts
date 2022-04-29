import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html',
  styleUrls: ['./sanctioned-entities.component.scss']
})
export class SanctionedEntitiesComponent {
  public entities: SanctionedEntity[];
  public snForm: FormGroup;
  public showFrom: boolean = false;
  public nameExists: boolean;
  public domicileExists: boolean;

  constructor(private entitiesService: SanctionedEntitiesService, public formBuilder: FormBuilder) {
    this.entitiesService.getSanctionedEntities().subscribe(entities => {
      this.entities = entities;
    });
  }

  public ngOnInit(): void {
    this.snForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      domicile: ['', [Validators.required]],
      accepted: [false, [Validators.required]]
    }) 
  }

  public get getControl(){
    return this.snForm.controls;
  }

  public onSubmit(){
    this.nameExists = this.entities.some((e) => e.name.toLocaleLowerCase() === this.snForm.get("name").value.toLocaleLowerCase());
    this.domicileExists = this.entities.some((e) => e.domicile.toLocaleLowerCase() === this.snForm.get("domicile").value.toLocaleLowerCase());

    if (this.nameExists || this.domicileExists) {
      return;
    } 

    let newEntity = new SanctionedEntity();
    newEntity.name = this.snForm.get("name").value;
    newEntity.domicile = this.snForm.get("domicile").value;
    newEntity.accepted = this.snForm.get("accepted").value;
    this.entities.push(newEntity);
  }

  public toggleForm() {
    this.showFrom = !this.showFrom;

    if(!this.showFrom) {
      this.snForm.reset();
      this.nameExists = false;
      this.domicileExists = false;
    } else {
      this.snForm.get("accepted").setValue(false);
    }
  }
}
