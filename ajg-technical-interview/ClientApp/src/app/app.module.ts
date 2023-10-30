import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { SanctionedEntitiesComponent } from "./components/sanctioned-entities/sanctioned-entities.component";
import { JumbotronCounterComponent } from "./components/jumbotron-counter/jumbotron-counter.component";
import { AddEditSanctionedEntitiesComponent } from "./components/sanctioned-entities/add-edit-sanctioned-entities/add-edit-sanctioned-entities.component";
import { StatusPipe } from "./pipes/status.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import * as fromCounter from "./components/counter/+state/counter.reducer";
import { DisplayCounterComponent } from "./components/counter/display-counter/display-counter.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    SanctionedEntitiesComponent,
    JumbotronCounterComponent,
    StatusPipe,
    AddEditSanctionedEntitiesComponent,
    DisplayCounterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ counter: fromCounter.counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
