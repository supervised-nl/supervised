# Refactoring

The structure changes. The behavior does not. If the cleanup reveals a bug or a feature, split it out. Ship the structural change first against the pinned contract.

1. Pin the behavior. Call `how` on the path. Write a characterization test, snapshot, or recorded output before any structure moves. Typecheck is not a pin. Say `skip: no cheap pin` only when a pin is genuinely impossible, and then name what you will compare by hand.
2. Name the structure the code is missing: a discriminant over optional-field bags, a table over spread-out branching, a state machine over scattered booleans. Boring local code stays when the shape is already clear.
3. If the target crosses a function boundary, run Design in strict-mode. Skip only as `skip: no new boundary`.
4. Subtract before you add. Delete dead weight, collapse one-caller wrappers, drop orphan references. Then move.
5. Move in small behavior-preserving steps. Each step keeps the pin green. Migrate every caller and delete the old API in the same wave. No compatibility shim.
6. `/no-comments` then `/deslop` on the diff.
7. Run Review in strict-mode. Skip only as `skip: no diff`.
8. Call `verify`. The pin still holds on the real artifact.
9. Confirm reader load dropped: fewer layers, less hidden state. If the diff did not, revert it.
10. Stop. Human reviews. `ship` only if they asked for a PR.
