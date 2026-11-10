# RCNL technical audit — extracted palette

Date: 2026-11-10. Scope: current working tree, including uncommitted hardening, adaptation, optimization, and token extraction after baseline `43b4487`. Browser checks used the production build on local preview port 4173. No application code changed during this audit.

## Audit Health Score

| Dimension | Score | Evidence / limits |
|---|---:|---|
| Accessibility | 3/4 | Semantics, names, focus and motion safeguards implemented; comprehensive conformance testing not performed |
| Performance | 3/4 | Route splitting, deferred engine, bounded click growth; no field CWV or slow-device profiling |
| Theming | 4/4 | Palette centralized in CSS; canvas reads shared brand token; one approved palette |
| Responsive Design | 4/4 | Normal viewport matrix and enlarged-text tablet navigation pass exercised checks |
| Implementation Integrity | 4/4 | Normal routes, metadata, recovery and exercised animation states work coherently |
| **Total** | **18/20** | **Excellent within tested scope** |

Trend: 10 → 14 → 15 → 16 → 17 → **18/20**. These are rubric-based scores, not WCAG certification or Core Web Vitals results. **Confirmed outstanding issues: P0 0; P1 0; P2 0; P3 0.** Untested areas below are not assumed to pass.

## Implementation Integrity Verdict

**Pass for exercised site-browsing and recovery paths.** Previous findings have been addressed while retaining user-approved content, square content panels, heading highlights, animation, and click-to-add interaction. Route chunks and palette extraction do not introduce a separate competing design system.

Impeccable `detect --json src` returns only two `overused-font` warnings for the same Inter choice in `src/index.css`. These are stylistic heuristics, not confirmed technical defects, and are excluded from the count. Its warning exit code 2 does not indicate build or lint failure. The brand font, animation, and existing highlight treatment remain intentional.

## Executive Summary

- No outstanding technical defect confirmed within the checks performed.
- All seven production routes pass at 320, 768 and 1280 CSS pixels without document-level horizontal overflow. Each has one main and h1; no missing img alt attributes, empty-href links, or null-document links were detected.
- Canvas dot and line colors resolve to the same #0f53ea CSS token; Overview's light-blue surface remains rgb(242,246,255).
- Initial JS entry remains **285.52kB raw / 92.65kB gzip**, versus 494.25kB / 148.75kB before optimization. Deferred animation is **149.87kB raw / 43.38kB gzip**. Entry savings are approximately 42% raw / 38% gzip, not equivalent total-code or CWV improvements.
- Build, ESLint, whitespace and named local content-asset existence checks pass.

## Detailed Findings by Severity

None confirmed outstanding in this audit's tested scope. Do not interpret a zero count as proof of accessibility conformance, optimal runtime performance, or absence of defects in untested scenarios.

## Patterns & Systemic Issues

No unresolved systemic issue confirmed. Shared components, content-based navigation collapse, lazy routes, and CSS palette tokens now address the previously repeated problems centrally. Avoid reintroducing page-specific color literals or a parallel JavaScript palette.

## Positive Findings / Resolved Prior Findings

- Colors are defined in the existing Tailwind @theme block; hex values in non-SVG source appear only in that central palette. Neutral authored CSS uses existing Tailwind neutral tokens. `docs/design-tokens.md` documents intended usage.
- The production particle configuration resolves both dots and lines from --color-blue. Memoized options preserve the scene through pause/resume. A paused visibility-event check kept identical canvas pixels.
- Route modules load separately; decorative animation is idle-scheduled independently of page content. Previous optimization verification confirmed Home requested only the entry and deferred engine chunks, and 200 clicks reached a 120-dot ceiling while the next click introduced new IDs without count growth. Optimization code is unchanged by extraction except reading palette values.
- Enlarged-text tablet recheck: at 768px / 200% root font, document width stays 768px and navigation collapses. Previous adaptation checks covered 320px / enlarged text, short-height scrollable navigation, Tab, Escape focus restoration, and resize-to-desktop closure; source is unchanged.
- Normal routes load directly in the production preview. Unknown URLs display Page not found and a home link rather than developer instructions. Route-specific title and focus management remain implemented.
- Search retains accessible labels, clear buttons, live counts and empty recovery. Previous audit verified clearing to 25 projects / 91 publications and focus returning to the input; search source is unchanged.
- Mobile navigation and other controls remain excluded from particle click additions; prior exercised checks confirmed zero new dots from navigation and four from background clicks.
- All named data assets exist: 91 publication entries, 14 research summaries, 25 portraits, six resources. Missing research documents are represented as noninteractive entries. Portraits are lazy-loaded; campus photo has dimensions, provenance and license credit.
- Shared footer and full-page flex structure support short and long content. Overview text is protected by opaque surfaces. Approved heading sizes, highlights, square boxes and content remain intact.

## Validation and Limits

Current checks: production build; ESLint; whitespace checks; Impeccable source detector; asset existence checks; source palette scan; 21 production route/viewport combinations (7 × 320/768/1280px); 768px / 200% root-font navigation; runtime CSS/canvas color agreement; pause plus synthetic visibilitychange pixel comparison; unknown-route recovery.

The browser is a desktop engine with CSS viewport emulation, not a physical touch device. Text expansion is root-font adjustment, not browser zoom. Visibility events are synthetic, not actual OS/tab switching. Earlier unchanged behavior is labeled as previously verified rather than freshly retested.

Still outside comprehensive validation: screen readers; contrast over every moving-background state; OS-level reduced motion; physical touch; cross-browser testing; PDF accessibility; external site availability; injected chunk/render failures; production-host deep-link configuration; slow-network/device measurements; Core Web Vitals. Generic route error recovery and decorative-load graceful failure are implemented, but failure injection was not performed. Theme switching is not a requirement: canvas colors are read on mount for the current single palette.

Report saved directly to `.impeccable/audit.md`; the published engine's audit-storage command was previously found unsupported. Only this report was changed by the audit.

## Recommended Actions

No corrective command is required for a confirmed outstanding finding. An optional `/impeccable polish` can provide a final visual consistency pass. Before treating the site as accessibility-certified or performance-benchmarked, separately exercise the untested areas above. Re-run `/impeccable audit` after future changes.
