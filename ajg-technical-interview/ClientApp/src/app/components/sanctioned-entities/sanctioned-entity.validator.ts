import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { SanctionedEntity } from "../../models/sanctioned-entity";

export function sanctionedEntityValidator(entities: SanctionedEntity[], entity: SanctionedEntity): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (entities && entity) {
            let item1 = entities.find(i => i.name === entity.name && i.domicile === entity.domicile);
            return item1 ? { forbiddenName: { value: control.value } } : null;
        }
        return null;
    };
}