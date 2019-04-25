import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  resultado:{};

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.resultado = this.spotifyService.dummytrack;
  }
  
}
