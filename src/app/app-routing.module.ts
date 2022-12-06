import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './repositorio/users/users.component'; 
import { DashboardComponent } from './controlador/dashboard/dashboard.component';
import { UserDetailsComponent } from './controlador/user-details/user-details.component';
import { ListadoComponent } from './repositorio/listado/listado.component';

const routes: Routes = [
  { path: 'Users', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listado', component: ListadoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
