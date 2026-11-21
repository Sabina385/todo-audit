# AI evidence appendix

## Task 4: read-only risk review
- Assistant / model: Claude (claude.ai chat)
- Date: 2026-11-21
- Context given: todo.js, script.js, code.html, style.css, package.json, AGENTS.md (AGENTS.md provided manually, tool does not auto-load it)
- Mode: read-only, no files modified by the assistant
- Note: candidates R1-R10 were proposed by Claude in the chat; I verified them myself.

## Candidate findings and my verification
| ID | Category | Claim | What I did | Result | Status |
|----|----------|-------|-----------|--------|--------|
| R1 | Correctness | Tasks lost on reload | F5 test | tasks disappear | confirmed |
| R2 | Correctness | Unclosed <link on line 7 | DevTools Network + Elements | style.css 304; head shows one merged <link> | confirmed |
| R3 | Security | XSS via task text | typed <img src=x onerror=alert(1)> | shown as text, no alert | unsupported (one payload) |
| R4 | Correctness (UI) | Horizontal scroll | console scrollWidth > clientWidth | true at innerWidth 187 (DevTools narrows page) | confirmed at narrow viewport only |
| R6 | Agent operations | No linter/CI | repo listing | none present | confirmed |
| R7 | Agent operations | main history rewritten | git log --graph, forced update line | duplicate commit messages with new hashes; baseline tag intact | confirmed |
| R8 | Correctness | nextId resets after localStorage | not tested yet | - | plausible/unverified |

## Problems found in AI output
- Claude suggested R4 (scrollbar) from the screenshot; it only reproduced at 187 px with DevTools open, so impact on normal screens is unproven.
- Claude first said R3 (XSS) was probably unsupported before it was tested; I tested it myself.
- Claude's earlier command advice for README/Live Server assumed F12 works; it did not on my laptop.