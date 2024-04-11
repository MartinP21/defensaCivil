import { Component, OnInit } from '@angular/core';
import { MiembrosService } from './miembros.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
})
export class MiembrosPage implements OnInit {

  miembros: any[] = [];

  constructor(private miembrosService: MiembrosService) { }

  ngOnInit() {
    this.getMiembros();
  }

  getMiembros() {
    this.miembrosService.getMiembros().subscribe(data => {
      this.miembros = data.datos;
    });
  }

}
