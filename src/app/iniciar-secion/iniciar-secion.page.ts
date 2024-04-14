import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IniciarSecionService } from '../iniciar-secion/iniciar-secion.service';

@Component({
  selector: 'app-iniciar-secion',
  templateUrl: './iniciar-secion.page.html',
  styleUrls: ['./iniciar-secion.page.scss'],
})
export class IniciarSecionPage {

  cedula: string = '';
  clave: string = '';

  constructor(
    private iniciarSesionService: IniciarSecionService,
    private router: Router
  ) { }

  iniciarSesion() {
    if (this.cedula.trim() === '' || this.clave.trim() === '') {
      console.error('Por favor, complete todos los campos.');
      return;
    }

    const formData = new FormData();
    formData.append('cedula', this.cedula);
    formData.append('clave', this.clave);

    this.iniciarSesionService.iniciarSesion(formData).subscribe((data: any) => {
      console.log(data);
      if (data.exito) {
        localStorage.setItem('token', data.token); // Almacena el token en el almacenamiento local
        this.router.navigate(['/situacion']);
      }
    }, (error) => {
      console.error('Error al iniciar sesión:', error);
      // Aquí podrías mostrar un mensaje al usuario informando sobre el error
    });
  }
}
