import { SignOutButton } from "@/features/auth/components/sign-out-button";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getClaims();

  return (
    <div className="text-5xl font-regular  container">
      <h1 className="text-5xl font-regular  container">GameNest</h1>
      <p className="text-5xl font-regular  container">{user?.claims.email}</p>
      <SignOutButton />
    </div>
  );
}
