import { Injectable } from '@angular/core';
import { IFullSearchResults } from './Iitems';
import { IArtist } from './Iitems';
import { IAlbumSlim } from './Iitems';
import { IArtists } from './Iitems';

@Injectable()

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
  
  dummyartist: IArtist ={
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
    },
    "followers": {
      "href": null,
      "total": 6817565
    },
    "genres": [
      "dance pop",
      "latin",
      "miami hip hop",
      "pop",
      "pop rap"
    ],
    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
    "id": "0TnOYISbd1XYRBk9myaseg",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/c82dfff224bfb7fe29e0364a5aacc55da29b465b",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/d482525120fc7eed9ea0696f564c6cba5237c8f5",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/49a45aac2c93bab9575de13cee2d71b7eb164cab",
        "width": 160
      }
    ],
    "name": "Pitbull",
    "popularity": 83,
    "type": "artist",
    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
  };

  dummyArtistAlbums :  IAlbumSlim = {
    "href": "https://api.spotify.com/v1/artists/7n0PIkv81aZaXNeGoO5SeC/albums?offset=0&limit=10&include_groups=album,single,compilation,appears_on",
    "items": [
      {
        "album_group": "single",
        "album_type": "single",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7n0PIkv81aZaXNeGoO5SeC"
            },
            "href": "https://api.spotify.com/v1/artists/7n0PIkv81aZaXNeGoO5SeC",
            "id": "7n0PIkv81aZaXNeGoO5SeC",
            "name": "In The Name Of Love",
            "type": "artist",
            "uri": "spotify:artist:7n0PIkv81aZaXNeGoO5SeC"
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
          "spotify": "https://open.spotify.com/album/5yzBsWcbgYvGx0p2D5wsGg"
        },
        "href": "https://api.spotify.com/v1/albums/5yzBsWcbgYvGx0p2D5wsGg",
        "id": "5yzBsWcbgYvGx0p2D5wsGg",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/38c5ecb78879ee7833ae1fa448b3debfffacf50e",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/80f643a15c6e04d3850adc977070f6c84350cfe5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/a2a33ec8abf80766ff15c488e2dca9de6d5b3687",
            "width": 64
          }
        ],
        "name": "Lead Me",
        "release_date": "2017-03-14",
        "release_date_precision": "day",
        "total_tracks": 1,
        "type": "album",
        "uri": "spotify:album:5yzBsWcbgYvGx0p2D5wsGg"
      },
      {
        "album_group": "single",
        "album_type": "single",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7n0PIkv81aZaXNeGoO5SeC"
            },
            "href": "https://api.spotify.com/v1/artists/7n0PIkv81aZaXNeGoO5SeC",
            "id": "7n0PIkv81aZaXNeGoO5SeC",
            "name": "In The Name Of Love",
            "type": "artist",
            "uri": "spotify:artist:7n0PIkv81aZaXNeGoO5SeC"
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
          "spotify": "https://open.spotify.com/album/4XDOWRqNFU7YWBRKsVsTaG"
        },
        "href": "https://api.spotify.com/v1/albums/4XDOWRqNFU7YWBRKsVsTaG",
        "id": "4XDOWRqNFU7YWBRKsVsTaG",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/d7ea4f60b12b6cb37e11142ca94e620d2069369a",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/7aecff3667c54acc40148e3c02b8e040c73c9210",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/04e034d48cdb51f534c43924f7bb74e9c611778c",
            "width": 64
          }
        ],
        "name": "You and Me (Instrumental Version)",
        "release_date": "2017-01-20",
        "release_date_precision": "day",
        "total_tracks": 1,
        "type": "album",
        "uri": "spotify:album:4XDOWRqNFU7YWBRKsVsTaG"
      },
      {
        "album_group": "appears_on",
        "album_type": "single",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0x2XI80j3IAQYRmsi7rDmA"
            },
            "href": "https://api.spotify.com/v1/artists/0x2XI80j3IAQYRmsi7rDmA",
            "id": "0x2XI80j3IAQYRmsi7rDmA",
            "name": "Loyal World",
            "type": "artist",
            "uri": "spotify:artist:0x2XI80j3IAQYRmsi7rDmA"
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
          "spotify": "https://open.spotify.com/album/6RXMHYLEASCAmXQnguGAEw"
        },
        "href": "https://api.spotify.com/v1/albums/6RXMHYLEASCAmXQnguGAEw",
        "id": "6RXMHYLEASCAmXQnguGAEw",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/cb28bc820365e940b198f90888e2afa1d3cd1857",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/fb43429233d720f0c1508837171a94e9c0070114",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/301a1827f496c6b5d9183664307b5978ce89b7b4",
            "width": 64
          }
        ],
        "name": "De Wereld Draait Door (Radio Edit)",
        "release_date": "2017-01-17",
        "release_date_precision": "day",
        "total_tracks": 1,
        "type": "album",
        "uri": "spotify:album:6RXMHYLEASCAmXQnguGAEw"
      }
    ],
    "limit": 10,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 3
  };


    dummyArtists :  IArtists = {
    "artists": [
        {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx"
        },
        "followers": {
            "href": null,
            "total": 2205816
        },
        "genres": [
            "big room",
            "edm",
            "electro house",
            "progressive house"
        ],
        "href": "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx",
        "id": "2CIMQHirSU0MQqyYHq0eOx",
        "images": [
            {
            "height": 640,
            "url": "https://i.scdn.co/image/86e8991077d6ce237be8f24dbc65e90f2e1f2a43",
            "width": 640
            },
            {
            "height": 320,
            "url": "https://i.scdn.co/image/cd362662352ce88b693b1a31cf5c9784730291dd",
            "width": 320
            },
            {
            "height": 160,
            "url": "https://i.scdn.co/image/70e010473dc0f158253111e035c71086fb7904fa",
            "width": 160
            }
        ],
        "name": "deadmau5",
        "popularity": 71,
        "type": "artist",
        "uri": "spotify:artist:2CIMQHirSU0MQqyYHq0eOx"
        },
        {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E"
        },
        "followers": {
            "href": null,
            "total": 442827
        },
        "genres": [
            "alternative dance",
            "indietronica",
            "new rave"
        ],
        "href": "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E",
        "id": "57dN52uHvrHOxijzpIgu3E",
        "images": [
            {
            "height": 693,
            "url": "https://i.scdn.co/image/2f0c6c465a83cd196e651e3d4e7625ba799a6f60",
            "width": 1000
            },
            {
            "height": 444,
            "url": "https://i.scdn.co/image/4e3e13c8b993bde9898e49509fb9ae121636e05f",
            "width": 640
            },
            {
            "height": 139,
            "url": "https://i.scdn.co/image/dc68dd24b45b74ecce9d4ed486423673d683ced3",
            "width": 200
            },
            {
            "height": 44,
            "url": "https://i.scdn.co/image/4e55ca05d4f336a2fa0e3062a7ec9778a201e8bc",
            "width": 63
            }
        ],
        "name": "Ratatat",
        "popularity": 69,
        "type": "artist",
        "uri": "spotify:artist:57dN52uHvrHOxijzpIgu3E"
        },
        {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
        },
        "followers": {
            "href": null,
            "total": 12903483
        },
        "genres": [
            "big room",
            "dance pop",
            "edm",
            "pop",
            "tropical house"
        ],
        "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
        "id": "1vCWHaC5f2uS3yhpwWbIA6",
        "images": [
            {
            "height": 640,
            "url": "https://i.scdn.co/image/81b19a403109c4fe528ee3972137127b85be9519",
            "width": 640
            },
            {
            "height": 320,
            "url": "https://i.scdn.co/image/9c0d8fa969a9f5db6ff860203d6880a125e501d2",
            "width": 320
            },
            {
            "height": 160,
            "url": "https://i.scdn.co/image/c55bc6f57b6bb297425c3ae694f92672dcf0e2c2",
            "width": 160
            }
        ],
        "name": "Avicii",
        "popularity": 87,
        "type": "artist",
        "uri": "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
        }
    ]
    };
  
  constructor() { }

  getResults(): IFullSearchResults {
    return this.dummydata;
  }

  getArtist() {
    return this.dummyartist;
  }

  getArtistAlbum() {
    return this.dummyArtistAlbums;
  }

  getArtists() {
    return this.dummyArtists;
  }

}
