export interface Producto{
    nombre: string;
    descripcion: string;
    precio: number;
    activado: boolean;
    img: string;
    descuento: number;
    valoracion: number;
    ventas: number;
    fecha:Date;
    id?: number;
}