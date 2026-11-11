import { format } from "date-fns";
import { Star } from "lucide-react";
import Image from "next/image";
import type { FeaturedGame } from "@/features/games/types/featured-games.types";
import { getIgdbImageUrl } from "@/lib/igdb/get-igdb-image-url";

const MAX_GENRES = 2;

type Props = {
  game: FeaturedGame;
};

export const FeaturedGameCarouselItem = ({ game }: Props) => {
  const artwork = game.artworks.at(0);
  const genres = game.genres?.slice(0, MAX_GENRES) ?? [];
  const releaseDate = format(game.first_release_date * 1000, "dd MMM yyyy");
  const rating = (game.total_rating / 10).toFixed(1);

  return (
    <article className="relative overflow-hidden rounded-lg h-96 sm:h-112 lg:h-128">
      {artwork && (
        <Image
          src={getIgdbImageUrl(artwork.image_id, "1080p")}
          alt=""
          fill
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6 pr-24 sm:p-8 sm:pr-28 lg:p-10 lg:pr-32">
        {genres.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <li
                key={genre.id}
                className="rounded-sm bg-background-dark px-2 py-1 text-xs font-medium text-brand"
              >
                {genre.name}
              </li>
            ))}
          </ul>
        )}

        <h2 className="text-2xl font-bold sm:text-3_5xl lg:text-4_5xl">
          {game.name}
        </h2>

        {game.summary && (
          <p className="line-clamp-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {game.summary}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="flex items-center gap-1 font-semibold text-foreground">
            <Star
              aria-hidden
              className="fill-primary text-primary size-5 pb-0.5"
            />
            {rating}
          </span>
          <span className="text-white">{releaseDate}</span>
        </div>
      </div>
    </article>
  );
};
