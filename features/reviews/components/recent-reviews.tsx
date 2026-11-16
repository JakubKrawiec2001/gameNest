import { Button } from "@/components/button";
import { SectionContainer } from "@/components/layout/section-container";

const recentReviewsPlaceholders = Array.from(
  { length: 3 },
  (_, index) => `recent-review-${index}`,
);

export const RecentReviews = () => {
  return (
    <SectionContainer heading="Recent Reviews">
      <div className="flex flex-col gap-3">
        {recentReviewsPlaceholders.map((key) => (
          <div
            key={key}
            className="h-36 rounded-lg border border-border bg-card"
          />
        ))}
      </div>
      <Button
        type="button"
        variant="ghost"
        size="lg"
        className="self-center border-primary px-5 text-xs font-semibold uppercase text-primary hover:text-primary"
      >
        See more
      </Button>
    </SectionContainer>
  );
};
