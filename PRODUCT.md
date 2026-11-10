# RCNL Website

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Research collaborators are the primary audience. They visit to evaluate the lab's work and find relevant publications. Prioritize their ability to understand research topics, inspect the supporting work, and identify people to contact.

## Product Purpose

Represent the Rice Computational Neuromechanics Lab and communicate its mission: “Making model-based personalized treatment design for neurologic and orthopedic movement impairments a clinical reality.”

Success means collaborators can understand the lab's work, find publications and project information, and locate contact details.

## Positioning

The lab's stated focus is model-based personalized treatment design for neurologic and orthopedic movement impairments. Preserve this specific research focus; do not replace it with generic claims about technology or healthcare.

## Operating Context

This is a public informational research-lab website. Its existing routes are Home, Overview, Research, Publications, People, Resources, and Contact. Research and Publications provide text search; entries link to supporting documents where available. People provides profiles and contact or external profile links. Resources includes lab and academic guidance documents.

The existing application uses React, Vite, React Router, and Tailwind CSS. Content is maintained through JSON files in `src/data/` and corresponding assets in `public/assets/`, as described in `README.md`. Preserve this content-maintenance workflow. Local development uses `npm run dev`; the existing GitHub Actions workflow builds and publishes on pushes to `main`.

## Capabilities and Constraints

- Preserve existing research and publication content, including titles, authors, dates, funding information, and supporting documents. Corrections require evidence rather than editorial invention.
- Preserve navigation to research, publications, people, resources, and contact information when refining the site.
- Keep the site's mission framed as a research goal; do not invent clinical availability, outcomes, efficacy, or services.
- The Overview page contains a source-based draft requested by the user, explaining the lab mission, historical research areas, and NMSM Pipeline. Provenance is recorded in `docs/overview-sources.md`; no clinical efficacy or availability claims should be inferred.
- Some research entries have no associated file. Do not fabricate documents or imply that every entry has a download.
- Currentness of historical project dates and personnel records has not been independently verified. Their presence is not evidence of active funding or current appointments.
- No additional institutional or content constraints were specified by the user.

## Brand Commitments

The user confirmed preserving the Rice Computational Neuromechanics Lab name, existing logo, research mission, and existing research/publication content. The logo is in `src/assets/rcnl-logo.svg`; the favicon is in `public/rcnl-icon.svg`.

No new visual direction or voice requirements were established during init.

Subsequent user direction: retain the animated particle background and thick blue heading highlights, and incorporate a real Rice University campus photo on the homepage. Animation must retain pause support and respect reduced-motion preferences.

## Evidence on Hand

- Mission and lab name: `src/components/pages/HomePage.jsx`.
- Publications and bibliographic metadata: `src/data/publications.json`; supporting documents in `public/assets/publications/`.
- Funded project records: `src/data/research.json`; supporting summaries in `public/assets/research/`.
- People and profile metadata: `src/data/people.json`; portraits in `public/assets/people/`.
- Lab and academic resources: `src/data/resources.json`; documents in `public/assets/resources/`.
- Contact details and embedded location map: `src/components/pages/ContactPage.jsx`.

Use these supplied materials as evidence. Do not invent testimonials, metrics, endorsements, research results, or replacement factual overview copy.

## Product Principles

1. Help collaborators evaluate the research and find publications with minimal friction.
2. Keep scientific claims specific, attributable, and faithful to the supplied evidence.
3. Preserve lab identity and the existing content-maintenance workflow.
4. Make the relationship between research, supporting documents, people, and contact information clear.

## Accessibility & Inclusion

The user specified no additional accessibility constraints or particular conformance standard. This does not exempt future work from accessible web practices; do not claim compliance without verification.
