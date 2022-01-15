import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../../../models/categorias';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { UrlWsFiles } from 'src/environments/environment';
import { ProductosService } from '../../../services/productos.service';
import { Producto } from '../../../models/productos';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria;
  productos: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriasService,
    private iab: InAppBrowser,
    private productosService: ProductosService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoriasService.getCategoria(+id).subscribe(resp => {
        console.log(resp)
        this.categoria = resp;
        this.productosService.getProductosCategoria(resp.id).subscribe(resp => {
          console.log(resp)
          this.productos = resp;
        })
      });
    }
  }

  verPdf(nombrePdf: string) {
    if (!nombrePdf) { return; }
    const browser = this.iab.create(`${UrlWsFiles}/${nombrePdf}`, '_system');
  }

  enviarWhatsapp(nombreCategoria: string) {
    const mensaje = `Hola le escribo desde su app, para que me brinden información sobre la categoría ${nombreCategoria}`;
    const browser = this.iab.create(`https://wa.me/593997332796?text=${mensaje}`, '_system');
  }

}
