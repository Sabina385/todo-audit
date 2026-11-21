# Acceptance criteria

These must stay true after every change (checked before and after).

| ID | Criterion | How verified |
|----|-----------|--------------|
| AC1 | A non-empty task typed in the input is added to the list when "Add" is pressed or Enter is pressed. | Manual now; automated test after refactor |
| AC2 | A whitespace-only or empty task is not added. | Manual now; automated test after refactor |
| AC3 | Ticking the checkbox marks the task as done (strikethrough); unticking reverts it. | Manual now; automated test after refactor |
| AC4 | The delete button removes only that task. | Manual now; automated test after refactor |
| AC5 | Task text is rendered as text, never as HTML (no script execution). | Manual XSS check; automated test |

Added only after mitigation (not part of baseline):
| AC6 | Tasks persist after page reload (localStorage). |