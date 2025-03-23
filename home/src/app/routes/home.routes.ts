import { Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    {
        path: '',
        loadComponent: () => import('../home.component').then(c => c.HomeComponent)
    },
    { path: '**', redirectTo: '' },
];