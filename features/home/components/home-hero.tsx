import { Plus } from "lucide-react";
import { Button } from "@/components/button";

export const HomeHero = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center">
      <div className="flex flex-col items-start gap-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Witaj ponownie!
        </span>
        <h1 className="text-4xl font-bold leading-tight">Co dziś zagrasz?</h1>
        <p className="text-muted-foreground">
          Odkrywaj. Oceniaj. Śledź. Twoje gry. Twoja historia.
        </p>
        <Button
          type="button"
          size="lg"
          className="mt-2 h-10 px-5 font-semibold uppercase"
        >
          <Plus />
          Dodaj grę
        </Button>
      </div>
      {/* Polecane — karuzela */}
      <div className="h-72 rounded-lg border border-border bg-card sm:h-86" />
    </section>
  );
};
