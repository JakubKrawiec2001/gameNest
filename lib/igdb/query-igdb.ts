import "server-only";
import { IgdbApiError } from "@/lib/errors/igdb-api-error";

const IGDB_API_URL = "https://api.igdb.com/v4";
const IGDB_TIMEOUT_MS = 10_000;

type QueryIgdbParams = {
  endpoint:
    | "artworks"
    | "collections"
    | "companies"
    | "company_logos"
    | "covers"
    | "external_games"
    | "franchises"
    | "game_engines"
    | "game_modes"
    | "game_statuses"
    | "game_time_to_beats"
    | "game_types"
    | "game_videos"
    | "games"
    | "genres"
    | "involved_companies"
    | "keywords"
    | "platform_logos"
    | "platforms"
    | "player_perspectives"
    | "popularity_primitives"
    | "popularity_types"
    | "release_dates"
    | "screenshots"
    | "search"
    | "themes"
    | "websites";
  query: string;
};

const getErrorReason = (error: unknown) =>
  error instanceof Error ? error.message : String(error);

export const queryIgdb = async <T>({
  endpoint,
  query,
}: QueryIgdbParams): Promise<T[]> => {
  const response = await fetch(`${IGDB_API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.IGDB_CLIENT_ID ?? "",
      Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN ?? ""}`,
    },
    body: query,
    signal: AbortSignal.timeout(IGDB_TIMEOUT_MS),
  }).catch((error: unknown) => {
    throw new IgdbApiError(
      `IGDB /${endpoint} request failed: ${getErrorReason(error)}`,
      { cause: error },
    );
  });

  if (!response.ok) {
    throw new IgdbApiError(
      `IGDB /${endpoint} responded with status ${response.status}`,
      { status: response.status },
    );
  }

  return response.json().catch((error: unknown) => {
    throw new IgdbApiError(
      `IGDB /${endpoint} response body could not be read: ${getErrorReason(error)}`,
      { cause: error },
    );
  });
};
