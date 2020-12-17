import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() sesionactiva=false;
  @Input() usuario:Usuario;
  forma:FormGroup;
  constructor(private router:Router) {

    this.forma = new FormGroup({
      firstName: new FormControl()
   });

    this.usuario={
      nombre:"Jose Abraham Zapata Cruz",
      id:1524875665542,
      iniciocon:"google"
    }
  }
redirigir(busqueda:string){
  return this.router.navigateByUrl("/search/"+busqueda)
}
  ngOnInit(): void {
  }

}
