# Ship

Make the current work merge-ready. You still do not merge to `main`.

1. `/no-comments` then `/deslop` if the diff still has narrating comments, `any`, or one-caller wrappers.
2. Run Review in strict-mode. Skip only as `skip: no diff`.
3. Confirm `verify` is green on this branch for this repo.
4. Branch is `feature/<short>` or `fix/<short>`, never `main`.
5. Commit message and PR body through `/unslop`. Imperative, what plus why. No tool names as the title.
6. PR body sections, in order. Drop an empty one: Why, Scope, Verification. Paste the verify artifact. No secrets.
7. Open a PR with `gh`. Ready, never draft. Title in the language this repo already uses. One goal.
8. Stop. Human merges.
