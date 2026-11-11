import { HeaderMain } from "@/components/header/header-main";
import { QuickActions } from "@/components/quick-actions";
import { FeaturedGames } from "@/features/games/components/featured-games";
import { PopularGames } from "@/features/games/components/popular-games";
import { RecentReviews } from "@/features/reviews/components/recent-reviews";

export default async function Home() {
  return (
    <div>
      <HeaderMain />
      <main className="container flex flex-col gap-10 py-8 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="flex min-w-0 flex-col gap-10">
            <FeaturedGames />
            <PopularGames />
            <RecentReviews />
          </div>
          <QuickActions />
        </div>
      </main>
    </div>
  );
}
