import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  servicios: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getServicios().subscribe(data => {
      this.servicios = data.datos;
    });
  }

}
