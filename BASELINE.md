# Baseline report

## Repository map
- Entry point: `code.html` (loads `style.css` and `script.js`).
- Logic: `script.js`.
- Styles: `style.css`.
- Dependencies: none.
- Tests/build scripts: none (`package.json` is absent).

## Commands run and results
| Command | Result |
|---|---|
| `node --version` | `v24.13.1` |
| `node --check script.js` | No output; syntax check passed. |
| `npm test` | Failed because there is no `package.json` and no test script is configured. |

## Observed facts (manual checks)
- After adding tasks, pressing F5 reloads the page and the tasks disappear. They are not restored after reload.
- During the XSS check, the entered string appears as a task. No `alert` popup appears.
- When checking the page at different window widths, horizontal scrolling is present.

## Limits of these observations
-Payload tested: <img src=x onerror=alert(1)>; it rendered as plain text and no alert fired. This covers one payload only
- The horizontal scrollbar was observed at different widths, but the exact viewport width and the element causing overflow were not recorded.

## Weaknesses with evidence
1. No persistence: `script.js` does not use `localStorage`; the manual F5 check removes added tasks.
2. Malformed `<link>` markup in `code.html`, lines 7–10.
3. No tests, lint, or build scripts are configured; `npm test` cannot run because `package.json` is absent.
4. Duplicate event handlers are present in `script.js` (`addTodo` and the bottom `querySelectorAll` block).
