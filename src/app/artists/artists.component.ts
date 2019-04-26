import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ITracks } from '../interfaces/results.interface';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  resultados:ITracks;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  search(query: string){
    this.spotifyService.artistsSearch( query )
    .subscribe( (data: ITracks) => {
      this.resultados = data;
    });
  }
}
