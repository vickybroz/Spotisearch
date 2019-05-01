import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class SpotifyService {


    constructor(private http: HttpClient){}
    spotysearch(query: string){
      const Url='https://api.spotify.com/v1/'+query;
     //Por ahora estoy puenteando la Oauth con el postman
      const headers=new HttpHeaders({
            Authorization:
            "Bearer BQCgiXG5YWzXJ050ay4-54aUlyG5dXHHctARHg7ujph2krr2gAuljHKrzNwRqW1dLrqALJcLYVm-Hu5aVVuJKusL2040JgyqEjV7XBMhzs6NKX_qqm-BMrg2oxwdMmaNWdf2LcQPcZb8eHf70lb9RdYFfNeqzlKx"
    });

    return this.http.get(Url, {headers});
    }

    // fullSearch(query)  {
    //   return   query.pipe(
    //       debounceTime(500),
    //       distinctUntilChanged(),
    //       switchMap((query: string) => this.spotysearch('search?q='+query+'&type=album,track,artist&limit=10').pipe(
    //         map(data => data)
    //       )));
    // }

    fullSearch(query)  {
        return this.spotysearch('search?q='+query+'&type=album,track,artist&limit=10').pipe(
          map(data => data));
    }

    trackSearch(query: string){
      return this.spotysearch('tracks/'+query).pipe(map(data => data));
    }

    albumsSearch(query: string) {
      return this.spotysearch('search?q='+query+'&type=album&limit=10').pipe(map(data => data));
    }

    albumSearch(query: string) {
      return this.spotysearch('albums/'+query).pipe(map(data => data));
    }

    artistsSearch(query: string) {
      return this.spotysearch('search?q='+query+'&type=artist&limit=10').pipe(map(data => data));
    }

    artistSearch(query: string) {
      return this.spotysearch('artists/'+query).pipe(map(data => data));
    }

    artistAlbumSearch(query: string) {
      return this.spotysearch('artists/'+query+'/albums').pipe(map(data => data));
    }

    tracksSearch(query: string) {
      return this.spotysearch('tracks?ids='+query).pipe(map(data => data));
    }


}

/*RXJS

Operadores: tap, map, ( switchmap, concatmap, mergemap). Operadores que le pasas al pipe
.pipe(map(),tap()).suscribe()=>{}

reactive programming

switchmap para el auto complete. te cancela el request de la primer letra cuando vas x la segunda
Concatmap concatena los observables que le pedis
Mergemap dame como vengan

Suscribe adentro de suscribe NO. Para eso estan los operadores.

----
Enviroment variables

----

Api client site
--

reutilizar componente para la misma vista

indexDB local storage

refresh no perfer favoritos ni ruta.

cuando carga la app pedir el token y guardarlo en el session storage

augury/ angular js inspector

*/