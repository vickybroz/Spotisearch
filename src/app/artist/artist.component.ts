import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {

  resultado:{};
  resultadoAlbums:{};

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.resultado = this.spotifyService.dummyartist;
    this.resultadoAlbums = this.spotifyService.dummyArtistAlbums;
  }
  

}

// ng on init cuando te suscribis, ngon destroy para desuscribirse. implements OnInit, OnDestroy