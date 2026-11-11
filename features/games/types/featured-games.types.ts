type IgdbImage = {
  id: number;
  image_id: string;
};

type IgdbGenre = {
  id: number;
  name: string;
};

type IgdbPlatform = {
  id: number;
  abbreviation?: string;
};

export type FeaturedGame = {
  id: number;
  name: string;
  slug: string;
  summary?: string;
  first_release_date: number;
  total_rating: number;
  genres?: IgdbGenre[];
  platforms?: IgdbPlatform[];
  artworks: IgdbImage[];
  cover?: IgdbImage;
};
