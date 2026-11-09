import { HomeHero } from "@/features/home/components/home-hero";
import { HomeSidebar } from "@/features/home/components/home-sidebar";
import { PopularGames } from "@/features/home/components/popular-games";
import { RandomGameBanner } from "@/features/home/components/random-game-banner";
import { RecentReviews } from "@/features/home/components/recent-reviews";

export const HomePage = () => {
  return (
    <main className="container flex flex-col gap-10 py-8 lg:py-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="flex min-w-0 flex-col gap-10">
          <HomeHero />
          <PopularGames />
          <RecentReviews />
        </div>
        <HomeSidebar />
      </div>
      <RandomGameBanner />
    </main>
  );
};
