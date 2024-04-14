import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SituacionService {

  constructor(private http: HttpClient) { }

  enviarSituacion(datos: any) {
    return this.http.post<any>('https://adamix.net/defensa_civil/def/nueva_situacion.php', datos);
  }
}