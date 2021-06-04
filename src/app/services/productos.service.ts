import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando: boolean = true;
  productos: Producto []= []

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }
  private cargarProductos(){
    this.http.get("https://angular-html-91661-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe( (resp: any) =>{
        console.log(resp)
        this.productos = resp
        this.cargando = false;

        // setTimeout(() => {
        //   this.cargando = false
        // }, 10000)
      })
  }
}
