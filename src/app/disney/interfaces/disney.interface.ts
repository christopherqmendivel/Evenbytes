export interface SearchResponse {
    info: Info;
    data: Disney[];
}

export interface Disney {
    _id:             number;
    films:           string[];
    shortFilms:      any[];
    tvShows:         string[];
    videoGames:      string[];
    parkAttractions: string[];
    allies:          any[];
    enemies:         any[];
    sourceUrl:       string;
    name:            string;
    imageUrl?:       string;
    createdAt:       Date;
    updatedAt:       Date;
    url:             string;
    __v:             number;
}

export interface Info {
    count:        number;
    totalPages:   number;
    previousPage: null;
    nextPage:     string;
}
