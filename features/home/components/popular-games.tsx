import { HomeSectionHeader } from "@/features/home/components/home-section-header";

const popularGamesPlaceholders = Array.from(
  { length: 5 },
  (_, index) => `popular-game-${index}`,
);

export const PopularGames = () => {
  return (
    <section className="flex flex-col gap-4">
      <HomeSectionHeader title="Popularne gry" actionLabel="Zobacz wszystkie" />
      <div className="grid grid-cols-2 gap-4 xs:grid-cols-3 md:grid-cols-5">
        {popularGamesPlaceholders.map((key) => (
          <div key={key} className="flex flex-col gap-2">
            <div className="aspect-2/3 rounded-lg border border-border bg-card" />
            <div className="h-14 rounded-lg bg-card" />
          </div>
        ))}
      </div>
    </section>
  );
};
