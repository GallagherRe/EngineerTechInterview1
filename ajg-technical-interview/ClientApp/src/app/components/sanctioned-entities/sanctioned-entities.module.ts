import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SanctionedEntitiesComponent } from './sanctioned-entities.component';
import { SanctionedEntitiesRoutes } from './sanctioned-entities.routes';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
    declarations: [
        SanctionedEntitiesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        DropdownModule,
        ToolbarModule,
        DialogModule,
        SelectButtonModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        RouterModule.forChild(SanctionedEntitiesRoutes)
    ],
    providers: [SanctionedEntitiesService, MessageService, ConfirmationService]
})
export class SanctionedEntitiesModule { }


