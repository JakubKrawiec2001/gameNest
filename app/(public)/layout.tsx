import { HeaderMain } from "@/components/header/header-main";
import { QuickActions } from "@/components/quick-actions";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderMain />
      <main className="min-h-screen grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] container py-8 lg:py-10">
        {children}
        <QuickActions />
      </main>
    </div>
  );
}
