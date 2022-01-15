import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlWs } from 'src/environments/environment';
import { Categoria } from '../models/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<Categoria[]>(`${UrlWs}/categorias`);
  }

  getCategoria(id: number) {
    return this.http.get<Categoria>(`${UrlWs}/categorias/${id}`);
  }
}
