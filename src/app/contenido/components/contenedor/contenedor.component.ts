import { Component, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from 'src/app/compartido/modelos/producto.model';
import { mergeMap, map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {
  @Output() productos:Producto[]
  categoria:string=''
  busqueda:string=''
  orderby:'valoracion'
  dialog:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private fireStore:AngularFirestore,private router:Router) {
    this.activatedRoute.params.subscribe(params=>{
      if(params['categoria']){
        console.log("entra a categoria")
        this.categoria= params['categoria'];
        this.obtenerProductos().subscribe(docs=>{this.productos=docs;console.log(this.productos);});
      }else{
        console.log("entra a busqueda")
      this.busqueda= params['busqueda'];
      this.obtenerProductos().subscribe(docs=>{
        this.productos=docs.filter(item=>item.nombre.toUpperCase().includes(this.busqueda.toUpperCase()));
        console.log(this.productos);
        if(this.productos&&this.productos.length>0){
        }
      else{
            this.dialog=true;
        }
      });

    }
      
      
    });
    
}
  irainicio(){
    this.router.navigate(["/home"]);
  }



  ngOnInit(): void {
  }

  obtenerProductos(): Observable<Producto[]> {
    console.log(this.categoria)
    if(this.categoria.length>0){
    return this.fireStore.collection("producto", ref => ref.where("categoria","==",this.categoria).limit(30) )
        .valueChanges()
        .pipe( map( pro => pro as Producto[]) );
    }
    else{
      return this.fireStore.collection("producto")
      .valueChanges()
      .pipe( map( pro => pro as Producto[]) );
    }
  }
}
