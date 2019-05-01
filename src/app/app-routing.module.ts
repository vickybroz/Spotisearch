import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSearchComponent } from './main-search/main-search.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumFullComponent } from './albums/album-full/album-full.component'
import { ArtistsComponent } from './artists/artists.component';
import { ArtistFullComponent } from './artists/artist-full/artist-full.component'
import { TracksComponent } from './tracks/tracks.component';
import { TrackFullComponent } from './tracks/track-full/track-full.component'



const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MainSearchComponent },
  { path: 'artists/:id', component: ArtistFullComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'albums/:id', component: AlbumFullComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'tracks/:id', component: TrackFullComponent },
  { path: '**', component:MainSearchComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}

