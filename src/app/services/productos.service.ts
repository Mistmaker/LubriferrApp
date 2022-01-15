import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlWs } from 'src/environments/environment';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<Producto[]>(`${UrlWs}/productos`);
  }

  getProductosCategoria(idCategoria: number) {
    return this.http.get<Producto[]>(`${UrlWs}/productos/categoria/${idCategoria}`);
  }

  getProducto(id: number) {
    return this.http.get<Producto>(`${UrlWs}/productos/${id}`);
  }

}
