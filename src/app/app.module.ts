import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartido/components/navbar/navbar.component';
import { HomeComponent } from './contenido/components/home/home.component';
import { CaruselComponent } from './contenido/components/carusel/carusel.component';
import { ProductosComponent } from './contenido/components/productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { ContenedorComponent } from './contenido/components/contenedor/contenedor.component';
import { LoginComponent } from './contenido/pages/login/login.component';
import { DetalleComponent } from './contenido/components/detalle/detalle.component';
import { ContactoComponent } from './contenido/pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CaruselComponent,
    ProductosComponent,
    ContenedorComponent,
    LoginComponent,
    DetalleComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
