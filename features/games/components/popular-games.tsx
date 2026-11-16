import { SectionContainer } from "@/components/layout/section-container";
import { getPopularGames } from "../api/get-popular-games";
import { PopularGamesCarousel } from "./popular-games-carousel";

export const PopularGames = async () => {
  const popularGames = await getPopularGames({ limit: "10" });

  return (
    <SectionContainer heading="Popular Games">
      <PopularGamesCarousel popularGames={popularGames} />
    </SectionContainer>
  );
};
