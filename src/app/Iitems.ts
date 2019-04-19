// Las interfaces para la data que viene de la api

export interface IFullSearchResults {
    artists: ISearchResult<IArtist>;
    tracks: ISearchResult<ITrack>;
    albums: ISearchResult<IAlbum>;
}

export interface ISearchResult<Type> {
    href: string;
    items: Array<Type>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface IArtist {
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

export interface IAlbums {
    albums: ISearchResult<IAlbum>;
}

export interface IAlbum {
    album_type: string;
    artists: Array<IArtistSlim>;
    available_markets: any;
    external_urls: any;
    href: string;
    id: string;
    images: Array<{ height: number; url: string; width: number }>;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
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

export interface ITrack {
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

export interface IAlbumSlim {
    href: string;
    items: Array<IAlbumPlus>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface IAlbumPlus {
    album_group: string;
    album_type: string;
    artists: Array<IArtistSlim>;
    available_markets: any;
    external_urls: any;
    href: string;
    id: string;
    images: Array<{ height: number; url: string; width: number }>;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    name: string;
    type: string;
    uri: string;
}

export interface IArtists {
    artists: ISearchResult<IArtist>;
}

interface ITrackPlus {
    artists: Array<IArtistSlim>;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: {spotify: string;};
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface ITracks {
    href: string;
    items: Array<ITrackPlus>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}


export interface IAlbumFull {
    album_type: string;
    artists: Array<IArtistSlim>;
    copyrights:Array<{ text: string; type: string;}>;
    external_ids:any;
    external_urls: any;
    genres:any;
    href: string;
    id: string;
    images: Array<{ height: number; url: string; width: number }>;
    label:string;
    name: string;
    popularity:number;
    release_date: string;
    release_date_precision:string;
    total_tracks:number;
    tracks: ITracks;
    type: string;
    uri: string;
}