import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { IAlbums } from '../interfaces/results.interface';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  resultados:IAlbums;
  public subject = new Subject<any>();

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.subject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query: string) => this.spotifyService.albumsSearch( query ))
    ).subscribe( (data: IAlbums) => {
      this.resultados = data;
    });
  }

}
