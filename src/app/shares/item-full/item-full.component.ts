import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Favorito} from '../../models/favorito.model';


@Component({
  selector: 'app-item-full',
  templateUrl: './item-full.component.html',
  styleUrls: ['./item-full.component.css']
})
export class ItemFullComponent implements OnInit {
  
  @Input() fullitem: {};
  @Input() albums: {};
  toggle: boolean = false;
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitizeUrl(value: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  clickToggle(e){
    this.toggle = !this.toggle;
  }

  arraysort(array, toggle){
    if (!toggle){
      array.sort((a, b) => (a.duration_ms > b.duration_ms) ? 1 : -1)
    } else {
      array.sort((a, b) => (a.duration_ms < b.duration_ms) ? 1 : -1)
    }
    return array;
  }

  manageFav(id) {
    new Favorito(id);
 }

  /* acomodar esto */
  checkFav(id:string) {
    let favArray: Array<string> = JSON.parse(localStorage.getItem('spotyfav'));
    let esfav:boolean = false;
    if(favArray !== null){
        esfav = favArray.includes(id)
    }
    return esfav;
  }


}
