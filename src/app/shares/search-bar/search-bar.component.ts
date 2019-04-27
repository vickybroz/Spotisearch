import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() querySend = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(query: string){
   this.querySend.emit(query);
  }


}


/*

https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow*/