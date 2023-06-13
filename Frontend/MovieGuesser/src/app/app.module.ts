import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiarioComponent } from './pagina/diario/diario.component';
import { IlimitadoComponent } from './pagina/ilimitado/ilimitado.component';
import { ClasificacionComponent } from './pagina/clasificacion/clasificacion.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { PerfilComponent } from './pagina/perfil/perfil.component';
import { PanelAdminComponent } from './pagina/panel-admin/panel-admin.component';
import { Error404Component } from './error404/error404.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TarjetaResultadosComponent } from './tarjeta-resultados/tarjeta-resultados.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DiarioComponent,
    IlimitadoComponent,
    ClasificacionComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    PanelAdminComponent,
    Error404Component,
    TarjetaResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
