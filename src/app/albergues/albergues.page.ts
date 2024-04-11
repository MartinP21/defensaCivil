import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlberguesService } from 'src/app/albergues/albergues.service';

@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {

  albergues: any[] = [];
  filteredAlbergues: any[] = [];
  searchTerm: string = '';

  constructor(private navCtrl: NavController, private alberguesService: AlberguesService) { }

  ngOnInit() {
    this.getAlbergues();
  }

  getAlbergues() {
    this.alberguesService.getAlbergues().subscribe(data => {
      this.albergues = data.datos;
    });
  }
}
