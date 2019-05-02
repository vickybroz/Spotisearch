import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IAlbumFull } from '../../interfaces/results.interface';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-album-full',
  templateUrl: './album-full.component.html',
  styleUrls: ['./album-full.component.css']
})
export class AlbumFullComponent implements OnInit {

  resultado: IAlbumFull;
  id: {};

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.spotifyService.albumSearch( params.get('id') )
      .subscribe( (data: IAlbumFull) => {
        this.resultado = data;
        console.log(data);
      });
    });

  }

}
