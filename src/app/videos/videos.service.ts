import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private apiUrl = 'https://adamix.net/defensa_civil/def/videos.php';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
