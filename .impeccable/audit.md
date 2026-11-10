# RCNL technical audit

Date: 2026-11-10. Scope: all seven local application routes. No application fixes made.

## Audit Health Score

| Dimension | Score | Key finding |
|---|---:|---|
| Accessibility | 1/4 | Mobile navigation is unavailable to keyboard users |
| Performance | 2/4 | Continuous particle engine and eager portrait loading |
| Theming | 3/4 | Tailwind tokens exist; canvas colors duplicate them |
| Responsive Design | 2/4 | Responsive grids work; menu control is only 18 × 18px |
| Implementation Integrity | 2/4 | Eleven invalid document links and placeholder Overview |
| **Total** | **10/20** | **Acceptable: significant work needed** |

These are rubric-based implementation scores, not a WCAG certification or measured performance benchmark.

## Implementation Integrity Verdict

**Fail on functional completeness.** Lab identity, mission, content data, and navigation form a recognizable research site. However, eleven projects link to `assets/research/null` and the homepage's Learn More destination is unfinished. Those prevent the site from consistently supporting collaborators evaluating the work.

The bundled source detector ran against `src` and returned two `overused-font` warnings in `src/index.css` for Inter. These describe the same font choice, not two technical defects. Neither is included in the issue count; replacing an established font solely to satisfy that heuristic is unjustified.

## Executive Summary

- **10/20; 13 findings: P0 0, P1 7, P2 6, P3 0.**
- Priorities: keyboard-accessible navigation, meaningful accessible names, usable search focus, motion controls, valid project destinations, and substantive Overview content.
- Build and lint pass. Every non-null document filename and portrait filename in the four data files resolves to a local asset.
- Fix functional and accessibility issues first; preserve bibliographic data and supplied identity.

## Detailed Findings by Severity

### 1. [P1] Mobile navigation cannot be opened by keyboard

- **Location:** `src/components/common/Navbar.jsx:28` and `:38`.
- **Category:** Accessibility / Responsive.
- **Evidence and impact:** Menu trigger is a clickable div with tabIndex -1, no button role, accessible name, expanded state, or keyboard handler. Desktop navigation is hidden below md, leaving keyboard users without a way to open page navigation. Browser click opens it; Escape leaves it open. At 375 × 812 the expanded fixed nav measured 870px high.
- **Standard:** WCAG 2.1.1 and 4.1.2. Escape dismissal is an additional usability recommendation.
- **Recommendation:** Use a named native button with aria-expanded and aria-controls, deliberate focus handling, Escape dismissal, and available-height sizing. Ensure background focus does not disappear behind the expanded panel.
- **Suggested command:** `/impeccable harden`.

### 2. [P1] Logo and footer links are unnamed; map frame lacks a title

- **Location:** `src/components/common/Navbar.jsx:17`; `src/components/common/Footer.jsx:13`, `:17`, `:20`, `:23`; `src/components/pages/ContactPage.jsx:40`.
- **Category:** Accessibility.
- **Evidence and impact:** Icon-only links contain SVGs without text alternatives or link labels. The embedded map iframe has no title. Assistive technology users cannot reliably identify these destinations or the frame's purpose.
- **Standard:** WCAG 2.4.4 / 4.1.2 for link naming; 4.1.2 for frame naming.
- **Recommendation:** Name the home, Academia, email, and GitHub links and title the map iframe. Hide decorative child icons from accessibility APIs.
- **Suggested command:** `/impeccable harden`.

### 3. [P1] All 25 portraits omit alt attributes

- **Location:** `src/components/pages/PeoplePage.jsx:46`.
- **Category:** Accessibility.
- **Evidence and impact:** Browser inspection found 25 loaded images with alt=null. Screen readers may expose filenames or redundant content.
- **Standard:** WCAG 1.1.1.
- **Recommendation:** Use alt="" when the adjacent name provides all relevant information, or a meaningful alternative when the portrait conveys additional information.
- **Suggested command:** `/impeccable harden`.

### 4. [P1] Search loses its visible keyboard focus and persistent label

- **Location:** `src/components/pages/PublicationsPage.jsx:39`; `src/components/pages/ResearchPage.jsx:37`.
- **Category:** Accessibility.
- **Evidence and impact:** Both inputs have only a Search placeholder, no associated label or explicit accessible name, and focus:outline-none. Focused Publications input computed outline-style:none with no replacement focus treatment. Users cannot reliably locate keyboard focus, and the label disappears after typing. Placeholder may act as an accessible-name fallback in some browsers; it is not a persistent visible label.
- **Standard:** WCAG 2.4.7; persistent labeling supports 3.3.2.
- **Recommendation:** Provide a visible associated label specific to each collection and a high-contrast focus-visible or focus-within treatment.
- **Suggested command:** `/impeccable harden`.

### 5. [P1] Continuous background motion has no pause or reduced-motion alternative

- **Location:** `src/components/common/effects/ParticleEffect.jsx:28`, `:61`; `src/index.css`.
- **Category:** Accessibility / Performance.
- **Evidence and impact:** Every route mounts an indefinitely moving fullscreen particle canvas, with no pause control or prefers-reduced-motion handling. Moving content remains present alongside reading content and may distract or discomfort motion-sensitive visitors.
- **Standard:** WCAG 2.2.2 for automatically starting movement lasting more than five seconds alongside other content.
- **Recommendation:** Offer a static alternative under reduced motion and a pause/stop mechanism for continuous animation, or make the decorative effect static by default. Avoid blanket removal of all interaction feedback.
- **Suggested command:** `/impeccable quieter`.

### 6. [P1] Eleven project cards navigate to a nonexistent document

- **Location:** `src/components/pages/ResearchPage.jsx:61`; `src/data/research.json`.
- **Category:** Implementation Integrity.
- **Evidence and impact:** Of 25 projects, 11 have file:null, but every card concatenates file into its href. Browser inspection confirmed eleven `assets/research/null` anchors. Collaborators cannot open evidence the UI implies is available.
- **Standard:** Functional correctness; no specific WCAG failure asserted.
- **Recommendation:** Render entries without files as non-link content and state that a summary is unavailable where useful. Link only supplied, existing documents; do not invent replacements.
- **Suggested command:** `/impeccable harden`.

### 7. [P1] Homepage Learn More leads to placeholder content

- **Location:** `src/components/pages/OverviewPage.jsx:22` and `:25`; `src/components/pages/HomePage.jsx`.
- **Category:** Implementation Integrity.
- **Evidence and impact:** Overview contains two visible ADD HERE instructions instead of a lab overview. This undermines the primary invitation to understand the research.
- **Standard:** Content completeness; no specific WCAG failure asserted.
- **Recommendation:** Obtain approved overview copy and supporting media, or choose an existing substantive destination for the homepage action. PRODUCT.md explicitly leaves replacement factual copy undecided.
- **Suggested command:** `/impeccable clarify` after factual content is supplied or approved.

### 8. [P2] Missing main landmarks and flattened heading hierarchy

- **Location:** Page content wrappers across `src/components/pages/`; e.g. `PublicationsPage.jsx:30`, `:72`; `PeoplePage.jsx:50`; `Footer.jsx:11`.
- **Category:** Accessibility.
- **Evidence and impact:** All seven routes have zero main landmarks. Publications has 92 h1 elements (page title plus 91 cards); Research has 26. Card titles are not subordinate headings. Footer is a div rather than a footer landmark. Long collections are harder to navigate by assistive technology; no skip-to-content mechanism exists.
- **Standard:** WCAG 1.3.1 / 2.4.1 review concern; counts alone do not establish a violation.
- **Recommendation:** Use one page-level main, hierarchical collection headings, a footer landmark, and a skip link.
- **Suggested command:** `/impeccable harden`.

### 9. [P2] Search has no zero-results or result-status feedback

- **Location:** `src/components/pages/PublicationsPage.jsx:47`; `src/components/pages/ResearchPage.jsx:40`.
- **Category:** Implementation Integrity / Accessibility.
- **Evidence and impact:** Entering `zzzz-no-such-paper` in Publications removes all 91 cards and leaves empty space without explanation or recovery action. Neither collection exposes a result count or live status.
- **Standard:** Result changes should be evaluated against WCAG 4.1.3; no blanket failure asserted without assistive-technology testing.
- **Recommendation:** Show a count and clear no-results message with a clear-search action; announce concise result status without moving focus.
- **Suggested command:** `/impeccable harden`.

### 10. [P2] Decorative animation and eager images add avoidable loading and rendering work

- **Location:** `ParticleEffect.jsx:1`, `:28`; `PeoplePage.jsx:46`; `src/main.jsx` route imports.
- **Category:** Performance.
- **Evidence and impact:** Production JS is 483.00kB raw / 145.46kB gzip, in a single application chunk. Particle engine is imported by every page and requests a 120fps ceiling. All 25 portraits load eagerly, totaling 1,699,651 source bytes; largest is 355,240 bytes. Images have no intrinsic dimensions or responsive variants. This creates avoidable work on mobile; frame-rate degradation and Core Web Vitals were not measured.
- **Standard:** Performance engineering; no specific WCAG failure asserted here.
- **Recommendation:** Lazy-load below-fold portraits, set dimensions, optimize source sizes and responsive candidates, and defer or remove decorative engine work on reading routes. Consider route splitting after profiling; avoid speculative memoization.
- **Suggested command:** `/impeccable optimize`.

### 11. [P2] Small navigation and social targets need more hit area

- **Location:** `Navbar.jsx:28`; `Footer.jsx:16`.
- **Category:** Responsive.
- **Evidence and impact:** At 375px the menu trigger is 18 × 18px; Academia is 18 × 18px and GitHub is 20 × 20px. These are below the 44px touch usability target. Footer spacing can satisfy the WCAG 24px spacing exception, so small dimensions alone are not reported as an AA failure. Inline attribution links are excluded from the issue.
- **Standard:** 44px is a usability recommendation / WCAG 2.5.5 AAA; verify 2.5.8 spacing exceptions before declaring an AA violation.
- **Recommendation:** Increase clickable padding without enlarging icon artwork, especially on the mobile menu button.
- **Suggested command:** `/impeccable adapt`.

### 12. [P2] Canvas colors bypass shared color tokens

- **Location:** `src/index.css:6`; `ParticleEffect.jsx:24`, `:52`, `:55`.
- **Category:** Theming.
- **Evidence and impact:** Tailwind defines brand tokens, but the canvas independently hard-codes white and blue. A future token update will not update the background effect. The site currently implements a light theme; absence of dark mode is not a defect under the confirmed requirements.
- **Standard:** Maintainability; no specific WCAG failure asserted.
- **Recommendation:** Resolve canvas colors from the shared CSS custom properties or one shared token source when initializing and updating the effect.
- **Suggested command:** `/impeccable extract`.

### 13. [P2] A profile without a destination is still a link

- **Location:** `src/components/pages/PeoplePage.jsx:43`; Jun-Jun entry in `src/data/people.json`.
- **Category:** Implementation Integrity.
- **Evidence and impact:** When website and email are absent, href is an empty string. The rendered Jun-Jun profile links back to the current document in a new tab rather than a meaningful destination.
- **Standard:** Functional correctness; no specific WCAG failure asserted.
- **Recommendation:** Render a noninteractive profile when no destination exists while preserving the supplied profile content.
- **Suggested command:** `/impeccable harden`.

## Patterns & Systemic Issues

- Native semantics are repeatedly replaced by generic divs: mobile trigger, content landmarks, footer.
- Collections assume valid link targets and nonempty results rather than modeling unavailable destinations and empty states.
- Animation is applied globally regardless of reading workload or motion preference.
- Accessibility metadata is omitted across reused images, links, and controls; fixing shared components will address multiple routes.

## Positive Findings

- Production build and ESLint pass.
- All non-null data-file asset references exist: 91 publication entries, 14 research summaries, 25 portraits, and six resources.
- All seven routes fit the 375px viewport without document-level horizontal overflow. People, Publications, and Contact also fit at 320, 768, and 1280px.
- Existing grids adapt across breakpoints, and publication search successfully filters the collection.
- External links consistently use rel=noreferrer when opening a new tab.
- Shared components, Tailwind tokens, and JSON-backed content maintenance provide a useful foundation. Brand font and blue links were not flagged solely for familiarity.

## Validation and Limits

Used the T3 collaborative browser for local route navigation, DOM measurements, search typing, menu click, and Escape interaction. Device sizes were emulated desktop-browser CSS viewports, not physical devices or synthesized touch gestures. No custom drag surfaces were found. Screen-reader testing, physical touch testing, full contrast coverage, 200% text zoom, dark-theme visual testing, PDF accessibility, external-link availability, production deployment behavior, Lighthouse/Core Web Vitals, and animation frame profiling were not performed. No unmeasured contrast failure is claimed. Reduced-motion findings are based on source inspection rather than OS preference emulation.

Ran `npm run build`, `npm run lint`, asset-reference checks, and the Impeccable `detect --json src` source scan. Detector exit 2 carried two warnings, not a build failure. The published launcher's engine does not support `audit-storage` (returned Unknown command); this report is saved directly here as a fallback. Application code is unchanged.

## Recommended Actions

1. **[P1] `/impeccable harden`** — accessible menu and names, portrait alternatives, search focus, valid document/profile destinations, then semantic structure and empty results.
2. **[P1] `/impeccable quieter`** — deliberate static/reduced-motion behavior and pause support for the background.
3. **[P1] `/impeccable clarify`** — resolve Overview content with approved lab facts; do not invent research claims.
4. **[P2] `/impeccable optimize`** — optimize portrait loading and profile decorative engine cost.
5. **[P2] `/impeccable adapt`** — improve mobile hit areas and expanded-menu sizing.
6. **[P2] `/impeccable extract`** — unify canvas colors with shared tokens.
7. **`/impeccable polish`** — final verification after the functional and accessibility fixes.

Run these individually, all at once, or in any preferred order. Re-run `/impeccable audit` after fixes to reassess the score.
