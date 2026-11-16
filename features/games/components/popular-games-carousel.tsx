import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PopularGameCard } from "@/features/games/components/popular-game-card";
import type { Game } from "@/features/games/types/games.types";
import { cn } from "@/lib/utils";

const arrowClassName =
  "top-[calc(15cqw_-_0.6rem)] bottom-auto my-0 border-white/50! bg-background-dark! -translate-y-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:opacity-100 hover:bg-brand! hover:text-brand-foreground disabled:hidden cursor-pointer size-10";

type PopularGamesCarouselProps = {
  popularGames: Game[];
};

export const PopularGamesCarousel = ({
  popularGames,
}: PopularGamesCarouselProps) => {
  const sortByRating = (a: Game, b: Game) =>
    (b.total_rating ?? 0) - (a.total_rating ?? 0);

  if (popularGames.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{ align: "start", dragFree: true, slidesToScroll: "auto" }}
      aria-label="Popular games"
      className="group @container"
    >
      <CarouselContent>
        {popularGames.sort(sortByRating).map((game) => (
          <CarouselItem
            key={game.id}
            className="basis-1/2 xs:basis-1/3 md:basis-1/5"
          >
            <PopularGameCard game={game} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className={cn(arrowClassName, "left-2")} />
        <CarouselNext className={cn(arrowClassName, "right-2")} />
      </div>
    </Carousel>
  );
};
