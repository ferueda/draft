# Command matrix

The Makefile is the agent-facing command surface. Package scripts remain useful for focused local
iteration, but repeatable workflows should be wrapped in a named Make target.

| Command                  | When                                | Mutates?                | Notes                                     |
| ------------------------ | ----------------------------------- | ----------------------- | ----------------------------------------- |
| `make install`           | First setup or dependency changes   | Yes, local dependencies | Runs `pnpm install`.                      |
| `make check-local-env`   | Before a future live CLI run        | No                      | Reports missing `.env.local` or API key.  |
| `make prepare-local-env` | First local setup                   | Yes, local only         | Creates `.env.local` only when absent.    |
| `make format`            | Apply formatting                    | Yes, source/docs        | Runs Oxfmt.                               |
| `make fix`               | After formatting failures           | Yes, source/docs        | Currently wraps `make format`.            |
| `make precommit`         | Before every commit                 | Staged files only       | Fix formatting, then lint and typecheck.  |
| `make check`             | Fast iteration or before review     | No                      | Format check, lint, typecheck, and tests. |
| `make verify`            | Normal handoff / definition of done | No                      | The authoritative local gate.             |

There is intentionally no `make agent` target yet because the agent runtime has not been built.
`make verify` does not call `make check-local-env` because repository correctness must be verifiable
offline.
