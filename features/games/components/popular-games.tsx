import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { getPopularGames } from "../api/get-popular-games";
import { PopularGamesCarousel } from "./popular-games-carousel";

export const PopularGames = async () => {
  const popularGames = await getPopularGames({ limit: "10" });

  return (
    <SectionContainer
      heading="Popular Games"
      customAction={
        <div className="flex items-center gap-1 group cursor-pointer">
          {/* Change link href when page structure changes */}
          <Link
            href="/games"
            className="text-brand group-hover:underline underline-offset-4"
          >
            See all
          </Link>
          <ChevronRight className="size-4 text-brand" />
        </div>
      }
    >
      <PopularGamesCarousel popularGames={popularGames} />
    </SectionContainer>
  );
};
