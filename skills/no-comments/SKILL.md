---
name: no-comments
description: >-
  Strip slop comments from the current diff. Delete comments that restate the
  next line, section banners, commented-out code, and JSDoc that repeats the
  type. Keep only why that cannot live in a type or a test. Use after editing
  code, before deslop and verify.
when-to-use: Before commit, before PR, leftover comments, narrating comments, JSDoc noise.
---

# No comments

You are the reviewer. Comments are guilty until they encode a constraint the type system cannot.

Scope: the current diff against `main`, or the files you just touched. Do not restyle the rest of the file.

## Delete

- Comments that restate the next line
- Section banners (`// Helpers`, `// Fetch user`)
- Commented-out code
- JSDoc that repeats the type signature
- `TODO` / `FIXME` you added this branch without a linked issue

## Keep only

- Why the next lines are surprising, when that why cannot be a type or a test
- A constraint we cannot change, already in `AGENTS.md` (schema freeze, third party, legal)
- A lint or `ts-expect-error` with the reason on the same line

If a comment says `do not remove` or `IMPORTANT`: encode it as a type, a test, or a lint, then delete the comment. If you cannot encode it, keep it and say why.

## Report

Comments deleted. Comments kept, each with why. Constraints still only in a comment (open work).

Then `/deslop` for code shape. This skill does not inline wrappers or remove `any`.
