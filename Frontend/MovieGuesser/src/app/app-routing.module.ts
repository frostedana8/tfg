import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiarioComponent } from './pagina/diario/diario.component';
import { IlimitadoComponent } from './pagina/ilimitado/ilimitado.component';
import { ClasificacionComponent } from './pagina/clasificacion/clasificacion.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';

const routes: Routes = [
{path:'diario', component:DiarioComponent},
{path:'ilimitado', component:IlimitadoComponent},
{path: 'clasificacion', component: ClasificacionComponent },
{path: 'login', component: LoginComponent },
{path: 'registro', component: RegistroComponent },
{path: '', redirectTo: '/diario', pathMatch: 'full'},
{path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,],

})
export class AppRoutingModule { }
