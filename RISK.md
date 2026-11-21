# Risk register
Score = likelihood (1-3) x impact (1-3).

| ID | Category | Cause -> Event -> Consequence | Component | Evidence | Status | L | I | Score |
|----|----------|-------------------------------|-----------|----------|--------|---|---|-------|
| R1 | Correctness | No storage -> reload -> all tasks lost | script.js | evidence/02 | confirmed | 3 | 2 | 6 |
| R2 | Correctness | Unclosed <link -> parser merges tags -> CSS works only by error recovery | code.html:7-10 | evidence/09, 09b | confirmed | 2 | 2 | 4 |
| R3 | Security | Task text as HTML -> XSS | script.js | evidence/03 | unsupported | 1 | 3 | 3 |
| R4 | Correctness (UI) | header width:100% + padding -> horizontal scroll | style.css | evidence/10 | confirmed (narrow) | 2 | 1 | 2 |
| R6 | Agent operations | No linter/CI -> unchecked agent changes | repo | no workflows | confirmed | 2 | 2 | 4 |
| R7 | Agent operations | main history rewritten -> contradicts AGENTS.md, evidence can be lost | git history | evidence/11 | confirmed | 2 | 2 | 4 |
| R8 | Correctness | nextId resets after persistence -> duplicate ids | script.js | not tested | plausible | 2 | 2 | 4 |

## Top 2 for corrective action
R1 (6) and R2 (4). R8 handled inside the R1 fix. R7 and R6 are lower priority (same score as R2, but R2 is a real code defect).

## Mitigation plan
| ID | Mitigation | Owner | Verification | Residual risk |
|----|-----------|-------|--------------|---------------|
| R1 | localStorage save/load, safe try/catch, nextId from max id | Sabina | new tests + manual F5 | storage disabled/full in some browsers |
| R2 | fix <link> tag in code.html | Sabina | DevTools head shows one clean <link> | none expected |
| R7 | (optional) branch protection on main | Sabina | evidence/12 | admin can still bypass |