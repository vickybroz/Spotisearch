// Las interfaces para la data que viene de la api

export interface IFullSearchResults {
    artists: ISearchResult<IArtist>;
    tracks: ISearchResult<ITrack>;
    albums: ISearchResult<IAlbum>;
  }

interface ISearchResult<Type> {
    href: string;
    items: Array<Type>;
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
}

interface IArtist {
    href: string;
    external_urls: { spotify: string};
    followers: { href: string; total: number};
    genres: any;
    id: string;
    images: Array<{ height: number; url: string; width: number }>;
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

interface IAlbum {
    album_type: string;
    artists: Array<IArtistSlim>;
    available_markets: any;
    external_urls: any;
    href: string;
    id: string;
    images: Array<{ height: number; url: string; width: number }>;
    release_date: string;
    release_date_precision:string;
    total_tracks:number;
    name: string;
    type: string;
    uri: string;
}

interface IArtistSlim {
    external_urls: { spotify: string};
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface ITrack {
    album: IAlbum;
    artists: Array<IArtistSlim>;
    available_markets: any;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: any;
    external_urls: any;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}
