import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'datos-empresa',
    loadChildren: () => import('./pages/datos-empresa/datos-empresa.module').then( m => m.DatosEmpresaPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'mis-puntos',
    loadChildren: () => import('./pages/mis-puntos/mis-puntos.module').then( m => m.MisPuntosPageModule)
  },
  {
    path: 'comentarios-sugerencias',
    loadChildren: () => import('./pages/comentarios-sugerencias/comentarios-sugerencias.module').then( m => m.ComentariosSugerenciasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
