"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { createClient } from "@/lib/supabase/client";

export const SignOutButton = () => {
  const supabase = createClient();
  const router = useRouter();
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/sign-in");
    }
  };
  return <Button onClick={handleSignOut}>Sign Out</Button>;
};
