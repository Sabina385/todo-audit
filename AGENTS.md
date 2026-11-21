# AGENTS.md

## Purpose
Small browser ToDo list (add, tick, delete tasks). Used as a teaching repository
for AI-assisted repository customization and risk review. No backend, no users, no secrets.

## Architecture
- code.html: page structure; loads style.css, todo.js, and script.js in that order.
- todo.js: pure task logic (normalization, add, toggle, and remove); exports the API for Node tests and exposes it to the browser as `window.Todo`.
- script.js: DOM interaction and rendering; delegates task operations to `Todo` and inserts user-provided task text with `textContent`.
- style.css: styles.
- No framework or external dependencies; no build step.

## Setup
- Requires: a modern browser, Node.js LTS (only for tests/checks), Git.
- Run the app: open code.html in a browser. No install needed.
- Check JavaScript syntax: `npm run check`.
- Run automated tests: `npm test`.
- No `npm install` is needed; the project uses Node.js built-in test modules only.

## Safe commands (allowed without asking)
- git status, git diff, git log, git add, git commit (on a feature branch)
- npm run check
- npm test
- node --check todo.js, node --check script.js, and node --test
- Reading any file in this repository

## Commands that need human approval first
- npm install <anything> / adding or changing any dependency
- git push, git merge, git rebase
- Deleting or renaming files

## Forbidden actions
- Never read, create, print or commit secrets, tokens, .env files or personal data.
- No production deployment or publishing to any hosting service.
- No destructive commands: rm -rf, git reset --hard, git push --force, git clean -fd.
- No unreviewed dependency changes (package.json / lock files).
- Never edit or move the git tag `baseline`; never rewrite history of main.
- Do not modify files outside the task's allowed file list.

## Coding conventions
- Plain JavaScript (ES2020+), const/let only, no var.
- Insert user text with textContent, never innerHTML.
- Keep logic separate from DOM code where possible.
- Small functions, descriptive names, no duplicated handlers.
- 2-space indentation, single quotes, semicolons.

## Testing expectations
- Every behavior change needs a test or an explicit note why not.
- Acceptance criteria are in ACCEPTANCE.md and must still pass after changes.
- Automated tests live in `test/todo.test.js` and use `node:test` and `node:assert`.
- Run before finishing: `npm run check`, then `npm test`.
- Report real command output; never claim a test passed without running it.

## Review gates
- Work on a separate branch; never commit directly to main.
- A human reviews the full diff before any merge.
- Each task ends with: summary of changes, files touched, commands run with results,
  tests not run, and remaining risks.

## Known limitations (baseline)
- No linter or CI yet.
- Tasks are not persisted across reloads.
