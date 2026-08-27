"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export const AuthListener = () => {
  const supabase = createClient();
  const router = useRouter();
  // Finish it when needed
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, _session) => {
        if (
          event === "SIGNED_OUT" ||
          event === "USER_UPDATED" ||
          event === "SIGNED_IN"
        ) {
          router.refresh();
        }
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase, router]);
  return null;
};
