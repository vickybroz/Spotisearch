import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {

  resultadoArtists:{};

  constructor(private spotifyService: SpotifyService) {

  }

  getData(): void {
    this.resultadoArtists = this.spotifyService.dummyArtists;
  }

  ngOnInit() {
  }
}

