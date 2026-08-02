# Project intent

## What this is

Repository Investigator Agent is a small, staged TypeScript project for learning the mechanics and
operational boundaries of a tool-using coding agent. A future user will give it an investigation task,
such as understanding why authentication tests fail. The agent will eventually inspect a small local
fixture repository, report evidence, and propose a fix without silently changing the workspace.

This repository is currently a scaffold. The missing runtime capabilities are part of the curriculum,
not accidental gaps.

## Who it is for

An engineer who wants to understand agent loops, tools, state, policy, events, persistence, and
evaluation by implementing the same small agent three ways:

1. Directly with a model API.
2. With `pi-agent-core` after the direct implementation is understood.
3. With Eve to study production infrastructure.

## What this is not

- It is not a production coding assistant today.
- It is not a general shell, browser, GitHub, Slack, MCP, or OAuth integration.
- It is not a multi-agent or autonomous scheduling system.
- It is not a benchmark for model quality.
- It does not optimize for feature breadth before the core loop is observable.

## Optimizes for

- Inspectability: important mechanics stay visible in project-owned code.
- Safe, incremental learning: each stage has a narrow capability and a clear proof.
- Local reproducibility: verification works offline and does not need real credentials.
- Honest boundaries: current behavior and planned behavior are clearly separated.
- Evidence over confidence: conclusions identify what was observed and what remains unknown.

## Does not optimize for

- Shipping the fastest possible agent.
- Hiding orchestration behind a framework.
- Maximum model capability or minimum token cost.
- Supporting every provider or deployment environment.
- Backward compatibility that was not explicitly requested.

## Unsafe assumptions

- A model response is not evidence that a file was read, a command ran, or a change was applied.
- A path supplied by a model must never be treated as safe without workspace-boundary validation.
- A request to write is not authorization to write.
- Fixture repositories will be intentionally artificial and may contain known failures.
- The presence of a dependency does not mean the corresponding future capability exists.
- A green local check proves only what that check covers; it does not replace review or judgment.

## Hard invariants

- The scaffold makes no claims that an agent runtime exists.
- Verification is offline by default; tests must not require an API key or network access.
- Real credentials stay out of the repository. `.env.local` is local-only and never overwritten by
  setup.
- Future filesystem tools are restricted to an explicitly configured fixture workspace.
- Future write or command tools require an explicit policy boundary and, where applicable, human
  approval outside the model.
- Every future run has bounded work: turn, tool-call, timeout, and cancellation limits.
- Repeated mistakes become repository guardrails: documentation, tests, lint rules, or commands.
