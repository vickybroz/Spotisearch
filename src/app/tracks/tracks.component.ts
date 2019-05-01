import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ITracks } from '../interfaces/results.interface';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  resultados:ITracks;
  public subject = new Subject<any>();

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.subject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query: string) => this.spotifyService.tracksSearch( query ))
    ).subscribe( (data: ITracks) => {
      this.resultados = data;
      console.log( this.resultados);
    });
  }
  

  // search(query: string){
  //   this.spotifyService.tracksSearch( query )
  //   .subscribe( (data: ITracks) => {
  //     this.resultados = data;
  //   });
  // }

}
