import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';

@Component({
  selector: 'app-sanctioned-entities-form',
  templateUrl: './sanctioned-entities-form.component.html'
})
export class SanctionedEntitiesFormComponent {
    entityForm: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        domicile: new FormControl('', Validators.required),
        accepted: new FormControl(false, Validators.required),
    });
    alreadyExists: boolean = false;
    submitted: boolean = false;

    constructor(private entitiesService: SanctionedEntitiesService, private router: Router) {
        this.entitiesService = entitiesService;
    }

    async handleSubmit() {

        console.log('submitted');
        this.alreadyExists = false;
        this.submitted = true;

        if (!this.entityForm.valid) {
            return;
        }

        console.log('validated');
        // ok - you could call this overkill, but if I had time this would be included in an async validator
        if (!(await this.entitiesService.checkSanctionedEntity(this.entityForm.value))) {
            this.alreadyExists = true;
        }

        this.entitiesService.addSanctionedEntity(this.entityForm.value).subscribe(
            // total hack for time. should use observable to refresh list, etc.
            () => {
                this.router.navigateByUrl('/sanctioned-entities');
            },
            error => {
                console.log(error.name); // again should have proper error handler
            }      
        );
  }
}
