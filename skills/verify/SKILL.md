---
name: verify
description: >-
  Prove the change against the real artifact in this repo, not a proxy.
  Discover the verify command from AGENTS.md. If none is named, propose one
  line to add there. Do not silently treat tsc as verify. Use after
  no-comments, deslop, and Review, before you report done.
when-to-use: End of a change, before a PR, after deslop, or when asked to prove it works.
---

# Verify

Proof is something you ran and a reviewer can re-run.

The command lives in the **project**, not in this plugin.

## Steps

1. Find the command, in order:
   1. `AGENTS.md` / `CLAUDE.md` (look for test, verify, audit)
   2. `README.md` only if AGENTS.md is silent
   3. A script this repo already documents as the check
2. If **AGENTS.md names a command**, run it. Do not skip because it is slow. Do not substitute a command from another project.
3. If **AGENTS.md names none**: stop guessing. Propose one line to add to `AGENTS.md` (the script this repo already has). Do not run `tsc` and call it verify unless the user accepts a weak check for this turn.
4. Exercise the actual path the change touches. Pick what matches:
   - UI: the project's e2e script if it has one, else the one screen path
   - CLI or script: run the command you changed
   - Data: the write then the read, not only the typecheck
   - API: a test this repo already has, or say the live call waits on the human
   - Anything else: only what `AGENTS.md` names. Do not invent a tool.
5. Paste the command and the relevant tail. Redact secrets.
6. If it fails: fix or say you are not done. Do not open a PR.

## Rejected as evidence

- It compiles / build passed (when behavior changed)
- Silent `tsc` because AGENTS.md was empty
- A verify command copied from a different repo
- I looked at the diff and it looks right
- `/no-comments`, `/deslop`, or Review output
