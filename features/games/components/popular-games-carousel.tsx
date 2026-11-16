import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PopularGameCard } from "@/features/games/components/popular-game-card";
import type { Game } from "@/features/games/types/games.types";

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
      opts={{ align: "start", dragFree: true }}
      aria-label="Popular games"
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
    </Carousel>
  );
};
