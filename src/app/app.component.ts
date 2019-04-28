import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { IFullSearchResults } from './interfaces/results.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotisearch';
  resultados: IFullSearchResults;

  constructor(private spotifyService: SpotifyService) { }

  search(query: string){
    this.spotifyService.fullSearch( query )
    .subscribe( (data: IFullSearchResults) => {
      this.resultados = data;
    });
  }
}

