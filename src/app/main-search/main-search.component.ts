import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { IFullSearchResults } from '../Iitems';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {

  resultados = {};

  constructor(private spotifyService: SpotifyService) { }

  getData(): void {
    this.resultados = this.spotifyService.dummydata;
    console.log(this.resultados);
  }

  ngOnInit() {
  }

}
