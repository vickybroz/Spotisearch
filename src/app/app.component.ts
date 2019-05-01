import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { IFullSearchResults } from './interfaces/results.interface';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotisearch';
  resultados: IFullSearchResults;
  public subject = new Subject<any>();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.subject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query: string) => this.spotifyService.fullSearch( query ))
    ).subscribe( (data: IFullSearchResults) => {
      this.resultados = data;
      console.log( this.resultados);
    });
   }

}

