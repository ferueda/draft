# Roadmap

This sequence follows the learning path from the project brief. Each stage should leave behind a
working, inspectable boundary before the next one is started.

## Current status

- [x] Project harness scaffold — intent, architecture, testing, commands, setup helpers, and a final
      verification gate.

## Planned

- [ ] Stage 1 — one model call through the OpenAI Responses API.
- [ ] Stage 2 — manually dispatch one `read_file` tool.
- [ ] Stage 3 — add `list_files`, `read_file`, `search_text`, and `read_test_output` through a tool
      registry with schemas.
- [ ] Stage 4 — make the loop and runtime states explicit; add bounded turns, tool calls, timeouts,
      cancellation, structured errors, and events.
- [ ] Stage 5 — persist messages and events as inspectable JSONL sessions; add replay and resume.
- [ ] Stage 6 — add read-only safety boundaries, then sandboxed `run_tests`.
- [ ] Stage 7 — add `apply_patch` behind policy and human approval.
- [ ] Stage 8 — add fixture-based evaluations for conclusions, tool choice, policy compliance, cost,
      and termination.
- [ ] Pi implementation — replace the direct loop with `pi-agent-core` while retaining the project’s
      tools, policies, fixtures, tests, and CLI.
- [ ] Eve implementation — rebuild around production infrastructure such as durable sessions,
      sandboxing, approval, tracing, channels, and scheduled runs.

## Deliberately deferred

Multi-agent orchestration, subagents, MCP, vector databases, RAG, browser automation, Slack, GitHub
writes, long-term memory, autonomous scheduling, and prompt-generated code execution stay out of the
early stages because they make failures harder to attribute.
