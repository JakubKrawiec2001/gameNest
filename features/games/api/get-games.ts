import { queryIgdb } from "../../../lib/igdb/query-igdb";
import type { Game } from "../types/games.types";

type Props = {
  limit?: string;
  query?: string;
};

export const getGames = async ({ limit, query }: Props) => {
  const games = await queryIgdb<Game>({
    endpoint: "games",
    query: `${query ?? "fields name, slug, summary, first_release_date, total_rating, genres.name, platforms.abbreviation, artworks.image_id, cover.image_id"} limit ${limit ?? "5"};`,
    params: {
      next: {
        tags: ["games"],
        revalidate: 3600,
      },
    },
  });
  return games;
};
