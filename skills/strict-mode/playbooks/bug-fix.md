# Bug fix

Reproduce, then change. Guessing a patch is a failed run. Every shipped line traces to runtime evidence.

1. Write the failing symptom in one sentence. Name the repo.
2. Reproduce it yourself. If the repo has a cheap test path: write the failing test first, run it, confirm it fails for the right reason. If a cheap test is not possible, capture runtime evidence and say `skip: no cheap test`.
3. Form hypotheses. Rule them out until one survives. Call `how` on the path. Confirm the mechanism with runtime evidence before you edit. A nil-check or catch that silences the crash is not a fix.
4. If the fix crosses a function boundary, run Design in strict-mode. Skip only as `skip: no new boundary`.
5. Smallest complete fix. The evidence justifies that change, nothing more. No schema change without explicit OK.
6. `/no-comments` then `/deslop` on the diff.
7. Run Review in strict-mode. Skip only as `skip: no diff`.
8. Call `verify`. The original repro must be gone. Existing tests must still pass. Inconclusive is not a pass.
9. Stop. Do not open a PR unless the user asked. Then `ship`.
