import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedidasService {

  apiUrl = 'https://adamix.net/defensa_civil/def/medidas_preventivas.php';

  constructor(private http: HttpClient) { }

  getMedidasPreventivas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
