import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ITrack } from '../../interfaces/results.interface';

@Component({
  selector: 'app-favorite-tracks',
  templateUrl: './favorite-tracks.component.html',
  styleUrls: ['./favorite-tracks.component.css']
})

export class FavoriteTracksComponent implements OnInit {

  @Input() favoritos: [];
  resultado: ITrack;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

   searchFavs(fav){
      this.spotifyService.favSearch( fav )
      .subscribe( (data: ITrack) => {
        this.resultado = data;
      });    
   }



}
