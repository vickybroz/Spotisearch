import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import {Favorito} from '../favorito.model';
import { IFullSearchResults } from '../Iitems';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {

  resultados: IFullSearchResults;
  showRes: boolean = false;
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));

  constructor(private spotifyService: SpotifyService) { }

  getData(e): void {
    this.resultados = this.spotifyService.dummydata;
    this.showRes = true;
  }

  ngOnInit() {
  }

}
