/**
 * Shared type definitions for the portfolio.
 *
 * Everything that describes a piece of work lives here so the data files
 * (src/data/*) stay purely declarative and the components stay purely visual.
 */

/* ------------------------------------------------------------------ */
/* General projects (Websites / Apps / UI-UX cards on the home page)   */
/* ------------------------------------------------------------------ */

export type ProjectCategory = 'websites' | 'apps' | 'uiux';

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  /** Card thumbnail. Paths are relative to /public. */
  img: string;
  /**
   * External URL (https://…) or an internal route (/uiux/…).
   * Omit entirely if there is nothing to link to yet.
   */
  link?: string;
  /**
   * `false` renders the Coming Soon card instead of a clickable one.
   * Defaults to `true` when omitted.
   */
  ready?: boolean;
  /** Renders the card at double width with a taller image (first card only). */
  featured?: boolean;
  /** Optional line shown on the Coming Soon card, e.g. "Launching Q4 2026". */
  comingSoonNote?: string;
}

/* ------------------------------------------------------------------ */
/* UI/UX case studies (the /uiux/:slug page)                           */
/* ------------------------------------------------------------------ */

export interface Screenshot {
  /** Path under /public. Encode spaces as %20. */
  src: string;
  /** Shown under the device frame and used as the alt text. */
  caption: string;
  /** Groups screens into a labelled set, e.g. "Onboarding". */
  group?: string;
  /**
   * `true` for long scrolling screens (taller than a phone viewport).
   * The device frame lets these scroll instead of cropping them.
   */
  tall?: boolean;
}

export interface PaletteColor {
  name: string;
  hex: string;
  usage?: string;
}

export interface TypeStyle {
  /** e.g. "Display", "Interface". */
  role: string;
  name: string;
  usage?: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface UserFlow {
  name: string;
  steps: string[];
}

export interface MetaItem {
  label: string;
  value: string;
}

export interface Insight {
  title: string;
  desc: string;
}

export interface UIUXProject {
  /** URL segment: /uiux/<slug>. */
  slug: string;
  title: string;
  /** One short line under the title. */
  tagline?: string;
  /** Paragraph used on the card and in the hero. */
  desc: string;
  tags: string[];
  /** Card thumbnail — falls back to the first screenshot. */
  cover?: string;
  /**
   * `false` renders the Coming Soon panel instead of the case study.
   * Defaults to `true` when omitted.
   */
  ready?: boolean;
  comingSoonNote?: string;

  /* Case study body — every section is optional and is skipped when absent. */
  meta?: MetaItem[];
  overview?: string[];
  problems?: Insight[];
  solutions?: Insight[];
  process?: ProcessStep[];
  flows?: UserFlow[];
  palette?: PaletteColor[];
  typography?: TypeStyle[];
  outcomes?: string[];
  nextSteps?: string[];

  screenshots: Screenshot[];

  /** Shared on request only — leave null/omitted to hide the button. */
  figmaLink?: string | null;
  /** Live prototype or public preview, if there is one. */
  link?: string;
}
