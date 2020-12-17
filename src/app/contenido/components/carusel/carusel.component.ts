import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carusel } from 'src/app/compartido/modelos/itemcarusel.model'; 
import { mergeMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
  caruselitems:Carusel[]

  constructor( private fireStore:AngularFirestore) {
    
    this.obtenerCarusel().subscribe(docs=>{this.caruselitems=docs;console.log(this.caruselitems);});
    
    
  }

  ingresar(){
    
  }

  obtenerCarusel(): Observable<Carusel[]> {
    return this.fireStore.collection("carusel", ref => ref.orderBy('id','asc') )
    .valueChanges()
    .pipe( map( carusels => carusels as Carusel[]) );
    
    
  }


  ngOnInit(): void {
  }

}
