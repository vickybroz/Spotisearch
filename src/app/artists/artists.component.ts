import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { IArtist } from '../interfaces/results.interface';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  resultados:IArtist;  
  public subject = new Subject<any>();

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.subject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query: string) => this.spotifyService.artistsSearch( query ))
    ).subscribe( (data: IArtist) => {
      this.resultados = data;
      console.log( this.resultados);
    });
  }

  // search(query: string){
  //   this.spotifyService.artistsSearch( query )
  //   .subscribe( (data: IArtist) => {
  //     this.resultados = data;
  //   });
  // }
}
