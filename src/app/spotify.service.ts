import { Injectable } from '@angular/core';
import { IFullSearchResults } from './Iitems';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Resultados de una consulta tipo de spotify
  dummydata: IFullSearchResults = {
    "albums": {
        "href": "https://api.spotify.com/v1/search?query=name%3Alove&type=album&market=AR&offset=0&limit=2",
        "items": [
            {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ"
                        },
                        "href": "https://api.spotify.com/v1/artists/60d24wfXkVzDSfLS6hyCjZ",
                        "id": "60d24wfXkVzDSfLS6hyCjZ",
                        "name": "Martin Garrix",
                        "type": "artist",
                        "uri": "spotify:artist:60d24wfXkVzDSfLS6hyCjZ"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/64M6ah0SkkRsnPGtGiRAbb"
                        },
                        "href": "https://api.spotify.com/v1/artists/64M6ah0SkkRsnPGtGiRAbb",
                        "id": "64M6ah0SkkRsnPGtGiRAbb",
                        "name": "Bebe Rexha",
                        "type": "artist",
                        "uri": "spotify:artist:64M6ah0SkkRsnPGtGiRAbb"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1FOJ5IXGXe8dl0cXvCU6wK"
                },
                "href": "https://api.spotify.com/v1/albums/1FOJ5IXGXe8dl0cXvCU6wK",
                "id": "1FOJ5IXGXe8dl0cXvCU6wK",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/a1a2e08be66df92c75e46ad8330c9d4937bff209",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/899ac8a504b87f69a6a42365518394e7c9ee46c7",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/2fcdb3647add4c054af557984a00d5b67dd7431e",
                        "width": 64
                    }
                ],
                "name": "In the Name of Love",
                "release_date": "2016-07-29",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:1FOJ5IXGXe8dl0cXvCU6wK"
            },
            {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7bp2lSdh12wcA8LyB1srfJ"
                        },
                        "href": "https://api.spotify.com/v1/artists/7bp2lSdh12wcA8LyB1srfJ",
                        "id": "7bp2lSdh12wcA8LyB1srfJ",
                        "name": "Sofia Carson",
                        "type": "artist",
                        "uri": "spotify:artist:7bp2lSdh12wcA8LyB1srfJ"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2qaC2iRHjpG0KE6xvavQHU"
                },
                "href": "https://api.spotify.com/v1/albums/2qaC2iRHjpG0KE6xvavQHU",
                "id": "2qaC2iRHjpG0KE6xvavQHU",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/cd7c946f328324c89099082b521b9e3a3b9858c2",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/df7fb544bfb66ec3a1748267dbe454e0914a4ed8",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/5856700fb264a4534e116112e9e9af4d5265dfb4",
                        "width": 64
                    }
                ],
                "name": "Love Is the Name",
                "release_date": "2016-04-08",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:2qaC2iRHjpG0KE6xvavQHU"
            }
        ],
        "limit": 2,
        "next": "https://api.spotify.com/v1/search?query=name%3Alove&type=album&market=AR&offset=2&limit=2",
        "offset": 0,
        "previous": null,
        "total": 375
    },
    "artists": {
        "href": "https://api.spotify.com/v1/search?query=name%3Alove&type=artist&market=AR&offset=0&limit=2",
        "items": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7n0PIkv81aZaXNeGoO5SeC"
                },
                "followers": {
                    "href": null,
                    "total": 2755
                },
                "genres": [],
                "href": "https://api.spotify.com/v1/artists/7n0PIkv81aZaXNeGoO5SeC",
                "id": "7n0PIkv81aZaXNeGoO5SeC",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/15aaa03b6d781c23439bac589cf64ed72f53e987",
                        "width": 640
                    },
                    {
                        "height": 320,
                        "url": "https://i.scdn.co/image/8482d76fb2bb86cb1fba74b439b16241eb99aa5b",
                        "width": 320
                    },
                    {
                        "height": 160,
                        "url": "https://i.scdn.co/image/48ad5f7231aa46940f07d42b1a00cc09a8e84a59",
                        "width": 160
                    }
                ],
                "name": "In The Name Of Love",
                "popularity": 0,
                "type": "artist",
                "uri": "spotify:artist:7n0PIkv81aZaXNeGoO5SeC"
            }
        ],
        "limit": 2,
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 1
    },
    "tracks": {
        "href": "https://api.spotify.com/v1/search?query=name%3Alove&type=track&market=AR&offset=0&limit=2",
        "items": [
            {
                "album": {
                    "album_type": "single",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ"
                            },
                            "href": "https://api.spotify.com/v1/artists/60d24wfXkVzDSfLS6hyCjZ",
                            "id": "60d24wfXkVzDSfLS6hyCjZ",
                            "name": "Martin Garrix",
                            "type": "artist",
                            "uri": "spotify:artist:60d24wfXkVzDSfLS6hyCjZ"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/64M6ah0SkkRsnPGtGiRAbb"
                            },
                            "href": "https://api.spotify.com/v1/artists/64M6ah0SkkRsnPGtGiRAbb",
                            "id": "64M6ah0SkkRsnPGtGiRAbb",
                            "name": "Bebe Rexha",
                            "type": "artist",
                            "uri": "spotify:artist:64M6ah0SkkRsnPGtGiRAbb"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/1FOJ5IXGXe8dl0cXvCU6wK"
                    },
                    "href": "https://api.spotify.com/v1/albums/1FOJ5IXGXe8dl0cXvCU6wK",
                    "id": "1FOJ5IXGXe8dl0cXvCU6wK",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/a1a2e08be66df92c75e46ad8330c9d4937bff209",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/899ac8a504b87f69a6a42365518394e7c9ee46c7",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/2fcdb3647add4c054af557984a00d5b67dd7431e",
                            "width": 64
                        }
                    ],
                    "name": "In the Name of Love",
                    "release_date": "2016-07-29",
                    "release_date_precision": "day",
                    "total_tracks": 1,
                    "type": "album",
                    "uri": "spotify:album:1FOJ5IXGXe8dl0cXvCU6wK"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ"
                        },
                        "href": "https://api.spotify.com/v1/artists/60d24wfXkVzDSfLS6hyCjZ",
                        "id": "60d24wfXkVzDSfLS6hyCjZ",
                        "name": "Martin Garrix",
                        "type": "artist",
                        "uri": "spotify:artist:60d24wfXkVzDSfLS6hyCjZ"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/64M6ah0SkkRsnPGtGiRAbb"
                        },
                        "href": "https://api.spotify.com/v1/artists/64M6ah0SkkRsnPGtGiRAbb",
                        "id": "64M6ah0SkkRsnPGtGiRAbb",
                        "name": "Bebe Rexha",
                        "type": "artist",
                        "uri": "spotify:artist:64M6ah0SkkRsnPGtGiRAbb"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 195706,
                "explicit": false,
                "external_ids": {
                    "isrc": "NLM5S1600003"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/23L5CiUhw2jV1OIMwthR3S"
                },
                "href": "https://api.spotify.com/v1/tracks/23L5CiUhw2jV1OIMwthR3S",
                "id": "23L5CiUhw2jV1OIMwthR3S",
                "is_local": false,
                "name": "In the Name of Love",
                "popularity": 83,
                "preview_url": "https://p.scdn.co/mp3-preview/cbd166d86a2d5a52930dd5fe509c1f2806aeab11?cid=cce87e63ca5c4cbcb4a6d39ad624606f",
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:23L5CiUhw2jV1OIMwthR3S"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/58lV9VcRSjABbAbfWS6skp"
                            },
                            "href": "https://api.spotify.com/v1/artists/58lV9VcRSjABbAbfWS6skp",
                            "id": "58lV9VcRSjABbAbfWS6skp",
                            "name": "Bon Jovi",
                            "type": "artist",
                            "uri": "spotify:artist:58lV9VcRSjABbAbfWS6skp"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0kBfgEilUFCMIQY5IOjG4t"
                    },
                    "href": "https://api.spotify.com/v1/albums/0kBfgEilUFCMIQY5IOjG4t",
                    "id": "0kBfgEilUFCMIQY5IOjG4t",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/12c7d54c6896e2a53a8802657d2cae24bf4d3733",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/5100a38809a8d08532dda291c79a046cbb513d2a",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/f4a1e21a805478b208059592b23e9ecca680ba6f",
                            "width": 64
                        }
                    ],
                    "name": "Slippery When Wet",
                    "release_date": "1986-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 10,
                    "type": "album",
                    "uri": "spotify:album:0kBfgEilUFCMIQY5IOjG4t"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/58lV9VcRSjABbAbfWS6skp"
                        },
                        "href": "https://api.spotify.com/v1/artists/58lV9VcRSjABbAbfWS6skp",
                        "id": "58lV9VcRSjABbAbfWS6skp",
                        "name": "Bon Jovi",
                        "type": "artist",
                        "uri": "spotify:artist:58lV9VcRSjABbAbfWS6skp"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 222706,
                "explicit": false,
                "external_ids": {
                    "isrc": "USPR39402224"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/0rmGAIH9LNJewFw7nKzZnc"
                },
                "href": "https://api.spotify.com/v1/tracks/0rmGAIH9LNJewFw7nKzZnc",
                "id": "0rmGAIH9LNJewFw7nKzZnc",
                "is_local": false,
                "name": "You Give Love A Bad Name",
                "popularity": 79,
                "preview_url": null,
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:0rmGAIH9LNJewFw7nKzZnc"
            }
        ],
        "limit": 2,
        "next": "https://api.spotify.com/v1/search?query=name%3Alove&type=track&market=AR&offset=2&limit=2",
        "offset": 0,
        "previous": null,
        "total": 7237
    }
  };
  

  constructor() { }

  getResults(): IFullSearchResults {
    return this.dummydata;
  }
}
