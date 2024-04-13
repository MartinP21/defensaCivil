import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})
export class VoluntarioPage {

  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  clave: string = '';
  correo: string = '';
  telefono: string = '';

  constructor(private http: HttpClient) { }

  registrar() {
    // Verifica si todos los campos están completos antes de realizar la solicitud
    if (!this.cedula || !this.nombre || !this.apellido || !this.clave || !this.correo || !this.telefono) {
      console.error('Por favor completa todos los campos.');
      return;
    }

    // Crea un objeto FormData
    const formData = new FormData();
    // Agrega los campos al objeto FormData
    formData.append('cedula', this.cedula);
    formData.append('nombre', this.nombre);
    formData.append('apellido', this.apellido);
    formData.append('clave', this.clave);
    formData.append('correo', this.correo);
    formData.append('telefono', this.telefono);

    // Realiza la solicitud POST a la API de registro
    this.http.post('https://adamix.net/defensa_civil/def/registro.php', formData)
      .subscribe((response: any) => {
        // Maneja la respuesta de la API aquí
        console.log(response);
        if (response.exito) {
          // Si el registro fue exitoso, podrías mostrar un mensaje de éxito o redirigir al usuario a otra página
          console.log('¡Registro exitoso!');
          // Aquí puedes redirigir al usuario a otra página si es necesario
        } else {
          // Si el registro falló, muestra el mensaje de error proporcionado por la API
          console.error(response.mensaje);
        }
      }, (error) => {
        // Maneja cualquier error de la solicitud aquí
        console.error('Error en el registro:', error);
      });
  }
}