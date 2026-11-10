import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

// Headers @supabase/ssr adds whenever it sets auth cookies, so that
// responses carrying a session are never cached by a CDN or browser.
const SESSION_CACHE_HEADERS = ["Cache-Control", "Expires", "Pragma"] as const;

// Use instead of NextResponse.redirect() in the proxy. A new redirect response
// starts empty, so it would drop the cookies Supabase set on `sessionResponse`
// during getClaims() (refreshed tokens or removal of a dead session).
const redirectWithSession = (
  url: URL,
  sessionResponse: NextResponse,
): NextResponse => {
  const redirectResponse = NextResponse.redirect(url);

  for (const cookie of sessionResponse.cookies.getAll()) {
    redirectResponse.cookies.set(cookie);
  }

  for (const header of SESSION_CACHE_HEADERS) {
    const value = sessionResponse.headers.get(header);

    if (value !== null) {
      redirectResponse.headers.set(header, value);
    }
  }

  return redirectResponse;
};

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          // biome-ignore lint/suspicious/useIterableCallbackReturn: <explanation>
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          // biome-ignore lint/suspicious/useIterableCallbackReturn: <explanation>
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
          // biome-ignore lint/suspicious/useIterableCallbackReturn: <explanation>
          Object.entries(headers).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value),
          );
        },
      },
    },
  );

  // Do not run code between createServerClient and
  // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: If you remove getClaims() and you use server-side rendering
  // with the Supabase client, your users may be randomly logged out.
  const { data: claims } = await supabase.auth.getClaims();

  const protectedRoutes = ["/account", "/settings"];

  if (protectedRoutes.includes(request.nextUrl.pathname) && !claims) {
    return redirectWithSession(
      new URL("/sign-in", request.url),
      supabaseResponse,
    );
  }

  return supabaseResponse;
}
