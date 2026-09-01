---
name: eval
description: >-
  Blinded eval of a skill or prompt change. Use before promoting a skill edit,
  after a bad agent run, or when the user asks whether a change actually made
  agents better. Follow playbooks/eval.md in strict-mode.
when-to-use: Skill change, prompt change, did this make the agent better, evals.
---

# Eval

Verification answers "did this commit work". Eval answers "did this instruction change behavior".

Follow `skills/strict-mode/playbooks/eval.md` exactly.

Minimum bar to promote a skill edit:

- One organic prompt, used twice.
- Hidden rubric, 3-6 criteria, written before seeing outputs.
- Blind judge in a separate chat.
- The human agrees with the judge, or the rubric is rewritten and the eval is rerun.

Do not promote on vibe. Do not tell the candidate it is being graded.
