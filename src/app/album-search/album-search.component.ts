import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.css']
})
export class AlbumSearchComponent implements OnInit {
  resultadoAlbums:{};

  constructor(private spotifyService: SpotifyService) {

  }

  getData(): void {
    this.resultadoAlbums = this.spotifyService.dummyAlbums;
  }

  ngOnInit() {
  }
}
