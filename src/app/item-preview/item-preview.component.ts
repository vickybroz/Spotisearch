import { Component, OnInit, Input } from '@angular/core';
import {Favorito} from '../favorito.model';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent implements OnInit {
  @Input() item: {};
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));

  constructor() {  }

  ngOnInit() {
    this.favoritos;
  }

  manageFav(id) {
     new Favorito(id);
  }

  checkFav(id){
      let favArray: Array<string> = JSON.parse(localStorage.getItem('spotyfav'));
      let esfav = false;
      for( let fav of favArray){
        if(fav === id){
          esfav = true;
        }
      }
      return esfav;
  }

}
