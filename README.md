# supervised

`/strict-mode` is how an agent works in any repo. That repo's `AGENTS.md` is what the product is. You merge.

Apps, scripts, CLIs, plugins, automations, UIs. The loop does not change.

```text
/strict-mode <goal>. Done means <checkable result>. Keep <what must not break>.
```

## The loop

1. Read `principles.md`, then this repo's `AGENTS.md`.
2. Match one playbook. Copy its steps into the todo list. Skip only as `skip: <reason>`.
3. Name the data shape. Sketch a new boundary before you fill it in. Reject a sloppy sketch.
4. Change the code. `/no-comments`, then `/deslop`, then Review.
5. `/verify` with the command this `AGENTS.md` names. Exercise the path you touched.
6. Stop. You merge.

A skill or prompt edit also needs `/eval`. Inconclusive is not a pass.

## Skills

| Skill | Job |
| --- | --- |
| `/strict-mode` | Pick a playbook. Copy the steps. Sketch. Review. Verify. |
| `/how` | Walk a path end to end before you edit it. |
| `/no-comments` | Delete comments that restate the next line. |
| `/deslop` | Remove wrappers, silenced types, defensive catch, debug logs. |
| `/unslop` | Cut AI tells from replies, PRs, and commit messages. |
| `/verify` | Run this repo's check. Then exercise the path. |
| `/eval` | Blind A/B before a skill or prompt change is default. |

## Playbooks

| Playbook | When |
| --- | --- |
| investigate | Read-only. How does this work. Are we sure. |
| bug-fix | Defect. Repro first. A silencer is not a fix. |
| feature | New or changed behavior. Default. |
| refactoring | Structure changes. Behavior does not. Pin first. |
| prototype | Throwaway sketch. Decide by looking. |
| ship | Branch and PR. You still do not merge. |
| eval | Did this instruction change agent behavior. |
| figure-it-out | Large or cross-cutting. No other playbook fits. |

## Install

**Grok Bot.** Plugins → add `supervised-nl/supervised` or the local path to this repo. One plugin named `supervised`. Reload after updates.

**Grok Build.**

```bash
grok plugin install supervised-nl/supervised --trust
```

or `/plugin`. Then `/skills`. You should see `strict-mode`, `how`, `no-comments`, `deslop`, `unslop`, `verify`, `eval`.

**The repo you work in.** Do not copy these files into the project. Point at the plugin in `AGENTS.md`:

```markdown
## supervised

Non-trivial work starts with `/strict-mode`.
Verify: <the command this repo already uses>.
```

Stack, UI, copy, schema, and the verify command stay in that file. If it names no verify command, the agent proposes one line. It does not silently run `tsc`.

This plugin's own check is `node scripts/check.mjs`.

## Use

1. Open the repo you are working in.
2. `/strict-mode` with a goal and a checkable done-condition.
3. Stop when verify has an artifact. You merge.

## License

MIT.
