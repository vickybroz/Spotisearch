import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { FavoriteTracksComponent } from './shares/favorite-tracks/favorite-tracks.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemPreviewComponent } from './shares/item-preview/item-preview.component';
import { SearchBarComponent } from './shares/search-bar/search-bar.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumFullComponent } from './albums/album-full/album-full.component';
import { ItemFullComponent } from './shares/item-full/item-full.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistFullComponent } from './artists/artist-full/artist-full.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackFullComponent } from './tracks/track-full/track-full.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSearchComponent,
    FavoriteTracksComponent,
    ItemPreviewComponent,
    SearchBarComponent,
    AlbumsComponent,
    AlbumFullComponent,
    ItemFullComponent,
    ArtistsComponent,
    ArtistFullComponent,
    TracksComponent,
    TrackFullComponent,
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
