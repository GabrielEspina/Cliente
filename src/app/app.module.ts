import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TurnosComponent } from './turnos/turnos.component';
import { BuscarTurnoComponent } from './buscar-turno/buscar-turno.component';
import { LoginComponent } from './login/login.component';
import { TurnoComponent } from './turno/turno.component';

const routes : Route[] = [
   {path: '', component: HolaMundoComponent},
   {path: 'about', component: AboutComponent},
   {path: 'turnos', component: TurnosComponent},
   {path: 'buscar-turno', component: BuscarTurnoComponent},
   {path: 'login', component: LoginComponent},
   {path: 'turno', component: TurnoComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    AboutComponent,
    TurnosComponent,
    BuscarTurnoComponent,
    LoginComponent,
    TurnoComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
