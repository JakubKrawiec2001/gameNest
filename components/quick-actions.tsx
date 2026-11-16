export const QuickActions = () => {
  return (
    <aside className="flex flex-col gap-4">
      {/* User profile */}
      <div className="h-34 rounded-lg border border-border bg-card" />
      {/* Currently playing */}
      <div className="h-32 rounded-lg border border-border bg-card" />
      {/* Quick actions */}
      <div className="h-44 rounded-lg border border-border bg-card" />
      {/* Trending lists */}
      <div className="h-64 rounded-lg border border-border bg-card" />
      {/* Friends activity */}
      <div className="h-108 rounded-lg border border-border bg-card" />
    </aside>
  );
};
