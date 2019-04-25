import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { IFullSearchResults } from '../interfaces/results.interface';
import {Favorito} from '../models/favorito.model';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],
  // providers: [SpotifyService],
})
export class MainSearchComponent implements OnInit {

  resultados: IFullSearchResults;
  queryGet:string;
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(query: string){
    this.spotifyService.fullSearch( query )
    .subscribe( (data: IFullSearchResults) => {
      this.resultados = data;
    });    
  }

}
