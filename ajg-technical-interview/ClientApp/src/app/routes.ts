import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    {
        path: 'sanctioned-entities',
        loadChildren: () => import('./components/sanctioned-entities/sanctioned-entities.module').then(s => s.SanctionedEntitiesModule)
    },

]
