import { HeaderMain } from "@/components/header/header-main";
import { SignOutButton } from "@/features/auth/components/sign-out-button";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getClaims();

  return (
    <div>
      <HeaderMain />
      <p className="text-5xl container">{user?.claims.email}</p>
      <SignOutButton />
    </div>
  );
}
