import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SanctionedEntity } from "../../models/sanctioned-entity";
import { SanctionedEntitiesComponent } from "./sanctioned-entities.component";
import { ConfirmationService, MessageService } from "primeng/api";
import { instance, mock, verify, when } from "ts-mockito";
import { SanctionedEntitiesService } from "../../services/sanctioned-entities.service";
import { of } from "rxjs";
import { NO_ERRORS_SCHEMA } from "@angular/core";

let entityList: SanctionedEntity[] = [
    { 'id': '1', 'name': 'Test Name1', 'domicile': 'Test Domicile1', 'accepted':false } as SanctionedEntity,
    { 'id': '2', 'name': 'Test Name2', 'domicile': 'Test Domicile1', 'accepted': false } as SanctionedEntity,
];

let component: SanctionedEntitiesComponent;
let fixture: ComponentFixture<SanctionedEntitiesComponent>;

let entityService: SanctionedEntitiesService;
let confirmationService: ConfirmationService;
let messageService: MessageService;

beforeEach(async () => {
    entityService = mock(SanctionedEntitiesService);
    let entityServiceObj: SanctionedEntitiesService = instance(entityService);

    confirmationService = mock(ConfirmationService);
    let confirmationServiceObj: ConfirmationService = instance(confirmationService);

    messageService = mock(MessageService);
    let messageServiceObj: MessageService = instance(messageService);

    when(entityService.getSanctionedEntities()).thenReturn(of(entityList));

    await TestBed.configureTestingModule({
        declarations: [SanctionedEntitiesComponent],
        providers: [
            { provide: SanctionedEntitiesService, useValue: entityServiceObj },
            { provide: ConfirmationService, useValue: confirmationServiceObj },
            { provide: MessageService, useValue: messageServiceObj }],
        schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SanctionedEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

it('should create', () => {
    expect(component).toBeTruthy();
});

describe('When sanctioned entity list is retrived', () => {

    it('should call getSanctionedEntities only once', () => {
        verify(entityService.getSanctionedEntities()).once();
    });

    it('should return correct entity list', () => {
        expect(component.entities.length).toBe(2);
    });

});
