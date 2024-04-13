import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapaAlberguesService } from './mapa-albergues.service';

@Component({
  selector: 'app-mapa-albergues',
  templateUrl: './mapa-albergues.page.html',
  styleUrls: ['./mapa-albergues.page.scss'],
})
export class MapaAlberguesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
