---
name: deslop
description: >-
  Remove AI code slop from the current diff: defensive try/catch on trusted
  paths, any/as to silence types, one-caller wrappers, nested branches that
  want an early return, debug logs, files added for later. Comments are
  /no-comments. Prose is /unslop. Use after no-comments, before verify.
when-to-use: Before commit, before PR, deslop, slop, extra wrappers.
---

# Deslop

Code shape only.

- Comments: `/no-comments` first. Do not re-do that work here.
- Prose: `/unslop`.

Behavior stays the same unless you delete a dead path or inline a wrapper. Work the current diff. No drive-by refactors. Match the file you are in. If `AGENTS.md` forbids a layer, do not add one while cleaning.

## Delete or rewrite

- `any` and `as` used to silence the compiler. Parse at the boundary instead.
- try/catch that swallows, logs, and continues on a trusted path
- A wrapper or helper with one caller. Inline it.
- Nested if/else that an early return would flatten
- Optional-field bags where a discriminant would do
- `console.log` you added while debugging
- Files, utils, or abstractions added "for later"

## Guardrails

- Smallest diff. Do not restyle the rest of the file.
- After deslop, run `/verify`. Deslop is not proof.
- Report: wrappers inlined, casts removed, anything you left and why.
