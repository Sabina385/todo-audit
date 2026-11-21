# ToDo List (audit project)
Small browser ToDo app: add, tick and delete tasks; tasks persist in localStorage.

## Run
Open code.html in a browser (no install).

## Check and test
npm run check
npm test
(no dependencies, Node.js 18+)

## Structure
- code.html: page; todo.js: task logic; script.js: DOM and storage; style.css: styles
- test/todo.test.js: automated tests (16)
- AGENTS.md: rules for AI agents; ACCEPTANCE.md: criteria AC1-AC6
- BASELINE.md, REFACTOR.md, RISK.md, READINESS.md, BACKGROUND_AGENT.md, RELEASE.md, AI_EVIDENCE.md, evidence/

## Known limitations
Tests cover logic, not real DOM behavior. No linter or CI.