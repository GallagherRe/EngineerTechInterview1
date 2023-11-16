import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './component/nav-menu/nav-menu.component';
import { HomeComponent } from './component/home/home.component';
import { CounterComponent } from './component/counter/counter.component';
import { SanctionedEntitiesComponent } from './component/sanctioned-entities/sanctioned-entities.component';
import { JumbotronCounterComponent } from './component/jumbotron-counter/jumbotron-counter.component';
import { AddEntityComponent } from './component/add-entity/add-entity.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    SanctionedEntitiesComponent,
    JumbotronCounterComponent,
    AddEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter',  component: CounterComponent },
      { path: 'sanctioned-entities', component: SanctionedEntitiesComponent },
      { path: 'add-entity', component: AddEntityComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  counter = 0;
}
