import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/videos/videos.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  videos: any[] = [];

  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videosService.getVideos().subscribe(data => {
      this.videos = data.datos;
    });
  }

  openVideo(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }
}
