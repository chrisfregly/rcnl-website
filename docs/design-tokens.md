# Shared color tokens

Palette definitions live in the existing Tailwind `@theme` block in `src/index.css`. Use Tailwind utilities in JSX and the same custom properties in authored CSS; do not introduce a second JavaScript palette.

| Token | Purpose | Usage |
| --- | --- | --- |
| `--color-blue` | Brand actions, focus and particle/link colors | `text-blue`, `bg-blue`, `var(--color-blue)` |
| `--color-light-blue` | Heading highlights and blue dividers | `var(--color-light-blue)` |
| `--color-surface-blue` | Light-blue reading panels | `bg-surface-blue`, `var(--color-surface-blue)` |
| `--color-control-hover` | Subtle animation-control hover surface | `var(--color-control-hover)` |
| `--color-blue-hover` | Primary action hover state | `var(--color-blue-hover)` |
| `--color-blue-active` | Primary action pressed state | `var(--color-blue-active)` |

Use the existing Tailwind neutral tokens instead of repeating hex values: `--color-white` for opaque surfaces, `--color-slate-200` for neutral borders, `--color-slate-600` for secondary/placeholder text, and `--color-slate-900` for primary text.

Example:

```css
.reading-panel {
  background: var(--color-surface-blue);
  border: 1px solid var(--color-light-blue);
}
```

The particle canvas cannot interpret CSS variables directly. `createParticleOptions()` in `ParticleEffect.jsx` reads the computed `--color-blue` token once on mount and passes the resolved color to the engine for both dots and lines. Options are memoized so pause/resume does not recreate the scene. A future live theme switch would need an explicit canvas-color update; this site currently has one palette.

This extraction keeps the existing brand and surface values. Neutral authored CSS now uses the same Tailwind neutral scale as adjacent components. Shared search, navbar, footer, and highlight components remain the established component structure; no additional component abstraction was needed.
