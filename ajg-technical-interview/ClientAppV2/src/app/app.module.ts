import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { JumbotronCounterComponent } from './components/jumbotron-counter/jumbotron-counter.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SanctionedEntitiesComponent } from './components/sanctioned-entities/sanctioned-entities.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from '@env/environment';
import { AddSanctionedEntityComponent } from './components/add-sanctioned-entity/add-sanctioned-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    JumbotronCounterComponent,
    NavMenuComponent,
    SanctionedEntitiesComponent,
    AddSanctionedEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
