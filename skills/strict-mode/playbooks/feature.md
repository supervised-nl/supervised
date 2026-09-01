# Feature

New or changed behavior. Stack, UI kit, and locale come from `AGENTS.md`, not from this file.

1. Read `AGENTS.md`. Call `how` on the path you will touch.
2. Name the data shape and the structure that holds it (discriminant, table, state machine, or boring local code). Do not add a table, column, or entity without explicit OK.
3. If this crosses a function boundary, run Design in strict-mode. Skip only as `skip: no new boundary`.
4. Four todos. Keep each with `n/a: <reason>` rather than drop it:
   - Blocking first steps
   - Independent workstreams
   - Shared mutable state (one writer per file or branch)
   - Smallest safe decomposition
5. Blast radius: callers, data, the path you touched. If it is large, cut the change or ask. If the fork is empirical and cheap to see, switch to `prototype` instead of asking.
6. Mutations follow the file next to you. Same style, same auth, same API shape.
7. Follow this repo's UI and copy rules from `AGENTS.md` when it has them. Do not invent a palette, library, or language.
8. Match the language of the file. Add or update tests when the repo has them. Each unit ends in a check before the next unit starts.
9. `/no-comments` then `/deslop` on the diff.
10. Run Review in strict-mode. Skip only as `skip: no diff`.
11. Call `verify` using the command this repo documents.
12. Stop. Human reviews. `ship` only if they asked for a PR.
