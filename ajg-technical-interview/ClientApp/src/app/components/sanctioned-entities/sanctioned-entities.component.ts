import { Component } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html'
})
export class SanctionedEntitiesComponent {
    public entities: SanctionedEntity[];
    public entityForm: FormGroup;
    public submitted: boolean = false;
    public entityDialog: boolean = false;
    public confirmSuccess: any;
    public confirmReject: any;
    public entity: SanctionedEntity = { id:'', name: '', domicile:'',accepted:false};

    constructor(
        private entitiesService: SanctionedEntitiesService,
        private fb: FormBuilder,
        private messageService: MessageService,
        private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.setEntitiesList();
        this.initializeEntityForm(this.entity);
    }

    setEntitiesList() {
        this.entitiesService.getSanctionedEntities().subscribe(entities => {
            this.entities = entities;
        });
    }

    initializeEntityForm(entity: SanctionedEntity) {
        this.entityForm = this.fb.group({
            id: entity?.name ?? '',
            name: [entity?.name ?? '', [Validators.required, Validators.minLength(2)]],
            domicile: [entity?.domicile ?? '', [Validators.required, Validators.minLength(2)]],
            accepted: [entity?.accepted ?? false]
        },
        { validator: this.sanctionedEntityValidator.bind(this) }
        );
    }

    sanctionedEntityValidator(c: AbstractControl)  {
        const name = c.get('name').value;
        const domicile = c.get('domicile').value;
        let entityFound = this?.entities?.find(i => i.name === name && i.domicile === domicile);

        return !entityFound ? null : { entityExists: { message: "Sanctioned Enity with this name and domicile already exists!" } };
    }

    openNew() {
        this.entityForm.reset();
        this.submitted = false;
        this.entityDialog = true;
    }

    hideDialog() {
        this.entityDialog = false;
        this.submitted = false;
    }
    onEntityUpdate(entity: SanctionedEntity) {
        this.initializeEntityForm(entity);
        this.entityDialog = true;
    }

    onEntityDelete(entity: SanctionedEntity, index: number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete sanctioned entity ' + entity.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.confirmSuccess = true;
                this.confirmReject = false;

                //TODO: add method to delete entity in service
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Entity has been deleted successfully!', life: 3000 });
            },
            reject: () => {
                this.confirmSuccess = false;
                this.confirmReject = true;
            }
        });

    }

    saveEntity() {

        if (this.entityForm.invalid)
            return;
        this.entity.name = this.entityForm.get("name")?.value;
        this.entity.domicile = this.entityForm.get("domicile")?.value;
        this.entity.accepted = this.entityForm.get("accepted")?.value ?? false;

        this.submitted = true;

        if (this.entity.name.trim()) {
            if (!this.entity.id) {
                this.entitiesService.addSanctionedEntity(this.entity).subscribe((data: any) => {
                    this.setEntitiesList();
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Entity has been created successfully!', life: 3000 });
                });
            }
            else {
                //TODO: update existing entity
            }

            this.entityForm.reset();
            this.entityDialog = false;
        }
    }
}
