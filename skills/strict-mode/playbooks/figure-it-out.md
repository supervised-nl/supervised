# Figure it out

Large or cross-cutting work, or no other playbook fits. Design the sequence first. Then run it. Do not invent a new playbook in-session.

1. State done as a checkable predicate. Quantify scope (files, units, what must not break). Present that framing. Reversible prep proceeds.
2. Subtract dead weight first. Then decompose into units that each end in a check.
3. Riskiest unknown first. Build the verification check before the work it measures.
4. A one-way door (new boundary, new data shape) runs Design in strict-mode. Two sketches. Pick one.
5. Run one unit. Measure against the predicate on the real artifact. Keep it if it advanced. Revert it if it did not. Then the next unit. Do not batch checks at the end.
6. Log each decision as one local row: what, why, evidence, result. Evidence is a path, SHA, or command output, not a paragraph. Commit the log only if the user needs it in the PR.
7. Run Review in strict-mode on the whole diff. Skip only as `skip: no diff`.
8. At the end, check the whole predicate on the real product, not only the last unit. Then `ship` if the user asked for a PR. Otherwise stop.
