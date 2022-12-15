import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './controlador/user-details/user-details.component';
import { MessagesComponent } from './repositorio/messages/messages.component';
import { DashboardComponent } from './controlador/dashboard/dashboard.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListadoComponent } from './repositorio/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
