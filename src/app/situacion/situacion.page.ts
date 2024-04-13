import { Component } from '@angular/core';
import { SituacionService } from './situacion.service';

@Component({
  selector: 'app-situacion',
  templateUrl: './situacion.page.html',
  styleUrls: ['./situacion.page.scss'],
})
export class SituacionPage {

  titulo: string = '';
  descripcion: string = '';
  foto: string = '';
  latitud: number = 0;
  longitud: number = 0;

  constructor() { }

  enviarSituacion() {
    // Aquí puedes enviar los datos a la API utilizando el servicio correspondiente
    console.log('Título:', this.titulo);
    console.log('Descripción:', this.descripcion);
    console.log('Foto:', this.foto);
    console.log('Latitud:', this.latitud);
    console.log('Longitud:', this.longitud);
  }
}