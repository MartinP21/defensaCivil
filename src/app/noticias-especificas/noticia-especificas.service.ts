import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaEspecificasService {

  constructor(private http: HttpClient) { }

  obtenerNoticias(token: string) {
    const params = { token: token };
    return this.http.get<any>('https://adamix.net/defensa_civil/def/noticias_especificas.php', { params });
  }
}