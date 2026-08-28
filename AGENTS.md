# AGENTS.md

## Cel

Ten plik opisuje zasady pracy agentów AI (Claude Code, Cursor, Codex) nad projektem **GameNest**. Stosuj go razem z `GUIDELINES.md` (branche, commity, PR) oraz `docs/design-system.md` (kolory, typografia, tokeny).

## Stack

- **Next.js 16** (App Router, React 19, RSC) + TypeScript strict
- **Supabase** (`@supabase/ssr`) — auth i dane
- **Tailwind CSS v4** (konfiguracja w CSS: `app/globals.css`, bez `tailwind.config`)
- **shadcn/ui** (style `radix-nova`, ikony `lucide-react`)
- **TanStack Form** + **Zod v4** — formularze i walidacja
- **Zustand** — globalny stan klienta
- **Sonner** — toasty
- **Biome 2** — lint + format; **husky** + **lint-staged** na pre-commit
- **bun** — menedżer pakietów i runner (`bun.lock`)

## Struktura katalogów

```
app/                    # App Router; route groups: (auth), (public)
  layout.tsx            # root layout: font, Toaster
  globals.css           # Tailwind v4 + tokeny motywu (@theme)
components/             # prymitywy shadcn/ui — PIERWSZE ŹRÓDŁO komponentów
  ui/                   # dodatkowe komponenty shadcn — DRUGIE ŹRÓDŁO
  form/                 # pola formularzy podłączone do TanStack Form
  header/               # komponenty złożone (feature-agnostyczne UI aplikacji)
config/                 # fonts.ts (Poppins jako --font-sans)
features/<domena>/      # kod domenowy
  components/ hooks/ types/ utils/
lib/
  hooks/                # współdzielone hooki (use-app-form.ts)
  supabase/             # client.ts, server.ts, proxy.ts
  utils.ts              # cn()
  nav-links.ts          # dane nawigacji
proxy.ts                # Next proxy/middleware — odświeżanie sesji Supabase
```

Zasady umieszczania kodu:

- Kod związany z jedną domeną (auth, games, library, …) trzymaj w `features/<domena>/`, nie w `app/`.
- Pliki w `app/` powinny być cienkie: metadata, layout, złożenie komponentu z `features/`.
- Reużywalne, bezdomenowe UI → `components/`. Nie duplikuj tego w `features/`.

## Sposób pracy agenta

- Najpierw zrozum intencję zadania, istniejący przepływ użytkownika i lokalne konwencje. Nie zaczynaj implementacji od zgadywania.
- Dla prostych zmian pracuj szybko, ale sprawdź najbliższe pliki, importy i istniejące komponenty.
- Dla zmian ryzykownych lub przekrojowych przedstaw krótki plan przed edycją. Za ryzykowne uznawaj: auth i sesje Supabase, proxy/middleware, RLS i dostęp do danych, formularze, tokeny motywu w `globals.css`, root layout.
- Przed dodaniem nowego helpera, hooka lub komponentu sprawdź, czy podobny już istnieje w `components/`, `components/ui/`, `lib/` albo `features/`.
- Preferuj małe, odwracalne zmiany. Nie rób refaktorów niezwiązanych z zadaniem.
- Nie commituj, nie pushuj i nie otwieraj PR bez wyraźnej prośby użytkownika.
- Jeśli specyfikacja jest dwuznaczna — zapytaj raz, nie zgaduj.

## Komponenty I UI

Kolejność wyboru komponentu (obowiązkowa):

1. prymityw z `components/` (`Button`, `Input`, `Label`) — **zawsze najpierw tutaj**,
2. komponent z `components/ui/` (`Field`, `Separator`, `Sonner`, …),
3. brakujący komponent shadcn dociągnij CLI: `bunx shadcn@latest add <komponent>`,
4. własny komponent — dopiero gdy powyższe nie wystarczają.

Dalsze zasady:

- Jeden komponent na plik. Pliki komponentów trzymaj małe.
- Nazewnictwo plików: `kebab-case.tsx`. Eksport nazwany, komponenty aplikacji jako `export const Nazwa = () => {}`.
- Nie przeformatowuj wygenerowanych prymitywów shadcn (`function Component()` + eksport na końcu) na własną konwencję.
- Logikę biznesową, stan, efekty i mapowanie danych wydzielaj do custom hooków lub helperów. Komponent składa UI, nie ukrywa procesów biznesowych.
- Granica server/client: `"use client"` tylko tam, gdzie realnie potrzebny jest stan, efekt lub event. Nie importuj `lib/supabase/server.ts` do komponentów klientowych.
- Interaktywne ikony bez tekstu muszą mieć `aria-label`; nie stylizuj `<div>` jako przycisku.

## Styling

- Źródłem prawdy dla kolorów, breakpointów, typografii i `container` jest `app/globals.css`. Szczegóły i tabela palety: `docs/design-system.md`.
- Używaj tokenów semantycznych (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`) zamiast wpisywania hexów w klasy.
- Surowych hexów ani klas typu `bg-[#0b0d11]` nie wstawiaj w komponentach. Brakujący kolor dodaj jako token w `globals.css`.
- Do warunkowych klas używaj `cn()` z `@/lib/utils`.
- Nie sortuj ręcznie klas Tailwind tylko dla porządku.

## Formularze I Walidacja

- Formularze budujemy na TanStack Form przez `useAppForm` z `lib/hooks/use-app-form.ts`. Nowe typy pól rejestruj tam w `fieldComponents` (wzór: `FormInput`).
- Schematy walidacji pisz w Zod v4 i trzymaj razem z hookiem domeny (wzór: `features/auth/hooks/use-auth-form.ts` — `formOptions` + `validators.onSubmit`).
- Błędy z API mapuj na komunikaty użytkownika przez handler domenowy (wzór: `features/auth/utils/auth-errors-handler.ts`), a nie surowym tekstem z backendu.
- Sukces i błąd komunikuj przez `toast` z `sonner`. Obsłuż loading i zablokuj podwójny submit.

## Supabase, Auth I Dane

- Klient przeglądarkowy: `lib/supabase/client.ts` (komponenty klientowe). Klient serwerowy: `lib/supabase/server.ts` (RSC, server actions, route handlers). Odświeżanie sesji: `lib/supabase/proxy.ts` używane w `proxy.ts` w katalogu głównym.
- W `lib/supabase/proxy.ts` nie wstawiaj kodu między `createServerClient` a `supabase.auth.getClaims()` i nie usuwaj tego wywołania — użytkownicy będą losowo wylogowywani.
- Do sprawdzania sesji na serwerze używaj `supabase.auth.getClaims()`, zgodnie z istniejącym kodem.
- Po stronie klienta wolno używać wyłącznie `NEXT_PUBLIC_*`. Klucze serwisowe (`service_role`) nigdy nie mogą trafić do kodu klienckiego ani do repo.
- Nie loguj tokenów, sesji, e-maili ani innych danych użytkowników do konsoli.

## Stan Aplikacji

- Stan serwera pobieraj w RSC; nie duplikuj go w globalnym store.
- Stan lokalny: `useState`. Stan globalny klienta (np. UI, koszyk, filtry): Zustand w `lib/stores/` lub `features/<domena>/stores/`.
- Nie trzymaj w store danych, które można wyliczyć z propsów albo URL. Filtry i paginację preferuj w search params.

## TypeScript

- Wyłącznie silnie typowany TypeScript. Bez `any`, bez zbędnych rzutowań, bez `!` (non-null assertion) w nowym kodzie aplikacji.
- Typy pochodne od Supabase trzymaj w jednym miejscu i importuj; nie duplikuj kształtów danych w komponentach.
- Lokalne typy opisują stan UI albo dane po transformacji.
- Stosuj early return i proste przepływy danych.

## Formatowanie I Lintowanie

- `biome.json` jest źródłem prawdy dla reguł (włączone domeny `next` i `react`, `organizeImports`).
- Weryfikacja: `bun run lint` (całe repo) albo `bunx biome check <ścieżki>` na zakresie zmiany.
- Auto-fix: `bunx biome check --write <ścieżki>`.
- Typecheck: `bunx tsc --noEmit`.
- Ostrzeżenia Biome traktuj jako sygnał do poprawy kodu (dostępność, zależności hooków, nieużywane zmienne, `key` z indeksu, importy serwerowe w kliencie), a nie do wyciszenia regułą.
- Nowe `biome-ignore` dodawaj tylko z konkretnym uzasadnieniem w komentarzu.
- Pre-commit (husky + lint-staged) uruchamia `biome check --write` na plikach w commicie — nie obchodź go przez `--no-verify`.

## Zasada Przed Implementacją

Nie zaczynaj pisać kodu, jeśli zadanie nie jest jednoznaczne. Najpierw ustal:

- jaki problem użytkownika rozwiązujemy,
- jaki jest oczekiwany efekt w UI i w danych,
- które istniejące pliki, komponenty, hooki i tokeny są powiązane,
- czy zmiana dotyka obszaru ryzykownego: auth, sesja, proxy, dostęp do danych, formularze, tokeny motywu.

## Debugowanie

Przy naprawie błędu nie zgaduj rozwiązania na podstawie objawu. Najpierw ustal:

- gdzie błąd jest widoczny dla użytkownika,
- jaki event, request albo stan go wywołuje,
- gdzie dane zmieniają się po drodze,
- czy problem jest w UI, hooku, kliencie Supabase, typach, cache Next.js, walidacji czy konfiguracji.

Wskaż najbardziej prawdopodobną przyczynę i pliki, które ją potwierdzają, przed zmianą kodu.

Nie maskuj błędów przez: puste `catch`, ogólny fallback, ignorowanie typów, `as any`, usuwanie walidacji, wyłączanie reguł Biome.

Po poprawce zweryfikuj, że naprawiony jest mechanizm, a nie objaw.

## Jakość I Weryfikacja

- Weryfikuj faktycznie wykonanymi komendami: `bunx tsc --noEmit`, `bunx biome check`, a przy zmianach UI uruchomienie `bun dev` i sprawdzenie ekranu.
- Raportuj wynik uczciwie: jeśli coś nie przechodzi, podaj output; jeśli czegoś nie sprawdziłeś, powiedz to.
- Dla danych asynchronicznych obsłuż stany loading, error i empty. Bez pustych ekranów i niemych błędów.
- Po większej zmianie sprawdź ryzyka: wyciek danych do klienta, brak obsługi błędów, podwójny submit, regresje dostępności, niepotrzebny wzrost bundle, przypadkowe `"use client"` wysoko w drzewie.

## Zakazy

- Nie dodawaj nowej zależności, jeśli wystarczy istniejąca biblioteka lub standardowe API — a jeśli jest konieczna, wyjaśnij dlaczego.
- Nie twórz własnego komponentu, gdy odpowiednik jest w `components/` lub `components/ui/`.
- Nie wpisuj hexów kolorów w klasy komponentów.
- Nie edytuj `.env` ani nie dopisuj sekretów do repo.
- Nie zostawiaj TODO, placeholderów, zakomentowanego i martwego kodu.
- Nie zmieniaj zachowania niezwiązanego z zadaniem tylko dlatego, że plik jest otwarty w edytorze.
- Nie commituj, nie pushuj i nie otwieraj PR bez wyraźnej prośby.
