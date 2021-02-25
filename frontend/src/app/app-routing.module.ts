import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UnconfiguredComponent } from './components/unconfigured/unconfigured.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './login/auth.guard'
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioEditComponent } from './components/usuarios/usuario-edit/usuario-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'unconfigured', component: UnconfiguredComponent},
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'unconfigured/config/:id/:onu', component: ConfigurationComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuario/:id', component:UsuarioEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
