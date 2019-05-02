import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class SpotifyService {

    auth: string;
    clientId: string = 'cce87e63ca5c4cbcb4a6d39ad624606f';

    constructor(private http: HttpClient){}

    //#access_token=BQDEaQZ78JYoxoLaTXjKaWIUBXd-ibC9cSC4_Q0-tPi7yiZFFmniuKO-6eriMcDCE_BfHd0_Vvl8YavpN8UhpLBMyrqzMrT5ETgfgTwoDyws4FFrzo0PODZJLvT19fgxYGuWZqE1a26dT4nTwer9CUyTIdcYUcV96LjLlL11etBAaw&token_type=Bearer&expires_in=3600

    spotyAuth(){
      const authEndpoint = 'https://accounts.spotify.com/authorize';
         
      this.auth = localStorage.getItem('auth');
      const clientId = this.clientId;
      const redirectUri = encodeURIComponent('http://localhost:4200/search');

      const scopes = [
        'user-read-birthdate',
        'user-read-email',
        'user-read-private'
      ];

      const response_type= 'token';

      if( this.auth === null) {
        window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=${response_type}&show_dialog=true`;
        const token :string = location.hash.split('access_token=')[1].split('&')[0]

        localStorage.setItem('auth', token);
      }
    }

    spotysearch(query: string){
      const Url='https://api.spotify.com/v1/'+query;
     //Por ahora estoy puenteando la Oauth con el postman
      const headers=new HttpHeaders({
            Authorization:
            "Bearer "+this.auth
    });

    return this.http.get(Url, {headers});
    }


    fullSearch(query)  {
      if(query) {
        return this.spotysearch('search?q='+query+'&type=album,track,artist&limit=10').pipe(
          map(data => data));
        } else {
          return [];
        }
    }

    trackSearch(query){
      if(query) {
        return this.spotysearch('search?q='+query+'&type=track&limit=10').pipe(map(data => data));
      } else {
        return [];
      }
    }

    albumsSearch(query) {
      if(query) {
      return this.spotysearch('search?q='+query+'&type=album&limit=10').pipe(map(data => data));
      } else {
        return [];
      }
    }

    albumSearch(query: string) {
      return this.spotysearch('albums/'+query).pipe(map(data => data));
    }

    artistsSearch(query: string) {
      if(query) {
      return this.spotysearch('search?q='+query+'&type=artist&limit=10').pipe(map(data => data));
      } else {
        return [];
      }
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