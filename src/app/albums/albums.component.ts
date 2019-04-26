import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { IAlbums } from '../interfaces/results.interface';

@Component({
  selector: 'app-album',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  resultados:IAlbums;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  search(query: string){
    this.spotifyService.albumsSearch( query )
    .subscribe( (data: IAlbums) => {
      this.resultados = data;
    });
  }

}
