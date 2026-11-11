export const QuickActions = () => {
  return (
    <aside className="flex flex-col gap-4">
      {/* Profil użytkownika */}
      <div className="h-34 rounded-lg border border-border bg-card" />
      {/* Aktualnie ogrywane */}
      <div className="h-32 rounded-lg border border-border bg-card" />
      {/* Szybkie akcje */}
      <div className="h-44 rounded-lg border border-border bg-card" />
      {/* Listy na czasie */}
      <div className="h-64 rounded-lg border border-border bg-card" />
      {/* Aktywność znajomych */}
      <div className="h-108 rounded-lg border border-border bg-card" />
    </aside>
  );
};
