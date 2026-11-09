import { Shuffle } from "lucide-react";
import { Button } from "@/components/button";

const randomGameCoversPlaceholders = Array.from(
  { length: 5 },
  (_, index) => `random-game-cover-${index}`,
);

export const RandomGameBanner = () => {
  return (
    <section className="flex flex-col gap-6 overflow-hidden rounded-lg border border-border bg-card p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col items-start gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Nie wiesz, w co zagrać?
        </span>
        <h2 className="text-xl font-semibold">
          Losuj grę spośród swojej biblioteki
        </h2>
        <p className="text-sm text-muted-foreground">
          Pozwól, że wybierzemy coś dla Ciebie!
        </p>
        <Button
          type="button"
          size="lg"
          className="mt-3 h-10 px-5 font-semibold uppercase"
        >
          <Shuffle />
          Losuj grę
        </Button>
      </div>
      <div className="relative hidden items-center gap-3 lg:flex">
        {randomGameCoversPlaceholders.map((key) => (
          <div
            key={key}
            className="aspect-3/4 w-24 rounded-md border border-border bg-surface-3"
          />
        ))}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-primary text-primary-foreground [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
        >
          <Shuffle className="size-6" />
        </div>
      </div>
    </section>
  );
};
