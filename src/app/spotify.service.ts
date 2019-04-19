import { Injectable } from '@angular/core';
import { IFullSearchResults } from './Iitems';
import { IArtist } from './Iitems';
import { IAlbumSlim } from './Iitems';
import { IArtists } from './Iitems';
import { IAlbums } from './Iitems';
import { ITracks } from './Iitems';
import { IAlbumFull } from './Iitems';

@Injectable() //agregar app root

export class SpotifyService {

    constructor() { }

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
    "artists": {
        "href": "https://api.spotify.com/v1/search?query=elvis&type=artist&market=AR&offset=0&limit=10",
        "items": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
                },
                "followers": {
                    "href": null,
                    "total": 2919028
                },
                "genres": [
                    "adult standards",
                    "christmas",
                    "rock-and-roll",
                    "rockabilly"
                ],
                "href": "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
                "id": "43ZHCT0cAZBISjO8DG9PnE",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/5629fbf1c4e0bc4155eca3e08a2b98065eedd305",
                        "width": 640
                    },
                    {
                        "height": 320,
                        "url": "https://i.scdn.co/image/de7df722a14208c879f169e26bd7792a9902c7ba",
                        "width": 320
                    },
                    {
                        "height": 160,
                        "url": "https://i.scdn.co/image/11386c4abb5bdf71a86862cdb1a5390f37a7d8a5",
                        "width": 160
                    }
                ],
                "name": "Elvis Presley",
                "popularity": 79,
                "type": "artist",
                "uri": "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1c22GXH30ijlOfXhfLz9Df"
                },
                "followers": {
                    "href": null,
                    "total": 319257
                },
                "genres": [
                    "latin",
                    "latin pop",
                    "merengue",
                    "tropical"
                ],
                "href": "https://api.spotify.com/v1/artists/1c22GXH30ijlOfXhfLz9Df",
                "id": "1c22GXH30ijlOfXhfLz9Df",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/4015340d49d93b66d9efeb688ad5f083057d3da6",
                        "width": 640
                    },
                    {
                        "height": 320,
                        "url": "https://i.scdn.co/image/7180815f504e15f44c1f2a3ab30f2efc7e823a0a",
                        "width": 320
                    },
                    {
                        "height": 160,
                        "url": "https://i.scdn.co/image/b67850e102412a69f0c9a2b6d1d30139e42facb6",
                        "width": 160
                    }
                ],
                "name": "Elvis Crespo",
                "popularity": 70,
                "type": "artist",
                "uri": "spotify:artist:1c22GXH30ijlOfXhfLz9Df"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2BGRfQgtzikz1pzAD0kaEn"
                },
                "followers": {
                    "href": null,
                    "total": 244750
                },
                "genres": [
                    "art rock",
                    "dance rock",
                    "folk",
                    "folk rock",
                    "mellow gold",
                    "new wave pop",
                    "permanent wave",
                    "power pop",
                    "pub rock",
                    "rock",
                    "roots rock",
                    "singer-songwriter"
                ],
                "href": "https://api.spotify.com/v1/artists/2BGRfQgtzikz1pzAD0kaEn",
                "id": "2BGRfQgtzikz1pzAD0kaEn",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/4859994e51f330b31d9321f97ce07af06b6a4b80",
                        "width": 640
                    },
                    {
                        "height": 320,
                        "url": "https://i.scdn.co/image/bfbaf6cbf1ee268cd1a68d1a70486dfd55adf005",
                        "width": 320
                    },
                    {
                        "height": 160,
                        "url": "https://i.scdn.co/image/28c42faa94107cee6ccd9a4f4e892beb0d3aa66c",
                        "width": 160
                    }
                ],
                "name": "Elvis Costello",
                "popularity": 58,
                "type": "artist",
                "uri": "spotify:artist:2BGRfQgtzikz1pzAD0kaEn"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/66U02qGDesTqZImnLSiYeE"
                },
                "followers": {
                    "href": null,
                    "total": 70174
                },
                "genres": [
                    "bachata",
                    "dominican pop",
                    "latin",
                    "tropical"
                ],
                "href": "https://api.spotify.com/v1/artists/66U02qGDesTqZImnLSiYeE",
                "id": "66U02qGDesTqZImnLSiYeE",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/0b005147ce72f6fdb1c2fa1fdee08e13f6fd8899",
                        "width": 640
                    },
                    {
                        "height": 320,
                        "url": "https://i.scdn.co/image/1d47b66fae8a204c07785a3ad7b195e58fafa196",
                        "width": 320
                    },
                    {
                        "height": 160,
                        "url": "https://i.scdn.co/image/8b65818bc7a8b794cb84535a3d0c053a27ad2201",
                        "width": 160
                    }
                ],
                "name": "Elvis Martinez",
                "popularity": 55,
                "type": "artist",
                "uri": "spotify:artist:66U02qGDesTqZImnLSiYeE"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2pHk4wAmL7ofTAuvCIUWtv"
                },
                "followers": {
                    "href": null,
                    "total": 308203
                },
                "genres": [
                    "belgian hip hop",
                    "french hip hop"
                ],
                "href": "https://api.spotify.com/v1/artists/2pHk4wAmL7ofTAuvCIUWtv",
                "id": "2pHk4wAmL7ofTAuvCIUWtv",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/87b22aed5822224ae73df0424f50b4a3391f0d6d",
                        "width": 640
                    },
                    {
                        "height": 320,
                        "url": "https://i.scdn.co/image/c00bba6cfa45ec5dd7ec870f2ced9f851bb70b1c",
                        "width": 320
                    },
                    {
                        "height": 160,
                        "url": "https://i.scdn.co/image/845659ae01abe307a3ef1e2dfbf7d9a31da1e1b0",
                        "width": 160
                    }
                ],
                "name": "Roméo Elvis",
                "popularity": 77,
                "type": "artist",
                "uri": "spotify:artist:2pHk4wAmL7ofTAuvCIUWtv"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4qmHkMxr6pTWh5Zo74odpH"
                },
                "followers": {
                    "href": null,
                    "total": 107950
                },
                "genres": [
                    "art rock",
                    "dance rock",
                    "folk rock",
                    "mellow gold",
                    "new wave",
                    "new wave pop",
                    "power pop",
                    "pub rock",
                    "rock",
                    "roots rock"
                ],
                "href": "https://api.spotify.com/v1/artists/4qmHkMxr6pTWh5Zo74odpH",
                "id": "4qmHkMxr6pTWh5Zo74odpH",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/c14ffeb7855625383c266c9c04faa75516a25503",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/f3d1971157cbcb3d270aa3a7642baaadd65fa4f3",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/5baaf4b7373d0bb0d85f0100a24279c30be9d999",
                        "width": 64
                    }
                ],
                "name": "Elvis Costello & The Attractions",
                "popularity": 57,
                "type": "artist",
                "uri": "spotify:artist:4qmHkMxr6pTWh5Zo74odpH"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6SuMnYQl7OMp9jsxa0KdZg"
                },
                "followers": {
                    "href": null,
                    "total": 21
                },
                "genres": [],
                "href": "https://api.spotify.com/v1/artists/6SuMnYQl7OMp9jsxa0KdZg",
                "id": "6SuMnYQl7OMp9jsxa0KdZg",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/04bf1ea561d4f5039d3f1ac0ec294bf99288a376",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/516d9bb1e0d5ae53b030b6d02e82f1488c0e4e9c",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/6d398366a4c14722b473e88c5d26b837afd16e3a",
                        "width": 64
                    }
                ],
                "name": "Elvis de Yongol",
                "popularity": 47,
                "type": "artist",
                "uri": "spotify:artist:6SuMnYQl7OMp9jsxa0KdZg"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5a31Ij1sTxY9LUYVwgBp8m"
                },
                "followers": {
                    "href": null,
                    "total": 62840
                },
                "genres": [
                    "anti-folk",
                    "asheville indie",
                    "indie garage rock",
                    "indie psych-pop",
                    "lo-fi",
                    "preverb",
                    "shimmer psych",
                    "small room"
                ],
                "href": "https://api.spotify.com/v1/artists/5a31Ij1sTxY9LUYVwgBp8m",
                "id": "5a31Ij1sTxY9LUYVwgBp8m",
                "images": [
                    {
                        "height": 666,
                        "url": "https://i.scdn.co/image/1f257d7db77ece9d6477b0e0461a8c9a7b4be62f",
                        "width": 1000
                    },
                    {
                        "height": 426,
                        "url": "https://i.scdn.co/image/2fcfac0d66a4f06b2161bd0010b5bef63ee98c67",
                        "width": 640
                    },
                    {
                        "height": 133,
                        "url": "https://i.scdn.co/image/ff84fdc0393731c1bc4c79f5a7f191684a201c13",
                        "width": 200
                    },
                    {
                        "height": 43,
                        "url": "https://i.scdn.co/image/8bb2d03100fe06a4cf29238c3e3bc5a9d2b96c57",
                        "width": 64
                    }
                ],
                "name": "Elvis Depressedly",
                "popularity": 47,
                "type": "artist",
                "uri": "spotify:artist:5a31Ij1sTxY9LUYVwgBp8m"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1CFhifYnc1SnQc4ilM6aWe"
                },
                "followers": {
                    "href": null,
                    "total": 44306
                },
                "genres": [
                    "brega funk"
                ],
                "href": "https://api.spotify.com/v1/artists/1CFhifYnc1SnQc4ilM6aWe",
                "id": "1CFhifYnc1SnQc4ilM6aWe",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/e9114321c13b75cb00d4294170385f72c7380523",
                        "width": 640
                    },
                    {
                        "height": 320,
                        "url": "https://i.scdn.co/image/ebb4ed06533928d1b8b6d53c96bbbf63ac1bf32f",
                        "width": 320
                    },
                    {
                        "height": 160,
                        "url": "https://i.scdn.co/image/17464c3ca65f655a46e326a948f61e042dd4f141",
                        "width": 160
                    }
                ],
                "name": "Mc Elvis",
                "popularity": 47,
                "type": "artist",
                "uri": "spotify:artist:1CFhifYnc1SnQc4ilM6aWe"
            },
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3rP4ief9sLRdNeDD4ytGB9"
                },
                "followers": {
                    "href": null,
                    "total": 11
                },
                "genres": [],
                "href": "https://api.spotify.com/v1/artists/3rP4ief9sLRdNeDD4ytGB9",
                "id": "3rP4ief9sLRdNeDD4ytGB9",
                "images": [],
                "name": "Elvis KNK",
                "popularity": 28,
                "type": "artist",
                "uri": "spotify:artist:3rP4ief9sLRdNeDD4ytGB9"
            }
        ],
        "limit": 10,
        "next": "https://api.spotify.com/v1/search?query=elvis&type=artist&market=AR&offset=10&limit=10",
        "offset": 0,
        "previous": null,
        "total": 534
    }
    };

    dummyAlbums :  IAlbums = {
    "albums": {
        "href": "https://api.spotify.com/v1/search?query=name%3Aelvis&type=album&market=AR&offset=0&limit=2",
        "items": [
            {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1U9A3u8le2pyeCzsrB9S80"
                        },
                        "href": "https://api.spotify.com/v1/artists/1U9A3u8le2pyeCzsrB9S80",
                        "id": "1U9A3u8le2pyeCzsrB9S80",
                        "name": "Cserepes Károly",
                        "type": "artist",
                        "uri": "spotify:artist:1U9A3u8le2pyeCzsrB9S80"
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
                    "spotify": "https://open.spotify.com/album/4CpFuslgAvDcXhwruPiwfQ"
                },
                "href": "https://api.spotify.com/v1/albums/4CpFuslgAvDcXhwruPiwfQ",
                "id": "4CpFuslgAvDcXhwruPiwfQ",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/bd0cd713fbaf40d56548af83a9d5a7d25d178629",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/51e23e121d6a26e3e78a76ae4753e1855e3240ec",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/5648b5c0df6bbb13ec3a402faa3f7c6efb55e52b",
                        "width": 64
                    }
                ],
                "name": "My Name Is Elvis Presley (Children's Games)",
                "release_date": "2018-12-11",
                "release_date_precision": "day",
                "total_tracks": 10,
                "type": "album",
                "uri": "spotify:album:4CpFuslgAvDcXhwruPiwfQ"
            },
            {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0ZMdIqifHQ2XBsphrsrrF3"
                        },
                        "href": "https://api.spotify.com/v1/artists/0ZMdIqifHQ2XBsphrsrrF3",
                        "id": "0ZMdIqifHQ2XBsphrsrrF3",
                        "name": "Alvis Wayne",
                        "type": "artist",
                        "uri": "spotify:artist:0ZMdIqifHQ2XBsphrsrrF3"
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
                    "spotify": "https://open.spotify.com/album/2SIR9nZA1p6E7kdH0L5UNl"
                },
                "href": "https://api.spotify.com/v1/albums/2SIR9nZA1p6E7kdH0L5UNl",
                "id": "2SIR9nZA1p6E7kdH0L5UNl",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/2fd803243e5f10f36ff3e41f7d6e97a893b8a6f9",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/77f9e4ae63798d50c1ea10cd0596608732b7330f",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/89bd126df378edeb5fb9366a20fd935f6acb14f4",
                        "width": 64
                    }
                ],
                "name": "The Name Is Alvis Not Elvis: Alvis Wayne Rockabilly King",
                "release_date": "2014-05-15",
                "release_date_precision": "day",
                "total_tracks": 8,
                "type": "album",
                "uri": "spotify:album:2SIR9nZA1p6E7kdH0L5UNl"
            }
        ],
        "limit": 2,
        "next": "https://api.spotify.com/v1/search?query=name%3Aelvis&type=album&market=AR&offset=2&limit=2",
        "offset": 0,
        "previous": null,
        "total": 10
        }
    };

    dummyAlbumTracks: ITracks = {
        "href": "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?offset=5&limit=10&market=ES",
        "items": [
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj"
                },
                "href": "https://api.spotify.com/v1/artists/23zg3TcAtWQy7J6upgbUnj",
                "id": "23zg3TcAtWQy7J6upgbUnj",
                "name": "Usher",
                "type": "artist",
                "uri": "spotify:artist:23zg3TcAtWQy7J6upgbUnj"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                },
                "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                "id": "4D75GcNG95ebPtNvoNVXhz",
                "name": "Afrojack",
                "type": "artist",
                "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
                }
            ],
            "disc_number": 1,
            "duration_ms": 243160,
            "explicit": true,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6Q4PYJtrq8CBx7YCY5IyRN"
            },
            "href": "https://api.spotify.com/v1/tracks/6Q4PYJtrq8CBx7YCY5IyRN",
            "id": "6Q4PYJtrq8CBx7YCY5IyRN",
            "is_local": false,
            "is_playable": true,
            "name": "Party Ain't Over",
            "preview_url": "https://p.scdn.co/mp3-preview/d3e3191991feb0cb732398374e8c59cdb2cc9fe7?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:6Q4PYJtrq8CBx7YCY5IyRN"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2BICa6b3GtjSqhOkgnDUu6"
                },
                "href": "https://api.spotify.com/v1/artists/2BICa6b3GtjSqhOkgnDUu6",
                "id": "2BICa6b3GtjSqhOkgnDUu6",
                "name": "J.Lo",
                "type": "artist",
                "uri": "spotify:artist:2BICa6b3GtjSqhOkgnDUu6"
                }
            ],
            "disc_number": 1,
            "duration_ms": 196920,
            "explicit": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0QTVwqcOsYd73AOkYkk0Hg"
            },
            "href": "https://api.spotify.com/v1/tracks/0QTVwqcOsYd73AOkYkk0Hg",
            "id": "0QTVwqcOsYd73AOkYkk0Hg",
            "is_local": false,
            "is_playable": true,
            "name": "Drinks for You (Ladies Anthem)",
            "preview_url": "https://p.scdn.co/mp3-preview/8c76d62cfbbabb6fbd5daf421c8b9d5365858757?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 7,
            "type": "track",
            "uri": "spotify:track:0QTVwqcOsYd73AOkYkk0Hg"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0rdrTj1p6n1C9KnwaWn6xf"
                },
                "href": "https://api.spotify.com/v1/artists/0rdrTj1p6n1C9KnwaWn6xf",
                "id": "0rdrTj1p6n1C9KnwaWn6xf",
                "name": "The Wanted",
                "type": "artist",
                "uri": "spotify:artist:0rdrTj1p6n1C9KnwaWn6xf"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                },
                "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                "id": "4D75GcNG95ebPtNvoNVXhz",
                "name": "Afrojack",
                "type": "artist",
                "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
                }
            ],
            "disc_number": 1,
            "duration_ms": 244920,
            "explicit": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/10Sydb6AAFPdgCzCKOSZuI"
            },
            "href": "https://api.spotify.com/v1/tracks/10Sydb6AAFPdgCzCKOSZuI",
            "id": "10Sydb6AAFPdgCzCKOSZuI",
            "is_local": false,
            "is_playable": true,
            "name": "Have Some Fun",
            "preview_url": "https://p.scdn.co/mp3-preview/7896249670ea7d4ff6d0e1b4d73f380ce70a2356?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 8,
            "type": "track",
            "uri": "spotify:track:10Sydb6AAFPdgCzCKOSZuI"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0e9P96siQmxphVXAwTy2pa"
                },
                "href": "https://api.spotify.com/v1/artists/0e9P96siQmxphVXAwTy2pa",
                "id": "0e9P96siQmxphVXAwTy2pa",
                "name": "Danny Mercer",
                "type": "artist",
                "uri": "spotify:artist:0e9P96siQmxphVXAwTy2pa"
                }
            ],
            "disc_number": 1,
            "duration_ms": 206800,
            "explicit": true,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4k61iDqmtX9nI7RfLmp9aq"
            },
            "href": "https://api.spotify.com/v1/tracks/4k61iDqmtX9nI7RfLmp9aq",
            "id": "4k61iDqmtX9nI7RfLmp9aq",
            "is_local": false,
            "is_playable": true,
            "name": "Outta Nowhere",
            "preview_url": "https://p.scdn.co/mp3-preview/c5038fdf589d869bff568cae397f983fa056825d?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 9,
            "type": "track",
            "uri": "spotify:track:4k61iDqmtX9nI7RfLmp9aq"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7qG3b048QCHVRO5Pv1T5lw"
                },
                "href": "https://api.spotify.com/v1/artists/7qG3b048QCHVRO5Pv1T5lw",
                "id": "7qG3b048QCHVRO5Pv1T5lw",
                "name": "Enrique Iglesias",
                "type": "artist",
                "uri": "spotify:artist:7qG3b048QCHVRO5Pv1T5lw"
                }
            ],
            "disc_number": 1,
            "duration_ms": 205800,
            "explicit": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7oGRkL31ElVMcevQDceT99"
            },
            "href": "https://api.spotify.com/v1/tracks/7oGRkL31ElVMcevQDceT99",
            "id": "7oGRkL31ElVMcevQDceT99",
            "is_local": false,
            "is_playable": true,
            "name": "Tchu Tchu Tcha",
            "preview_url": "https://p.scdn.co/mp3-preview/977ea4cd1a12653d8da5c80dbe7ef59d1b82cf41?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 10,
            "type": "track",
            "uri": "spotify:track:7oGRkL31ElVMcevQDceT99"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                },
                "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                "id": "4D75GcNG95ebPtNvoNVXhz",
                "name": "Afrojack",
                "type": "artist",
                "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1EVWYRr2obCRDoSoD6KSuM"
                },
                "href": "https://api.spotify.com/v1/artists/1EVWYRr2obCRDoSoD6KSuM",
                "id": "1EVWYRr2obCRDoSoD6KSuM",
                "name": "Havana Brown",
                "type": "artist",
                "uri": "spotify:artist:1EVWYRr2obCRDoSoD6KSuM"
                }
            ],
            "disc_number": 1,
            "duration_ms": 219600,
            "explicit": true,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/60xPqMqnHZl7Jfiu6E9q8X"
            },
            "href": "https://api.spotify.com/v1/tracks/60xPqMqnHZl7Jfiu6E9q8X",
            "id": "60xPqMqnHZl7Jfiu6E9q8X",
            "is_local": false,
            "is_playable": true,
            "name": "Last Night",
            "preview_url": "https://p.scdn.co/mp3-preview/1dcae6bd0bfffd2f1501f9aa2a8b594c2d6618fa?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 11,
            "type": "track",
            "uri": "spotify:track:60xPqMqnHZl7Jfiu6E9q8X"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                }
            ],
            "disc_number": 1,
            "duration_ms": 197520,
            "explicit": true,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1jAdXqOSICyXYLaW9ioSur"
            },
            "href": "https://api.spotify.com/v1/tracks/1jAdXqOSICyXYLaW9ioSur",
            "id": "1jAdXqOSICyXYLaW9ioSur",
            "is_local": false,
            "is_playable": true,
            "name": "I'm Off That",
            "preview_url": "https://p.scdn.co/mp3-preview/5aca73ec07274bf216925d71c48d5130a45a7e2a?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:1jAdXqOSICyXYLaW9ioSur"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5F2Bwl7Is7KVwTbNbMclIS"
                },
                "href": "https://api.spotify.com/v1/artists/5F2Bwl7Is7KVwTbNbMclIS",
                "id": "5F2Bwl7Is7KVwTbNbMclIS",
                "name": "Papayo",
                "type": "artist",
                "uri": "spotify:artist:5F2Bwl7Is7KVwTbNbMclIS"
                }
            ],
            "disc_number": 1,
            "duration_ms": 196440,
            "explicit": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0fjRYHFz9ealui1lfnN8it"
            },
            "href": "https://api.spotify.com/v1/tracks/0fjRYHFz9ealui1lfnN8it",
            "id": "0fjRYHFz9ealui1lfnN8it",
            "is_local": false,
            "is_playable": true,
            "name": "Echa Pa'lla (Manos Pa'rriba)",
            "preview_url": "https://p.scdn.co/mp3-preview/b5dc8fdadc8133914412bb9be48a000eefae1906?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 13,
            "type": "track",
            "uri": "spotify:track:0fjRYHFz9ealui1lfnN8it"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV"
                },
                "href": "https://api.spotify.com/v1/artists/0z4gvV4rjIZ9wHck67ucSV",
                "id": "0z4gvV4rjIZ9wHck67ucSV",
                "name": "Akon",
                "type": "artist",
                "uri": "spotify:artist:0z4gvV4rjIZ9wHck67ucSV"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5IqWDVLGThjmkm22e3oBU3"
                },
                "href": "https://api.spotify.com/v1/artists/5IqWDVLGThjmkm22e3oBU3",
                "id": "5IqWDVLGThjmkm22e3oBU3",
                "name": "David Rush",
                "type": "artist",
                "uri": "spotify:artist:5IqWDVLGThjmkm22e3oBU3"
                }
            ],
            "disc_number": 1,
            "duration_ms": 257613,
            "explicit": true,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7of35ktwTbL906Z1i3mT4K"
            },
            "href": "https://api.spotify.com/v1/tracks/7of35ktwTbL906Z1i3mT4K",
            "id": "7of35ktwTbL906Z1i3mT4K",
            "is_local": false,
            "is_playable": true,
            "name": "Everybody Fucks",
            "preview_url": "https://p.scdn.co/mp3-preview/cce6c8d1dae71670ba14bf5bbdc4066601a328ca?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 14,
            "type": "track",
            "uri": "spotify:track:7of35ktwTbL906Z1i3mT4K"
            },
            {
            "artists": [
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                },
                "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                "id": "0TnOYISbd1XYRBk9myaseg",
                "name": "Pitbull",
                "type": "artist",
                "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
                }
            ],
            "disc_number": 1,
            "duration_ms": 245920,
            "explicit": false,
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2JA6A6Y5f4m7PawM58U2Op"
            },
            "href": "https://api.spotify.com/v1/tracks/2JA6A6Y5f4m7PawM58U2Op",
            "id": "2JA6A6Y5f4m7PawM58U2Op",
            "is_local": false,
            "is_playable": true,
            "name": "Get It Started",
            "preview_url": "https://p.scdn.co/mp3-preview/9b81dacd22e4be31f60783a8ba0b7973b7ef637e?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 15,
            "type": "track",
            "uri": "spotify:track:2JA6A6Y5f4m7PawM58U2Op"
            }
        ],
        "limit": 10,
        "next": "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?offset=15&limit=10&market=ES",
        "offset": 5,
        "previous": "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?offset=0&limit=10&market=ES",
        "total": 18
    };

    dummyAlbum: IAlbumFull = {
        "album_type": "album",
        "artists": [
            {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
            },
            "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
            "id": "0TnOYISbd1XYRBk9myaseg",
            "name": "Pitbull",
            "type": "artist",
            "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
            }
        ],
        "copyrights": [
            {
            "text": "(P) 2012 RCA Records, a division of Sony Music Entertainment",
            "type": "P"
            }
        ],
        "external_ids": {
            "upc": "886443671584"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/album/4aawyAB9vmqN3uQ7FjRGTy"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
        "id": "4aawyAB9vmqN3uQ7FjRGTy",
        "images": [
            {
            "height": 640,
            "url": "https://i.scdn.co/image/3edb3f970f4a3af9ef922efd18cdb4dabaf85ced",
            "width": 640
            },
            {
            "height": 300,
            "url": "https://i.scdn.co/image/b6be520fd1dc9feb84100be40f63de4f80694f18",
            "width": 300
            },
            {
            "height": 64,
            "url": "https://i.scdn.co/image/cd113be5fef83497992e17eb923b674187f7aaef",
            "width": 64
            }
        ],
        "label": "Mr.305/Polo Grounds Music/RCA Records",
        "name": "Global Warming",
        "popularity": 55,
        "release_date": "2012-11-16",
        "release_date_precision": "day",
        "total_tracks": 18,
        "tracks": {
            "href": "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?offset=0&limit=50&market=ES",
            "items": [
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7iJrDbKM5fEkGdm5kpjFzS"
                    },
                    "href": "https://api.spotify.com/v1/artists/7iJrDbKM5fEkGdm5kpjFzS",
                    "id": "7iJrDbKM5fEkGdm5kpjFzS",
                    "name": "Sensato",
                    "type": "artist",
                    "uri": "spotify:artist:7iJrDbKM5fEkGdm5kpjFzS"
                }
                ],
                "disc_number": 1,
                "duration_ms": 85400,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/6OmhkSOpvYBokMKQxpIGx2"
                },
                "href": "https://api.spotify.com/v1/tracks/6OmhkSOpvYBokMKQxpIGx2",
                "id": "6OmhkSOpvYBokMKQxpIGx2",
                "is_local": false,
                "is_playable": true,
                "name": "Global Warming",
                "preview_url": "https://p.scdn.co/mp3-preview/bf9e33b1bb53c281c5eea0da6c317f2cd7c3eb58?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:6OmhkSOpvYBokMKQxpIGx2"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3if5kERjnWL9N0g3e9yEm5"
                    },
                    "href": "https://api.spotify.com/v1/artists/3if5kERjnWL9N0g3e9yEm5",
                    "id": "3if5kERjnWL9N0g3e9yEm5",
                    "name": "Tjr",
                    "type": "artist",
                    "uri": "spotify:artist:3if5kERjnWL9N0g3e9yEm5"
                }
                ],
                "disc_number": 1,
                "duration_ms": 206120,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/2iblMMIgSznA464mNov7A8"
                },
                "href": "https://api.spotify.com/v1/tracks/2iblMMIgSznA464mNov7A8",
                "id": "2iblMMIgSznA464mNov7A8",
                "is_local": false,
                "is_playable": true,
                "name": "Don't Stop the Party",
                "preview_url": "https://p.scdn.co/mp3-preview/7fd27386664a73671658bce5a9d18ca7ec1936d4?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:2iblMMIgSznA464mNov7A8"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS"
                    },
                    "href": "https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS",
                    "id": "1l7ZsJRRS8wlW3WfJfPfNS",
                    "name": "Christina Aguilera",
                    "type": "artist",
                    "uri": "spotify:artist:1l7ZsJRRS8wlW3WfJfPfNS"
                }
                ],
                "disc_number": 1,
                "duration_ms": 229506,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/4yOn1TEcfsKHUJCL2h1r8I"
                },
                "href": "https://api.spotify.com/v1/tracks/4yOn1TEcfsKHUJCL2h1r8I",
                "id": "4yOn1TEcfsKHUJCL2h1r8I",
                "is_local": false,
                "is_playable": true,
                "name": "Feel This Moment",
                "preview_url": "https://p.scdn.co/mp3-preview/c77682bd75356bf636c98247e29984569daff1ed?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 3,
                "type": "track",
                "uri": "spotify:track:4yOn1TEcfsKHUJCL2h1r8I"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                }
                ],
                "disc_number": 1,
                "duration_ms": 207440,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/7fmpKF0rLGPnP7kcQ5ZMm7"
                },
                "href": "https://api.spotify.com/v1/tracks/7fmpKF0rLGPnP7kcQ5ZMm7",
                "id": "7fmpKF0rLGPnP7kcQ5ZMm7",
                "is_local": false,
                "is_playable": true,
                "name": "Back in Time - featured in \"Men In Black 3\"",
                "preview_url": "https://p.scdn.co/mp3-preview/1830a237c8d882990d633bddb336b83effac2237?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 4,
                "type": "track",
                "uri": "spotify:track:7fmpKF0rLGPnP7kcQ5ZMm7"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"
                    },
                    "href": "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z",
                    "id": "7bXgB6jMjp9ATFy66eO08Z",
                    "name": "Chris Brown",
                    "type": "artist",
                    "uri": "spotify:artist:7bXgB6jMjp9ATFy66eO08Z"
                }
                ],
                "disc_number": 1,
                "duration_ms": 221133,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/3jStb2imKd6oUoBT1zq5lp"
                },
                "href": "https://api.spotify.com/v1/tracks/3jStb2imKd6oUoBT1zq5lp",
                "id": "3jStb2imKd6oUoBT1zq5lp",
                "is_local": false,
                "is_playable": true,
                "name": "Hope We Meet Again",
                "preview_url": "https://p.scdn.co/mp3-preview/36c2942d85e48e5a5da6736ec5c6bf6fd9cda406?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 5,
                "type": "track",
                "uri": "spotify:track:3jStb2imKd6oUoBT1zq5lp"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj"
                    },
                    "href": "https://api.spotify.com/v1/artists/23zg3TcAtWQy7J6upgbUnj",
                    "id": "23zg3TcAtWQy7J6upgbUnj",
                    "name": "Usher",
                    "type": "artist",
                    "uri": "spotify:artist:23zg3TcAtWQy7J6upgbUnj"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                    },
                    "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                    "id": "4D75GcNG95ebPtNvoNVXhz",
                    "name": "Afrojack",
                    "type": "artist",
                    "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
                }
                ],
                "disc_number": 1,
                "duration_ms": 243160,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/6Q4PYJtrq8CBx7YCY5IyRN"
                },
                "href": "https://api.spotify.com/v1/tracks/6Q4PYJtrq8CBx7YCY5IyRN",
                "id": "6Q4PYJtrq8CBx7YCY5IyRN",
                "is_local": false,
                "is_playable": true,
                "name": "Party Ain't Over",
                "preview_url": "https://p.scdn.co/mp3-preview/d3e3191991feb0cb732398374e8c59cdb2cc9fe7?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 6,
                "type": "track",
                "uri": "spotify:track:6Q4PYJtrq8CBx7YCY5IyRN"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2BICa6b3GtjSqhOkgnDUu6"
                    },
                    "href": "https://api.spotify.com/v1/artists/2BICa6b3GtjSqhOkgnDUu6",
                    "id": "2BICa6b3GtjSqhOkgnDUu6",
                    "name": "J.Lo",
                    "type": "artist",
                    "uri": "spotify:artist:2BICa6b3GtjSqhOkgnDUu6"
                }
                ],
                "disc_number": 1,
                "duration_ms": 196920,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/0QTVwqcOsYd73AOkYkk0Hg"
                },
                "href": "https://api.spotify.com/v1/tracks/0QTVwqcOsYd73AOkYkk0Hg",
                "id": "0QTVwqcOsYd73AOkYkk0Hg",
                "is_local": false,
                "is_playable": true,
                "name": "Drinks for You (Ladies Anthem)",
                "preview_url": "https://p.scdn.co/mp3-preview/8c76d62cfbbabb6fbd5daf421c8b9d5365858757?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 7,
                "type": "track",
                "uri": "spotify:track:0QTVwqcOsYd73AOkYkk0Hg"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0rdrTj1p6n1C9KnwaWn6xf"
                    },
                    "href": "https://api.spotify.com/v1/artists/0rdrTj1p6n1C9KnwaWn6xf",
                    "id": "0rdrTj1p6n1C9KnwaWn6xf",
                    "name": "The Wanted",
                    "type": "artist",
                    "uri": "spotify:artist:0rdrTj1p6n1C9KnwaWn6xf"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                    },
                    "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                    "id": "4D75GcNG95ebPtNvoNVXhz",
                    "name": "Afrojack",
                    "type": "artist",
                    "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
                }
                ],
                "disc_number": 1,
                "duration_ms": 244920,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/10Sydb6AAFPdgCzCKOSZuI"
                },
                "href": "https://api.spotify.com/v1/tracks/10Sydb6AAFPdgCzCKOSZuI",
                "id": "10Sydb6AAFPdgCzCKOSZuI",
                "is_local": false,
                "is_playable": true,
                "name": "Have Some Fun",
                "preview_url": "https://p.scdn.co/mp3-preview/7896249670ea7d4ff6d0e1b4d73f380ce70a2356?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 8,
                "type": "track",
                "uri": "spotify:track:10Sydb6AAFPdgCzCKOSZuI"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0e9P96siQmxphVXAwTy2pa"
                    },
                    "href": "https://api.spotify.com/v1/artists/0e9P96siQmxphVXAwTy2pa",
                    "id": "0e9P96siQmxphVXAwTy2pa",
                    "name": "Danny Mercer",
                    "type": "artist",
                    "uri": "spotify:artist:0e9P96siQmxphVXAwTy2pa"
                }
                ],
                "disc_number": 1,
                "duration_ms": 206800,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/4k61iDqmtX9nI7RfLmp9aq"
                },
                "href": "https://api.spotify.com/v1/tracks/4k61iDqmtX9nI7RfLmp9aq",
                "id": "4k61iDqmtX9nI7RfLmp9aq",
                "is_local": false,
                "is_playable": true,
                "name": "Outta Nowhere",
                "preview_url": "https://p.scdn.co/mp3-preview/c5038fdf589d869bff568cae397f983fa056825d?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:4k61iDqmtX9nI7RfLmp9aq"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7qG3b048QCHVRO5Pv1T5lw"
                    },
                    "href": "https://api.spotify.com/v1/artists/7qG3b048QCHVRO5Pv1T5lw",
                    "id": "7qG3b048QCHVRO5Pv1T5lw",
                    "name": "Enrique Iglesias",
                    "type": "artist",
                    "uri": "spotify:artist:7qG3b048QCHVRO5Pv1T5lw"
                }
                ],
                "disc_number": 1,
                "duration_ms": 205800,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/7oGRkL31ElVMcevQDceT99"
                },
                "href": "https://api.spotify.com/v1/tracks/7oGRkL31ElVMcevQDceT99",
                "id": "7oGRkL31ElVMcevQDceT99",
                "is_local": false,
                "is_playable": true,
                "name": "Tchu Tchu Tcha",
                "preview_url": "https://p.scdn.co/mp3-preview/977ea4cd1a12653d8da5c80dbe7ef59d1b82cf41?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 10,
                "type": "track",
                "uri": "spotify:track:7oGRkL31ElVMcevQDceT99"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                    },
                    "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                    "id": "4D75GcNG95ebPtNvoNVXhz",
                    "name": "Afrojack",
                    "type": "artist",
                    "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1EVWYRr2obCRDoSoD6KSuM"
                    },
                    "href": "https://api.spotify.com/v1/artists/1EVWYRr2obCRDoSoD6KSuM",
                    "id": "1EVWYRr2obCRDoSoD6KSuM",
                    "name": "Havana Brown",
                    "type": "artist",
                    "uri": "spotify:artist:1EVWYRr2obCRDoSoD6KSuM"
                }
                ],
                "disc_number": 1,
                "duration_ms": 219600,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/60xPqMqnHZl7Jfiu6E9q8X"
                },
                "href": "https://api.spotify.com/v1/tracks/60xPqMqnHZl7Jfiu6E9q8X",
                "id": "60xPqMqnHZl7Jfiu6E9q8X",
                "is_local": false,
                "is_playable": true,
                "name": "Last Night",
                "preview_url": "https://p.scdn.co/mp3-preview/1dcae6bd0bfffd2f1501f9aa2a8b594c2d6618fa?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 11,
                "type": "track",
                "uri": "spotify:track:60xPqMqnHZl7Jfiu6E9q8X"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                }
                ],
                "disc_number": 1,
                "duration_ms": 197520,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/1jAdXqOSICyXYLaW9ioSur"
                },
                "href": "https://api.spotify.com/v1/tracks/1jAdXqOSICyXYLaW9ioSur",
                "id": "1jAdXqOSICyXYLaW9ioSur",
                "is_local": false,
                "is_playable": true,
                "name": "I'm Off That",
                "preview_url": "https://p.scdn.co/mp3-preview/5aca73ec07274bf216925d71c48d5130a45a7e2a?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 12,
                "type": "track",
                "uri": "spotify:track:1jAdXqOSICyXYLaW9ioSur"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5F2Bwl7Is7KVwTbNbMclIS"
                    },
                    "href": "https://api.spotify.com/v1/artists/5F2Bwl7Is7KVwTbNbMclIS",
                    "id": "5F2Bwl7Is7KVwTbNbMclIS",
                    "name": "Papayo",
                    "type": "artist",
                    "uri": "spotify:artist:5F2Bwl7Is7KVwTbNbMclIS"
                }
                ],
                "disc_number": 1,
                "duration_ms": 196440,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/0fjRYHFz9ealui1lfnN8it"
                },
                "href": "https://api.spotify.com/v1/tracks/0fjRYHFz9ealui1lfnN8it",
                "id": "0fjRYHFz9ealui1lfnN8it",
                "is_local": false,
                "is_playable": true,
                "name": "Echa Pa'lla (Manos Pa'rriba)",
                "preview_url": "https://p.scdn.co/mp3-preview/b5dc8fdadc8133914412bb9be48a000eefae1906?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 13,
                "type": "track",
                "uri": "spotify:track:0fjRYHFz9ealui1lfnN8it"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV"
                    },
                    "href": "https://api.spotify.com/v1/artists/0z4gvV4rjIZ9wHck67ucSV",
                    "id": "0z4gvV4rjIZ9wHck67ucSV",
                    "name": "Akon",
                    "type": "artist",
                    "uri": "spotify:artist:0z4gvV4rjIZ9wHck67ucSV"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5IqWDVLGThjmkm22e3oBU3"
                    },
                    "href": "https://api.spotify.com/v1/artists/5IqWDVLGThjmkm22e3oBU3",
                    "id": "5IqWDVLGThjmkm22e3oBU3",
                    "name": "David Rush",
                    "type": "artist",
                    "uri": "spotify:artist:5IqWDVLGThjmkm22e3oBU3"
                }
                ],
                "disc_number": 1,
                "duration_ms": 257613,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/7of35ktwTbL906Z1i3mT4K"
                },
                "href": "https://api.spotify.com/v1/tracks/7of35ktwTbL906Z1i3mT4K",
                "id": "7of35ktwTbL906Z1i3mT4K",
                "is_local": false,
                "is_playable": true,
                "name": "Everybody Fucks",
                "preview_url": "https://p.scdn.co/mp3-preview/cce6c8d1dae71670ba14bf5bbdc4066601a328ca?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 14,
                "type": "track",
                "uri": "spotify:track:7of35ktwTbL906Z1i3mT4K"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                    },
                    "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                    "id": "0EmeFodog0BfCgMzAIvKQp",
                    "name": "Shakira",
                    "type": "artist",
                    "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
                }
                ],
                "disc_number": 1,
                "duration_ms": 245920,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/2JA6A6Y5f4m7PawM58U2Op"
                },
                "href": "https://api.spotify.com/v1/tracks/2JA6A6Y5f4m7PawM58U2Op",
                "id": "2JA6A6Y5f4m7PawM58U2Op",
                "is_local": false,
                "is_playable": true,
                "name": "Get It Started",
                "preview_url": "https://p.scdn.co/mp3-preview/9b81dacd22e4be31f60783a8ba0b7973b7ef637e?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 15,
                "type": "track",
                "uri": "spotify:track:2JA6A6Y5f4m7PawM58U2Op"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3BnF35ARlp8mMeyXTjUZsr"
                    },
                    "href": "https://api.spotify.com/v1/artists/3BnF35ARlp8mMeyXTjUZsr",
                    "id": "3BnF35ARlp8mMeyXTjUZsr",
                    "name": "Vein",
                    "type": "artist",
                    "uri": "spotify:artist:3BnF35ARlp8mMeyXTjUZsr"
                }
                ],
                "disc_number": 1,
                "duration_ms": 217680,
                "explicit": true,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/726qZxwhP0jVyIA0ujnnhb"
                },
                "href": "https://api.spotify.com/v1/tracks/726qZxwhP0jVyIA0ujnnhb",
                "id": "726qZxwhP0jVyIA0ujnnhb",
                "is_local": false,
                "is_playable": true,
                "name": "11:59",
                "preview_url": "https://p.scdn.co/mp3-preview/643076063855d83950e41832c429e1f017e476bc?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 16,
                "type": "track",
                "uri": "spotify:track:726qZxwhP0jVyIA0ujnnhb"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4wLXwxDeWQ8mtUIRPxGiD6"
                    },
                    "href": "https://api.spotify.com/v1/artists/4wLXwxDeWQ8mtUIRPxGiD6",
                    "id": "4wLXwxDeWQ8mtUIRPxGiD6",
                    "name": "Marc Anthony",
                    "type": "artist",
                    "uri": "spotify:artist:4wLXwxDeWQ8mtUIRPxGiD6"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4MHssKddnziCghmwBHRiEY"
                    },
                    "href": "https://api.spotify.com/v1/artists/4MHssKddnziCghmwBHRiEY",
                    "id": "4MHssKddnziCghmwBHRiEY",
                    "name": "Alle",
                    "type": "artist",
                    "uri": "spotify:artist:4MHssKddnziCghmwBHRiEY"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4Ws2otunReOa6BbwxxpCt6"
                    },
                    "href": "https://api.spotify.com/v1/artists/4Ws2otunReOa6BbwxxpCt6",
                    "id": "4Ws2otunReOa6BbwxxpCt6",
                    "name": "Benny Benassi",
                    "type": "artist",
                    "uri": "spotify:artist:4Ws2otunReOa6BbwxxpCt6"
                }
                ],
                "disc_number": 1,
                "duration_ms": 316480,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/6GPER1Sx8MrBiwWxdulg5Q"
                },
                "href": "https://api.spotify.com/v1/tracks/6GPER1Sx8MrBiwWxdulg5Q",
                "id": "6GPER1Sx8MrBiwWxdulg5Q",
                "is_local": false,
                "is_playable": true,
                "name": "Rain Over Me - Benny Benassi Remix",
                "preview_url": "https://p.scdn.co/mp3-preview/9f46c3fdcba938e03adb09f6ec509220b7bc1569?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 17,
                "type": "track",
                "uri": "spotify:track:6GPER1Sx8MrBiwWxdulg5Q"
            },
            {
                "artists": [
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
                    "id": "0TnOYISbd1XYRBk9myaseg",
                    "name": "Pitbull",
                    "type": "artist",
                    "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"
                    },
                    "href": "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z",
                    "id": "7bXgB6jMjp9ATFy66eO08Z",
                    "name": "Chris Brown",
                    "type": "artist",
                    "uri": "spotify:artist:7bXgB6jMjp9ATFy66eO08Z"
                },
                {
                    "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5I7l0lSOyusetwCv1aQPMf"
                    },
                    "href": "https://api.spotify.com/v1/artists/5I7l0lSOyusetwCv1aQPMf",
                    "id": "5I7l0lSOyusetwCv1aQPMf",
                    "name": "Jump Smokers",
                    "type": "artist",
                    "uri": "spotify:artist:5I7l0lSOyusetwCv1aQPMf"
                }
                ],
                "disc_number": 1,
                "duration_ms": 309626,
                "explicit": false,
                "external_urls": {
                "spotify": "https://open.spotify.com/track/4TWgcICXXfGty8MHGWJ4Ne"
                },
                "href": "https://api.spotify.com/v1/tracks/4TWgcICXXfGty8MHGWJ4Ne",
                "id": "4TWgcICXXfGty8MHGWJ4Ne",
                "is_local": false,
                "is_playable": true,
                "name": "International Love - Jump Smokers Extended Mix",
                "preview_url": "https://p.scdn.co/mp3-preview/91859e93f8dacc22271a0dd31a77e81bcedaa5e1?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 18,
                "type": "track",
                "uri": "spotify:track:4TWgcICXXfGty8MHGWJ4Ne"
            }
            ],
            "limit": 50,
            "next": null,
            "offset": 0,
            "previous": null,
            "total": 18
        },
        "type": "album",
        "uri": "spotify:album:4aawyAB9vmqN3uQ7FjRGTy"
    };

}

/*RXJS

Operadores: tap, map, ( switchmap, concatmap, mergemap). Operadores que le pasas al pipe
.pype(map(),tap()).suscribe()=>{}

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