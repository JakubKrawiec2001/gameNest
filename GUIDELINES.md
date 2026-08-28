# Developer guidelines

Zasady pracy z gitem w projekcie GameNest. Konwencje są celowo zgodne z tym, jak pracujemy w Foodango — łatwiej przenosić nawyki między repozytoriami.

## Branche

`main` — jedyna długożyciowa gałąź. Trafia do niej wyłącznie kod, który działa i przechodzi lint oraz typecheck.

Pracę prowadzimy na branchach zadaniowych tworzonych z `main`:

`<type>/<name>`

Gdzie `<type>` to jedno z:

- `feature` — nowa funkcjonalność
- `fix` / `bugfix` — poprawka błędu
- `hotfix` — krytyczna poprawka
- `refactor` — zmiana kodu bez zmiany zachowania
- `style` — zmiany nieingerujące w logikę (formatowanie, whitespace)
- `docs` — tylko dokumentacja
- `test` — testy
- `chore` — build, zależności, infrastruktura
- `ci` — konfiguracja CI

`<name>` to opis do 3 słów rozdzielonych myślnikiem:

```
feature/add-game-card
bugfix/header-mobile-menu
docs/update-agents
```

## Commity

Każdy commit prefiksujemy jednym emoji **Gitmoji** — pełna lista i znaczenia w `GITMOJI_GUIDELINES.md`.

```
<emoji> <podsumowanie w trybie rozkazującym>
```

Zasady:

- podsumowanie do 50 znaków, tryb rozkazujący (`Add`, `Fix`, `Refactor`),
- treść commita (body) łamana na 72 znakach,
- jeden commit = jedna logiczna zmiana; nie mieszaj refaktoru z nową funkcją.

Przykład historii na branchu `feature/add-navigation`:

```
✨ Add header container
✨ Add navigation links
💄 Add mobile navigation panel
🐛 Fix search input alignment
```

## Pull requesty

- Tytuł PR: gitmoji + opis do 10 słów (`✨ Add navigation bar`).
- Opis PR: co zostało zrobione, dlaczego i jak to sprawdzić. Przy zmianach UI dodaj screenshot.
- Commity w PR squashujemy przy merge; wiadomość squasha = tytuł PR.
- Przed merge: `bun run lint` i `bunx tsc --noEmit` muszą przechodzić.

### PR otwierane przez agenta AI

- Agent nie commituje, nie pushuje i nie otwiera PR bez wyraźnej prośby.
- PR otwarty przez agenta AI musi mieć komentarze inline na zmienionych liniach — każdy z prefiksem `Agent AI: ` i wyjaśnieniem co oraz dlaczego zostało zmienione.
- W opisie PR agent wypisuje wprost, co zweryfikował komendami, a czego nie sprawdził.

## Czego nie robimy

- Branchy nazwanych imieniem, `test2`, `asdasd`.
- Commitów typu `fix`, `init`, `new code`, `wip` bez kontekstu.
- Push bezpośrednio do `main` przy zmianach większych niż literówka.
- `git commit --no-verify` — pre-commit hook jest częścią procesu.
