import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';

@Component({
  selector: 'app-sanctioned-entity',
    templateUrl: './sanctioned-entitiy.component.html'
})
export class SanctionedEntityComponent implements OnInit {
    public sanctionedEntityForm: FormGroup;
    public sanctionedEntity = new SanctionedEntity()
    public errormsg = '';

    constructor(private entitiesService: SanctionedEntitiesService, private fb: FormBuilder, private router: Router) {
    
    }
    ngOnInit(): void {
        //name: string;
        //domicile: string;
        //accepted: boolean;
        //this.sanctionedEntityForm = new FormGroup({
        //    name: new FormControl(),
        //    domicile: new FormControl(),
        //    accepted: new FormControl(false)
        //});
        this.sanctionedEntityForm = this.fb.group({
            name: ['', [Validators.required]],
            domicile: ['', Validators.required],
            accepted: false
        });
    }

    save() {
        console.log(JSON.stringify(this.sanctionedEntityForm.value));
        this.entitiesService.addSanctionedEntities(this.sanctionedEntityForm.value).subscribe((added: SanctionedEntity) => {
            console.log('saved successfully' + JSON.stringify(added));
            this.router.navigate(['sanctioned-entities']);
        },
            (err) => {
                console.log(JSON.stringify(err.error['detail']));
                this.errormsg = err.error['detail'];
            }
        );
    }


    get name() { return this.sanctionedEntityForm.get('name'); }

    get domicile() { return this.sanctionedEntityForm.get('domicile'); }
}
