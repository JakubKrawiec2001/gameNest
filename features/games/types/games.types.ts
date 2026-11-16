export type IgdbImage = {
  id: number;
  image_id: string;
};

export type IgdbGenre = {
  id: number;
  name: string;
};

export type IgdbPlatform = {
  id: number;
  abbreviation?: string;
};

export type Game = {
  id: number;
  name: string;
  slug: string;
  summary?: string;
  first_release_date?: number;
  total_rating?: number;
  total_rating_count?: number;
  genres?: IgdbGenre[];
  platforms?: IgdbPlatform[];
  cover?: IgdbImage;
  artworks?: IgdbImage[];
};
