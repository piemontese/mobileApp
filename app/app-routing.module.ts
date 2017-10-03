import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [  
  {
    path: '', component: LoginComponent,
    children: []
  },
  {
    path: 'login', component: LoginComponent,
    children: []
  },
  {
    path: 'menu', component: MenuComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
