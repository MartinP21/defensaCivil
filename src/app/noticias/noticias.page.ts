import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/noticias/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getNoticias().subscribe(data => {
      this.noticias = data.datos;
    });
  }

}
