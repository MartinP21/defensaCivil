import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'star' },
    { title: 'Historia', url: '/historia', icon: 'book' },
    { title: 'Servicios', url: '/servicios', icon: 'construct' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Albergues', url: '/albergues', icon: 'home' },
    { title: 'Mapa de Albergues', url: '/mapa-albergues', icon: 'map' },
    { title: 'Medidas Preventivas', url: '/medidas-preventivas', icon: 'warning' },
    { title: 'Miembros', url: '/miembros', icon: 'people' },
    { title: 'Quiero ser Voluntario', url: '/voluntario', icon: 'person-add' },
    { title: 'Acerca De', url: '/acerca-de', icon: 'alert-circle' },
    { title: 'Iniciar Secion', url: '/iniciar-secion', icon: 'person-circle' },
  ];
}
