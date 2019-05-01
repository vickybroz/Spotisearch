import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ITracksFull } from '../../interfaces/results.interface';

@Component({
  selector: 'app-favorite-tracks',
  templateUrl: './favorite-tracks.component.html',
  styleUrls: ['./favorite-tracks.component.css']
})

export class FavoriteTracksComponent implements OnInit {

  @Input() favoritos: [];
  resultados: ITracksFull;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    console.log(this.favoritos.join());
    this.spotifyService.tracksSearch( this.favoritos.join())
    .subscribe( (data: ITracksFull) => {
      this.resultados = data;
      console.log(this.resultados);
    });
  }


}
