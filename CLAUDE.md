# CLAUDE.md

Claude pracujący w tym repozytorium musi najpierw przeczytać i stosować `AGENTS.md`.

Dodatkowo:

- przy zmianach w UI, kolorach, typografii i tokenach — przeczytaj `docs/design-system.md`,
- przy tworzeniu branchy, commitów i pull requestów — stosuj `GUIDELINES.md` oraz `GITMOJI_GUIDELINES.md`.

Gdy instrukcje są ze sobą sprzeczne, pierwszeństwo ma dokument bardziej szczegółowy dla danego obszaru (`docs/*` przed `AGENTS.md`).

## Szybki start

| Komenda | Do czego |
| --- | --- |
| `bun dev` | dev server na http://localhost:3000 |
| `bun run build` | build produkcyjny |
| `bun run lint` | `biome check` (lint + format + organize imports) |
| `bunx biome check --write <ścieżki>` | auto-fix na zakresie zmiany |
| `bunx tsc --noEmit` | typecheck |

Menedżerem pakietów jest **bun** (`bun.lock`). Nie używaj `npm install` ani `pnpm install` w tym repo.
