import { cache } from "react";
import { createClient } from "../../../lib/supabase/server";

export const getUserSession = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data) {
    throw new Error(error?.message);
  }

  return data.claims;
});
