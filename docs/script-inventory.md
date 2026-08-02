# Script inventory

Scripts are part of the project’s public workflow. Keep their names explicit about scope and
mutability.

| Path                            | Domain      | Public wrapper           | Mode      | Notes                                                                      |
| ------------------------------- | ----------- | ------------------------ | --------- | -------------------------------------------------------------------------- |
| `scripts/check-local-env.mjs`   | Local setup | `make check-local-env`   | Read-only | Checks for a local env file and API key without printing secrets.          |
| `scripts/prepare-local-env.mjs` | Local setup | `make prepare-local-env` | Mutating  | Copies `.env.example` to `.env.local` only when the destination is absent. |

`make verify`, `pnpm lint`, `pnpm typecheck`, and `pnpm test` are repository checks rather than
standalone scripts. The `pre-commit` hook calls `make precommit`, which fixes formatting on staged
files, then runs lint and typecheck. CI calls the same `make verify` gate used locally.
