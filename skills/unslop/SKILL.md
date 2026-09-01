---
name: unslop
description: >-
  Cut AI tells from prose: replies, PR bodies, commit messages, docs. Short
  sentences, no filler, no em dash, no chatbot closings. Product copy still
  follows AGENTS.md. Use on every reply in strict-mode and before a PR.
when-to-use: Writing a reply, PR, commit message, README, or any prose that reads like a chatbot.
---

# Unslop

This skill is **prose**, not code. Code comments are `/no-comments`. Code shape is `/deslop`.

Locale, brand, and forbidden words come from this repo's `AGENTS.md`. Unslop does not switch language.

## Do

- Say the thing. Then stop.
- Short sentences. One idea each.
- Name the file, command, or number. Not a feeling.
- Keep the project's voice if `AGENTS.md` has one.
- If a sentence could appear unchanged in another project, cut it.

## Delete

- Chatbot closings: "I hope this helps", "Let me know if", "Great question", "Of course"
- Em dashes. Period or comma.
- A colon used as a mid-sentence connector. A colon before a list is fine.
- Puffery: pivotal, testament, landscape, delve, robust, seamless, leverage, utilize
- Bold labels that restate the line (`**Fix:** the fix is...`)
- Emoji in headings and lists
- Title Case Headings. Use sentence case.
- "Not just X, but Y."
- Generic last lines: "The future looks bright."

## Do not

- Rewrite code with this skill
- Add soul, jokes, or opinions the user did not ask for
- Turn a 4-line PR body into an essay
