import type { FeaturedGame } from "@/features/games/types/featured-games.types";
import { queryIgdb } from "../../../lib/igdb/query-igdb";

export const getFeaturedGames = async () => {
  const games = await queryIgdb<FeaturedGame>({
    endpoint: "games",
    query: `fields name, slug, summary, first_release_date, total_rating,
       genres.name, platforms.abbreviation,
       artworks.image_id, cover.image_id;
        where total_rating >= 80
        & total_rating_count >= 20
        & game_type = 0
        & artworks != null;
        sort first_release_date desc; limit 5;`,
    params: {
      next: {
        tags: ["games"],
        revalidate: 3600,
      },
    },
  });
  return games;
};
