import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { SanctionedEntitiesComponent } from "./components/sanctioned-entities/sanctioned-entities.component";
import { AddEditSanctionedEntitiesComponent } from "./components/sanctioned-entities/add-edit-sanctioned-entities/add-edit-sanctioned-entities.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "counter", component: CounterComponent },
  { path: "sanctioned-entities", component: SanctionedEntitiesComponent },
  {
    path: "add-sanctioned-entity",
    component: AddEditSanctionedEntitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
