import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  resultado:{};
  resultadoTracks:{};

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.resultado = this.spotifyService.dummyAlbum;
//    this.resultadoTracks = this.spotifyService.dummyAlbumTracks;
  }

}
