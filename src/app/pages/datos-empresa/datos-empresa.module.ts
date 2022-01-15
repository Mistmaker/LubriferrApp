import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosEmpresaPageRoutingModule } from './datos-empresa-routing.module';

import { DatosEmpresaPage } from './datos-empresa.page';
import { SharedModule } from '../../shared/shared.module';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosEmpresaPageRoutingModule, 
    SharedModule,
  ],
  declarations: [DatosEmpresaPage, ComoLlegarComponent, QuienesSomosComponent]
})
export class DatosEmpresaPageModule {}
