import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MisSituacionesService {

  private apiUrl = 'https://adamix.net/defensa_civil/def/situaciones.php';

  constructor(private http: HttpClient) { }

  getSituaciones(token: string): Observable<any> {
    const params = { token: token };
    return this.http.get<any>(this.apiUrl, { params });
  }
}