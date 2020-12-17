import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from 'src/app/compartido/modelos/producto.model';
import { mergeMap, map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() productos:Producto[]

  constructor( private fireStore:AngularFirestore) {
    
    
    //this.obtenerProductos().subscribe(docs=>{this.productos=docs;console.log(this.productos);});



    
    
    
    
    
    
    
    /*var a = this.parallenarfirebase();
    console.log("a")
    console.log(a)
    console.log("b")
    a.forEach(element => {
      this.fireStore.collection("producto")
        .add(element)
        .then( res => {
          console.log(res);
        });
    });
    */
    
    
  }

  ingresar(){
    
  }

  obtenerProductos(): Observable<Producto[]> {
    return this.fireStore.collection("producto", ref => ref.orderBy('valoracion','desc').limit(30) )
    .valueChanges()
    .pipe( map( pro => pro as Producto[]) );
    
    
  }


  ngOnInit(): void {
  }

  /*parallenarfirebase():Producto[]{
    var a=Array<Producto>()

    var a1={activado:true,nombre:"Zapatos Pascala Caterpillar",descripcion:"la descripcion del producto es Zapatos Pascala Caterpillar",img:"https://home.ripley.com.pe/Attachment/WOP_5/2026237157438/2026237157438-1.jpg",precio:399,descuento:0,valoracion:4.4,ventas:1188,categoria:"calzadohombre",fecha:new Date()};a.push(a1);
    var a2={activado:true,nombre:"Zapato de vestir Taco N5",descripcion:"la descripcion del producto es Zapato de vestir Taco N5",img:"https://bata.pe/53437-large_default/zapatos-de-vestir-bata-para-mujer-melibea-741-6936-negro.jpg",precio:349,descuento:30,valoracion:4.8,ventas:1177,categoria:"calzadohombre",fecha:new Date()};a.push(a2);
    var a3={activado:true,nombre:"Zapatos clásicos en punta",descripcion:"la descripcion del producto es Zapatos clásicos en punta",img:"https://www.dhresource.com/0x0/f2/albu/g8/M00/DB/C9/rBVaV1zNTNKAc4MuAAJJ61JCfHc874.jpg/new-classics-women-pumps-high-heels-party.jpg",precio:299,descuento:20,valoracion:4.9,ventas:316,categoria:"calzadohombre",fecha:new Date()};a.push(a3);
    var a4={activado:true,nombre:"Botines Camel Taco N7",descripcion:"la descripcion del producto es Botines Camel Taco N7",img:"https://i.linio.com/p/8fa64f0d2ca3c067413d8710d1be0b5f-product.jpg",precio:199,descuento:30,valoracion:4.5,ventas:10,categoria:"calzadohombre",fecha:new Date()};a.push(a4);
    var a5={activado:true,nombre:"Sandalias tipo satín",descripcion:"la descripcion del producto es Sandalias tipo satín",img:"https://i.pinimg.com/236x/93/7a/10/937a1075ee096b0db0c494cc4d9cff4b.jpg",precio:179,descuento:20,valoracion:4.4,ventas:818,categoria:"calzadohombre",fecha:new Date()};a.push(a5);
    var a6={activado:true,nombre:"Sandalias Salralis",descripcion:"la descripcion del producto es Sandalias Salralis",img:"https://images-na.ssl-images-amazon.com/images/I/61VyED29VQL._AC_UY395_.jpg",precio:399,descuento:30,valoracion:4.1,ventas:241,categoria:"calzadohombre",fecha:new Date()};a.push(a6);
    var a7={activado:true,nombre:"Zapatos Steve Madden",descripcion:"la descripcion del producto es Zapatos Steve Madden",img:"https://coliseum.vteximg.com.br/arquivos/ids/218014-1000-1000/SMW4013-218--1-.jpg?v=636994889788130000",precio:349,descuento:0,valoracion:3.6,ventas:529,categoria:"calzadohombre",fecha:new Date()};a.push(a7);
    var a8={activado:true,nombre:"Calzado Calimod",descripcion:"la descripcion del producto es Calzado Calimod",img:"https://www.calimodstore.com/arquivos/calimod_femme_marca.jpg?v=637320645248530000",precio:299,descuento:10,valoracion:4,ventas:647,categoria:"calzadohombre",fecha:new Date()};a.push(a8);
    var a9={activado:true,nombre:"Calzado Vizzano",descripcion:"la descripcion del producto es Calzado Vizzano",img:"https://mossashoes.vteximg.com.br/arquivos/ids/166911-500-500/Zapatos-para-Mujer-VIZZANO-ROJO-1342-100-13488-46175.jpg?v=637384680268400000",precio:249,descuento:10,valoracion:4.6,ventas:1092,categoria:"calzadohombre",fecha:new Date()};a.push(a9);
    var a10={activado:true,nombre:"Zapato doble Color ",descripcion:"la descripcion del producto es Zapato doble Color ",img:"https://amp.protocolo.org/extfiles/i-2975-cG.829.1.jpg",precio:339,descuento:30,valoracion:4.2,ventas:241,categoria:"calzadohombre",fecha:new Date()};a.push(a10);
    var a11={activado:true,nombre:"Zapatos en charol",descripcion:"la descripcion del producto es Zapatos en charol",img:"https://bizarro.vteximg.com.br/arquivos/ids/601846-1000-1000/ZAPATOS-MUJER-7509-CH-CHAROL-FLUXA_21939.jpg?v=636954289138200000",precio:299,descuento:30,valoracion:4.9,ventas:111,categoria:"calzadohombre",fecha:new Date()};a.push(a11);
    var a12={activado:true,nombre:"Zapatillas en lona blanca",descripcion:"la descripcion del producto es Zapatillas en lona blanca",img:"https://image.made-in-china.com/202f0j10QOSEBvwgCCuT/New-Fashion-Women-PVC-Rain-Shoes-Ladies-s-Rain-Shoes-Popular-Style-Woman-Shoe-Lady-Rain-Boots-2020-New-Style-Rain-Boots-Cheap-Rain-Shoes-Low-Price-Shoes.jpg",precio:199,descuento:10,valoracion:4.3,ventas:109,categoria:"calzadohombre",fecha:new Date()};a.push(a12);
    var a13={activado:true,nombre:"Zapatos windup",descripcion:"la descripcion del producto es Zapatos windup",img:"https://s.fenicio.app/f/catco/catalogo/articulos/P309892_F56_1_460x460_1590633428_f40.jpg",precio:149,descuento:0,valoracion:4.9,ventas:77,categoria:"calzadohombre",fecha:new Date()};a.push(a13);
    var a14={activado:true,nombre:"Zapatos ana Carlo",descripcion:"la descripcion del producto es Zapatos ana Carlo",img:"https://www.calzadosrumbo.com/86552-home_default_2x/ana-carlo-ajh17124.jpg",precio:199,descuento:20,valoracion:4.7,ventas:360,categoria:"calzadohombre",fecha:new Date()};a.push(a14);
    var a15={activado:true,nombre:"Botines Silver",descripcion:"la descripcion del producto es Botines Silver",img:"https://coliseum.vteximg.com.br/arquivos/caterpillar-mujer.jpg?v=637358860243800000",precio:349,descuento:20,valoracion:4.1,ventas:418,categoria:"calzadohombre",fecha:new Date()};a.push(a15);
    var a16={activado:true,nombre:"Zapatillas arcoiris",descripcion:"la descripcion del producto es Zapatillas arcoiris",img:"https://ae01.alicdn.com/kf/H0efcc289c54a403db8fa578122b5d024U/REAVE-CAT-mujeres-zapatillas-transpirables-de-malla-de-aire-zapatos-de-plataforma-mujer-de-encaje-Vulcanize.jpg",precio:199,descuento:0,valoracion:4.2,ventas:310,categoria:"calzadohombre",fecha:new Date()};a.push(a16);
    var a17={activado:true,nombre:"Zapatillas Intruder",descripcion:"la descripcion del producto es Zapatillas Intruder",img:"https://photos6.spartoo.es/photos/168/16881218/16881218_350_A.jpg",precio:149,descuento:30,valoracion:4.6,ventas:727,categoria:"calzadohombre",fecha:new Date()};a.push(a17);
    var a18={activado:true,nombre:"Zapatillas Berymaterry",descripcion:"la descripcion del producto es Zapatillas Berymaterry",img:"https://images-na.ssl-images-amazon.com/images/I/51NkMkzSW3L._AC_UY395_.jpg",precio:249,descuento:10,valoracion:4.6,ventas:216,categoria:"calzadohombre",fecha:new Date()};a.push(a18);
    var a19={activado:true,nombre:"Zapatos tipo calado",descripcion:"la descripcion del producto es Zapatos tipo calado",img:"https://ae01.alicdn.com/kf/HTB1Bm6.m0nJ8KJjSszdq6yxuFXam/PXELENA-zapatos-Oxford-con-cordones-Estilo-Vintage-para-mujer-calzado-de-tac-n-grueso-cortado-de.jpg",precio:349,descuento:20,valoracion:4.9,ventas:1142,categoria:"calzadohombre",fecha:new Date()};a.push(a19);
    var a20={activado:true,nombre:"Zapatilla edición especial",descripcion:"la descripcion del producto es Zapatilla edición especial",img:"https://assets.reebok.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/f11795d7cde14f26b3bcac7000f2903b_9366/reebok-royal-techque-t.jpg",precio:349,descuento:20,valoracion:4.4,ventas:287,categoria:"calzadohombre",fecha:new Date()};a.push(a20);
    var a21={activado:true,nombre:"Zapatos con incrustación de cristales",descripcion:"la descripcion del producto es Zapatos con incrustación de cristales",img:"https://cdn.shopify.com/s/files/1/1416/9472/products/1282.108-blanco2_c8e6dd16-b598-436b-9b21-311764c1ecb7.jpg?v=1594201491",precio:699,descuento:30,valoracion:4.1,ventas:868,categoria:"calzadohombre",fecha:new Date()};a.push(a21);
    var a22={activado:true,nombre:"Zapatos Oxfords",descripcion:"la descripcion del producto es Zapatos Oxfords",img:"https://i.linio.com/p/7a1ab6da086085d1e2d1665b789f9fcd-catalog.jpg",precio:399,descuento:20,valoracion:4.3,ventas:935,categoria:"calzadohombre",fecha:new Date()};a.push(a22);
    
return a

  }*/


}

