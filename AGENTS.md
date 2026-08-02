# Repository Investigator Agent

This repository is currently a scaffold for a TypeScript learning project. Read
[`docs/project-intent.md`](docs/project-intent.md) before making product or architecture decisions.

## Non-negotiables

- Keep the learning stages explicit. Do not hide the agent loop behind a framework before the direct
  implementation has been understood and tested.
- This turn is scaffold-only: do not add agent behavior, provider calls, tools, persistence, or
  production infrastructure unless a later task explicitly asks for implementation.
- Treat model output as untrusted input. Future filesystem access, command execution, and writes must
  stay behind explicit boundaries and policy checks.
- Do not invent credentials, call real repositories, or add external integrations without an explicit
  task requiring them.
- Prefer the simplest implementation that fully meets the current stage. Do not preserve backward
  compatibility unless the task explicitly asks for it.
- Every future behavior change needs the cheapest test that proves it. The final handoff gate is
  `make verify`.

## Working principles

- Use clear, simple language. Prefer short, familiar words over jargon and unnecessary complexity.
- Grow the system in layers. Start with small primitives, then add each capability on top of a product
  that already works.
- Keep interfaces as small as possible while making ownership, lifecycle, and security boundaries clear.
  Names, file paths, types, and functions are part of the interface.
- Prefer narrow capability methods over broad dependency bags or access to underlying services.

## Correctness and complexity

- Aim for correct behavior without unnecessary code, states, retries, or recovery paths. Judge changes
  by correctness, simplicity, understandability, and maintainability.
- Put each invariant at the boundary that owns it and keep related lifecycle complexity local. Avoid
  hidden state, speculative abstractions, and one-hop wrappers.
- Test the invariant at the highest useful boundary. Security, privacy, data-loss, and duplicate-side-
  effect fixes may justify extra complexity, but document what it protects and what can be simplified.

## Context-bound systems

- Pass authority, destination, scope, and correlation or idempotency context explicitly across async,
  durable, plugin, sandbox, scheduler, and other runtime boundaries. Do not infer them from nearby
  metadata.
- Keep actor identity, authorship, service credentials, destination membership, and display names
  separate. Validate untrusted context at ingress, and treat missing context as an error or blocked
  state rather than guessing.
- Preserve identity and idempotency context across retries and resumes. Persist a handle for anything
  needed after a boundary; in-memory values are caches, not durable state.

## Interface design

- Expose the smallest useful, lifecycle-oriented capability and return a focused projection by default.
  Make ownership and idempotency clear; do not expose full records or underlying services unnecessarily.
- Use consistent domain nouns across code, storage, and docs. Let module paths carry context, and avoid
  technical suffixes, broad dependency bags, and helpers that only forward arguments.
- Add an interface for a real coupling or stable boundary, not by default. Keep provider and platform
  details inside the layer that owns them.

## Provider boundaries

- Keep provider SDK clients, raw payloads, SDK errors, and provider-specific formatting inside the
  provider-owned module or feature folder.
- Cross-provider code should use project-owned contracts and focused projections. Expose provider side
  effects through narrow capability ports; composition roots should wire implementations, not perform
  provider behavior.
- Provider tests may use provider primitives directly. Product and runtime tests should exercise them
  through the public adapter, and new generic code should not add provider-specific dependencies.

## Where to read

- Product and learning intent: [`docs/project-intent.md`](docs/project-intent.md)
- Current and planned boundaries: [`docs/architecture.md`](docs/architecture.md)
- Test placement and proof: [`docs/testing.md`](docs/testing.md)
- Commands and mutability: [`docs/commands.md`](docs/commands.md)
- Script inventory: [`docs/script-inventory.md`](docs/script-inventory.md)
- Staged implementation path: [`docs/roadmap.md`](docs/roadmap.md)

## Current status

The repository contains documentation, configuration, safe local-environment helpers, and an empty
source placeholder. No agent runtime exists yet. The first implementation stage will be a direct model
call; tools, state, policy, persistence, approvals, and evaluations come afterward.

## Checks

- Install dependencies: `make install`
- Check local API configuration for future live runs: `make check-local-env`
- Prepare a missing local env file without overwriting one: `make prepare-local-env`
- Run the commit-time checks: `make precommit`
- Run the final local gate: `make verify`
- Apply safe formatting fixes: `make fix`

`make verify` is intentionally offline. An API key is not required to validate this scaffold.

## When checks fail

Read the first actionable error, fix the smallest relevant boundary, and rerun the narrow command
before rerunning `make verify`. If a repeated failure reveals a missing rule, test, or command, encode
that learning in the repository rather than relying on chat memory.
