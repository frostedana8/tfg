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
    PanelAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
