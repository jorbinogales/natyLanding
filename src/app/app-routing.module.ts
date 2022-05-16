import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home/home-layout.component';
import { home_content } from './route/home.router';

const routes: Routes = [

  // REDIRECTIONS //
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  

  // HOME
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: home_content,
  },

  // ** 
  {
    path: '**',
    component: HomeLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
