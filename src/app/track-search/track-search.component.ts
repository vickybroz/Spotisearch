import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track-search',
  templateUrl: './track-search.component.html',
  styleUrls: ['./track-search.component.css']
})
export class TrackSearchComponent implements OnInit {
  resultadoTracks:{};

  constructor(private spotifyService: SpotifyService) {

  }

  getData(): void {
    this.resultadoTracks = this.spotifyService.dummyTracks;
  }

  ngOnInit() {
  }
}
