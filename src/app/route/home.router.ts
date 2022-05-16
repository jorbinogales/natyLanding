import { Routes } from '@angular/router';

export const home_content: Routes = [
  {
    path: '',
    loadChildren: () => import('./../pages/home/home.module').then(m => m.HomeModule),
  }
]