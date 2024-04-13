import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IniciarSecionService {

  constructor(private http: HttpClient) { }

  iniciarSesion(formData: FormData) {
    // Realiza la solicitud POST al servidor con FormData
    return this.http.post('https://adamix.net/defensa_civil/def/iniciar_sesion.php', formData);
  }
}
