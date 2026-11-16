import { queryIgdb } from "../../../lib/igdb/query-igdb";
import type { PopularGamesIds } from "../types/popular-games.types";
import { getGames } from "./get-games";

type Props = {
  limit?: string;
};

export const getPopularGames = async ({ limit }: Props) => {
  const popularGamesIds = await queryIgdb<PopularGamesIds>({
    endpoint: "popularity_primitives",
    query: `fields game_id, value;
    where popularity_type = 3;
    sort value desc;
    limit ${limit ?? "5"};`,
    params: {
      next: {
        tags: ["popular_games"],
        revalidate: 3600,
      },
    },
  });
  if (popularGamesIds.length === 0) {
    return [];
  }

  const popularGames = await getGames({
    limit,
    query: `fields name, slug, summary, first_release_date, total_rating, genres.name, platforms.abbreviation, artworks.image_id, cover.image_id;
    where id = (${popularGamesIds.map((game) => game.game_id).join(",")});`,
  });
  return popularGames;
};
