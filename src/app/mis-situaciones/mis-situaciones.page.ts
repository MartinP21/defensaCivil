import { Component, OnInit } from '@angular/core';
import { MisSituacionesService } from './mis-situaciones.service';

@Component({
  selector: 'app-mis-situaciones',
  templateUrl: './mis-situaciones.page.html',
  styleUrls: ['./mis-situaciones.page.scss'],
})
export class MisSituacionesPage implements OnInit {

  situaciones: any[] = [];

  constructor(private situacionesService: MisSituacionesService) { }

  ngOnInit() {
    const token = 'tu_token_aqui'; // Aquí deberías obtener el token de algún lugar, como el almacenamiento local
    this.getSituaciones(token);
  }

  getSituaciones(token: string) {
    this.situacionesService.getSituaciones(token).subscribe(
      (response) => {
        this.situaciones = response.datos;
      },
      (error) => {
        console.error('Error al obtener las situaciones:', error);
      }
    );
  }
}
