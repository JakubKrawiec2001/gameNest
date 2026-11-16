import { Star } from "lucide-react";
import Image from "next/image";
import type { Game } from "@/features/games/types/games.types";
import { getIgdbImageUrl } from "@/lib/igdb/get-igdb-image-url";

type PopularGameCardProps = {
  game: Game;
};

export const PopularGameCard = ({ game }: PopularGameCardProps) => {
  const rating = ((game.total_rating ?? 0) / 10).toFixed(1);

  return (
    <article className="flex flex-col gap-3">
      <div className="relative aspect-2/3 overflow-hidden rounded-md border border-border bg-surface-3">
        {game.cover && (
          <Image
            src={getIgdbImageUrl(game.cover.image_id, "cover_big")}
            alt=""
            fill
            sizes="(min-width: 768px) 20vw, (min-width: 480px) 33vw, 50vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-2 text-sm font-medium">{game.name}</h3>
        {rating && (
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star
              aria-hidden
              className="fill-primary text-primary size-5 pb-0.5"
            />
            {rating}
          </span>
        )}
      </div>
    </article>
  );
};
