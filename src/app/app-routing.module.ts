import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorComponent } from './contenido/components/contenedor/contenedor.component';
import { HomeComponent } from './contenido/components/home/home.component';
import { ContactoComponent } from './contenido/pages/contacto/contacto.component';
import { LoginComponent } from './contenido/pages/login/login.component';

const routes: Routes = [
 { path: 'home', component:  HomeComponent},
 { path: 'contenedor/:categoria', component:  ContenedorComponent},
 { path: 'search/:busqueda', component:  ContenedorComponent},
 { path: 'login', component:  LoginComponent},
 { path: 'contacto', component:  ContactoComponent},
 { path: '**', component:  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
