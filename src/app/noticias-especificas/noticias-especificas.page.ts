import { Component, OnInit } from '@angular/core';
import { NoticiaEspecificasService } from './noticia-especificas.service';

@Component({
  selector: 'app-noticias-especificas',
  templateUrl: './noticias-especificas.page.html',
  styleUrls: ['./noticias-especificas.page.scss'],
})
export class NoticiasEspecificasPage implements OnInit {

  noticias: any[] = []; // Declaración explícita de la propiedad noticias

  constructor(private noticiasService: NoticiaEspecificasService) { }

  ngOnInit() {
    const token = localStorage.getItem('token'); // Recupera el token del almacenamiento local
    if (token) {
      this.obtenerNoticias(token); // Llama a la función para obtener noticias si hay un token
    } else {
      console.error('Token de sesión no encontrado.'); // Maneja la falta de token
    }
  }

  obtenerNoticias(token: string) {
    this.noticiasService.obtenerNoticias(token).subscribe(
      (respuesta) => {
        this.noticias = respuesta.datos; // Asigna las noticias obtenidas a la propiedad noticias
      },
      (error) => {
        console.error(error); // Maneja errores aquí
      }
    );
  }
}








