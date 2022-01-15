import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Quines Somos', url: '/datos-empresa', icon: 'mail' },
    { title: 'Como llegar', url: '/datos-empresa/como-llegar', icon: 'paper-plane' },
    { title: 'Catálogo de productos', url: '/catalogo', icon: 'heart' },
    { title: 'Promociones del mes', url: '/promociones', icon: 'archive' },
    { title: 'Mis puntos', url: '/mis-puntos', icon: 'trash' },
    { title: 'Comentarios y sugerencias', url: '/comentarios-sugerencias', icon: 'warning' },
  ];
  public labels = ['Herramientas electricas', 'Pinturas', 'Construccion', 'Maquinaria', 'Grifería ', 'Ferretería General'];
  constructor() {}
}
