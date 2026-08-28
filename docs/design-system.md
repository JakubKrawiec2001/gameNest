# Design system — GameNest

Źródłem prawdy jest `app/globals.css`. Tailwind v4 nie ma pliku konfiguracyjnego — wszystko jest w CSS (`@theme`, `@theme inline`, `:root`, `.dark`).

## Motyw

Aplikacja jest **dark-first**. Klasa `dark` jest ustawiona na `<html>` w `app/layout.tsx`, więc tokeny semantyczne shadcn (`--background`, `--card`, `--primary`, …) rozwiązują się do palety GameNest.

## Paleta

Kolory z designu są zmapowane na tokeny shadcn, żeby komponenty z `components/` i `components/ui/` od razu wyglądały poprawnie bez dopisywania klas.

| Kolor z designu | HEX | Token / utility | Zastosowanie |
| --- | --- | --- | --- |
| Yellow / Primary | `#F4C919` | `bg-primary`, `text-primary`, `bg-brand`, `ring-primary` | główny kolor marki, CTA, gwiazdki, aktywne elementy |
| Background | `#0B0D11` | `bg-background` | główne tło strony |
| Background Dark | `#0A0C0F` | `bg-bg-dark` | najciemniejsze fragmenty, gradienty |
| Surface | `#111316` | `bg-card`, `bg-popover`, `bg-surface` | karty, sekcje, popovery |
| Surface 2 | `#121417` | `bg-muted`, `bg-secondary`, `bg-surface-2` | alternatywne karty i elementy |
| Surface 3 | `#14161A` | `bg-accent`, `bg-surface-3` | hover, podniesione elementy |
| Border | `#1D1D1E` | `border-border`, `border-input` | obramowania kart i inputów |
| Text Primary | `#F5F5F5` | `text-foreground` | nagłówki i główny tekst |
| Text Secondary | `#CFCDBC` | `text-fg-secondary` | ważny tekst drugorzędny |
| Text Muted | `#9EA2A0` | `text-muted-foreground` | opisy, timestampy, metadata |
| Text Dimmed | `#657072` | `text-fg-dimmed` | najmniej istotne informacje |

Zasady:

- W komponentach używaj **tokenów semantycznych** (`bg-background`, `bg-card`, `text-muted-foreground`, `border-border`, `bg-primary text-primary-foreground`). Utility marki (`bg-brand`, `bg-surface-2`, `text-fg-dimmed`) stosuj tam, gdzie shadcn nie ma odpowiednika.
- Nie wpisuj hexów w klasy (`bg-[#0b0d11]`) ani w style inline. Brakujący kolor dodaj jako token w `globals.css` i opisz go w tej tabeli.
- Żółty jest kolorem akcentu — na dużych powierzchniach używaj go oszczędnie; tekst na żółtym to `text-primary-foreground` (`#0B0D11`), nigdy biały.
- Tokeny w `@theme` (paleta marki) są stałe. Tokeny w `.dark` (semantyka shadcn) są jedynym miejscem, gdzie zmieniamy wygląd całego UI.

## Typografia

- Font: **Poppins** (lokalny, `config/fonts.ts`), wagi 300–700, wystawiony jako `--font-sans` i `--font-heading`. W kodzie po prostu `font-sans` / `font-medium` itd.
- Dodatkowe rozmiary poza skalą Tailwind: `text-xxs` (0.625rem), `text-3_5xl` (2rem), `text-4_5xl` (2.5rem), `text-5_5xl` (3.5rem), `text-6_5xl` (4rem).

## Layout

- Breakpointy (własne, poza domyślnymi): `xss` 390px, `xs` 480px, `sm` 640px, `md` 768px, `lg` 1024px, `xl` **1312px**, `2xl` 1536px, `3xl` 1800px. Uwaga: `xl` jest przestawiony na 1312px.
- `container` to własne utility (nie plugin) — auto-margin, `padding-inline: 1rem` i max-width rosnący do 1800px. Używaj go do wyrównania sekcji do siatki strony.
- Promienie: `--radius: 0.625rem` z pochodnymi `rounded-sm|md|lg|xl|2xl|3xl|4xl`. Nie wstawiaj `rounded-[Xpx]`.

## Komponenty

- Kolejność wyboru: `components/` → `components/ui/` → `bunx shadcn@latest add <komponent>` → własny komponent. Szczegóły w `AGENTS.md`.
- Style shadcn: `radix-nova`, `baseColor: neutral`, ikony `lucide-react` (`components.json`).
- Ikony domyślnie `size-4`; wewnątrz `Button` rozmiar ikony jest ustawiany przez warianty — nie nadpisuj bez potrzeby.
