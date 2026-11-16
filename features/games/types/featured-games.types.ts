import type {
  IgdbGenre,
  IgdbImage,
  IgdbPlatform,
} from "@/features/games/types/games.types";

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
