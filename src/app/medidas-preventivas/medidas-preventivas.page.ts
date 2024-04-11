import { Component, OnInit } from '@angular/core';
import { MedidasService } from 'src/app/medidas-preventivas/medidas.service';

@Component({
  selector: 'app-medidas-preventivas',
  templateUrl: './medidas-preventivas.page.html',
  styleUrls: ['./medidas-preventivas.page.scss'],
})
export class MedidasPreventivasPage implements OnInit {

  medidasPreventivas: any[] = [];

  constructor(private medidasService: MedidasService) { }

  ngOnInit() {
    this.getMedidasPreventivas();
  }

  getMedidasPreventivas() {
    this.medidasService.getMedidasPreventivas().subscribe(data => {
      this.medidasPreventivas = data.datos;
    });
  }
}
