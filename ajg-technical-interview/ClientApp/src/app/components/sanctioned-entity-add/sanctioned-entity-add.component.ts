import { Component, OnInit  } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-sanctioned-entity-add',
  templateUrl: './sanctioned-entity-add.component.html'
})
export class SanctionedEntityAddComponent implements OnInit {

    public entity: SanctionedEntity;
    public addSanctionedEntityForm: FormGroup;
    public submitted: boolean = false;
    public errorMessage: string = null;

    constructor(private entitiesService: SanctionedEntitiesService,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.addSanctionedEntityForm = this.formBuilder.group({
            name: ['', Validators.required],
            domicile: ['', Validators.required],
            accepted: [false, Validators.nullValidator]
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.addSanctionedEntityForm.invalid) return;

        this.entitiesService.createSantionedEntity(this.addSanctionedEntityForm.value).subscribe({
            next: data => {
                this.router.navigate(["/sanctioned-entities/"]);               
            },
            error: error => {
                this.errorMessage = error.message;
            }
        });
    }
}
