//Elvis Antonio Núñez Suriel 2021-2144

import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
  map!:L.Map;
  nombre:string = '';
  apellido:string = '';
  latitud:number = 0;
  longitud:number = 0;

  constructor(){}

  ionViewDidEnter() {
    this.initMap();
  }

  ionViewWillLeave() {
    if(this.map){
      this.map.remove();
    }
  }

  initMap(){
    this.map = L.map('mapId').setView([18.741, -70.162], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  mostrarMapa(){
    this.map.eachLayer((layer) =>{
      if(layer instanceof L.marker){
        this.map.removeLayer(layer);
      }
    });

    // Crear y añadir marcador en las coordenadas proporcionadas
    const marker = L.marker([this.latitud, this.longitud]).addTo(this.map);

    // Bind de popup al marcador con información de nombre, apellido y coordenadas
    marker.bindPopup(`<b>${this.nombre} ${this.apellido}</b><br>Latitud: ${this.latitud}<br>Longitud: ${this.longitud}`).openPopup();

    // Centrar el mapa en las coordenadas proporcionadas
    this.map.setView([this.latitud, this.longitud], 13);
  }
}