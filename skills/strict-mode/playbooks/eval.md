# Eval

Test whether a skill, playbook, or prompt change actually changes agent behavior. Promote only with a blinded comparison.

The candidate must not know this is an eval. Forbidden in anything the candidate sees: eval, test, judge, experiment, rubric, score, compare, benchmark, candidate, arena.

1. Frame the variant (control vs change) and the success behavior. Write a rubric of 3-6 concrete criteria. Keep the rubric out of the candidate prompt.
2. Write one organic user prompt. It should look like a real task in the repo you are testing.
3. Run two candidates with that same prompt. A is without the change. B is the change under test. Separate chats or directories. Sanitize names so they look like user folders.
4. Judge in a third chat. Give only: rubric, prompt, output A, output B. Do not tell the judge which label is the variant. Ask which meets the rubric and why.
5. Grade chain-following from what the candidate did (files opened, commands run, tests executed), not from self-report.
6. You read both outputs. If you disagree with the judge, the rubric is ambiguous. Fix the rubric, do not promote.
7. Recommendation: promote, iterate, or discard. If promote, edit the skill on `feature/*`.
