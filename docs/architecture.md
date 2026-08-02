# Architecture

## Current scaffold

The repository currently contains no runtime path. It establishes the locations and seams that future
stages will fill:

```text
CLI
  ↓
agent runtime
  ├── model client
  ├── instructions
  ├── conversation state
  ├── tool registry
  ├── execution policy
  ├── event stream
  ├── JSONL persistence
  ├── context management
  └── evaluations
```

`src/placeholder.ts` exists only so the TypeScript project has a source root. It is not an agent
implementation.

## Intended first implementation

Stage 1 will be one direct model call through a small model-client boundary. It should be testable
with a fake client and should not claim to have inspected repository files. Provider-specific SDK
details should stay behind that boundary.

The first read-only tool stage is expected to add `list_files`, `read_file`, `search_text`, and
`read_test_output`. Command execution and writes come later and must not be smuggled into the
read-only stage.

## Three implementations

The direct implementation owns the loop first. Once it is reliable, a later branch may replace the
loop with `pi-agent-core` while keeping tools, schemas, policy, fixtures, tests, and the CLI. A final
implementation may use Eve to explore durable sessions, sandboxing, approvals, tracing, channels,
and evaluations. Those are separate learning goals and should not leak into the scaffold.

## Boundary rules

- Provider SDK details stay behind a model-client port.
- Local fixture access stays behind tool implementations and a workspace-root policy.
- Policy decides whether an action is allowed; the model may only request an action.
- Persistence records runtime evidence; it is not treated as the same thing as conversation state.
- Tests use fake model clients by default and reserve live-provider checks for explicit manual runs.
