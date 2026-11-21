# AGENTS.md

## Purpose
Small browser ToDo list (add, tick, delete tasks). Used as a teaching repository
for AI-assisted repository customization and risk review. No backend, no users, no secrets.

## Architecture
- code.html: page structure, loads style.css and script.js.
- script.js: all UI and logic (will be split into todo.js logic + script.js UI during the refactor).
- style.css: styles.
- No framework, no dependencies, no build step.

## Setup
- Requires: a modern browser, Node.js LTS (only for tests/checks), Git.
- Run the app: open code.html in a browser. No install needed.

## Safe commands (allowed without asking)
- git status, git diff, git log, git add, git commit (on a feature branch)
- node --check script.js
- node --test (once tests exist)
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
- Run before finishing: node --check script.js, then node --test (when available).
- Report real command output; never claim a test passed without running it.

## Review gates
- Work on a separate branch; never commit directly to main.
- A human reviews the full diff before any merge.
- Each task ends with: summary of changes, files touched, commands run with results,
  tests not run, and remaining risks.

## Known limitations (baseline)
- No automated tests, linter or CI yet.
- Tasks are not persisted across reloads.