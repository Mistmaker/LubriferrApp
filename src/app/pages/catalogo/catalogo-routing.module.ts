import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoPage } from './catalogo.page';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPage
  },
  {
    path: ':id',
    component: CategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPageRoutingModule {}
