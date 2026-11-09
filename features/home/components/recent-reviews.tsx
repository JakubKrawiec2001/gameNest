import { Button } from "@/components/button";
import { HomeSectionHeader } from "@/features/home/components/home-section-header";

const recentReviewsPlaceholders = Array.from(
  { length: 3 },
  (_, index) => `recent-review-${index}`,
);

export const RecentReviews = () => {
  return (
    <section className="flex flex-col gap-4">
      <HomeSectionHeader
        title="Ostatnie recenzje"
        actionLabel="Zobacz wszystkie"
      />
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
        Zobacz więcej
      </Button>
    </section>
  );
};
