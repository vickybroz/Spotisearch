import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSearchComponent } from './main-search/main-search.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { AlbumComponent } from './album/album.component';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { TrackSearchComponent } from './track-search/track-search.component';
import { TrackComponent } from './track/track.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MainSearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'artist', component: ArtistSearchComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'album', component: AlbumSearchComponent },
  { path: 'track', component: TrackSearchComponent },
  { path: 'track/:id', component: TrackComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}

