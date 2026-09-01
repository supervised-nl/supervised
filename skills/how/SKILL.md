---
name: how
description: >-
  Walk through how a path actually works: a request, a command, a script, a
  tool, a screen, or a write. Use before changing code and for investigate
  playbooks. Start from AGENTS.md, then follow one input end to end.
when-to-use: How does this work, what owns this path, where does this mutation go.
---

# How

Build a mechanical model. Not a summary of file names. Do not edit code in this skill.

1. Read `AGENTS.md` or `CLAUDE.md` in the current repo first.
2. Split the question into 2-4 parts (example: input, write path, read path, edge).
3. For each part, name the concrete functions and files. Follow one request, command, or tool call end to end.
4. Note invariants **already written in this repo**. Do not invent them.
5. Reply as a walkthrough a maintainer can re-run:
   - **Overview.** What it is and what triggers it.
   - **How it works.** Step by step, files and functions.
   - **Where things live.** The few paths you need to start.
   - **Gotchas.** Non-obvious edges, empty searches.
6. Empty search: say empty. Do not guess.
7. If the question is "are we sure", add a judgment. Push back if the premise is wrong. Do not only explain.
