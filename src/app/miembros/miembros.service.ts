import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  apiUrl = 'https://adamix.net/defensa_civil/def/miembros.php';

  constructor(private http: HttpClient) { }

  getMiembros(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
