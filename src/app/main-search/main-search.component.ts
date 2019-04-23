import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {Favorito} from '../favorito.model';
import { IFullSearchResults } from '../Iitems';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],
  // providers: [SpotifyService],
})
export class MainSearchComponent implements OnInit {

  resultados: IFullSearchResults;
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(query: string){
    this.spotifyService.fullSearch( query )
          .subscribe( (data: IFullSearchResults) => {
            this.resultados = data;
          });
  }

}
