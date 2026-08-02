# Repository Investigator Agent

This is a scaffold for a small, staged TypeScript project that will teach how a tool-using coding
agent is built. A future user will give it an investigation task, such as understanding why
authentication tests fail. The agent will eventually inspect a local fixture repository, report
evidence, and—only after explicit policy and human approval—propose or apply changes.

The runtime is intentionally not implemented yet. The repository starts with the project harness:
intent, architecture boundaries, test guidance, commands, setup helpers, and a verification gate.

## Quick start

Requirements: Node.js 22.13+ and pnpm 11.18.0.

```bash
pnpm install
make verify
```

The verification gate is offline and does not require an API key. When the first live model stage is
started, use `make prepare-local-env` and put credentials in `.env.local`; never commit them.

After installation, `simple-git-hooks` installs a pre-commit hook that runs `make precommit` through
the package script. It checks formatting, lint, and types without changing or staging files.

## Project map

- [`AGENTS.md`](AGENTS.md) — short operating map for agents and contributors.
- [`docs/project-intent.md`](docs/project-intent.md) — product boundaries and hard invariants.
- [`docs/architecture.md`](docs/architecture.md) — current scaffold and planned boundaries.
- [`docs/testing.md`](docs/testing.md) — where proof belongs and how to keep checks cheap.
- [`docs/commands.md`](docs/commands.md) — command matrix, including what mutates local state.
- [`docs/script-inventory.md`](docs/script-inventory.md) — public scripts and their safety notes.
- [`docs/roadmap.md`](docs/roadmap.md) — the direct API → Pi → Eve learning path.
- [`fixtures/repositories/README.md`](fixtures/repositories/README.md) — future fixture layout.

## Development loop

Orient in the docs, make the smallest stage-appropriate change, add focused proof, run the relevant
scoped check, then run `make verify` before handoff. Repeated review feedback belongs in a document,
test, lint rule, or command.
