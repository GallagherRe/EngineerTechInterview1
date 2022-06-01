import { Component } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sanctioned-entity',
    templateUrl: './add-sanctioned-entity.component.html'
})
export class AddSanctionedEntityComponent {
    postError = false;
    postErrorMessage = '';

    public originalEntity: SanctionedEntity = {
        id: null,
        name: null,
        domicile: null,
        accepted: false
    };

    public sanctionEntity: SanctionedEntity = { ...this.originalEntity };

    constructor(private entitiesService: SanctionedEntitiesService, private router: Router) { }

    onHttpError(errorMessage: any) {
        this.postError = true;
        this.postErrorMessage = errorMessage;
    }

    async onSubmit(form: NgForm) {
        var isValid = await this.entitiesService.isValidSanctionEntity(this.sanctionEntity)
        if (form.valid && isValid) {
            this.entitiesService.addSanctionedEntity(this.sanctionEntity).subscribe(
                result => {
                    console.log('success: ', result);
                    this.router.navigateByUrl('/sanctioned-entities')
                },
                error => this.onHttpError(error.name)
            );
        } else {
            this.onHttpError("Sanction entity (name and domicile) already exist.")
        }
    }

    onAcceptSwitch(value: boolean) {
        this.sanctionEntity.accepted = value;
    }
}
