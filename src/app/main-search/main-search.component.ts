import { Component, OnInit} from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { IFullSearchResults } from '../interfaces/results.interface';
import {Favorito} from '../models/favorito.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],
  // providers: [SpotifyService],
})
export class MainSearchComponent implements OnInit {

  resultados: IFullSearchResults;
  favoritos: Favorito[] = JSON.parse(localStorage.getItem('spotyfav'));
  public subject = new Subject<any>();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.subject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query: string) => this.spotifyService.fullSearch( query ))
    ).subscribe( (data: IFullSearchResults) => {
      this.resultados = data;
      console.log(  this.resultados);
    });
   }

}
