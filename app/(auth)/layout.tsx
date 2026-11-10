import { redirect } from "next/navigation";
import { getUserSession } from "@/features/auth/api/get-user-session";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getUserSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className="bg-background min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
