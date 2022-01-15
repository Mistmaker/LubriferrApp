import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categorias';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  categorias: Categoria[] = [];
  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(resp => { this.categorias = resp; console.log(this.categorias) })
  }

}
