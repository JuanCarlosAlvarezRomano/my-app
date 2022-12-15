import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './controlador/dashboard/dashboard.component';
import { UserDetailsComponent } from './controlador/user-details/user-details.component';
import { ListadoComponent } from './repositorio/listado/listado.component';

//Rutas de las diferentes ventanas
const routes: Routes = [
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
