import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://adamix.net/defensa_civil/def/servicios.php';

  constructor(private http: HttpClient) { }

  getServicios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}