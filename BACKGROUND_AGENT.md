# Background agent safeguards (hypothetical)

Task: "Add an edit-task-text feature with tests."

- Isolation: git worktree add -b agent/edit-task ../todo-agent-edit-task (never works in main)
- Allowed files: todo.js, script.js, test/todo.test.js
- Allowed commands: npm run check, npm test, git status/diff/add/commit (on the agent branch)
- Limits: 30 minutes, 20 tool calls; stop and report if tests fail twice
- Prohibited: push or merge to main, dependency changes, deleting files, secrets, moving the baseline tag, force-push, deploys
- Artifacts required: change summary, full diff, npm test log, npm run check result, risk notes
- Human gate: I review the diff in a pull request and approve before any merge; nothing deploys automatically
- Failure handling: on failure the agent stops and reports; I discard the worktree (git worktree remove)
- Rollback after merge: git revert of the merge commit through a new PR