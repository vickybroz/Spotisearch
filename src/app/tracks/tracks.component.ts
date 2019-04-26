import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ITracks } from '../interfaces/results.interface';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  resultados:ITracks;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  search(query: string){
    this.spotifyService.tracksSearch( query )
    .subscribe( (data: ITracks) => {
      this.resultados = data;
    });
  }

}
