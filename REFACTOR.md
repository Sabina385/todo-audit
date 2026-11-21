# Pattern decision and refactoring

## Problem

Task logic and DOM operations were mixed in `script.js`. Task handlers were attached both while creating each task and again in a bottom `querySelectorAll` block.

## Pattern evaluation

- Strategy: not needed; there is no branching among task algorithms.
- Adapter: not needed; there is no external dependency to wrap.
- Chosen approach: extract task operations into pure functions in `todo.js` and keep DOM updates in `script.js` with one `render()` function. No design pattern is warranted for this small app.

## Before / after structure

| | Before | After |
|---|---|---|
| Files | `code.html`, `script.js`, `style.css` | Existing files plus `todo.js`, `package.json`, `test/todo.test.js`, and this report |
| Logic | Mixed into DOM handlers | Pure functions in `todo.js` |
| Rendering | DOM changes in task creation and handlers | Centralized in `render()` in `script.js` |
| Event handlers | Attached during creation and repeated in a bottom query block | Attached once to each created task element |
| User text | `textContent` for task label; `innerHTML` for delete icon | `textContent` for task label and delete icon |
| Automated tests | None | 12 Node tests |

The malformed `<link>` markup in `code.html` was intentionally left unchanged for its separate mitigation task. Tasks still do not persist after reload; persistence is AC6 and is outside this refactor.

## Acceptance criteria

| ID | Before (manual) | After (manual) | After (automated) |
|---|---|---|---|
| AC1 | Pass for the submitted XSS test string: user reported it appeared as a task | Not run here; browser check pending | Pass |
| AC2 | Not recorded | Not run here; browser check pending | Pass |
| AC3 | Not recorded | Not run here; browser check pending | Pass |
| AC4 | Not recorded | Not run here; browser check pending | Pass |
| AC5 | User reported the test string appeared as task text and no alert appeared; exact payload not recorded | Not run here; browser check pending | Pass for task-data string and static check that UI code avoids HTML-injecting APIs |

The automated checks cover logic and a static source-code property. They do not exercise the DOM in a browser. Before/after browser checks for AC1–AC5 remain to be completed manually.

## Real command output

PowerShell blocked `npm.ps1` under its execution policy, so the equivalent Windows command shim `npm.cmd` was used.

### `npm.cmd run check`

```text
> todo-audit@1.0.0 check
> node --check todo.js && node --check script.js
```

### `npm.cmd test`

```text
> todo-audit@1.0.0 test
> node --test

✔ AC1: adds a non-empty task and trims it
✔ AC1: keeps order when adding several tasks
✔ AC2: rejects an empty string
✔ AC2: rejects a whitespace-only string
✔ AC2: rejects non-string input
✔ AC3: toggle marks a task done and then unmarks it
✔ AC3: toggle affects only the target task
✔ AC4: remove deletes only the target task
✔ AC4: removing an unknown id leaves the tasks unchanged
✔ addTask does not mutate the input array
✔ AC5: XSS-like text remains a plain string in task data
✔ AC5 static check: UI code avoids HTML-injecting APIs
ℹ tests 12
ℹ suites 0
ℹ pass 12
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
```

## Manual follow-up

Open `code.html` in a browser and verify AC1–AC5. Record the results in the table above and capture any requested evidence in an `evidence/` folder. Do not treat the automated AC5 checks as a substitute for the browser XSS check.
