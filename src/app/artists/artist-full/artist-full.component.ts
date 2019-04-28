import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IArtists } from '../../interfaces/results.interface';
import { IAlbumSlim } from '../../interfaces/results.interface';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist-full',
  templateUrl: './artist-full.component.html',
  styleUrls: ['./artist-full.component.css']
})
export class ArtistFullComponent implements OnInit {

  resultado: IArtists;
  albums: IAlbumSlim;
  passData: {resultado: IArtists,albums: IAlbumSlim};
  id: {};

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.spotifyService.artistSearch( params.get('id') )
      .subscribe( (data: IArtists) => {
        this.resultado = data;
        // console.log(data);
      });
    });

    this.route.paramMap.subscribe(params => {
      this.spotifyService.artistAlbumSearch( params.get('id') )
      .subscribe( (data: IAlbumSlim) => {
        this.albums = data;
        // console.log(data);
      });
    });


  }



}
