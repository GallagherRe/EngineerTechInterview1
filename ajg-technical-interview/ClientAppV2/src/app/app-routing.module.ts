import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { SanctionedEntitiesComponent } from './components/sanctioned-entities/sanctioned-entities.component';
import { AddSanctionedEntityComponent } from './components/add-sanctioned-entity/add-sanctioned-entity.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'sanctioned-entities', component: SanctionedEntitiesComponent },
  { path: 'add-sanctioned-entity', component: AddSanctionedEntityComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
