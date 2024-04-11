import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlberguesService {

  private apiUrl = 'https://adamix.net/defensa_civil/def/albergues.php';

  constructor(private http: HttpClient) { }

  getAlbergues(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
