# Principles

Generic engineering. Product facts (stack, UI, copy, schema, commands) live in the current repo `AGENTS.md` or `CLAUDE.md`. Read those first. Name a principle when it changes a decision. A citation with no choice means you skipped it.

## 1. No main without OK

Work on `feature/<short>` or `fix/<short>`. Open a PR. Do not merge to `main`. Do not force-push `main`. If the repo names a different default branch, that branch is `main` for this rule.

Proceed on reversible work. Present the result. Let the human course-correct.

Always pause for merge to `main`, force-push to a shared branch, deploy, data deletion, or a message to a customer.

Say no when the work does not earn its place. Agreement is not the default.

## 2. Prove it

Two layers:

- **Verify** (`/verify`). This change works in this repo. Run the command `AGENTS.md` names. Then exercise the path you touched. If AGENTS.md names none, propose the line. Do not silently run `tsc`.
- **Eval** (`/eval`). This skill or prompt change actually changes agent behavior. Blind A/B plus a hidden rubric. Do not promote on vibe.

Inconclusive is not a pass. A self-report is not evidence. Inspect the artifact.

When debugging, fix the cause. A nil-check or catch that silences a crash is not a fix.

Multi-step work: each unit ends in a check before the next unit starts. Order the units so a reviewer sees red, then green.

## 3. Schema is a product decision

Do not invent a data model this repo does not have. No new table, column, or schema change without explicit OK.

Before writing logic, name the data shape and the structure that holds it. A discriminant, a table, a state machine, or boring local code. Scattered booleans and optional-field bags are the failure. Parse external data at the boundary. Trust types inside. Do not silence the type checker. Exhaust variants. A boolean plus an optional that must stay in sync is two states pretending to be one.

## 4. Smallest complete change

Subtract before you add. Delete dead weight first, then build on the simpler base.

No extra layer. No one-caller wrapper. No new layout when an existing partial or component will do. If answering a question takes more than three files, flatten.

Each writer owns its own file or branch. Two agents do not write the same file.

Clean in three passes, one job each:

- `/no-comments` — comments that restate the next line are gone
- `/deslop` — wrappers, `any`/`as`, defensive catch, debug logs
- `/unslop` — reply, PR, commit message

Follow the file you are in. If `AGENTS.md` forbids a layer, do not add it.

## 5. Secrets stay out

Never put tokens, keys, passwords, or connection strings in chat, commits, or PR text. Env lives outside git.

## 6. The project owns voice and UI

Copy, color, component library, and locale come from this repo's `AGENTS.md`. Do not invent a brand. Do not switch language. `/unslop` does not override that file.

## 7. Scars become skills

After an expensive miss: encode it in a skill, a playbook step, or a check script. Not a longer chat prompt. Then `/eval` before you treat that skill as default.

If it is not a skill yet: open an issue in this repo, one paragraph, what went wrong.

## 8. Sketch the boundary first

Code that crosses a function boundary starts with the caller's usage, then types and signatures. Empty bodies. If two shapes are plausible, write both and pick one. Do not pick in your head.

If the sketch keeps fighting the code, throw it out. Redesign as if the new constraint had been there on day one.
