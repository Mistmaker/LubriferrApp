import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosEmpresaPage } from './datos-empresa.page';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';

const routes: Routes = [
  {
    path: '',
    component: DatosEmpresaPage
  },
  {
    path: 'como-llegar',
    component: ComoLlegarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosEmpresaPageRoutingModule {}
