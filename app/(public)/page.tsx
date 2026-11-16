import { PageContainer } from "@/components/layout/page-container";
import { FeaturedGames } from "@/features/games/components/featured-games";
import { PopularGames } from "@/features/games/components/popular-games";
import { RecentReviews } from "@/features/reviews/components/recent-reviews";

export default async function Home() {
  return (
    <PageContainer>
      <FeaturedGames />
      <PopularGames />
      <RecentReviews />
    </PageContainer>
  );
}
