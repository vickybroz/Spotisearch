import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { FavoriteTracksComponent } from './favorite-tracks/favorite-tracks.component';
// import { SpotifyService } from './spotify.service';
import { AppRoutingModule } from './app-routing.module';
import { ArtistComponent } from './artist/artist.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { AlbumComponent } from './album/album.component';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { TrackComponent } from './track/track.component';
import { TrackSearchComponent } from './track-search/track-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    FavoriteTracksComponent,
    ArtistComponent,
    ArtistSearchComponent,
    AlbumComponent,
    AlbumSearchComponent,
    ItemPreviewComponent,
    TrackComponent,
    TrackSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
