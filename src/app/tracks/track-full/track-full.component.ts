import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ITrack } from '../../interfaces/results.interface';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-track-full',
  templateUrl: './track-full.component.html',
  styleUrls: ['./track-full.component.css']
})
export class TrackFullComponent implements OnInit {

  resultado: ITrack;
  id: {};

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.spotifyService.tracksSearch( params.get('id') )
      .subscribe( (data: ITrack) => {
        this.resultado = data;
        console.log(data);
      });
    });

  }

}
