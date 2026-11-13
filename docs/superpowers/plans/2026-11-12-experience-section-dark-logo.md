# Experience Section Dark Band Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Apply the approved Experience section layout to the bilingual home page with a dark company band, compact Evertec logo and dates, and open responsibility rows below.

**Architecture:** Reuse the existing ExperienceSection and localized copy. Add the official Evertec dark-background SVG as a static asset and render it beside the employment dates. Scope styling to the Experience section and preserve its #experiencia anchor in both locales.

**Tech Stack:** Next.js 15, React 19, TypeScript, CSS.

**Spec:** docs/superpowers/specs/2026-11-12-experience-section-dark-band-design.md

## Global Constraints

- Keep Experience integrated into the home page in Portuguese and English.
- Use the official Evertec SVG asset, not a recreated logo.
- Keep the approved charcoal and ivory palette, with the company and dates visible but compact.
- Preserve the two responsibility rows and technology line without adding claims or work history.
- Keep the section responsive and linked from the main navigation.

## Review Focus

- Logo and dates share one left edge on desktop and mobile.
- Company and date remain legible without dominating the band.
- Long localized responsibility text remains readable at narrow widths.
- The old /experiencia and /en/experience routes continue to land on the home section.
- Both language variants render the logo and translated copy consistently.

---

### Task 1: Apply the approved bilingual Experience layout

**Files:**
- Create: public/images/evertec-logo.svg — exact SVG served from Evertec’s official site.
- Modify: src/components/experience-page.tsx — include the logo, company period, role, and open responsibility rows.
- Modify: src/app/globals.css — create the compact charcoal header band, align logo/divider/dates, and set responsive rules.

**Interfaces:**
- Consumes: LocaleContent["experience"] from src/data/locales.ts.
- Produces: the ExperienceSection component already mounted at #experiencia by PortfolioHome.

- [ ] Copy the official SVG from the verified Evertec asset URL to public/images/evertec-logo.svg without modifying its artwork.
- [ ] Update ExperienceSection to show the small logo and companyPeriod with a shared left alignment, followed by role/title in the dark band and the existing open rows and stack on ivory.
- [ ] Add scoped desktop and mobile styles; keep the logo compact and the section in the existing page flow.
- [ ] Verify visually in the local browser in Portuguese and English at desktop and mobile widths; confirm the Experience menu link reaches #experiencia and the legacy routes redirect to it.
