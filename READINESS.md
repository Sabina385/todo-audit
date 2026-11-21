# Agent-readiness audit

| Area | Evidence | Result |
|---|---|---|
| Readable structure | logic in todo.js, UI in script.js | OK |
| README accuracy | README.md matches commands I ran | OK |
| Reproducible setup | no dependencies, npm run check / npm test | OK |
| Pinned dependencies | none exist | OK |
| Tests | 16/16 pass (evidence/13) | OK, logic only |
| Lint / formatter / type check | none configured | MISSING |
| Build | no build step | n/a |
| Logging | none | MISSING |
| Security safeguards | textContent only, static test for innerHTML | OK |
| AGENTS.md | safe commands, approval list, forbidden actions, review gates | OK |
| CI / pre-commit | none | MISSING |
| Branch protection | main history was rewritten once (R7) | MISSING |

## Level: 1 (Baseline)
Level 1 requires formatter, linter and type check, which are missing, so I do not claim Level 2 although AGENTS.md and README (Level 2 items) exist. Level 3 needs CI and hooks.

## Missing evidence
Linter config, formatter, CI workflow, pre-commit hook, DOM/browser tests, branch protection screenshot.