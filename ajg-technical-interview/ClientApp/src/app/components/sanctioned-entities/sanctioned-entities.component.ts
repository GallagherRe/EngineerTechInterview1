import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html'
})
export class SanctionedEntitiesComponent implements OnDestroy {
  public entities: SanctionedEntity[];
  public existingEntity = false;

  public sanctionedEntitiesForm = new FormGroup({
    entityName: new FormControl('', [Validators.required]),
    entityDomicile: new FormControl('', [Validators.required]),
    entityAccepted: new FormControl(true)
  }, [this.comparisonValidator()]);

  private _subs: Subscription = new Subscription();

  constructor(private entitiesService: SanctionedEntitiesService, private cr: ChangeDetectorRef) {
    this._subs.add(entitiesService.getSanctionedEntities().subscribe(entities => {
      this.entities = entities;
      // just to test getById
      // entitiesService.getSanctionedEntitiesById(this.entities[0].id).subscribe(entity => {
      //   console.log(entity);
      // }, err => { console.log(err) });
      // console.log(entities);
    }));
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public onSubmit(): void {
    this.existingEntity = false;

    const sanctionedEntitiesForm = this.sanctionedEntitiesForm.value;

    const names = this.entities.filter(x => x.name === sanctionedEntitiesForm.entityName);
    if (names.length !== 0) {
      const domiciles = names.filter(c => c.domicile === sanctionedEntitiesForm.entityDomicile);
      if (domiciles.length !== 0) {
        this.existingEntity = true;
      }
    }

    if (!this.existingEntity) {
      const entity = new SanctionedEntity();
      entity.name = sanctionedEntitiesForm.entityName;
      entity.domicile = sanctionedEntitiesForm.entityDomicile;
      entity.accepted = sanctionedEntitiesForm.entityAccepted;
      entity.id = this.uuid(); // generates the universal unique identifier or guid

      // reset the form      
      this.sanctionedEntitiesForm.reset({ entityName: '', entityDomicile: '', entityAccepted: true })

      this._subs.add(this.entitiesService.addSanctionedEntity(entity)
        .pipe(concatMap(res1 => this.entitiesService.getSanctionedEntities()))
        .subscribe(result => {
          this.entities = result;
        }))
    }
  }

  public comparisonValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      if (!this.entities) {
        return;
      }

      this.existingEntity = false;

      const form = group.value;

      const names = this.entities.filter(x => x.name.toLowerCase() === form.entityName.toLowerCase());
      if (names.length !== 0) {
        const domiciles = names.filter(c => c.domicile.toLowerCase() === form.entityDomicile.toLowerCase());
        if (domiciles.length !== 0) {
          this.existingEntity = true;
        }
      }

      return this.existingEntity ? { notUnique: true } : undefined;
    };
  }

  // copied from https://www.cloudhadoop.com/javascript-uuid-tutorial/
  private uuid(): string {
    var uuidValue = "", k, randomValue;
    for (k = 0; k < 32; k++) {
      randomValue = Math.random() * 16 | 0;

      if (k == 8 || k == 12 || k == 16 || k == 20) {
        uuidValue += "-"
      }
      uuidValue += (k == 12 ? 4 : (k == 16 ? (randomValue & 3 | 8) : randomValue)).toString(16);
    }
    return uuidValue;
  }
}
