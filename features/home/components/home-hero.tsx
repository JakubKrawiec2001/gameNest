import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { FeaturedGamesCarousel } from "@/features/games/components/featured-games-carousel";

export const HomeHero = () => {
  return (
    <section>
      <Suspense
        fallback={<Skeleton className="rounded-lg h-96 sm:h-112 lg:h-128" />}
      >
        <FeaturedGamesCarousel />
      </Suspense>
    </section>
  );
};
