import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wolfstore';
  usuario:string='';
  sesionactiva:boolean=false;

  login(user:string){
    this.usuario=user;
    this.sesionactiva=true;
  }


}
