import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../Modelo/Carrito';
import { Producto } from '../Modelo/Producto';
import { User } from '../Modelo/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  carrito:Carrito = new Carrito();
  user:User = new User();

  constructor(private http:HttpClient) { }

  UrlProductos='http://localhost:8080/API/productos';
  UrlCarrito='http://localhost:8080/API/carrito';

  getProductos(){
    return this.http.get<Producto[]>(this.UrlProductos)
  }

  updateCarrito(id:number){
    return this.http.post<Carrito>(this.UrlCarrito.concat("/addProducto/").concat(id.toString()), this.carrito)
  }

  setCarrito(data: Carrito) {
    this.carrito = data;
  }
  getCarrito() {
    return this.carrito;
  }
}
