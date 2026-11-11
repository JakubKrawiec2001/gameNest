import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getFeaturedGames } from "@/features/games/api/get-featured-games";
import { FeaturedGameCarouselItem } from "@/features/games/components/featured-game-carousel-item";

export const FeaturedGamesCarousel = async () => {
  const featuredGames = await getFeaturedGames();

  if (!featuredGames) {
    return null;
  }
  return (
    <Carousel
      opts={{ loop: true }}
      aria-label="Featured games"
      className="overflow-hidden rounded-lg border border-border bg-card"
    >
      <CarouselContent className="ml-0">
        {featuredGames.map((game) => (
          <CarouselItem key={game.id} className="pl-0">
            <FeaturedGameCarouselItem game={game} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute right-6 bottom-6 flex gap-2 sm:right-8 sm:bottom-8">
        <CarouselPrevious className="static cursor-pointer hover:bg-brand! transition-colors hover:text-brand-foreground" />
        <CarouselNext className="static cursor-pointer hover:bg-brand! transition-colors hover:text-brand-foreground" />
      </div>
    </Carousel>
  );
};
