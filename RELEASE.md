# Release decision: CONDITIONAL

Evidence: npm run check passes; npm test 16/16 (before: 12/12); AC1-AC6 covered; two mitigations merged (R1+R8 in PR #5, R2 in PR #6); R3 unsupported.
Why not GO: tests do not cover real DOM behavior; no linter or CI; main is unprotected (R7); readiness Level 1.
Why not NO-GO: no confirmed high-impact risk is open; confirmed defects are fixed.

Conditions and owners (owner: Sabina):
1. Enable branch protection on main (block force pushes) before further agent work.
2. Add a linter and CI before delegating tasks to background agents.
3. Do one manual browser run of AC1-AC6 per release.

Residual: R4 horizontal scroll (low, observed only at 187 px with DevTools open); localStorage may be unavailable in private mode (app keeps working in memory).