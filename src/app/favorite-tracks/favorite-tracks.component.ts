import { Component, OnInit } from '@angular/core';
import {Favorito} from '../favorito.model';

@Component({
  selector: 'app-favorite-tracks',
  templateUrl: './favorite-tracks.component.html',
  styleUrls: ['./favorite-tracks.component.css']
})

export class FavoriteTracksComponent implements OnInit {
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));

  constructor() { }

  ngOnInit() {
  }

}
