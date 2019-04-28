import { Component, OnInit, Input } from '@angular/core';
import {Favorito} from '../../models/favorito.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent implements OnInit {
 
  @Input() item: {};
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));

  constructor( private sanitizer: DomSanitizer ) {  }

  ngOnInit() {
    this.favoritos;
  }

  manageFav(id) {
     new Favorito(id);
  }

  checkFav(id:string) {
    let favArray: Array<string> = JSON.parse(localStorage.getItem('spotyfav'));
    let esfav:boolean = false;
    if(favArray !== null){
        esfav = favArray.includes(id)
    }
    return esfav;
  }

  sanitizeUrl(value: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
