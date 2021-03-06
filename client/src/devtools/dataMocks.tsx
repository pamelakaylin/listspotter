import { Artist, TrackItem, ArtistData } from '../interfaces/spotifyObjects'
import { GenreDb } from '../interfaces/genreObjects'
import { generateGenres } from '../components/Main/main-helpers'

const artistData = {
  "artists" : {
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/01e2lCvLZ4fLUIRy68nptH"
      },
      "followers" : {
        "href" : null,
        "total" : 104032
      },
      "genres" : [ "deep euro house", "tropical house" ],
      "href" : "https://api.spotify.com/v1/artists/01e2lCvLZ4fLUIRy68nptH",
      "id" : "01e2lCvLZ4fLUIRy68nptH",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/7d60ad2505e9a6922973d98fcc958a5742d1e3fc",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/d369947205e298b4928880de4609251c74a1bd37",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/bf0e990893ac10537df9e7006b6fa530fcfd9152",
        "width" : 160
      } ],
      "name" : "Wankelmut",
      "popularity" : 62,
      "type" : "artist",
      "uri" : "spotify:artist:01e2lCvLZ4fLUIRy68nptH"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/02IFYoziC7CpQRK8fbehUY"
      },
      "followers" : {
        "href" : null,
        "total" : 69677
      },
      "genres" : [ "bosnian indie", "yugoslav rock" ],
      "href" : "https://api.spotify.com/v1/artists/02IFYoziC7CpQRK8fbehUY",
      "id" : "02IFYoziC7CpQRK8fbehUY",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4d4d3364e73ae54728222ae56bbbe0d12b0e5b5c",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/26063266e6057cf23d349febddd436bf24a3c2d6",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/009eed443cdac4a909face78e92a45a9c74db7d4",
        "width" : 160
      } ],
      "name" : "Dubioza kolektiv",
      "popularity" : 48,
      "type" : "artist",
      "uri" : "spotify:artist:02IFYoziC7CpQRK8fbehUY"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/09b5OcuIELTdD7FfzQzcdB"
      },
      "followers" : {
        "href" : null,
        "total" : 75811
      },
      "genres" : [ "folk metal", "italian folk metal", "italian metal", "italian power metal", "melodic metal", "neo classical metal", "power metal", "tolkien metal" ],
      "href" : "https://api.spotify.com/v1/artists/09b5OcuIELTdD7FfzQzcdB",
      "id" : "09b5OcuIELTdD7FfzQzcdB",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/fea03b617083289dcb5d699ac4dd06795f5fa1b2",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/5efd756ab2de73c9203efd4712e96c1f60c77a4b",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/9e5fd667763f8c399e11e2898913e6217be928b6",
        "width" : 160
      } ],
      "name" : "Elvenking",
      "popularity" : 47,
      "type" : "artist",
      "uri" : "spotify:artist:09b5OcuIELTdD7FfzQzcdB"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/09mNj9XgCqgg6usfeXOoBg"
      },
      "followers" : {
        "href" : null,
        "total" : 54207
      },
      "genres" : [ "death metal", "progressive thrash", "technical thrash", "thrash metal" ],
      "href" : "https://api.spotify.com/v1/artists/09mNj9XgCqgg6usfeXOoBg",
      "id" : "09mNj9XgCqgg6usfeXOoBg",
      "images" : [ {
        "height" : 1000,
        "url" : "https://i.scdn.co/image/c00df3db5fc12f38b33b5ee87933b7b01b0d6e41",
        "width" : 1000
      }, {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5cc14441a00f2acd672b82d8e7c26b51f52042a2",
        "width" : 640
      }, {
        "height" : 200,
        "url" : "https://i.scdn.co/image/51b307cdb4314151ddba1ccf537d7379b90540de",
        "width" : 200
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/bec64f91980d5fa49bcfddfa79afdde01cd644fc",
        "width" : 64
      } ],
      "name" : "Vektor",
      "popularity" : 41,
      "type" : "artist",
      "uri" : "spotify:artist:09mNj9XgCqgg6usfeXOoBg"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/09xj0S68Y1OU1vHMCZAIvz"
      },
      "followers" : {
        "href" : null,
        "total" : 2141543
      },
      "genres" : [ "latin", "latin alternative", "latin rock", "mexican rock", "rock en espanol" ],
      "href" : "https://api.spotify.com/v1/artists/09xj0S68Y1OU1vHMCZAIvz",
      "id" : "09xj0S68Y1OU1vHMCZAIvz",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/eaea517213a7e99edc151495a0895d8d1d40b7a9",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/16ce8f6551c151d3def2b9cb49e1cbd5ea6a3c16",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/f02aecc0e5b5c640ed4a26438fd508e6ffe82801",
        "width" : 160
      } ],
      "name" : "Café Tacvba",
      "popularity" : 73,
      "type" : "artist",
      "uri" : "spotify:artist:09xj0S68Y1OU1vHMCZAIvz"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0CGpNBihXlpMsjwHjVKNIO"
      },
      "followers" : {
        "href" : null,
        "total" : 17921
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0CGpNBihXlpMsjwHjVKNIO",
      "id" : "0CGpNBihXlpMsjwHjVKNIO",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/cc959a48c174f08e1f5c656e3374d44ab6eb9211",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/76053877a36da60b65f2cada8197a944f97e009a",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/f2609124643cf6971e1d998c9e4002307a9b4ebb",
        "width" : 160
      } ],
      "name" : "zircon",
      "popularity" : 39,
      "type" : "artist",
      "uri" : "spotify:artist:0CGpNBihXlpMsjwHjVKNIO"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0D3h8NZqNp7BN97JwtV6eW"
      },
      "followers" : {
        "href" : null,
        "total" : 99008
      },
      "genres" : [ "contemporary jazz", "jazz piano", "modern jazz piano" ],
      "href" : "https://api.spotify.com/v1/artists/0D3h8NZqNp7BN97JwtV6eW",
      "id" : "0D3h8NZqNp7BN97JwtV6eW",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/18a70e005024c92f275a99af18ffd67d6536c15c",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/bfaf5778d577873a79b3cbfd9436eeabac7227a2",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/0d856fcd8935efc502a46fd3d5baf53bf09643c5",
        "width" : 160
      } ],
      "name" : "Tigran Hamasyan",
      "popularity" : 49,
      "type" : "artist",
      "uri" : "spotify:artist:0D3h8NZqNp7BN97JwtV6eW"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0DAh8s6Hbl4xHZyTcbcqNe"
      },
      "followers" : {
        "href" : null,
        "total" : 1350
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0DAh8s6Hbl4xHZyTcbcqNe",
      "id" : "0DAh8s6Hbl4xHZyTcbcqNe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b273ace9e880f57081964634c550",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e02ace9e880f57081964634c550",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d00004851ace9e880f57081964634c550",
        "width" : 64
      } ],
      "name" : "Mz Sunday Luv",
      "popularity" : 29,
      "type" : "artist",
      "uri" : "spotify:artist:0DAh8s6Hbl4xHZyTcbcqNe"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0DCw6lHkzh9t7f8Hb4Z0Sx"
      },
      "followers" : {
        "href" : null,
        "total" : 648647
      },
      "genres" : [ "alternative metal", "death metal", "melodic death metal", "metal", "nu metal", "power metal", "slayer", "swedish death metal", "swedish metal" ],
      "href" : "https://api.spotify.com/v1/artists/0DCw6lHkzh9t7f8Hb4Z0Sx",
      "id" : "0DCw6lHkzh9t7f8Hb4Z0Sx",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/04cd9bccf59e8061f13e779d1001975a60fb837a",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/42b234b54c32d78a67ac6a59d3d90f1c87d6e4d8",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/e67d59099eb1f0d8f8477fcac3c2fe8a1ba4fc59",
        "width" : 160
      } ],
      "name" : "Arch Enemy",
      "popularity" : 61,
      "type" : "artist",
      "uri" : "spotify:artist:0DCw6lHkzh9t7f8Hb4Z0Sx"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0E5cM2403VzBOV6z8NpSwS"
      },
      "followers" : {
        "href" : null,
        "total" : 6707
      },
      "genres" : [ "french techno", "new french touch" ],
      "href" : "https://api.spotify.com/v1/artists/0E5cM2403VzBOV6z8NpSwS",
      "id" : "0E5cM2403VzBOV6z8NpSwS",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/34f959c1dbe0e9563c94c5d23b8ad6575814169d",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/53b0bf4e3187c18a9e76f4c588b93ffb3738345d",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/6c2f5b07fcfa336f2485c0390a651bdd48b4efeb",
        "width" : 160
      } ],
      "name" : "Romulus",
      "popularity" : 35,
      "type" : "artist",
      "uri" : "spotify:artist:0E5cM2403VzBOV6z8NpSwS"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0EP5EpsiMP8oLYy7sPHwf9"
      },
      "followers" : {
        "href" : null,
        "total" : 29011
      },
      "genres" : [ "ambeat" ],
      "href" : "https://api.spotify.com/v1/artists/0EP5EpsiMP8oLYy7sPHwf9",
      "id" : "0EP5EpsiMP8oLYy7sPHwf9",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/52fdd7574088de792aef240a884bfd890ccab005",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/3ccab09b219e69bdf5096d4c35b8f383853c777f",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/9b7ca1f242835632a10bf166c356f6b83195c16f",
        "width" : 160
      } ],
      "name" : "The Shanghai Restoration Project",
      "popularity" : 41,
      "type" : "artist",
      "uri" : "spotify:artist:0EP5EpsiMP8oLYy7sPHwf9"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0F5fXdlx1bKwYFZ70bfuZ9"
      },
      "followers" : {
        "href" : null,
        "total" : 10997
      },
      "genres" : [ "dark cabaret", "gypsy punk" ],
      "href" : "https://api.spotify.com/v1/artists/0F5fXdlx1bKwYFZ70bfuZ9",
      "id" : "0F5fXdlx1bKwYFZ70bfuZ9",
      "images" : [ {
        "height" : 1265,
        "url" : "https://i.scdn.co/image/895e1240c5873a53c378e623dac24355754f25a3",
        "width" : 1000
      }, {
        "height" : 809,
        "url" : "https://i.scdn.co/image/786249efd556f660ee702cf4fbd5930ed9e81d32",
        "width" : 640
      }, {
        "height" : 253,
        "url" : "https://i.scdn.co/image/85e2d1c23a44f8d0e93dafadbc8ef9a73e01ec30",
        "width" : 200
      }, {
        "height" : 81,
        "url" : "https://i.scdn.co/image/f58c77ba5ca9b811e897dd875c70957facdd8c61",
        "width" : 64
      } ],
      "name" : "Firewater",
      "popularity" : 32,
      "type" : "artist",
      "uri" : "spotify:artist:0F5fXdlx1bKwYFZ70bfuZ9"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0FEJqmeLRzsXj8hgcZaAyB"
      },
      "followers" : {
        "href" : null,
        "total" : 496625
      },
      "genres" : [ "french pop" ],
      "href" : "https://api.spotify.com/v1/artists/0FEJqmeLRzsXj8hgcZaAyB",
      "id" : "0FEJqmeLRzsXj8hgcZaAyB",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c133119615054ff014873c547af89b5b9faff053",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/1c915845c79aee632442daef5bf1dac254bf0129",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/e6996fa1081ca9d7a030f0dc18cfdf4f220abcc8",
        "width" : 160
      } ],
      "name" : "Indila",
      "popularity" : 65,
      "type" : "artist",
      "uri" : "spotify:artist:0FEJqmeLRzsXj8hgcZaAyB"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0GDGKpJFhVpcjIGF8N6Ewt"
      },
      "followers" : {
        "href" : null,
        "total" : 753230
      },
      "genres" : [ "alternative metal", "french death metal", "french metal", "metal", "nu metal", "progressive groove metal" ],
      "href" : "https://api.spotify.com/v1/artists/0GDGKpJFhVpcjIGF8N6Ewt",
      "id" : "0GDGKpJFhVpcjIGF8N6Ewt",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1ad6844cd3a0d5a195f2df98f44abfcbfe2f4d5e",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/aa05402b64cf462e74b1d0aef90f2fc58aff3e50",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/76d5d53e5649d896b215009fef0415929855b6c7",
        "width" : 160
      } ],
      "name" : "Gojira",
      "popularity" : 69,
      "type" : "artist",
      "uri" : "spotify:artist:0GDGKpJFhVpcjIGF8N6Ewt"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0H0rBbf7vHXO3qh50Wap7y"
      },
      "followers" : {
        "href" : null,
        "total" : 83362
      },
      "genres" : [ "australian dance", "electropop" ],
      "href" : "https://api.spotify.com/v1/artists/0H0rBbf7vHXO3qh50Wap7y",
      "id" : "0H0rBbf7vHXO3qh50Wap7y",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b77a65e767ad547fcd14d62478499c1cbf1eaddb",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/4e2b8178dad5fac8334c3eacca167913f1f199ea",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/cfb4afb21ca5d527dd7dc482f1025cd1846fb555",
        "width" : 160
      } ],
      "name" : "Sam Sparro",
      "popularity" : 54,
      "type" : "artist",
      "uri" : "spotify:artist:0H0rBbf7vHXO3qh50Wap7y"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0HIiXblDOFPXxkuI35wOMx"
      },
      "followers" : {
        "href" : null,
        "total" : 11334
      },
      "genres" : [ "indie game soundtrack" ],
      "href" : "https://api.spotify.com/v1/artists/0HIiXblDOFPXxkuI35wOMx",
      "id" : "0HIiXblDOFPXxkuI35wOMx",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4f9b285f4cce93c1ec05677466e757d65f88ec0c",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/ebb9a6d408c7acde44b0145f88acf3c69b407a18",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/dc3b6dbb2d9f79644c80cb160099047d269c6f81",
        "width" : 160
      } ],
      "name" : "A Shell In The Pit",
      "popularity" : 40,
      "type" : "artist",
      "uri" : "spotify:artist:0HIiXblDOFPXxkuI35wOMx"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0I2XqVXqHScXjHhk6AYYRe"
      },
      "followers" : {
        "href" : null,
        "total" : 12799
      },
      "genres" : [ "swedish hip hop" ],
      "href" : "https://api.spotify.com/v1/artists/0I2XqVXqHScXjHhk6AYYRe",
      "id" : "0I2XqVXqHScXjHhk6AYYRe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c813f0ada1150e5a8178c58b232776c77a51d3c2",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/dce640044ab954223f6f42fd942abeb1cd0ad009",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/3e39905f91afb235a7cb1e59373f72265ebf2345",
        "width" : 160
      } ],
      "name" : "Afasi & Filthy",
      "popularity" : 36,
      "type" : "artist",
      "uri" : "spotify:artist:0I2XqVXqHScXjHhk6AYYRe"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0IVapwlnM3dEOiMsHXsghT"
      },
      "followers" : {
        "href" : null,
        "total" : 178393
      },
      "genres" : [ "bass music", "chillwave", "electronica", "future garage", "glitch hop", "microhouse", "ninja", "wonky" ],
      "href" : "https://api.spotify.com/v1/artists/0IVapwlnM3dEOiMsHXsghT",
      "id" : "0IVapwlnM3dEOiMsHXsghT",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/00a19cc20d357784893879834ca18fbfd27e9655",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/3d8ce0d7bf1dd5248b6c54959797b1aebaa022e3",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/7e64249b2122498c51e355cb2534927978ea47df",
        "width" : 160
      } ],
      "name" : "Nosaj Thing",
      "popularity" : 54,
      "type" : "artist",
      "uri" : "spotify:artist:0IVapwlnM3dEOiMsHXsghT"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0IhZsSjGTFJBXIM5unqzdV"
      },
      "followers" : {
        "href" : null,
        "total" : 15382
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0IhZsSjGTFJBXIM5unqzdV",
      "id" : "0IhZsSjGTFJBXIM5unqzdV",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b273e19fbe2274c30d7d446ff359",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e02e19fbe2274c30d7d446ff359",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d00004851e19fbe2274c30d7d446ff359",
        "width" : 64
      } ],
      "name" : "Jake Chudnow",
      "popularity" : 32,
      "type" : "artist",
      "uri" : "spotify:artist:0IhZsSjGTFJBXIM5unqzdV"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0IkzMM0QD6fdU7AQKbXpYi"
      },
      "followers" : {
        "href" : null,
        "total" : 2143
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0IkzMM0QD6fdU7AQKbXpYi",
      "id" : "0IkzMM0QD6fdU7AQKbXpYi",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/aca94342b436624a62c720d090f605170d66d81e",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/f8145c2c1e6139054c86950c6f12f968a3ad1cbc",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/d09db81428c6abb10bd3105c156c1f3b815a3c59",
        "width" : 160
      } ],
      "name" : "Masvidal",
      "popularity" : 9,
      "type" : "artist",
      "uri" : "spotify:artist:0IkzMM0QD6fdU7AQKbXpYi"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0Iv00ucAIqr5KVS7bXGFa9"
      },
      "followers" : {
        "href" : null,
        "total" : 52436
      },
      "genres" : [ "art rock", "instrumental rock", "jazz fusion", "progressive rock", "space rock", "symphonic rock" ],
      "href" : "https://api.spotify.com/v1/artists/0Iv00ucAIqr5KVS7bXGFa9",
      "id" : "0Iv00ucAIqr5KVS7bXGFa9",
      "images" : [ {
        "height" : 1236,
        "url" : "https://i.scdn.co/image/2404a62e8b362948196ff1971b187f7f405a3e59",
        "width" : 1000
      }, {
        "height" : 791,
        "url" : "https://i.scdn.co/image/277c815e9a8161b37e8fdb2adf5a71c148dfa8c4",
        "width" : 640
      }, {
        "height" : 247,
        "url" : "https://i.scdn.co/image/8834f3e239b5caa298d3931f8575651d40a0ee58",
        "width" : 200
      }, {
        "height" : 79,
        "url" : "https://i.scdn.co/image/b5a0b0e8798cef83ff2cae36ca8859799630fb17",
        "width" : 64
      } ],
      "name" : "Ozric Tentacles",
      "popularity" : 42,
      "type" : "artist",
      "uri" : "spotify:artist:0Iv00ucAIqr5KVS7bXGFa9"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0JWemE0N1N3nwrtMNg2eMO"
      },
      "followers" : {
        "href" : null,
        "total" : 7443
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0JWemE0N1N3nwrtMNg2eMO",
      "id" : "0JWemE0N1N3nwrtMNg2eMO",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1876a17108ebd24144e2814fb9972b3d80f2bf3c",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/fa544662dd11b7c9be56ae2dc396bd20e3f1dbfc",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/169dda30158d34feb9fbebdb3ee88bb761a905d1",
        "width" : 160
      } ],
      "name" : "Sky",
      "popularity" : 38,
      "type" : "artist",
      "uri" : "spotify:artist:0JWemE0N1N3nwrtMNg2eMO"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc"
      },
      "followers" : {
        "href" : null,
        "total" : 38532
      },
      "genres" : [ "dreamo", "piano rock", "progressive post-hardcore" ],
      "href" : "https://api.spotify.com/v1/artists/0JyCM9EwjQZZzQPGTSM1qc",
      "id" : "0JyCM9EwjQZZzQPGTSM1qc",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/a92c800c230b9668bcb7a12eba99f6cc124aaa5e",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/b9e6547223ff429a4577af0466e89a37d759761d",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/1a1095ad5a8ffce0c112fc7398e6e6e7d2b635b9",
        "width" : 160
      } ],
      "name" : "The Reign of Kindo",
      "popularity" : 40,
      "type" : "artist",
      "uri" : "spotify:artist:0JyCM9EwjQZZzQPGTSM1qc"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0KLylVDEP61slhDexriZLj"
      },
      "followers" : {
        "href" : null,
        "total" : 4377
      },
      "genres" : [ "downtempo fusion" ],
      "href" : "https://api.spotify.com/v1/artists/0KLylVDEP61slhDexriZLj",
      "id" : "0KLylVDEP61slhDexriZLj",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5e26ac67543c2d5e48e949512ae85536d5b0eb95",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/a16088698d75176e5195fef22c61e8062a398085",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/0a244cd1e5c31916c9be48d3af55568ec6d26447",
        "width" : 160
      } ],
      "name" : "Anomie Belle",
      "popularity" : 35,
      "type" : "artist",
      "uri" : "spotify:artist:0KLylVDEP61slhDexriZLj"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
      },
      "followers" : {
        "href" : null,
        "total" : 15504211
      },
      "genres" : [ "alternative rock", "funk metal", "funk rock", "permanent wave", "rock" ],
      "href" : "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
      "id" : "0L8ExT028jH3ddEcZwqJJ5",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/89bc3c14aa2b4f250033ffcf5f322b2a553d9331",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/7251ac7f3c0262cfcfad32e214deda639a2b4b46",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/8def8c4db6061deb04daca08e43bcde57181ec8b",
        "width" : 160
      } ],
      "name" : "Red Hot Chili Peppers",
      "popularity" : 86,
      "type" : "artist",
      "uri" : "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0L8QRAAuWjqvTM8FpQ1gYO"
      },
      "followers" : {
        "href" : null,
        "total" : 248417
      },
      "genres" : [ "canadian metal", "death metal", "hard rock", "metal", "neo classical metal", "old school thrash", "power metal", "speed metal", "technical groove metal", "thrash metal" ],
      "href" : "https://api.spotify.com/v1/artists/0L8QRAAuWjqvTM8FpQ1gYO",
      "id" : "0L8QRAAuWjqvTM8FpQ1gYO",
      "images" : [ {
        "height" : 1000,
        "url" : "https://i.scdn.co/image/423b0a413d344b5e520bda76606b535250f6c130",
        "width" : 1000
      }, {
        "height" : 640,
        "url" : "https://i.scdn.co/image/08fdfc7c4f1c54c6806eefd26a4f86b2aa712171",
        "width" : 640
      }, {
        "height" : 200,
        "url" : "https://i.scdn.co/image/75b7833b5f8d0996782a344b5799858e62c1d9f4",
        "width" : 200
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/cf5b9192955ec59cd046ac452f73202cccbed317",
        "width" : 64
      } ],
      "name" : "Annihilator",
      "popularity" : 51,
      "type" : "artist",
      "uri" : "spotify:artist:0L8QRAAuWjqvTM8FpQ1gYO"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
      },
      "followers" : {
        "href" : null,
        "total" : 1107624
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
      "id" : "0LyfQWJT6nXafLPZqxe9Of",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/8987540724d78afbf9f9249638eefcef38c0853b",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/3439f512b1422283239d93985959dc6115eae9c2",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/51820ee3bf05021dc690ee7bf804b6d73eedb4a1",
        "width" : 160
      } ],
      "name" : "Various Artists",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0NDElNqwGRCmsYIQFapp6K"
      },
      "followers" : {
        "href" : null,
        "total" : 46029
      },
      "genres" : [ "alternative dance", "filter house", "new french touch", "nu disco" ],
      "href" : "https://api.spotify.com/v1/artists/0NDElNqwGRCmsYIQFapp6K",
      "id" : "0NDElNqwGRCmsYIQFapp6K",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/12197dae5c2f5752da45b08f06953e2551066ebf",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/f36ccd906331b0ec7670d9b3986f1df7b18a80e5",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/971b050a4f1762eadcbe97df0c8d94399c551078",
        "width" : 160
      } ],
      "name" : "Oliver",
      "popularity" : 54,
      "type" : "artist",
      "uri" : "spotify:artist:0NDElNqwGRCmsYIQFapp6K"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0NmYchKQ8JIR9QHYJA0FRe"
      },
      "followers" : {
        "href" : null,
        "total" : 365165
      },
      "genres" : [ "death metal", "groove metal", "hard rock", "metal", "old school thrash", "speed metal", "thrash metal" ],
      "href" : "https://api.spotify.com/v1/artists/0NmYchKQ8JIR9QHYJA0FRe",
      "id" : "0NmYchKQ8JIR9QHYJA0FRe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/cb3d3f098c6882bcc32925ccdd16b56e314e94f5",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/c79bc2d3afb81f5abc3c6163ffae390a634d984e",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/9b321c5f99ae8e3589113573dacf498a690578e5",
        "width" : 160
      } ],
      "name" : "Overkill",
      "popularity" : 50,
      "type" : "artist",
      "uri" : "spotify:artist:0NmYchKQ8JIR9QHYJA0FRe"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0OBYJhSLz23GVEmb7teDQ8"
      },
      "followers" : {
        "href" : null,
        "total" : 1347
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0OBYJhSLz23GVEmb7teDQ8",
      "id" : "0OBYJhSLz23GVEmb7teDQ8",
      "images" : [ ],
      "name" : "Hiromi feat. Anthony Jackson, Simon Phillips",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0OBYJhSLz23GVEmb7teDQ8"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0Ohm3LvFp7wzkvMeiTDPKQ"
      },
      "followers" : {
        "href" : null,
        "total" : 13800
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0Ohm3LvFp7wzkvMeiTDPKQ",
      "id" : "0Ohm3LvFp7wzkvMeiTDPKQ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c33c6c9bbdb7581b59490f3e2d1091d9322703e3",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/905ae8841faacfc94b1fe3a158276e17a40e4959",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/52fb4c5efb2b630a23e21975ea1c4237db5bbf63",
        "width" : 160
      } ],
      "name" : "Mirwais",
      "popularity" : 39,
      "type" : "artist",
      "uri" : "spotify:artist:0Ohm3LvFp7wzkvMeiTDPKQ"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0R3pn7bweUwpLd98080DYO"
      },
      "followers" : {
        "href" : null,
        "total" : 5115
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0R3pn7bweUwpLd98080DYO",
      "id" : "0R3pn7bweUwpLd98080DYO",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4e070b6e554c6d3670d97e219da3d6dfc84a996e",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/70a9d7092573d2d8c7d16a2347333c64d8d81e73",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/fcb0a1c7108e649fa7954cc0b4e5781918d2f98b",
        "width" : 160
      } ],
      "name" : "Tumi",
      "popularity" : 35,
      "type" : "artist",
      "uri" : "spotify:artist:0R3pn7bweUwpLd98080DYO"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0RMrzrDgqu7ipsDo1xNoNK"
      },
      "followers" : {
        "href" : null,
        "total" : 487
      },
      "genres" : [ "deep liquid bass" ],
      "href" : "https://api.spotify.com/v1/artists/0RMrzrDgqu7ipsDo1xNoNK",
      "id" : "0RMrzrDgqu7ipsDo1xNoNK",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b2736758159c0ba81cda2dcb7f07",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e026758159c0ba81cda2dcb7f07",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d000048516758159c0ba81cda2dcb7f07",
        "width" : 64
      } ],
      "name" : "Dub Phizix, Skeptical",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0RMrzrDgqu7ipsDo1xNoNK"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5"
      },
      "followers" : {
        "href" : null,
        "total" : 3752178
      },
      "genres" : [ "dutch trance", "edm", "pop dance", "progressive house", "trance" ],
      "href" : "https://api.spotify.com/v1/artists/0SfsnGyD8FpIN4U4WCkBZ5",
      "id" : "0SfsnGyD8FpIN4U4WCkBZ5",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b15e29059c98e971418bc0ec6deb2c99494eda32",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/b6d34c9fb5c0d0730921237549d5d522797cf759",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/1697ab36aaa2c6133221de70ce56d34eac0efc0e",
        "width" : 160
      } ],
      "name" : "Armin van Buuren",
      "popularity" : 79,
      "type" : "artist",
      "uri" : "spotify:artist:0SfsnGyD8FpIN4U4WCkBZ5"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0SqxIwLKk4cXkiv6dq3zEu"
      },
      "followers" : {
        "href" : null,
        "total" : 18939
      },
      "genres" : [ "czech electronic" ],
      "href" : "https://api.spotify.com/v1/artists/0SqxIwLKk4cXkiv6dq3zEu",
      "id" : "0SqxIwLKk4cXkiv6dq3zEu",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/21c71a76a961c785e4fe6a56ad4fd013b99f81d3",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/8e302bf7ea09c4d38a5dccd375cfe50cc20e99aa",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/6315e94d36bd16f63aa73e8274b1218a838d9a11",
        "width" : 160
      } ],
      "name" : "Floex",
      "popularity" : 40,
      "type" : "artist",
      "uri" : "spotify:artist:0SqxIwLKk4cXkiv6dq3zEu"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0SwO7SWeDHJijQ3XNS7xEE"
      },
      "followers" : {
        "href" : null,
        "total" : 2134467
      },
      "genres" : [ "alternative dance", "indie rock", "indietronica", "modern rock", "rock" ],
      "href" : "https://api.spotify.com/v1/artists/0SwO7SWeDHJijQ3XNS7xEE",
      "id" : "0SwO7SWeDHJijQ3XNS7xEE",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/0760c3acca24fe81e9d217dd922ab36081383897",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/28ff19618ece117a1897d8e9298e8840a645a2a1",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/1b5cca2e02cc6bbfa7d215dbfe168c21217ab9a1",
        "width" : 160
      } ],
      "name" : "MGMT",
      "popularity" : 80,
      "type" : "artist",
      "uri" : "spotify:artist:0SwO7SWeDHJijQ3XNS7xEE"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0TF6B1cp2QZXLE0NjhTMT9"
      },
      "followers" : {
        "href" : null,
        "total" : 44090
      },
      "genres" : [ "instrumental math rock", "instrumental rock", "japanese jazz fusion", "japanese math rock", "japanese post-rock", "math pop", "math rock", "post-rock" ],
      "href" : "https://api.spotify.com/v1/artists/0TF6B1cp2QZXLE0NjhTMT9",
      "id" : "0TF6B1cp2QZXLE0NjhTMT9",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ee723078cfe061dc07b63530e8c1d1162283cb54",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/bafd398a177842d21c48c895c451791467d66e1f",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/027ba0a5a66bf00360405f55fdd60811fd0db2d1",
        "width" : 160
      } ],
      "name" : "LITE",
      "popularity" : 37,
      "type" : "artist",
      "uri" : "spotify:artist:0TF6B1cp2QZXLE0NjhTMT9"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0UHy12S8f94Sa0jc4dd6Jz"
      },
      "followers" : {
        "href" : null,
        "total" : 46339
      },
      "genres" : [ "classic greek rock", "greek pop", "laiko" ],
      "href" : "https://api.spotify.com/v1/artists/0UHy12S8f94Sa0jc4dd6Jz",
      "id" : "0UHy12S8f94Sa0jc4dd6Jz",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b2737e2b4a1476d692a4face5994",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e027e2b4a1476d692a4face5994",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d000048517e2b4a1476d692a4face5994",
        "width" : 64
      } ],
      "name" : "Pix Lax",
      "popularity" : 46,
      "type" : "artist",
      "uri" : "spotify:artist:0UHy12S8f94Sa0jc4dd6Jz"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0UdoKjWIe3tHyiqc4qT3Oz"
      },
      "followers" : {
        "href" : null,
        "total" : 425561
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0UdoKjWIe3tHyiqc4qT3Oz",
      "id" : "0UdoKjWIe3tHyiqc4qT3Oz",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b273417bebe37c4c4c2430036143",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e02417bebe37c4c4c2430036143",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d00004851417bebe37c4c4c2430036143",
        "width" : 64
      } ],
      "name" : "OMFG",
      "popularity" : 58,
      "type" : "artist",
      "uri" : "spotify:artist:0UdoKjWIe3tHyiqc4qT3Oz"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0Uox3PUw47qEqroDggrDRE"
      },
      "followers" : {
        "href" : null,
        "total" : 5855
      },
      "genres" : [ "belgian indie", "belgian modern jazz" ],
      "href" : "https://api.spotify.com/v1/artists/0Uox3PUw47qEqroDggrDRE",
      "id" : "0Uox3PUw47qEqroDggrDRE",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/40af76191d97a4221740bef5c22015b5a173f32f",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/3866f9da4da0a016e56691536b692e4cf758abe3",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/9bb8b5dd6de8da5dc890cc0cb31af83a87de9910",
        "width" : 160
      } ],
      "name" : "Nordmann",
      "popularity" : 34,
      "type" : "artist",
      "uri" : "spotify:artist:0Uox3PUw47qEqroDggrDRE"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0VWRXoE547qHGpUemsl1ge"
      },
      "followers" : {
        "href" : null,
        "total" : 31986
      },
      "genres" : [ "turkish reggae" ],
      "href" : "https://api.spotify.com/v1/artists/0VWRXoE547qHGpUemsl1ge",
      "id" : "0VWRXoE547qHGpUemsl1ge",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b2735ac8e878a5af6bebbcd83cd8",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e025ac8e878a5af6bebbcd83cd8",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d000048515ac8e878a5af6bebbcd83cd8",
        "width" : 64
      } ],
      "name" : "Sattas",
      "popularity" : 36,
      "type" : "artist",
      "uri" : "spotify:artist:0VWRXoE547qHGpUemsl1ge"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0WSSKmoRbxqLf3MnXInQ2J"
      },
      "followers" : {
        "href" : null,
        "total" : 113684
      },
      "genres" : [ "electronica", "microhouse", "minimal techno", "modular synth", "tech house" ],
      "href" : "https://api.spotify.com/v1/artists/0WSSKmoRbxqLf3MnXInQ2J",
      "id" : "0WSSKmoRbxqLf3MnXInQ2J",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/de9e5216b1f1dab4a23c3255e825fbacfe283e5a",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/59b6083d596c915afcd5b648b82e1acf3f9d9ce8",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/899420a94245c95a796a5d821f2dffa560877788",
        "width" : 160
      } ],
      "name" : "Max Cooper",
      "popularity" : 56,
      "type" : "artist",
      "uri" : "spotify:artist:0WSSKmoRbxqLf3MnXInQ2J"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0WaR9ydw7sZikp1dfHV8Xc"
      },
      "followers" : {
        "href" : null,
        "total" : 3298
      },
      "genres" : [ "minimal dubstep" ],
      "href" : "https://api.spotify.com/v1/artists/0WaR9ydw7sZikp1dfHV8Xc",
      "id" : "0WaR9ydw7sZikp1dfHV8Xc",
      "images" : [ {
        "height" : 1000,
        "url" : "https://i.scdn.co/image/b392edb5a6450f82753d552f9ad9881db753cc04",
        "width" : 1000
      }, {
        "height" : 640,
        "url" : "https://i.scdn.co/image/a7ce93e4a402ffa1ac25beb4e7ee3540476b6210",
        "width" : 640
      }, {
        "height" : 200,
        "url" : "https://i.scdn.co/image/17291e7bedb3e55a69fe2fb08b1f215e7f6e0a7a",
        "width" : 200
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/a0f4f2a923825321e8827f24e9149cce32c7e658",
        "width" : 64
      } ],
      "name" : "Killawatt",
      "popularity" : 17,
      "type" : "artist",
      "uri" : "spotify:artist:0WaR9ydw7sZikp1dfHV8Xc"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0WwSkZ7LtFUFjGjMZBMt6T"
      },
      "followers" : {
        "href" : null,
        "total" : 4397737
      },
      "genres" : [ "album rock", "classic rock", "mellow gold", "rock", "soft rock" ],
      "href" : "https://api.spotify.com/v1/artists/0WwSkZ7LtFUFjGjMZBMt6T",
      "id" : "0WwSkZ7LtFUFjGjMZBMt6T",
      "images" : [ {
        "height" : 1021,
        "url" : "https://i.scdn.co/image/54a86ecf1de16b17e2ed000a9ca8a1590c9a3b80",
        "width" : 1000
      }, {
        "height" : 653,
        "url" : "https://i.scdn.co/image/caf04a8a030c70dd697ee0b37562033bbe3cdb4f",
        "width" : 640
      }, {
        "height" : 204,
        "url" : "https://i.scdn.co/image/7756c61bed0dc7650b188a4c7be984dc4e1d7651",
        "width" : 200
      }, {
        "height" : 65,
        "url" : "https://i.scdn.co/image/0ba7e13266153e59b9b611cbd43e21aec7f6737c",
        "width" : 64
      } ],
      "name" : "Dire Straits",
      "popularity" : 79,
      "type" : "artist",
      "uri" : "spotify:artist:0WwSkZ7LtFUFjGjMZBMt6T"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0XNa1vTidXlvJ2gHSsRi4A"
      },
      "followers" : {
        "href" : null,
        "total" : 1990666
      },
      "genres" : [ "alternative rock", "dance-punk", "indie rock", "modern rock", "new rave", "rock", "scottish rock" ],
      "href" : "https://api.spotify.com/v1/artists/0XNa1vTidXlvJ2gHSsRi4A",
      "id" : "0XNa1vTidXlvJ2gHSsRi4A",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/445c11fcc1637f94f48cee1d3354d478f10ac403",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/74d44570990858341836261beb39b3faa18f7603",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/83bb403e52b2c05b7420a5ebd8e502915b6ec6ad",
        "width" : 160
      } ],
      "name" : "Franz Ferdinand",
      "popularity" : 70,
      "type" : "artist",
      "uri" : "spotify:artist:0XNa1vTidXlvJ2gHSsRi4A"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0Y8KmFkKOgJybpVobn1onU"
      },
      "followers" : {
        "href" : null,
        "total" : 600125
      },
      "genres" : [ "canzone napoletana", "classical tenor", "italian tenor", "opera", "operatic pop" ],
      "href" : "https://api.spotify.com/v1/artists/0Y8KmFkKOgJybpVobn1onU",
      "id" : "0Y8KmFkKOgJybpVobn1onU",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5e80aa2fe42fd8946b69ca25c436330c722ac0fb",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/609c65d0ece55692ed168f34f65559916281686d",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/52d956144b81e31d9b2c16c613c0438bf653338d",
        "width" : 160
      } ],
      "name" : "Luciano Pavarotti",
      "popularity" : 68,
      "type" : "artist",
      "uri" : "spotify:artist:0Y8KmFkKOgJybpVobn1onU"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0YJxNQtyb8jlldIC1DTkIf"
      },
      "followers" : {
        "href" : null,
        "total" : 25727
      },
      "genres" : [ "turntablism" ],
      "href" : "https://api.spotify.com/v1/artists/0YJxNQtyb8jlldIC1DTkIf",
      "id" : "0YJxNQtyb8jlldIC1DTkIf",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/e0cb8214500faeca3eb7771dd1eb919893c50fb3",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/4e05d7703c46be8c825c25701358eea5a15e1230",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/bceaba3afae840d493d5a4b5246fd3df5876de73",
        "width" : 160
      } ],
      "name" : "Scratch Bandits Crew",
      "popularity" : 44,
      "type" : "artist",
      "uri" : "spotify:artist:0YJxNQtyb8jlldIC1DTkIf"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0ZXKT0FCsLWkSLCjoBJgBX"
      },
      "followers" : {
        "href" : null,
        "total" : 248652
      },
      "genres" : [ "gothic metal", "progressive doom", "progressive metal" ],
      "href" : "https://api.spotify.com/v1/artists/0ZXKT0FCsLWkSLCjoBJgBX",
      "id" : "0ZXKT0FCsLWkSLCjoBJgBX",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5bfccbb8c43027b7efa93dbd4ed2bf366a34398c",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/c429e198e3700fc90420136862d07a9037c599a8",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/0d2d6caed428138b9161dba0a3ed9c8fd725c53b",
        "width" : 160
      } ],
      "name" : "Anathema",
      "popularity" : 56,
      "type" : "artist",
      "uri" : "spotify:artist:0ZXKT0FCsLWkSLCjoBJgBX"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0bBjMMS4rONUFXs6y1iHpv"
      },
      "followers" : {
        "href" : null,
        "total" : 1372
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0bBjMMS4rONUFXs6y1iHpv",
      "id" : "0bBjMMS4rONUFXs6y1iHpv",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b27391d36c800895d728066d55e6",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e0291d36c800895d728066d55e6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d0000485191d36c800895d728066d55e6",
        "width" : 64
      } ],
      "name" : "Klint",
      "popularity" : 4,
      "type" : "artist",
      "uri" : "spotify:artist:0bBjMMS4rONUFXs6y1iHpv"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0bZCak2tcRMY1dzEIuwF42"
      },
      "followers" : {
        "href" : null,
        "total" : 350821
      },
      "genres" : [ "bath indie", "funk", "garage rock", "modern alternative rock", "modern blues rock", "modern rock", "rock" ],
      "href" : "https://api.spotify.com/v1/artists/0bZCak2tcRMY1dzEIuwF42",
      "id" : "0bZCak2tcRMY1dzEIuwF42",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/902fb7929782b9ac35a0002fa4cfcd29c5e97eaf",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/33cd1de985a6b3442e8e8e26fabfcfd753c1ac1a",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/7e64f1693ea64afb078320813aa7afd01a077b9f",
        "width" : 160
      } ],
      "name" : "The Heavy",
      "popularity" : 62,
      "type" : "artist",
      "uri" : "spotify:artist:0bZCak2tcRMY1dzEIuwF42"
    } ],
    "next" : "https://api.spotify.com/v1/me/following?type=artist&after=0bZCak2tcRMY1dzEIuwF42&limit=50",
    "total" : 674,
    "cursors" : {
      "after" : "0bZCak2tcRMY1dzEIuwF42"
    },
    "limit" : 50,
    "href" : "https://api.spotify.com/v1/me/following?type=artist&limit=50"
  }
}

const trackData = {
  "href" : "https://api.spotify.com/v1/me/tracks?offset=0&limit=50",
  "items" : [ {
    "added_at" : "2021-03-04T21:45:53Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "02IFYoziC7CpQRK8fbehUY",
          "name" : "Yussef Kamaal",
          "type" : "artist",
          "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0CAXEcXpruvyGKSTjyLDNu"
        },
        "href" : "https://api.spotify.com/v1/albums/0CAXEcXpruvyGKSTjyLDNu",
        "id" : "0CAXEcXpruvyGKSTjyLDNu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739db63254bf5a8be73bbaed21",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029db63254bf5a8be73bbaed21",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519db63254bf5a8be73bbaed21",
          "width" : 64
        } ],
        "name" : "Black Focus",
        "release_date" : "2016-11-04",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0CAXEcXpruvyGKSTjyLDNu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
        },
        "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
        "id" : "02IFYoziC7CpQRK8fbehUY",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 508773,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600916"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2sEmZge5ZfzrFrDGFJbkyP"
      },
      "href" : "https://api.spotify.com/v1/tracks/2sEmZge5ZfzrFrDGFJbkyP",
      "id" : "2sEmZge5ZfzrFrDGFJbkyP",
      "is_local" : false,
      "name" : "Strings of Light",
      "popularity" : 42,
      "preview_url" : "https://p.scdn.co/mp3-preview/2b19dd719e857867cf4e228697a230fb5036ad71?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:2sEmZge5ZfzrFrDGFJbkyP"
    }
  }, {
    "added_at" : "2021-03-04T21:40:32Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
          },
          "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
          "id" : "2i1CPudyCUjL50Wqjv8AMI",
          "name" : "Alfa Mist",
          "type" : "artist",
          "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/38XUFMsLLAttgWdD40CTaL"
        },
        "href" : "https://api.spotify.com/v1/albums/38XUFMsLLAttgWdD40CTaL",
        "id" : "38XUFMsLLAttgWdD40CTaL",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733979878917bb0159fa35b0ac",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023979878917bb0159fa35b0ac",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513979878917bb0159fa35b0ac",
          "width" : 64
        } ],
        "name" : "Structuralism",
        "release_date" : "2019-04-26",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:38XUFMsLLAttgWdD40CTaL"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
        },
        "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
        "id" : "2i1CPudyCUjL50Wqjv8AMI",
        "name" : "Alfa Mist",
        "type" : "artist",
        "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/24icoQNJSEWNu3XvqKBR68"
        },
        "href" : "https://api.spotify.com/v1/artists/24icoQNJSEWNu3XvqKBR68",
        "id" : "24icoQNJSEWNu3XvqKBR68",
        "name" : "Jordan Rakei",
        "type" : "artist",
        "uri" : "spotify:artist:24icoQNJSEWNu3XvqKBR68"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 247760,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "FR10S1947881"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5IOLaZLFnrBIjZImSS1E1u"
      },
      "href" : "https://api.spotify.com/v1/tracks/5IOLaZLFnrBIjZImSS1E1u",
      "id" : "5IOLaZLFnrBIjZImSS1E1u",
      "is_local" : false,
      "name" : "Door",
      "popularity" : 46,
      "preview_url" : "https://p.scdn.co/mp3-preview/3c946c3053abaaf1f678a14eb874ec13ec71dcdf?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:5IOLaZLFnrBIjZImSS1E1u"
    }
  }, {
    "added_at" : "2021-03-04T21:38:46Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
          },
          "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
          "id" : "2i1CPudyCUjL50Wqjv8AMI",
          "name" : "Alfa Mist",
          "type" : "artist",
          "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3joOXpEsCgg8oS1Tba7neT"
        },
        "href" : "https://api.spotify.com/v1/albums/3joOXpEsCgg8oS1Tba7neT",
        "id" : "3joOXpEsCgg8oS1Tba7neT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2735d46b069ef33382b235b296a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e025d46b069ef33382b235b296a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048515d46b069ef33382b235b296a",
          "width" : 64
        } ],
        "name" : "Antiphon",
        "release_date" : "2017-03-03",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:3joOXpEsCgg8oS1Tba7neT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2i1CPudyCUjL50Wqjv8AMI"
        },
        "href" : "https://api.spotify.com/v1/artists/2i1CPudyCUjL50Wqjv8AMI",
        "id" : "2i1CPudyCUjL50Wqjv8AMI",
        "name" : "Alfa Mist",
        "type" : "artist",
        "uri" : "spotify:artist:2i1CPudyCUjL50Wqjv8AMI"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/12WK0pR6DK71O5uqTHWzyE"
        },
        "href" : "https://api.spotify.com/v1/artists/12WK0pR6DK71O5uqTHWzyE",
        "id" : "12WK0pR6DK71O5uqTHWzyE",
        "name" : "Kaya Thomas-Dyke",
        "type" : "artist",
        "uri" : "spotify:artist:12WK0pR6DK71O5uqTHWzyE"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 447000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USCGH1770627"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6nGNzqlHTKugpRWkXrZkPC"
      },
      "href" : "https://api.spotify.com/v1/tracks/6nGNzqlHTKugpRWkXrZkPC",
      "id" : "6nGNzqlHTKugpRWkXrZkPC",
      "is_local" : false,
      "name" : "Breathe",
      "popularity" : 48,
      "preview_url" : "https://p.scdn.co/mp3-preview/a9ef0a470e447546df7cbb6fe0b042a7c1f2a14e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:6nGNzqlHTKugpRWkXrZkPC"
    }
  }, {
    "added_at" : "2021-03-04T21:34:16Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
          "type" : "artist",
          "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0CAXEcXpruvyGKSTjyLDNu"
        },
        "href" : "https://api.spotify.com/v1/albums/0CAXEcXpruvyGKSTjyLDNu",
        "id" : "0CAXEcXpruvyGKSTjyLDNu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739db63254bf5a8be73bbaed21",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029db63254bf5a8be73bbaed21",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519db63254bf5a8be73bbaed21",
          "width" : 64
        } ],
        "name" : "Black Focus",
        "release_date" : "2016-11-04",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0CAXEcXpruvyGKSTjyLDNu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
        },
        "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 46920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600928"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5EqkuCTZTSMhZm2sLhA7JN"
      },
      "href" : "https://api.spotify.com/v1/tracks/5EqkuCTZTSMhZm2sLhA7JN",
      "id" : "5EqkuCTZTSMhZm2sLhA7JN",
      "is_local" : false,
      "name" : "O.G.",
      "popularity" : 28,
      "preview_url" : "https://p.scdn.co/mp3-preview/5a6fd9533dd0100396588ed6c213b8073239d246?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:5EqkuCTZTSMhZm2sLhA7JN"
    }
  }, {
    "added_at" : "2021-03-04T18:31:40Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
          "type" : "artist",
          "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0CAXEcXpruvyGKSTjyLDNu"
        },
        "href" : "https://api.spotify.com/v1/albums/0CAXEcXpruvyGKSTjyLDNu",
        "id" : "0CAXEcXpruvyGKSTjyLDNu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739db63254bf5a8be73bbaed21",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029db63254bf5a8be73bbaed21",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519db63254bf5a8be73bbaed21",
          "width" : 64
        } ],
        "name" : "Black Focus",
        "release_date" : "2016-11-04",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0CAXEcXpruvyGKSTjyLDNu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
        },
        "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 239480,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600918"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4doeILSOpBXjzWsiJiSS8a"
      },
      "href" : "https://api.spotify.com/v1/tracks/4doeILSOpBXjzWsiJiSS8a",
      "id" : "4doeILSOpBXjzWsiJiSS8a",
      "is_local" : false,
      "name" : "Yo Chavez",
      "popularity" : 32,
      "preview_url" : "https://p.scdn.co/mp3-preview/abb79b375f7ac02161f3a56e9cc7684e658f1918?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:4doeILSOpBXjzWsiJiSS8a"
    }
  }, {
    "added_at" : "2021-03-04T18:04:50Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
          "type" : "artist",
          "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0CAXEcXpruvyGKSTjyLDNu"
        },
        "href" : "https://api.spotify.com/v1/albums/0CAXEcXpruvyGKSTjyLDNu",
        "id" : "0CAXEcXpruvyGKSTjyLDNu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739db63254bf5a8be73bbaed21",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029db63254bf5a8be73bbaed21",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519db63254bf5a8be73bbaed21",
          "width" : 64
        } ],
        "name" : "Black Focus",
        "release_date" : "2016-11-04",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0CAXEcXpruvyGKSTjyLDNu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
        },
        "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 268466,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600919"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7gHdjudTKmgDcWSKPpJk9h"
      },
      "href" : "https://api.spotify.com/v1/tracks/7gHdjudTKmgDcWSKPpJk9h",
      "id" : "7gHdjudTKmgDcWSKPpJk9h",
      "is_local" : false,
      "name" : "Lowrider",
      "popularity" : 39,
      "preview_url" : "https://p.scdn.co/mp3-preview/fec1d7bc1913443a53ea83fa15db17d10816ea65?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:7gHdjudTKmgDcWSKPpJk9h"
    }
  }, {
    "added_at" : "2021-03-04T17:40:14Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
          },
          "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
          "id" : "710FHFQeXKC6dZGCxt7kQh",
          "name" : "Yussef Kamaal",
          "type" : "artist",
          "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0CAXEcXpruvyGKSTjyLDNu"
        },
        "href" : "https://api.spotify.com/v1/albums/0CAXEcXpruvyGKSTjyLDNu",
        "id" : "0CAXEcXpruvyGKSTjyLDNu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739db63254bf5a8be73bbaed21",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029db63254bf5a8be73bbaed21",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519db63254bf5a8be73bbaed21",
          "width" : 64
        } ],
        "name" : "Black Focus",
        "release_date" : "2016-11-04",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0CAXEcXpruvyGKSTjyLDNu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/710FHFQeXKC6dZGCxt7kQh"
        },
        "href" : "https://api.spotify.com/v1/artists/710FHFQeXKC6dZGCxt7kQh",
        "id" : "710FHFQeXKC6dZGCxt7kQh",
        "name" : "Yussef Kamaal",
        "type" : "artist",
        "uri" : "spotify:artist:710FHFQeXKC6dZGCxt7kQh"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 540546,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBMEF1600917"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1k7B553lUeQY3cyltjRWCH"
      },
      "href" : "https://api.spotify.com/v1/tracks/1k7B553lUeQY3cyltjRWCH",
      "id" : "1k7B553lUeQY3cyltjRWCH",
      "is_local" : false,
      "name" : "Remembrance",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/8a46cf5b255fa559f261d9450bd273da0e4f99fe?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:1k7B553lUeQY3cyltjRWCH"
    }
  }, {
    "added_at" : "2021-02-28T18:59:00Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
          },
          "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
          "id" : "5TUa95aB5Vu2CzwCnZd6t0",
          "name" : "TTNG",
          "type" : "artist",
          "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6utXOCDpTDavsVbjQgPxpe"
        },
        "href" : "https://api.spotify.com/v1/albums/6utXOCDpTDavsVbjQgPxpe",
        "id" : "6utXOCDpTDavsVbjQgPxpe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2734f163ad393b69f372da63e7c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e024f163ad393b69f372da63e7c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048514f163ad393b69f372da63e7c",
          "width" : 64
        } ],
        "name" : "Disappointment Island",
        "release_date" : "2016-07-08",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6utXOCDpTDavsVbjQgPxpe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
        },
        "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
        "id" : "5TUa95aB5Vu2CzwCnZd6t0",
        "name" : "TTNG",
        "type" : "artist",
        "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 256186,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMLD61404135"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6a76vVSWwjhLHCh2uV8XK3"
      },
      "href" : "https://api.spotify.com/v1/tracks/6a76vVSWwjhLHCh2uV8XK3",
      "id" : "6a76vVSWwjhLHCh2uV8XK3",
      "is_local" : false,
      "name" : "In Praise of Idleness",
      "popularity" : 24,
      "preview_url" : "https://p.scdn.co/mp3-preview/a3e646f8850d8ddc346e184af120255fb1cfa41b?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:6a76vVSWwjhLHCh2uV8XK3"
    }
  }, {
    "added_at" : "2021-02-28T18:54:05Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
          },
          "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
          "id" : "5TUa95aB5Vu2CzwCnZd6t0",
          "name" : "TTNG",
          "type" : "artist",
          "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6utXOCDpTDavsVbjQgPxpe"
        },
        "href" : "https://api.spotify.com/v1/albums/6utXOCDpTDavsVbjQgPxpe",
        "id" : "6utXOCDpTDavsVbjQgPxpe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2734f163ad393b69f372da63e7c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e024f163ad393b69f372da63e7c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048514f163ad393b69f372da63e7c",
          "width" : 64
        } ],
        "name" : "Disappointment Island",
        "release_date" : "2016-07-08",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6utXOCDpTDavsVbjQgPxpe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
        },
        "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
        "id" : "5TUa95aB5Vu2CzwCnZd6t0",
        "name" : "TTNG",
        "type" : "artist",
        "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 174680,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMLD61404133"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0Xr8oHXgHJj6wIoYKsl5qK"
      },
      "href" : "https://api.spotify.com/v1/tracks/0Xr8oHXgHJj6wIoYKsl5qK",
      "id" : "0Xr8oHXgHJj6wIoYKsl5qK",
      "is_local" : false,
      "name" : "A Chase of Sorts",
      "popularity" : 23,
      "preview_url" : "https://p.scdn.co/mp3-preview/19a2e3986ee540265fe93ed156ba906fd64e3b4d?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:0Xr8oHXgHJj6wIoYKsl5qK"
    }
  }, {
    "added_at" : "2021-02-28T18:42:37Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
          },
          "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
          "id" : "5TUa95aB5Vu2CzwCnZd6t0",
          "name" : "TTNG",
          "type" : "artist",
          "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6utXOCDpTDavsVbjQgPxpe"
        },
        "href" : "https://api.spotify.com/v1/albums/6utXOCDpTDavsVbjQgPxpe",
        "id" : "6utXOCDpTDavsVbjQgPxpe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2734f163ad393b69f372da63e7c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e024f163ad393b69f372da63e7c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048514f163ad393b69f372da63e7c",
          "width" : 64
        } ],
        "name" : "Disappointment Island",
        "release_date" : "2016-07-08",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6utXOCDpTDavsVbjQgPxpe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5TUa95aB5Vu2CzwCnZd6t0"
        },
        "href" : "https://api.spotify.com/v1/artists/5TUa95aB5Vu2CzwCnZd6t0",
        "id" : "5TUa95aB5Vu2CzwCnZd6t0",
        "name" : "TTNG",
        "type" : "artist",
        "uri" : "spotify:artist:5TUa95aB5Vu2CzwCnZd6t0"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 337146,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMLD61404136"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3iV0hDpxooBMmwPEKOukJf"
      },
      "href" : "https://api.spotify.com/v1/tracks/3iV0hDpxooBMmwPEKOukJf",
      "id" : "3iV0hDpxooBMmwPEKOukJf",
      "is_local" : false,
      "name" : "Whatever, Whenever",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/da9296c558b8e193f61cab35e9916fc76685bd70?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:3iV0hDpxooBMmwPEKOukJf"
    }
  }, {
    "added_at" : "2021-02-28T00:03:29Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
          },
          "href" : "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
          "id" : "0k17h0D3J5VfsdmQ1iZtE9",
          "name" : "Pink Floyd",
          "type" : "artist",
          "uri" : "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
        } ],
        "available_markets" : [ "AD", "AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "KG", "KZ", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SK", "TR", "UA", "UZ", "XK" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6uvBKDGlJAYLH5Vy6RQVsc"
        },
        "href" : "https://api.spotify.com/v1/albums/6uvBKDGlJAYLH5Vy6RQVsc",
        "id" : "6uvBKDGlJAYLH5Vy6RQVsc",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2735aa1262c4123fedc2e4b8c44",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e025aa1262c4123fedc2e4b8c44",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048515aa1262c4123fedc2e4b8c44",
          "width" : 64
        } ],
        "name" : "Wish You Were Here [Remastered] (Remastered Version)",
        "release_date" : "1975-09-12",
        "release_date_precision" : "day",
        "total_tracks" : 5,
        "type" : "album",
        "uri" : "spotify:album:6uvBKDGlJAYLH5Vy6RQVsc"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
        },
        "href" : "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
        "id" : "0k17h0D3J5VfsdmQ1iZtE9",
        "name" : "Pink Floyd",
        "type" : "artist",
        "uri" : "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
      } ],
      "available_markets" : [ "AD", "AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "ES", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "KG", "KZ", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SK", "TR", "UA", "UZ", "XK" ],
      "disc_number" : 1,
      "duration_ms" : 334743,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBN9Y1100088"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7aE5WXu5sFeNRh3Z05wwu4"
      },
      "href" : "https://api.spotify.com/v1/tracks/7aE5WXu5sFeNRh3Z05wwu4",
      "id" : "7aE5WXu5sFeNRh3Z05wwu4",
      "is_local" : false,
      "name" : "Wish You Were Here - 2011 Remastered Version",
      "popularity" : 70,
      "preview_url" : "https://p.scdn.co/mp3-preview/7ce0d4e5f0ffcf8fe1a312c9c2f9331c8d2bf994?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:7aE5WXu5sFeNRh3Z05wwu4"
    }
  }, {
    "added_at" : "2021-02-27T23:58:07Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/22WZ7M8sxp5THdruNY3gXt"
          },
          "href" : "https://api.spotify.com/v1/artists/22WZ7M8sxp5THdruNY3gXt",
          "id" : "22WZ7M8sxp5THdruNY3gXt",
          "name" : "The Doors",
          "type" : "artist",
          "uri" : "spotify:artist:22WZ7M8sxp5THdruNY3gXt"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6AFLOkpJjFF652jevcSOZX"
        },
        "href" : "https://api.spotify.com/v1/albums/6AFLOkpJjFF652jevcSOZX",
        "id" : "6AFLOkpJjFF652jevcSOZX",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f12a8a7e0b2cbe16d2bef4dc",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f12a8a7e0b2cbe16d2bef4dc",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f12a8a7e0b2cbe16d2bef4dc",
          "width" : 64
        } ],
        "name" : "Morrison Hotel",
        "release_date" : "1970-02-09",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6AFLOkpJjFF652jevcSOZX"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/22WZ7M8sxp5THdruNY3gXt"
        },
        "href" : "https://api.spotify.com/v1/artists/22WZ7M8sxp5THdruNY3gXt",
        "id" : "22WZ7M8sxp5THdruNY3gXt",
        "name" : "The Doors",
        "type" : "artist",
        "uri" : "spotify:artist:22WZ7M8sxp5THdruNY3gXt"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 243826,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USEE19900375"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1Q5kgpp4pmyGqPwNBzkSrw"
      },
      "href" : "https://api.spotify.com/v1/tracks/1Q5kgpp4pmyGqPwNBzkSrw",
      "id" : "1Q5kgpp4pmyGqPwNBzkSrw",
      "is_local" : false,
      "name" : "Roadhouse Blues",
      "popularity" : 70,
      "preview_url" : "https://p.scdn.co/mp3-preview/a0e4d25d759b8433f99d99bbaf31e153e0b1914e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:1Q5kgpp4pmyGqPwNBzkSrw"
    }
  }, {
    "added_at" : "2021-02-27T13:00:06Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 394320,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379689"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6FX7C7yaMvqtV0E2OjYIhA"
      },
      "href" : "https://api.spotify.com/v1/tracks/6FX7C7yaMvqtV0E2OjYIhA",
      "id" : "6FX7C7yaMvqtV0E2OjYIhA",
      "is_local" : false,
      "name" : "The Path of Apotheosis",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/28cda4b2e4818ad7830290e7c7d22f4ca3df6b28?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:6FX7C7yaMvqtV0E2OjYIhA"
    }
  }, {
    "added_at" : "2021-02-25T12:33:03Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
          },
          "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
          "id" : "6RmijobcphddxSNtsBHjF0",
          "name" : "Simon Posford",
          "type" : "artist",
          "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
          },
          "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
          "id" : "0m5XJwKGYyUjd3VMfcINCQ",
          "name" : "Shpongle",
          "type" : "artist",
          "uri" : "spotify:artist:0m5XJwKGYyUjd3VMfcINCQ"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6CzjV9BeZvSKqxdhzfswdX"
        },
        "href" : "https://api.spotify.com/v1/albums/6CzjV9BeZvSKqxdhzfswdX",
        "id" : "6CzjV9BeZvSKqxdhzfswdX",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273d2ad1f61daaf693282c0c222",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02d2ad1f61daaf693282c0c222",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851d2ad1f61daaf693282c0c222",
          "width" : 64
        } ],
        "name" : "Flux & Contemplation - Portrait of an Artist in Isolation",
        "release_date" : "2020-07-03",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6CzjV9BeZvSKqxdhzfswdX"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
        },
        "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
        "id" : "01e2lCvLZ4fLUIRy68nptH",
        "name" : "Simon Posford",
        "type" : "artist",
        "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
        },
        "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
        "id" : "0m5XJwKGYyUjd3VMfcINCQ",
        "name" : "Shpongle",
        "type" : "artist",
        "uri" : "spotify:artist:0m5XJwKGYyUjd3VMfcINCQ"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 641093,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBBMP1200635"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0UBLvMN7Y1pPr22zYAjhRd"
      },
      "href" : "https://api.spotify.com/v1/tracks/0UBLvMN7Y1pPr22zYAjhRd",
      "id" : "0UBLvMN7Y1pPr22zYAjhRd",
      "is_local" : false,
      "name" : "The New Normal",
      "popularity" : 22,
      "preview_url" : "https://p.scdn.co/mp3-preview/a22736f725e9cc2756c2e296397247ce5f66864c?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:0UBLvMN7Y1pPr22zYAjhRd"
    }
  }, {
    "added_at" : "2021-02-25T12:32:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
          },
          "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
          "id" : "6RmijobcphddxSNtsBHjF0",
          "name" : "Simon Posford",
          "type" : "artist",
          "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
          },
          "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
          "id" : "0m5XJwKGYyUjd3VMfcINCQ",
          "name" : "Shpongle",
          "type" : "artist",
          "uri" : "spotify:artist:0m5XJwKGYyUjd3VMfcINCQ"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6CzjV9BeZvSKqxdhzfswdX"
        },
        "href" : "https://api.spotify.com/v1/albums/6CzjV9BeZvSKqxdhzfswdX",
        "id" : "6CzjV9BeZvSKqxdhzfswdX",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273d2ad1f61daaf693282c0c222",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02d2ad1f61daaf693282c0c222",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851d2ad1f61daaf693282c0c222",
          "width" : 64
        } ],
        "name" : "Flux & Contemplation - Portrait of an Artist in Isolation",
        "release_date" : "2020-07-03",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6CzjV9BeZvSKqxdhzfswdX"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6RmijobcphddxSNtsBHjF0"
        },
        "href" : "https://api.spotify.com/v1/artists/6RmijobcphddxSNtsBHjF0",
        "id" : "6RmijobcphddxSNtsBHjF0",
        "name" : "Simon Posford",
        "type" : "artist",
        "uri" : "spotify:artist:6RmijobcphddxSNtsBHjF0"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0m5XJwKGYyUjd3VMfcINCQ"
        },
        "href" : "https://api.spotify.com/v1/artists/0m5XJwKGYyUjd3VMfcINCQ",
        "id" : "0m5XJwKGYyUjd3VMfcINCQ",
        "name" : "Shpongle",
        "type" : "artist",
        "uri" : "spotify:artist:0m5XJwKGYyUjd3VMfcINCQ"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 328840,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBBMP1200632"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0bW1ctrbUrg1E3bC4lu0SO"
      },
      "href" : "https://api.spotify.com/v1/tracks/0bW1ctrbUrg1E3bC4lu0SO",
      "id" : "0bW1ctrbUrg1E3bC4lu0SO",
      "is_local" : false,
      "name" : "Wish You Weren’t Here",
      "popularity" : 24,
      "preview_url" : "https://p.scdn.co/mp3-preview/5285f5475414491f8ded4788e25df325b38e9bf4?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:0bW1ctrbUrg1E3bC4lu0SO"
    }
  }, {
    "added_at" : "2021-02-23T13:06:12Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf"
          },
          "href" : "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf",
          "id" : "1Yox196W7bzVNZI7RBaPnf",
          "name" : "Megadeth",
          "type" : "artist",
          "uri" : "spotify:artist:1Yox196W7bzVNZI7RBaPnf"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5YFrdrFUHGgAvK8iXFxULa"
        },
        "href" : "https://api.spotify.com/v1/albums/5YFrdrFUHGgAvK8iXFxULa",
        "id" : "5YFrdrFUHGgAvK8iXFxULa",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2735545e351774a756c377ea0ee",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e025545e351774a756c377ea0ee",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048515545e351774a756c377ea0ee",
          "width" : 64
        } ],
        "name" : "The World Needs a Hero",
        "release_date" : "2001-05-14",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:5YFrdrFUHGgAvK8iXFxULa"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf"
        },
        "href" : "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf",
        "id" : "1Yox196W7bzVNZI7RBaPnf",
        "name" : "Megadeth",
        "type" : "artist",
        "uri" : "spotify:artist:1Yox196W7bzVNZI7RBaPnf"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 265133,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAJE0100024"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4Bfxp472zIwiSYjZsK76EN"
      },
      "href" : "https://api.spotify.com/v1/tracks/4Bfxp472zIwiSYjZsK76EN",
      "id" : "4Bfxp472zIwiSYjZsK76EN",
      "is_local" : false,
      "name" : "Dread and the Fugitive Mind",
      "popularity" : 44,
      "preview_url" : "https://p.scdn.co/mp3-preview/6614ac4f3149fdd7559bfd7fdceea386fcc353cc?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:4Bfxp472zIwiSYjZsK76EN"
    }
  }, {
    "added_at" : "2021-02-23T11:45:14Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 354640,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379688"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1lEnjsEH1zxGUkatGwMzSZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1lEnjsEH1zxGUkatGwMzSZ",
      "id" : "1lEnjsEH1zxGUkatGwMzSZ",
      "is_local" : false,
      "name" : "The Ancients of Shattered Thrones",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/bf7dde3c14e9deb854771d9ba8e0a1992f2f1257?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:1lEnjsEH1zxGUkatGwMzSZ"
    }
  }, {
    "added_at" : "2021-02-23T11:31:03Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1EzRkEPmjf1ZEjTnWVXiQ2"
          },
          "href" : "https://api.spotify.com/v1/artists/1EzRkEPmjf1ZEjTnWVXiQ2",
          "id" : "1EzRkEPmjf1ZEjTnWVXiQ2",
          "name" : "Mekong Delta",
          "type" : "artist",
          "uri" : "spotify:artist:1EzRkEPmjf1ZEjTnWVXiQ2"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6ajZAcA75EojcJaVGQuvCw"
        },
        "href" : "https://api.spotify.com/v1/albums/6ajZAcA75EojcJaVGQuvCw",
        "id" : "6ajZAcA75EojcJaVGQuvCw",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2732927156af0eef58c76fff96b",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e022927156af0eef58c76fff96b",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048512927156af0eef58c76fff96b",
          "width" : 64
        } ],
        "name" : "The Principle of Doubt",
        "release_date" : "1989-02-25",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:6ajZAcA75EojcJaVGQuvCw"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1EzRkEPmjf1ZEjTnWVXiQ2"
        },
        "href" : "https://api.spotify.com/v1/artists/1EzRkEPmjf1ZEjTnWVXiQ2",
        "id" : "1EzRkEPmjf1ZEjTnWVXiQ2",
        "name" : "Mekong Delta",
        "type" : "artist",
        "uri" : "spotify:artist:1EzRkEPmjf1ZEjTnWVXiQ2"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 293386,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEA451302050"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6J1slcIFHByPeRPIl6pFch"
      },
      "href" : "https://api.spotify.com/v1/tracks/6J1slcIFHByPeRPIl6pFch",
      "id" : "6J1slcIFHByPeRPIl6pFch",
      "is_local" : false,
      "name" : "The Principle of Doubt - Chapter 3 Taken From 'The Chronicle of Doubt'",
      "popularity" : 3,
      "preview_url" : "https://p.scdn.co/mp3-preview/32ebe5c7f3c69e0271ef9fc413f7dab36a9e532f?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:6J1slcIFHByPeRPIl6pFch"
    }
  }, {
    "added_at" : "2021-02-21T16:15:55Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
          "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
          "name" : "Alterbeast",
          "type" : "artist",
          "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4dhUo35WO3cGcFbxJ7ZIe3"
        },
        "href" : "https://api.spotify.com/v1/albums/4dhUo35WO3cGcFbxJ7ZIe3",
        "id" : "4dhUo35WO3cGcFbxJ7ZIe3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27302350a49e50d1ce419b07614",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0202350a49e50d1ce419b07614",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485102350a49e50d1ce419b07614",
          "width" : 64
        } ],
        "name" : "Immortal",
        "release_date" : "2014-03-25",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:4dhUo35WO3cGcFbxJ7ZIe3"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
        },
        "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
        "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
        "name" : "Alterbeast",
        "type" : "artist",
        "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 214737,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USERN1008694"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3Yb3WCtJI3t0FCKzroKAv1"
      },
      "href" : "https://api.spotify.com/v1/tracks/3Yb3WCtJI3t0FCKzroKAv1",
      "id" : "3Yb3WCtJI3t0FCKzroKAv1",
      "is_local" : false,
      "name" : "Ancient's Retribution",
      "popularity" : 14,
      "preview_url" : "https://p.scdn.co/mp3-preview/83b935148dcdb322ec0920be776a7ca8aecacdd6?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:3Yb3WCtJI3t0FCKzroKAv1"
    }
  }, {
    "added_at" : "2021-02-21T16:10:28Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
          "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
          "name" : "Alterbeast",
          "type" : "artist",
          "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4dhUo35WO3cGcFbxJ7ZIe3"
        },
        "href" : "https://api.spotify.com/v1/albums/4dhUo35WO3cGcFbxJ7ZIe3",
        "id" : "4dhUo35WO3cGcFbxJ7ZIe3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27302350a49e50d1ce419b07614",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0202350a49e50d1ce419b07614",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485102350a49e50d1ce419b07614",
          "width" : 64
        } ],
        "name" : "Immortal",
        "release_date" : "2014-03-25",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:4dhUo35WO3cGcFbxJ7ZIe3"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
        },
        "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
        "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
        "name" : "Alterbeast",
        "type" : "artist",
        "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 306291,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USERN1008693"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0tAumAapgzzIiddYAwKKk2"
      },
      "href" : "https://api.spotify.com/v1/tracks/0tAumAapgzzIiddYAwKKk2",
      "id" : "0tAumAapgzzIiddYAwKKk2",
      "is_local" : false,
      "name" : "Vile Remnants",
      "popularity" : 15,
      "preview_url" : "https://p.scdn.co/mp3-preview/c4e4cd95d76ae2f6cd8e5362884465b253f0de82?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:0tAumAapgzzIiddYAwKKk2"
    }
  }, {
    "added_at" : "2021-02-21T16:01:37Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
          "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
          "name" : "Alterbeast",
          "type" : "artist",
          "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4dhUo35WO3cGcFbxJ7ZIe3"
        },
        "href" : "https://api.spotify.com/v1/albums/4dhUo35WO3cGcFbxJ7ZIe3",
        "id" : "4dhUo35WO3cGcFbxJ7ZIe3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27302350a49e50d1ce419b07614",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0202350a49e50d1ce419b07614",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485102350a49e50d1ce419b07614",
          "width" : 64
        } ],
        "name" : "Immortal",
        "release_date" : "2014-03-25",
        "release_date_precision" : "day",
        "total_tracks" : 8,
        "type" : "album",
        "uri" : "spotify:album:4dhUo35WO3cGcFbxJ7ZIe3"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3ZOZaEFRuEhjsQ7QAPkpoB"
        },
        "href" : "https://api.spotify.com/v1/artists/3ZOZaEFRuEhjsQ7QAPkpoB",
        "id" : "3ZOZaEFRuEhjsQ7QAPkpoB",
        "name" : "Alterbeast",
        "type" : "artist",
        "uri" : "spotify:artist:3ZOZaEFRuEhjsQ7QAPkpoB"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 156037,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USERN1008692"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1q5lWOlLTs37JpEuFPJ5fZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1q5lWOlLTs37JpEuFPJ5fZ",
      "id" : "1q5lWOlLTs37JpEuFPJ5fZ",
      "is_local" : false,
      "name" : "Of Decimus Divine",
      "popularity" : 15,
      "preview_url" : "https://p.scdn.co/mp3-preview/144b5550b29619e92e85a58456be171e1b113a48?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:1q5lWOlLTs37JpEuFPJ5fZ"
    }
  }, {
    "added_at" : "2021-02-21T15:49:51Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 359640,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379687"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6S41USppfhF2c9xuNx97AN"
      },
      "href" : "https://api.spotify.com/v1/tracks/6S41USppfhF2c9xuNx97AN",
      "id" : "6S41USppfhF2c9xuNx97AN",
      "is_local" : false,
      "name" : "Marching Through the Flames of Tyranny",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/494f23683345af46e8cf3a7a224d42207d866588?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:6S41USppfhF2c9xuNx97AN"
    }
  }, {
    "added_at" : "2021-02-20T15:41:36Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3ZWab2LEVkNKiBPIClTwof"
          },
          "href" : "https://api.spotify.com/v1/artists/3ZWab2LEVkNKiBPIClTwof",
          "id" : "3ZWab2LEVkNKiBPIClTwof",
          "name" : "Townes Van Zandt",
          "type" : "artist",
          "uri" : "spotify:artist:3ZWab2LEVkNKiBPIClTwof"
        } ],
        "available_markets" : [ "AD", "AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BT", "BW", "BY", "CH", "CL", "CM", "CO", "CV", "CW", "CY", "CZ", "DE", "DK", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GE", "GH", "GM", "GN", "GQ", "GR", "GW", "GY", "HK", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MY", "NA", "NE", "NG", "NL", "NO", "NP", "NR", "NZ", "OM", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/08ADmkImC4Z1iMsaPr3NC0"
        },
        "href" : "https://api.spotify.com/v1/albums/08ADmkImC4Z1iMsaPr3NC0",
        "id" : "08ADmkImC4Z1iMsaPr3NC0",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273afcab75f7114347fc33cd3b0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02afcab75f7114347fc33cd3b0",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851afcab75f7114347fc33cd3b0",
          "width" : 64
        } ],
        "name" : "Delta Momma Blues",
        "release_date" : "1971",
        "release_date_precision" : "year",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:08ADmkImC4Z1iMsaPr3NC0"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3ZWab2LEVkNKiBPIClTwof"
        },
        "href" : "https://api.spotify.com/v1/artists/3ZWab2LEVkNKiBPIClTwof",
        "id" : "3ZWab2LEVkNKiBPIClTwof",
        "name" : "Townes Van Zandt",
        "type" : "artist",
        "uri" : "spotify:artist:3ZWab2LEVkNKiBPIClTwof"
      } ],
      "available_markets" : [ "AD", "AE", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BT", "BW", "BY", "CH", "CL", "CM", "CO", "CV", "CW", "CY", "CZ", "DE", "DK", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GE", "GH", "GM", "GN", "GQ", "GR", "GW", "GY", "HK", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MY", "NA", "NE", "NG", "NL", "NO", "NP", "NR", "NZ", "OM", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 170533,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCEL0900069"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0CieC8w6QH3SlIZeUZ8LoS"
      },
      "href" : "https://api.spotify.com/v1/tracks/0CieC8w6QH3SlIZeUZ8LoS",
      "id" : "0CieC8w6QH3SlIZeUZ8LoS",
      "is_local" : false,
      "name" : "Where I Lead Me",
      "popularity" : 10,
      "preview_url" : "https://p.scdn.co/mp3-preview/4fc116ac66e2bf540d73228372afa26fe41059ac?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:0CieC8w6QH3SlIZeUZ8LoS"
    }
  }, {
    "added_at" : "2021-02-18T16:29:40Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
          },
          "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
          "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
          "name" : "Yppah",
          "type" : "artist",
          "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5La9Xx2vJ84n8yngUVJri2"
        },
        "href" : "https://api.spotify.com/v1/albums/5La9Xx2vJ84n8yngUVJri2",
        "id" : "5La9Xx2vJ84n8yngUVJri2",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d0fd14571e635b96ba52112",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d0fd14571e635b96ba52112",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d0fd14571e635b96ba52112",
          "width" : 64
        } ],
        "name" : "Tiny Pause",
        "release_date" : "2015-10-16",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5La9Xx2vJ84n8yngUVJri2"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
        },
        "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
        "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
        "name" : "Yppah",
        "type" : "artist",
        "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 336400,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1503904"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/68W36X31D3o8XfXrWhBnZE"
      },
      "href" : "https://api.spotify.com/v1/tracks/68W36X31D3o8XfXrWhBnZE",
      "id" : "68W36X31D3o8XfXrWhBnZE",
      "is_local" : false,
      "name" : "Owl Beach II",
      "popularity" : 35,
      "preview_url" : "https://p.scdn.co/mp3-preview/8ae8327ecc180bafc6a0f3da5d9ac6321beb81ac?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:68W36X31D3o8XfXrWhBnZE"
    }
  }, {
    "added_at" : "2021-02-18T15:59:46Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
          },
          "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
          "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
          "name" : "Yppah",
          "type" : "artist",
          "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5La9Xx2vJ84n8yngUVJri2"
        },
        "href" : "https://api.spotify.com/v1/albums/5La9Xx2vJ84n8yngUVJri2",
        "id" : "5La9Xx2vJ84n8yngUVJri2",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d0fd14571e635b96ba52112",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d0fd14571e635b96ba52112",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d0fd14571e635b96ba52112",
          "width" : 64
        } ],
        "name" : "Tiny Pause",
        "release_date" : "2015-10-16",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5La9Xx2vJ84n8yngUVJri2"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
        },
        "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
        "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
        "name" : "Yppah",
        "type" : "artist",
        "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 265586,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1503906"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5cjBttolslxyUQSSabanA8"
      },
      "href" : "https://api.spotify.com/v1/tracks/5cjBttolslxyUQSSabanA8",
      "id" : "5cjBttolslxyUQSSabanA8",
      "is_local" : false,
      "name" : "Bushmills",
      "popularity" : 39,
      "preview_url" : "https://p.scdn.co/mp3-preview/d361baef69a29a74b95942f0ce9ec03caeedb48e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:5cjBttolslxyUQSSabanA8"
    }
  }, {
    "added_at" : "2021-02-17T17:17:36Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/61bYJTYERgYGSgFUamgTCa"
        },
        "href" : "https://api.spotify.com/v1/albums/61bYJTYERgYGSgFUamgTCa",
        "id" : "61bYJTYERgYGSgFUamgTCa",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27348e2a667de482192fddfeae0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0248e2a667de482192fddfeae0",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485148e2a667de482192fddfeae0",
          "width" : 64
        } ],
        "name" : "Ninja Tune XX (Volume 2)",
        "release_date" : "2010-09-20",
        "release_date_precision" : "day",
        "total_tracks" : 33,
        "type" : "album",
        "uri" : "spotify:album:61bYJTYERgYGSgFUamgTCa"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Gaqw2nGyE7yM3rcRSzE3U"
        },
        "href" : "https://api.spotify.com/v1/artists/3Gaqw2nGyE7yM3rcRSzE3U",
        "id" : "3Gaqw2nGyE7yM3rcRSzE3U",
        "name" : "Yppah",
        "type" : "artist",
        "uri" : "spotify:artist:3Gaqw2nGyE7yM3rcRSzE3U"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 196000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1002229"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1sotD6Cn8aOtUsL0bd5HTJ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1sotD6Cn8aOtUsL0bd5HTJ",
      "id" : "1sotD6Cn8aOtUsL0bd5HTJ",
      "is_local" : false,
      "name" : "Never Mess With Sunday",
      "popularity" : 47,
      "preview_url" : "https://p.scdn.co/mp3-preview/8665b599fb5f17d3f3807c8e7d02a1bafeb5cea8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:1sotD6Cn8aOtUsL0bd5HTJ"
    }
  }, {
    "added_at" : "2021-02-16T17:19:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
          },
          "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
          "id" : "0cmWgDlu9CwTgxPhf403hb",
          "name" : "Bonobo",
          "type" : "artist",
          "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6tEOuMrJ6gsmZ2vB2P1NV7"
        },
        "href" : "https://api.spotify.com/v1/albums/6tEOuMrJ6gsmZ2vB2P1NV7",
        "id" : "6tEOuMrJ6gsmZ2vB2P1NV7",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273c46ca7a942d8795a06774df9",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02c46ca7a942d8795a06774df9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851c46ca7a942d8795a06774df9",
          "width" : 64
        } ],
        "name" : "The North Borders Tour. — Live.",
        "release_date" : "2014-10-06",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6tEOuMrJ6gsmZ2vB2P1NV7"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
        },
        "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
        "id" : "0cmWgDlu9CwTgxPhf403hb",
        "name" : "Bonobo",
        "type" : "artist",
        "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 488144,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1404616"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0PHSbSNolQJPl0NWpiDb3U"
      },
      "href" : "https://api.spotify.com/v1/tracks/0PHSbSNolQJPl0NWpiDb3U",
      "id" : "0PHSbSNolQJPl0NWpiDb3U",
      "is_local" : false,
      "name" : "Kong/Ketto - Live",
      "popularity" : 29,
      "preview_url" : "https://p.scdn.co/mp3-preview/fa3625e4e97dec2ffdc107c7600957ee72d4b2d0?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:0PHSbSNolQJPl0NWpiDb3U"
    }
  }, {
    "added_at" : "2021-02-14T18:08:37Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
          },
          "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
          "id" : "7yxi31szvlbwvKq9dYOmFI",
          "name" : "Jon Hopkins",
          "type" : "artist",
          "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1nvzBC1M3dlCMIxfUCBhlO"
        },
        "href" : "https://api.spotify.com/v1/albums/1nvzBC1M3dlCMIxfUCBhlO",
        "id" : "1nvzBC1M3dlCMIxfUCBhlO",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d9126ec04bb005c687291a5",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d9126ec04bb005c687291a5",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d9126ec04bb005c687291a5",
          "width" : 64
        } ],
        "name" : "Singularity",
        "release_date" : "2018-05-04",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:1nvzBC1M3dlCMIxfUCBhlO"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
        },
        "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
        "id" : "7yxi31szvlbwvKq9dYOmFI",
        "name" : "Jon Hopkins",
        "type" : "artist",
        "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 428440,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCEL1700696"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4Hg9jafzzKavElQMAINzeP"
      },
      "href" : "https://api.spotify.com/v1/tracks/4Hg9jafzzKavElQMAINzeP",
      "id" : "4Hg9jafzzKavElQMAINzeP",
      "is_local" : false,
      "name" : "C O S M",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/48e0ddc28b1f196056c966612ea5dd6a590f2c1f?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:4Hg9jafzzKavElQMAINzeP"
    }
  }, {
    "added_at" : "2021-02-14T17:37:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
          },
          "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
          "id" : "7yxi31szvlbwvKq9dYOmFI",
          "name" : "Jon Hopkins",
          "type" : "artist",
          "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1nvzBC1M3dlCMIxfUCBhlO"
        },
        "href" : "https://api.spotify.com/v1/albums/1nvzBC1M3dlCMIxfUCBhlO",
        "id" : "1nvzBC1M3dlCMIxfUCBhlO",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2739d9126ec04bb005c687291a5",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e029d9126ec04bb005c687291a5",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048519d9126ec04bb005c687291a5",
          "width" : 64
        } ],
        "name" : "Singularity",
        "release_date" : "2018-05-04",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:1nvzBC1M3dlCMIxfUCBhlO"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7yxi31szvlbwvKq9dYOmFI"
        },
        "href" : "https://api.spotify.com/v1/artists/7yxi31szvlbwvKq9dYOmFI",
        "id" : "7yxi31szvlbwvKq9dYOmFI",
        "name" : "Jon Hopkins",
        "type" : "artist",
        "uri" : "spotify:artist:7yxi31szvlbwvKq9dYOmFI"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 630240,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCEL1700694"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3oWBMOzkjjkCmV6abncBUd"
      },
      "href" : "https://api.spotify.com/v1/tracks/3oWBMOzkjjkCmV6abncBUd",
      "id" : "3oWBMOzkjjkCmV6abncBUd",
      "is_local" : false,
      "name" : "Everything Connected",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/b143e3cc635e7a528908aa6be4c51f20fc934eb2?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:3oWBMOzkjjkCmV6abncBUd"
    }
  }, {
    "added_at" : "2021-02-14T16:54:39Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
          },
          "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
          "id" : "592TFYwu9Qb0RC1hKDbX2w",
          "name" : "Helios",
          "type" : "artist",
          "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1OF3AnbSDa1ZSEFE7lukTb"
        },
        "href" : "https://api.spotify.com/v1/albums/1OF3AnbSDa1ZSEFE7lukTb",
        "id" : "1OF3AnbSDa1ZSEFE7lukTb",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2738fc59fb3af5be43e27fe4ce1",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e028fc59fb3af5be43e27fe4ce1",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048518fc59fb3af5be43e27fe4ce1",
          "width" : 64
        } ],
        "name" : "Eingya",
        "release_date" : "2009-01-16",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:1OF3AnbSDa1ZSEFE7lukTb"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
        },
        "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
        "id" : "592TFYwu9Qb0RC1hKDbX2w",
        "name" : "Helios",
        "type" : "artist",
        "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 361880,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBJSN0600009"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6knzYloG0x3MroAhnLVLGe"
      },
      "href" : "https://api.spotify.com/v1/tracks/6knzYloG0x3MroAhnLVLGe",
      "id" : "6knzYloG0x3MroAhnLVLGe",
      "is_local" : false,
      "name" : "Bless This Morning Year",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/c1ad776d9cd26552d99576d9474c8f1c6c8e27fe?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6knzYloG0x3MroAhnLVLGe"
    }
  }, {
    "added_at" : "2021-02-12T11:30:08Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
          },
          "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
          "id" : "592TFYwu9Qb0RC1hKDbX2w",
          "name" : "Helios",
          "type" : "artist",
          "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/34CpMn9yU8iDcXDaSkrqXu"
        },
        "href" : "https://api.spotify.com/v1/albums/34CpMn9yU8iDcXDaSkrqXu",
        "id" : "34CpMn9yU8iDcXDaSkrqXu",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f2e49606713803f0def17afb",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f2e49606713803f0def17afb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f2e49606713803f0def17afb",
          "width" : 64
        } ],
        "name" : "Yume",
        "release_date" : "2015-09-11",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:34CpMn9yU8iDcXDaSkrqXu"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/592TFYwu9Qb0RC1hKDbX2w"
        },
        "href" : "https://api.spotify.com/v1/artists/592TFYwu9Qb0RC1hKDbX2w",
        "id" : "592TFYwu9Qb0RC1hKDbX2w",
        "name" : "Helios",
        "type" : "artist",
        "uri" : "spotify:artist:592TFYwu9Qb0RC1hKDbX2w"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 354642,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEX261500338"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3EfocVFnZdmxbNb8ALyC0X"
      },
      "href" : "https://api.spotify.com/v1/tracks/3EfocVFnZdmxbNb8ALyC0X",
      "id" : "3EfocVFnZdmxbNb8ALyC0X",
      "is_local" : false,
      "name" : "Yume",
      "popularity" : 21,
      "preview_url" : "https://p.scdn.co/mp3-preview/b6a5cc38391ceac77396ed6af7ee01263ca678ce?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:3EfocVFnZdmxbNb8ALyC0X"
    }
  }, {
    "added_at" : "2021-02-10T18:04:58Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rj2COYs5hQsw8rYIxSviz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rj2COYs5hQsw8rYIxSviz",
          "id" : "4Rj2COYs5hQsw8rYIxSviz",
          "name" : "Hidden Orchestra",
          "type" : "artist",
          "uri" : "spotify:artist:4Rj2COYs5hQsw8rYIxSviz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0nrfkNR7u975aqMt0R1E7n"
        },
        "href" : "https://api.spotify.com/v1/albums/0nrfkNR7u975aqMt0R1E7n",
        "id" : "0nrfkNR7u975aqMt0R1E7n",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731df785bc2b00a1be5d803e6f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021df785bc2b00a1be5d803e6f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511df785bc2b00a1be5d803e6f",
          "width" : 64
        } ],
        "name" : "Dawn Chorus",
        "release_date" : "2017-06-16",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:0nrfkNR7u975aqMt0R1E7n"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rj2COYs5hQsw8rYIxSviz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rj2COYs5hQsw8rYIxSviz",
        "id" : "4Rj2COYs5hQsw8rYIxSviz",
        "name" : "Hidden Orchestra",
        "type" : "artist",
        "uri" : "spotify:artist:4Rj2COYs5hQsw8rYIxSviz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 351920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBEUE1700004"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2jSZLKZFC5LclPiao0W1zz"
      },
      "href" : "https://api.spotify.com/v1/tracks/2jSZLKZFC5LclPiao0W1zz",
      "id" : "2jSZLKZFC5LclPiao0W1zz",
      "is_local" : false,
      "name" : "The Lizard",
      "popularity" : 14,
      "preview_url" : "https://p.scdn.co/mp3-preview/0e1519e015cdb9237a6eba0428dc3ef7179f6bc7?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:2jSZLKZFC5LclPiao0W1zz"
    }
  }, {
    "added_at" : "2021-02-10T12:57:29Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
          },
          "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
          "id" : "0cmWgDlu9CwTgxPhf403hb",
          "name" : "Bonobo",
          "type" : "artist",
          "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6tEOuMrJ6gsmZ2vB2P1NV7"
        },
        "href" : "https://api.spotify.com/v1/albums/6tEOuMrJ6gsmZ2vB2P1NV7",
        "id" : "6tEOuMrJ6gsmZ2vB2P1NV7",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273c46ca7a942d8795a06774df9",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02c46ca7a942d8795a06774df9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851c46ca7a942d8795a06774df9",
          "width" : 64
        } ],
        "name" : "The North Borders Tour. — Live.",
        "release_date" : "2014-10-06",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6tEOuMrJ6gsmZ2vB2P1NV7"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb"
        },
        "href" : "https://api.spotify.com/v1/artists/0cmWgDlu9CwTgxPhf403hb",
        "id" : "0cmWgDlu9CwTgxPhf403hb",
        "name" : "Bonobo",
        "type" : "artist",
        "uri" : "spotify:artist:0cmWgDlu9CwTgxPhf403hb"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 489763,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCFB1404615"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5lcTh4kYshToQMHnlNsxaj"
      },
      "href" : "https://api.spotify.com/v1/tracks/5lcTh4kYshToQMHnlNsxaj",
      "id" : "5lcTh4kYshToQMHnlNsxaj",
      "is_local" : false,
      "name" : "Prelude/Kiara/Ten Tigers - Live",
      "popularity" : 33,
      "preview_url" : "https://p.scdn.co/mp3-preview/51f13199a68b793b87cfc30a78e9df560264bd21?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:5lcTh4kYshToQMHnlNsxaj"
    }
  }, {
    "added_at" : "2021-02-09T15:57:33Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2p2uE4i92Dn4DkThfoKIB9"
          },
          "href" : "https://api.spotify.com/v1/artists/2p2uE4i92Dn4DkThfoKIB9",
          "id" : "2p2uE4i92Dn4DkThfoKIB9",
          "name" : "Igorrr",
          "type" : "artist",
          "uri" : "spotify:artist:2p2uE4i92Dn4DkThfoKIB9"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4hl7ryP7L1SvblrcPRAkpQ"
        },
        "href" : "https://api.spotify.com/v1/albums/4hl7ryP7L1SvblrcPRAkpQ",
        "id" : "4hl7ryP7L1SvblrcPRAkpQ",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273bee3918143b9d6e5571239b4",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02bee3918143b9d6e5571239b4",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851bee3918143b9d6e5571239b4",
          "width" : 64
        } ],
        "name" : "Spirituality and Distortion",
        "release_date" : "2020-03-27",
        "release_date_precision" : "day",
        "total_tracks" : 14,
        "type" : "album",
        "uri" : "spotify:album:4hl7ryP7L1SvblrcPRAkpQ"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2p2uE4i92Dn4DkThfoKIB9"
        },
        "href" : "https://api.spotify.com/v1/artists/2p2uE4i92Dn4DkThfoKIB9",
        "id" : "2p2uE4i92Dn4DkThfoKIB9",
        "name" : "Igorrr",
        "type" : "artist",
        "uri" : "spotify:artist:2p2uE4i92Dn4DkThfoKIB9"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 203186,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USMBR1913984"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0GOytj5zpFRpjGN04FLmHT"
      },
      "href" : "https://api.spotify.com/v1/tracks/0GOytj5zpFRpjGN04FLmHT",
      "id" : "0GOytj5zpFRpjGN04FLmHT",
      "is_local" : false,
      "name" : "Nervous Waltz",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/af61b3d905038e7db4dfad071d0568f13175132e?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:0GOytj5zpFRpjGN04FLmHT"
    }
  }, {
    "added_at" : "2021-01-31T12:23:58Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0iT2o4MNsBKSLy7bllgdo0"
          },
          "href" : "https://api.spotify.com/v1/artists/0iT2o4MNsBKSLy7bllgdo0",
          "id" : "0iT2o4MNsBKSLy7bllgdo0",
          "name" : "Jus Now",
          "type" : "artist",
          "uri" : "spotify:artist:0iT2o4MNsBKSLy7bllgdo0"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6s7bgHlLfKpbb3YT01gfLH"
        },
        "href" : "https://api.spotify.com/v1/albums/6s7bgHlLfKpbb3YT01gfLH",
        "id" : "6s7bgHlLfKpbb3YT01gfLH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273c66a1f51ed84b8117ae00c76",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02c66a1f51ed84b8117ae00c76",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851c66a1f51ed84b8117ae00c76",
          "width" : 64
        } ],
        "name" : "Cyah Help It",
        "release_date" : "2015-10-16",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:6s7bgHlLfKpbb3YT01gfLH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0iT2o4MNsBKSLy7bllgdo0"
        },
        "href" : "https://api.spotify.com/v1/artists/0iT2o4MNsBKSLy7bllgdo0",
        "id" : "0iT2o4MNsBKSLy7bllgdo0",
        "name" : "Jus Now",
        "type" : "artist",
        "uri" : "spotify:artist:0iT2o4MNsBKSLy7bllgdo0"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/42qLC3FgtazA9AvaIoiP62"
        },
        "href" : "https://api.spotify.com/v1/artists/42qLC3FgtazA9AvaIoiP62",
        "id" : "42qLC3FgtazA9AvaIoiP62",
        "name" : "Ms. Dynamite",
        "type" : "artist",
        "uri" : "spotify:artist:42qLC3FgtazA9AvaIoiP62"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6nPHDCN7qmxO86eN1grP54"
        },
        "href" : "https://api.spotify.com/v1/artists/6nPHDCN7qmxO86eN1grP54",
        "id" : "6nPHDCN7qmxO86eN1grP54",
        "name" : "Bunji Garlin",
        "type" : "artist",
        "uri" : "spotify:artist:6nPHDCN7qmxO86eN1grP54"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 188442,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GB9TP1500480"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7M5GI36F8By0vFycdQ4pke"
      },
      "href" : "https://api.spotify.com/v1/tracks/7M5GI36F8By0vFycdQ4pke",
      "id" : "7M5GI36F8By0vFycdQ4pke",
      "is_local" : false,
      "name" : "Cyah Help It",
      "popularity" : 5,
      "preview_url" : "https://p.scdn.co/mp3-preview/fdbe06d7d3dadab133161dd9edc16a45bdb40588?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:7M5GI36F8By0vFycdQ4pke"
    }
  }, {
    "added_at" : "2021-01-30T18:38:52Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E"
          },
          "href" : "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E",
          "id" : "57dN52uHvrHOxijzpIgu3E",
          "name" : "Ratatat",
          "type" : "artist",
          "uri" : "spotify:artist:57dN52uHvrHOxijzpIgu3E"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7nqSnoxmIdcfxAJBxl9AIh"
        },
        "href" : "https://api.spotify.com/v1/albums/7nqSnoxmIdcfxAJBxl9AIh",
        "id" : "7nqSnoxmIdcfxAJBxl9AIh",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731e86a07cda05a74debfd1ac2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021e86a07cda05a74debfd1ac2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511e86a07cda05a74debfd1ac2",
          "width" : 64
        } ],
        "name" : "Ratatat",
        "release_date" : "2004-04-19",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:7nqSnoxmIdcfxAJBxl9AIh"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E"
        },
        "href" : "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E",
        "id" : "57dN52uHvrHOxijzpIgu3E",
        "name" : "Ratatat",
        "type" : "artist",
        "uri" : "spotify:artist:57dN52uHvrHOxijzpIgu3E"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 338333,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBBKS0300144"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6zgCycfVETCfk2TNY7Othq"
      },
      "href" : "https://api.spotify.com/v1/tracks/6zgCycfVETCfk2TNY7Othq",
      "id" : "6zgCycfVETCfk2TNY7Othq",
      "is_local" : false,
      "name" : "Cherry",
      "popularity" : 43,
      "preview_url" : "https://p.scdn.co/mp3-preview/41d5c31eb71c5058cef3252efed3f0c09f0f37d4?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:6zgCycfVETCfk2TNY7Othq"
    }
  }, {
    "added_at" : "2021-01-27T18:49:55Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/31DXlldabwPHwu6dYevuzK"
          },
          "href" : "https://api.spotify.com/v1/artists/31DXlldabwPHwu6dYevuzK",
          "id" : "31DXlldabwPHwu6dYevuzK",
          "name" : "Simian Mobile Disco",
          "type" : "artist",
          "uri" : "spotify:artist:31DXlldabwPHwu6dYevuzK"
        } ],
        "available_markets" : [ "AD", "AG", "AL", "AR", "AT", "AU", "BA", "BB", "BE", "BF", "BG", "BI", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "IE", "IS", "IT", "JM", "KE", "KI", "KM", "KN", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MR", "MT", "MW", "MX", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "PA", "PE", "PG", "PL", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TN", "TO", "TT", "TV", "TZ", "UA", "UG", "US", "UY", "VC", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3k0xfQP6xY8DinupXsBohl"
        },
        "href" : "https://api.spotify.com/v1/albums/3k0xfQP6xY8DinupXsBohl",
        "id" : "3k0xfQP6xY8DinupXsBohl",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273110bd6379d030aaf1d418329",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02110bd6379d030aaf1d418329",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851110bd6379d030aaf1d418329",
          "width" : 64
        } ],
        "name" : "Whorl",
        "release_date" : "2014-09-09",
        "release_date_precision" : "day",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:3k0xfQP6xY8DinupXsBohl"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/31DXlldabwPHwu6dYevuzK"
        },
        "href" : "https://api.spotify.com/v1/artists/31DXlldabwPHwu6dYevuzK",
        "id" : "31DXlldabwPHwu6dYevuzK",
        "name" : "Simian Mobile Disco",
        "type" : "artist",
        "uri" : "spotify:artist:31DXlldabwPHwu6dYevuzK"
      } ],
      "available_markets" : [ "AD", "AG", "AL", "AR", "AT", "AU", "BA", "BB", "BE", "BF", "BG", "BI", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "IE", "IS", "IT", "JM", "KE", "KI", "KM", "KN", "LC", "LI", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MR", "MT", "MW", "MX", "NA", "NE", "NG", "NI", "NL", "NO", "NR", "NZ", "PA", "PE", "PG", "PL", "PT", "PW", "PY", "RO", "RS", "RU", "RW", "SB", "SC", "SE", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TN", "TO", "TT", "TV", "TZ", "UA", "UG", "US", "UY", "VC", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 446546,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USEP41413003"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/04MkvmxBIw2rzP1Q96QOWl"
      },
      "href" : "https://api.spotify.com/v1/tracks/04MkvmxBIw2rzP1Q96QOWl",
      "id" : "04MkvmxBIw2rzP1Q96QOWl",
      "is_local" : false,
      "name" : "Sun Dogs",
      "popularity" : 10,
      "preview_url" : "https://p.scdn.co/mp3-preview/6178e959b7acb38b970d1d496adc74ab8f261e65?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:04MkvmxBIw2rzP1Q96QOWl"
    }
  }, {
    "added_at" : "2021-01-24T21:56:40Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4S8XZ6FgGp5KKwymL8E6Hz"
          },
          "href" : "https://api.spotify.com/v1/artists/4S8XZ6FgGp5KKwymL8E6Hz",
          "id" : "4S8XZ6FgGp5KKwymL8E6Hz",
          "name" : "Enduser",
          "type" : "artist",
          "uri" : "spotify:artist:4S8XZ6FgGp5KKwymL8E6Hz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3HZiO8N7WZynVwQdrhhifV"
        },
        "href" : "https://api.spotify.com/v1/albums/3HZiO8N7WZynVwQdrhhifV",
        "id" : "3HZiO8N7WZynVwQdrhhifV",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27389e0f04eb1d3afe7281739ce",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0289e0f04eb1d3afe7281739ce",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485189e0f04eb1d3afe7281739ce",
          "width" : 64
        } ],
        "name" : "1-3",
        "release_date" : "2019-02-09",
        "release_date_precision" : "day",
        "total_tracks" : 5,
        "type" : "album",
        "uri" : "spotify:album:3HZiO8N7WZynVwQdrhhifV"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4S8XZ6FgGp5KKwymL8E6Hz"
        },
        "href" : "https://api.spotify.com/v1/artists/4S8XZ6FgGp5KKwymL8E6Hz",
        "id" : "4S8XZ6FgGp5KKwymL8E6Hz",
        "name" : "Enduser",
        "type" : "artist",
        "uri" : "spotify:artist:4S8XZ6FgGp5KKwymL8E6Hz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 357485,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QZ5FN1940636"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3cFxBXjTOuUiOxnH0tpZe4"
      },
      "href" : "https://api.spotify.com/v1/tracks/3cFxBXjTOuUiOxnH0tpZe4",
      "id" : "3cFxBXjTOuUiOxnH0tpZe4",
      "is_local" : false,
      "name" : "2-3",
      "popularity" : 16,
      "preview_url" : "https://p.scdn.co/mp3-preview/532604d94feb7cee6927b4c96b52afe31f70c33b?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:3cFxBXjTOuUiOxnH0tpZe4"
    }
  }, {
    "added_at" : "2021-01-24T19:49:54Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5kU3Q43bmLdARkMOCOLNkB"
        },
        "href" : "https://api.spotify.com/v1/albums/5kU3Q43bmLdARkMOCOLNkB",
        "id" : "5kU3Q43bmLdARkMOCOLNkB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733caf395cb159288678e3fd65",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023caf395cb159288678e3fd65",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513caf395cb159288678e3fd65",
          "width" : 64
        } ],
        "name" : "Igneous",
        "release_date" : "2019-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5kU3Q43bmLdARkMOCOLNkB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 317500,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1900018"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0kYQbZQqpZkACY7IJGl343"
      },
      "href" : "https://api.spotify.com/v1/tracks/0kYQbZQqpZkACY7IJGl343",
      "id" : "0kYQbZQqpZkACY7IJGl343",
      "is_local" : false,
      "name" : "Kali",
      "popularity" : 21,
      "preview_url" : "https://p.scdn.co/mp3-preview/0bfa262d70b4d98f4667e56c84266b1d5fa65ae8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:0kYQbZQqpZkACY7IJGl343"
    }
  }, {
    "added_at" : "2021-01-22T20:54:11Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BN", "BO", "BR", "BY", "CA", "CH", "CL", "CM", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GN", "GR", "GT", "GW", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MO", "MT", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SG", "SI", "SK", "SN", "SV", "TH", "TN", "TR", "TW", "TZ", "UA", "US", "UZ", "VN", "XK", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2oNWwPYsrEZuZ3siifa633"
        },
        "href" : "https://api.spotify.com/v1/albums/2oNWwPYsrEZuZ3siifa633",
        "id" : "2oNWwPYsrEZuZ3siifa633",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273479a0d67f9d3a2a4e2addd9f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02479a0d67f9d3a2a4e2addd9f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851479a0d67f9d3a2a4e2addd9f",
          "width" : 64
        } ],
        "name" : "Treme: Music From The HBO Original Series - Season 2",
        "release_date" : "2012-01-01",
        "release_date_precision" : "day",
        "total_tracks" : 18,
        "type" : "album",
        "uri" : "spotify:album:2oNWwPYsrEZuZ3siifa633"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/53pHwg1sjhqGk726JnJHYb"
        },
        "href" : "https://api.spotify.com/v1/artists/53pHwg1sjhqGk726JnJHYb",
        "id" : "53pHwg1sjhqGk726JnJHYb",
        "name" : "Donald Harrison",
        "type" : "artist",
        "uri" : "spotify:artist:53pHwg1sjhqGk726JnJHYb"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/44gLY8zUnF4xRzi4X0zl1n"
        },
        "href" : "https://api.spotify.com/v1/artists/44gLY8zUnF4xRzi4X0zl1n",
        "id" : "44gLY8zUnF4xRzi4X0zl1n",
        "name" : "Carl Allen",
        "type" : "artist",
        "uri" : "spotify:artist:44gLY8zUnF4xRzi4X0zl1n"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3b1iAUluGgKbthmqGckbPn"
        },
        "href" : "https://api.spotify.com/v1/artists/3b1iAUluGgKbthmqGckbPn",
        "id" : "3b1iAUluGgKbthmqGckbPn",
        "name" : "Leon \"Kid Chocolate\" Brown",
        "type" : "artist",
        "uri" : "spotify:artist:3b1iAUluGgKbthmqGckbPn"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6TvhNLU4Wtptdh1m9XcE0j"
        },
        "href" : "https://api.spotify.com/v1/artists/6TvhNLU4Wtptdh1m9XcE0j",
        "id" : "6TvhNLU4Wtptdh1m9XcE0j",
        "name" : "Rob Brown",
        "type" : "artist",
        "uri" : "spotify:artist:6TvhNLU4Wtptdh1m9XcE0j"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4wnzivx3OQ3vjrySAdTdJP"
        },
        "href" : "https://api.spotify.com/v1/artists/4wnzivx3OQ3vjrySAdTdJP",
        "id" : "4wnzivx3OQ3vjrySAdTdJP",
        "name" : "Ron Carter",
        "type" : "artist",
        "uri" : "spotify:artist:4wnzivx3OQ3vjrySAdTdJP"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/320TrJub4arztwXRm7kqVO"
        },
        "href" : "https://api.spotify.com/v1/artists/320TrJub4arztwXRm7kqVO",
        "id" : "320TrJub4arztwXRm7kqVO",
        "name" : "Dr. John",
        "type" : "artist",
        "uri" : "spotify:artist:320TrJub4arztwXRm7kqVO"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0xVjTHsSeU2B3DGMjJ3KFy"
        },
        "href" : "https://api.spotify.com/v1/artists/0xVjTHsSeU2B3DGMjJ3KFy",
        "id" : "0xVjTHsSeU2B3DGMjJ3KFy",
        "name" : "Clarke Peters",
        "type" : "artist",
        "uri" : "spotify:artist:0xVjTHsSeU2B3DGMjJ3KFy"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7E4MQbO3PckmL7W01Cnnrd"
        },
        "href" : "https://api.spotify.com/v1/artists/7E4MQbO3PckmL7W01Cnnrd",
        "id" : "7E4MQbO3PckmL7W01Cnnrd",
        "name" : "Alfred “Uganda” Roberts",
        "type" : "artist",
        "uri" : "spotify:artist:7E4MQbO3PckmL7W01Cnnrd"
      } ],
      "available_markets" : [ "AD", "AE", "AM", "AR", "AT", "AU", "AZ", "BA", "BE", "BG", "BH", "BN", "BO", "BR", "BY", "CA", "CH", "CL", "CM", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GN", "GR", "GT", "GW", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KR", "KW", "KZ", "LA", "LB", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MO", "MT", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SG", "SI", "SK", "SN", "SV", "TH", "TN", "TR", "TW", "TZ", "UA", "US", "UZ", "VN", "XK", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 324253,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USRO21213017"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2dPAL09IadQJ7mMpTJ45w3"
      },
      "href" : "https://api.spotify.com/v1/tracks/2dPAL09IadQJ7mMpTJ45w3",
      "id" : "2dPAL09IadQJ7mMpTJ45w3",
      "is_local" : false,
      "name" : "Hu Ta Nay",
      "popularity" : 17,
      "preview_url" : "https://p.scdn.co/mp3-preview/b6df8cf66f2bd0142b1ab865b6a41d6b311282c0?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 17,
      "type" : "track",
      "uri" : "spotify:track:2dPAL09IadQJ7mMpTJ45w3"
    }
  }, {
    "added_at" : "2021-01-06T19:31:55Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id" : "0LyfQWJT6nXafLPZqxe9Of",
          "name" : "Various Artists",
          "type" : "artist",
          "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2vx34tJFXMnjT9vKEVtcKI"
        },
        "href" : "https://api.spotify.com/v1/albums/2vx34tJFXMnjT9vKEVtcKI",
        "id" : "2vx34tJFXMnjT9vKEVtcKI",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27389fdc1ec5668fdd29a5960cc",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0289fdc1ec5668fdd29a5960cc",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485189fdc1ec5668fdd29a5960cc",
          "width" : 64
        } ],
        "name" : "SOMEWHERE",
        "release_date" : "2015-08-28",
        "release_date_precision" : "day",
        "total_tracks" : 7,
        "type" : "album",
        "uri" : "spotify:album:2vx34tJFXMnjT9vKEVtcKI"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 526646,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEU671502315"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/72Gko345HYQu6gI3DWAZfL"
      },
      "href" : "https://api.spotify.com/v1/tracks/72Gko345HYQu6gI3DWAZfL",
      "id" : "72Gko345HYQu6gI3DWAZfL",
      "is_local" : false,
      "name" : "Anther",
      "popularity" : 32,
      "preview_url" : "https://p.scdn.co/mp3-preview/9e9135d80b5ea310841c051007a7a3d2c6f00892?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:72Gko345HYQu6gI3DWAZfL"
    }
  }, {
    "added_at" : "2021-01-06T19:21:31Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2uJG5GCaZTwP3z1tkgAG6P"
        },
        "href" : "https://api.spotify.com/v1/albums/2uJG5GCaZTwP3z1tkgAG6P",
        "id" : "2uJG5GCaZTwP3z1tkgAG6P",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2737449d8b759c6f6acc1d1757a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e027449d8b759c6f6acc1d1757a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048517449d8b759c6f6acc1d1757a",
          "width" : 64
        } ],
        "name" : "Humming",
        "release_date" : "2020-12-18",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:2uJG5GCaZTwP3z1tkgAG6P"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 205000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F2000102"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4dcqNrCh3Atf4ylrvFxKoG"
      },
      "href" : "https://api.spotify.com/v1/tracks/4dcqNrCh3Atf4ylrvFxKoG",
      "id" : "4dcqNrCh3Atf4ylrvFxKoG",
      "is_local" : false,
      "name" : "Humming",
      "popularity" : 26,
      "preview_url" : "https://p.scdn.co/mp3-preview/585c838b959f3a81e27ff214e92b2026e737d803?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:4dcqNrCh3Atf4ylrvFxKoG"
    }
  }, {
    "added_at" : "2021-01-06T19:16:04Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5kU3Q43bmLdARkMOCOLNkB"
        },
        "href" : "https://api.spotify.com/v1/albums/5kU3Q43bmLdARkMOCOLNkB",
        "id" : "5kU3Q43bmLdARkMOCOLNkB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733caf395cb159288678e3fd65",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023caf395cb159288678e3fd65",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513caf395cb159288678e3fd65",
          "width" : 64
        } ],
        "name" : "Igneous",
        "release_date" : "2019-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5kU3Q43bmLdARkMOCOLNkB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 397295,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1900023"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/05Ps8wHwPh5Ut5EfcIgxPZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/05Ps8wHwPh5Ut5EfcIgxPZ",
      "id" : "05Ps8wHwPh5Ut5EfcIgxPZ",
      "is_local" : false,
      "name" : "Toba",
      "popularity" : 35,
      "preview_url" : "https://p.scdn.co/mp3-preview/79a2296ebb2e66367826caf9ab37c61c12d4bea5?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:05Ps8wHwPh5Ut5EfcIgxPZ"
    }
  }, {
    "added_at" : "2021-01-06T19:12:38Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5kU3Q43bmLdARkMOCOLNkB"
        },
        "href" : "https://api.spotify.com/v1/albums/5kU3Q43bmLdARkMOCOLNkB",
        "id" : "5kU3Q43bmLdARkMOCOLNkB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2733caf395cb159288678e3fd65",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e023caf395cb159288678e3fd65",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048513caf395cb159288678e3fd65",
          "width" : 64
        } ],
        "name" : "Igneous",
        "release_date" : "2019-05-10",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:5kU3Q43bmLdARkMOCOLNkB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 216695,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1900022"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6fiJKbCHyA0BEzhI2Lt3Wr"
      },
      "href" : "https://api.spotify.com/v1/tracks/6fiJKbCHyA0BEzhI2Lt3Wr",
      "id" : "6fiJKbCHyA0BEzhI2Lt3Wr",
      "is_local" : false,
      "name" : "Lory",
      "popularity" : 41,
      "preview_url" : "https://p.scdn.co/mp3-preview/176a1b1fb32024829bf5ff4e19c3d7810f996fd8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:6fiJKbCHyA0BEzhI2Lt3Wr"
    }
  }, {
    "added_at" : "2021-01-06T18:12:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/46iJ1VD4HKFnqjISGqlZkV"
          },
          "href" : "https://api.spotify.com/v1/artists/46iJ1VD4HKFnqjISGqlZkV",
          "id" : "09b5OcuIELTdD7FfzQzcdB",
          "name" : "Covet",
          "type" : "artist",
          "uri" : "spotify:artist:46iJ1VD4HKFnqjISGqlZkV"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3ouZZp6tCRElZLb4Qe0KVR"
        },
        "href" : "https://api.spotify.com/v1/albums/3ouZZp6tCRElZLb4Qe0KVR",
        "id" : "3ouZZp6tCRElZLb4Qe0KVR",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273fc825d57fe8933e012c2ad62",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02fc825d57fe8933e012c2ad62",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851fc825d57fe8933e012c2ad62",
          "width" : 64
        } ],
        "name" : "technicolor",
        "release_date" : "2020-06-05",
        "release_date_precision" : "day",
        "total_tracks" : 10,
        "type" : "album",
        "uri" : "spotify:album:3ouZZp6tCRElZLb4Qe0KVR"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/46iJ1VD4HKFnqjISGqlZkV"
        },
        "href" : "https://api.spotify.com/v1/artists/46iJ1VD4HKFnqjISGqlZkV",
        "id" : "46iJ1VD4HKFnqjISGqlZkV",
        "name" : "Covet",
        "type" : "artist",
        "uri" : "spotify:artist:46iJ1VD4HKFnqjISGqlZkV"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 281000,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US72W2024109"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2QLKBeYnQ3Mh7a9kCPQVIG"
      },
      "href" : "https://api.spotify.com/v1/tracks/2QLKBeYnQ3Mh7a9kCPQVIG",
      "id" : "2QLKBeYnQ3Mh7a9kCPQVIG",
      "is_local" : false,
      "name" : "parrot",
      "popularity" : 32,
      "preview_url" : "https://p.scdn.co/mp3-preview/26d614141c6fb07a757ff664864df107fcf5531c?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:2QLKBeYnQ3Mh7a9kCPQVIG"
    }
  }, {
    "added_at" : "2021-01-02T23:54:07Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 381680,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379686"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/70uk9oYGwoQBybR63uvfZf"
      },
      "href" : "https://api.spotify.com/v1/tracks/70uk9oYGwoQBybR63uvfZf",
      "id" : "70uk9oYGwoQBybR63uvfZf",
      "is_local" : false,
      "name" : "Onslaught of the Covenant",
      "popularity" : 21,
      "preview_url" : "https://p.scdn.co/mp3-preview/b1dba2004d20b29a43b67ce791f46ebb1730ac52?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:70uk9oYGwoQBybR63uvfZf"
    }
  }, {
    "added_at" : "2021-01-02T23:39:08Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
          },
          "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
          "id" : "2DlKh1IzbG3EwAMaTF2p4A",
          "name" : "Inferi",
          "type" : "artist",
          "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/621sN6b7GCpWpzaSidA5Ir"
        },
        "href" : "https://api.spotify.com/v1/albums/621sN6b7GCpWpzaSidA5Ir",
        "id" : "621sN6b7GCpWpzaSidA5Ir",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f5e1ee8deb0e691a68d29045",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f5e1ee8deb0e691a68d29045",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f5e1ee8deb0e691a68d29045",
          "width" : 64
        } ],
        "name" : "The Path of Apotheosis",
        "release_date" : "2014-01-26",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:621sN6b7GCpWpzaSidA5Ir"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlKh1IzbG3EwAMaTF2p4A"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlKh1IzbG3EwAMaTF2p4A",
        "id" : "2DlKh1IzbG3EwAMaTF2p4A",
        "name" : "Inferi",
        "type" : "artist",
        "uri" : "spotify:artist:2DlKh1IzbG3EwAMaTF2p4A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 384920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABS1379685"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3PRxPB1T7BBpmeXA7xeoHo"
      },
      "href" : "https://api.spotify.com/v1/tracks/3PRxPB1T7BBpmeXA7xeoHo",
      "id" : "3PRxPB1T7BBpmeXA7xeoHo",
      "is_local" : false,
      "name" : "Destroyer",
      "popularity" : 26,
      "preview_url" : "https://p.scdn.co/mp3-preview/fd38c9a25c5533e6a079668d2125c5461b963133?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:3PRxPB1T7BBpmeXA7xeoHo"
    }
  }, {
    "added_at" : "2020-12-31T20:15:12Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
          },
          "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
          "id" : "4Rcol4u0q89lypqKI83GDz",
          "name" : "Polynation",
          "type" : "artist",
          "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/515MsUrwyO1ui5mvvJ98J0"
        },
        "href" : "https://api.spotify.com/v1/albums/515MsUrwyO1ui5mvvJ98J0",
        "id" : "515MsUrwyO1ui5mvvJ98J0",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27301878f5cb411afac948511ce",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0201878f5cb411afac948511ce",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485101878f5cb411afac948511ce",
          "width" : 64
        } ],
        "name" : "Muriatic",
        "release_date" : "2018-03-16",
        "release_date_precision" : "day",
        "total_tracks" : 2,
        "type" : "album",
        "uri" : "spotify:album:515MsUrwyO1ui5mvvJ98J0"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4Rcol4u0q89lypqKI83GDz"
        },
        "href" : "https://api.spotify.com/v1/artists/4Rcol4u0q89lypqKI83GDz",
        "id" : "4Rcol4u0q89lypqKI83GDz",
        "name" : "Polynation",
        "type" : "artist",
        "uri" : "spotify:artist:4Rcol4u0q89lypqKI83GDz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 237777,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLC7F1800014"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6e3cIvk5s4mWmONbZEannO"
      },
      "href" : "https://api.spotify.com/v1/tracks/6e3cIvk5s4mWmONbZEannO",
      "id" : "6e3cIvk5s4mWmONbZEannO",
      "is_local" : false,
      "name" : "Muriatic",
      "popularity" : 19,
      "preview_url" : "https://p.scdn.co/mp3-preview/5f0a3e143f59ad9d64ffc5dbe764721acfb4bf9d?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:6e3cIvk5s4mWmONbZEannO"
    }
  }, {
    "added_at" : "2020-12-31T17:43:13Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4LNC9g5ie0tSgZed2CHQ5A"
          },
          "href" : "https://api.spotify.com/v1/artists/4LNC9g5ie0tSgZed2CHQ5A",
          "id" : "4LNC9g5ie0tSgZed2CHQ5A",
          "name" : "Waldemar Matuška",
          "type" : "artist",
          "uri" : "spotify:artist:4LNC9g5ie0tSgZed2CHQ5A"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0T0LjviltLGbSxEplfmc4r"
        },
        "href" : "https://api.spotify.com/v1/albums/0T0LjviltLGbSxEplfmc4r",
        "id" : "0T0LjviltLGbSxEplfmc4r",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273d65f92695b407bb9c9a19694",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02d65f92695b407bb9c9a19694",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851d65f92695b407bb9c9a19694",
          "width" : 64
        } ],
        "name" : "Waldemar Matuška",
        "release_date" : "1968",
        "release_date_precision" : "year",
        "total_tracks" : 12,
        "type" : "album",
        "uri" : "spotify:album:0T0LjviltLGbSxEplfmc4r"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4LNC9g5ie0tSgZed2CHQ5A"
        },
        "href" : "https://api.spotify.com/v1/artists/4LNC9g5ie0tSgZed2CHQ5A",
        "id" : "4LNC9g5ie0tSgZed2CHQ5A",
        "name" : "Waldemar Matuška",
        "type" : "artist",
        "uri" : "spotify:artist:4LNC9g5ie0tSgZed2CHQ5A"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MV", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 220586,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "CZA166800122"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3SY5c1sMaxlqADgOKSONQR"
      },
      "href" : "https://api.spotify.com/v1/tracks/3SY5c1sMaxlqADgOKSONQR",
      "id" : "3SY5c1sMaxlqADgOKSONQR",
      "is_local" : false,
      "name" : "Slavíci Z Madridu",
      "popularity" : 41,
      "preview_url" : "https://p.scdn.co/mp3-preview/e530439dc0d102b91366bd62b84bb90081a0d458?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:3SY5c1sMaxlqADgOKSONQR"
    }
  }, {
    "added_at" : "2020-12-31T17:02:26Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz"
          },
          "href" : "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
          "id" : "7mnBLXK823vNxN3UWB7Gfz",
          "name" : "The Black Keys",
          "type" : "artist",
          "uri" : "spotify:artist:7mnBLXK823vNxN3UWB7Gfz"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "ML", "MN", "MO", "MR", "MT", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "XK", "ZA", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6TvxpBzf9c8H1fsrAaQ8t3"
        },
        "href" : "https://api.spotify.com/v1/albums/6TvxpBzf9c8H1fsrAaQ8t3",
        "id" : "6TvxpBzf9c8H1fsrAaQ8t3",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731af8fb0d8859055d35d2290f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021af8fb0d8859055d35d2290f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511af8fb0d8859055d35d2290f",
          "width" : 64
        } ],
        "name" : "Turn Blue",
        "release_date" : "2014-05-09",
        "release_date_precision" : "day",
        "total_tracks" : 11,
        "type" : "album",
        "uri" : "spotify:album:6TvxpBzf9c8H1fsrAaQ8t3"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz"
        },
        "href" : "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
        "id" : "7mnBLXK823vNxN3UWB7Gfz",
        "name" : "The Black Keys",
        "type" : "artist",
        "uri" : "spotify:artist:7mnBLXK823vNxN3UWB7Gfz"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BN", "BO", "BR", "BS", "BW", "BY", "BZ", "CA", "CH", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "ML", "MN", "MO", "MR", "MT", "MW", "MX", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "XK", "ZA", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 268120,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USNO11400178"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/39e1gl7VaxuCev5ga7bvNq"
      },
      "href" : "https://api.spotify.com/v1/tracks/39e1gl7VaxuCev5ga7bvNq",
      "id" : "39e1gl7VaxuCev5ga7bvNq",
      "is_local" : false,
      "name" : "In Time",
      "popularity" : 46,
      "preview_url" : "https://p.scdn.co/mp3-preview/1c48a19cd1aeb79e5c16d1d25357c01fe1228c53?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:39e1gl7VaxuCev5ga7bvNq"
    }
  } ],
  "limit" : 50,
  "next" : "https://api.spotify.com/v1/me/tracks?offset=50&limit=50",
  "offset" : 0,
  "previous" : null,
  "total" : 4031
}

function addSelectedProperty (data: ArtistData) {
  return data.artists.items.map((artist) => {
    return {...artist, selected: false}
  });
}

export const artistsMock: Artist[] = addSelectedProperty(artistData);
export const tracksMock: TrackItem[] = trackData.items;
export const genresMock: GenreDb = generateGenres(artistsMock);