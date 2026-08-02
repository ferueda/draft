# Testing guide

The cheapest test that proves the behavior is the default. Tests should be deterministic and runnable
without network access or real credentials.

## Current layers

| Layer          | Use it for                                                            | Location                       | Default command             |
| -------------- | --------------------------------------------------------------------- | ------------------------------ | --------------------------- |
| Unit           | Agent boundaries, prompts, parsers, policies, and tool behavior       | Beside source as `*.test.ts`   | `pnpm test -- --run <file>` |
| Fixture        | Investigation tasks and expected evidence against a small repository  | `fixtures/` plus focused tests | Stage-specific command      |
| Provider smoke | Confirm the real SDK and credentials work                             | Manual/local only              | Stage-specific command      |
| End-to-end     | A complete transport or production workflow when the boundary matters | Add only when needed           | Future stage                |

The scaffold has no behavior tests yet. Vitest is configured with `--passWithNoTests` so the project
gate remains useful before the first implementation exists.

## Rules

- Put a focused unit test next to the code it proves.
- Use a fixture when repository structure or captured test output is the behavior under investigation.
- Do not pin tests to incidental provider wording or UI copy.
- Do not make the default test command depend on network access, Docker, or an API key.
- Add policy and boundary tests before adding a command or write capability.
- Keep the final gate broad enough to catch formatting, lint, type, and behavioral regressions.

## Current gate

```bash
make verify
```

It runs Oxfmt check, Oxlint, TypeScript typechecking, and Vitest. A live model call will be a manual
smoke check in a later stage, not part of the repository gate.
