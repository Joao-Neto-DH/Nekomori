type AnimeType = {
    "mal_id": number,
    "url": string,
    "images": {
        "jpg": {
            "image_url": string,
            "small_image_url": string,
            "large_image_url": string
        },
        "webp": {
            "image_url": string,
            "small_image_url": string,
            "large_image_url": string
        }
    },
    "trailer": {
        "youtube_id": string,
        "url": string,
        "embed_url": string
    },
    "approved": true,
    "titles": [
        {
            "type": string,
            "title": string
        }
    ],
    "title": string,
    "title_english": string,
    "title_japanese": string,
    "title_synonyms": [
    string
    ],
    "type": "TV"|"OVA"|"Movie"|"Special"|"ONA"|"Music",
    "source": string|null,
    "episodes": number|null,
    "status": "Finished Airing"|"Currently Airing"|"Not yet aired",
    "airing": boolean,
    "aired": {
        "from": string,
        "to": string,
        "prop": {
            "from": {
                "day": number,
                "month": number,
                "year": number
            },
            "to": {
                "day": number,
                "month": number,
                "year": number
            },
            "string": string
        }
    },
    "duration": string,
    "rating": "G - All Ages"|"PG - Children"|"PG-13 - Teens 13 or older"|"R - 17+ (violence & profanity)"|"R+ - Mild Nudity"|"Rx - Hentai",
    "score": number,
    "scored_by": number,
    "rank": number,
    "popularity": number,
    "members": number,
    "favorites": number,
    "synopsis": string,
    "background": string,
    "season": "summer",
    "year": number,
    "broadcast": {
        "day": string,
        "time": string,
        "timezone": string,
        "string": string
    },
    "producers": [
        {
            "mal_id": number,
            "type": string,
            "name": string,
            "url": string
        }
    ],
    "licensors": [
        {
            "mal_id": number,
            "type": string,
            "name": string,
            "url": string
        }
    ],
    "studios": [
        {
            "mal_id": number,
            "type": string,
            "name": string,
            "url": string
        }
    ],
    "genres": [
        {
            "mal_id": number,
            "type": string,
            "name": string,
            "url": string
        }
    ],
    "explicit_genres": [
        {
            "mal_id": number,
            "type": string,
            "name": string,
            "url": string
        }
    ],
    "themes": [
        {
            "mal_id": number,
            "type": string,
            "name": string,
            "url": string
        }
    ],
    "demographics": [
        {
            "mal_id": 0,
            "type": "string",
            "name": "string",
            "url": "string"
        }
    ]
}

export default AnimeType;