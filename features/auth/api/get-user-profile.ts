import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { getUserSession } from "./get-user-session";

export const getUserProfile = cache(async () => {
  const supabase = await createClient();
  const session = await getUserSession();

  if (!session) {
    throw new Error("User is not authenticated");
  }

  const { data: userProfile, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", session.sub)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return userProfile;
});
