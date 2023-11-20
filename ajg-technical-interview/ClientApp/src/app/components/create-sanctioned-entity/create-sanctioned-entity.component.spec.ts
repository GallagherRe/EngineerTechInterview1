import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { CreateSanctionedEntityComponent } from './create-sanctioned-entity.component';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { CreateSanctiedEntity } from '../../models/create-sanctioned-entity';

describe('CreateSanctionedEntityComponent', () => {
    let component: CreateSanctionedEntityComponent;
    let fixture: ComponentFixture<CreateSanctionedEntityComponent>;
    let sanctionedEntitiesServiceSpy: jasmine.SpyObj<SanctionedEntitiesService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('SanctionedEntitiesService', ['createSanctionedEntity']);

        TestBed.configureTestingModule({
            declarations: [CreateSanctionedEntityComponent],
            imports: [ReactiveFormsModule],
            providers: [{ provide: SanctionedEntitiesService, useValue: spy }],
        });

        fixture = TestBed.createComponent(CreateSanctionedEntityComponent);
        component = fixture.componentInstance;
        sanctionedEntitiesServiceSpy = TestBed.get(SanctionedEntitiesService) as jasmine.SpyObj<SanctionedEntitiesService>;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set statusText to "Accepted" on status change', () => {
        const event = { target: { checked: true } };
        component.onStatusChange(event);
        expect(component.statusText).toEqual('Accepted');
    });

    it('should set statusText to "Rejected" on status change', () => {
        const event = { target: { checked: false } };
        component.onStatusChange(event);
        expect(component.statusText).toEqual('Rejected');
    });

    it('should call service method on form submission', () => {
        const mockSanctionedEntity = { name: 'John Doe', domicile: 'Some Place', accepted: false };
        const createSubject = new Subject<void>();

        component.createSanctionedFormGroup.setValue(mockSanctionedEntity);

        sanctionedEntitiesServiceSpy.createSanctionedEntity.and.returnValue(of(mockSanctionedEntity as SanctionedEntity));

        component.onSubmit();

        expect(sanctionedEntitiesServiceSpy.createSanctionedEntity).toHaveBeenCalledWith(mockSanctionedEntity);
    });

    it('should handle successful form submission', () => {
        const mockSanctionedEntity = { name: 'John Doe', domicile: 'Some Place', accepted: false };

        component.successfulSave(mockSanctionedEntity as CreateSanctiedEntity);

        expect(component.errorMessage).toEqual('');
        expect(component.successMessage).toEqual(`${mockSanctionedEntity.name} - ${mockSanctionedEntity.domicile} has been saved`);
        expect(component.createSanctionedFormGroup.value).toEqual(component.initialValues);
    });

    it('should handle error on form submission', () => {
        const mockError = 'Some error message';

        component.errorSaving(mockError);

        expect(component.successMessage).toEqual('');
        expect(component.errorMessage).toEqual(mockError);
    });

    afterEach(() => {
        component.createSubject.next();
        component.createSubject.complete();
    });
});
