import { Component, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/compartido/modelos/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() productos:Producto[]


  constructor( private fireStore:AngularFirestore) {
    
    this.obtenerProductos().subscribe(docs=>{this.productos=docs;console.log(this.productos);});
}

  ngOnInit(): void {
  }

  obtenerProductos(): Observable<Producto[]> {
    return this.fireStore.collection("producto", ref => ref.orderBy('valoracion','desc').limit(30) )
    .valueChanges()
    .pipe( map( pro => pro as Producto[]) );
    
    
  }
}