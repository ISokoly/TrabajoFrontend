import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SecondComponent } from './pages/second/second.component';

export const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent
    },
    {
        path: 'category',
        component: SecondComponent
    }
];
