import type { UIUXProject } from '../types';
import { slugify } from '../utils/slug';
import { uiuxProjects } from './uiuxProjects';
import { mobileApps } from './mobileApps';

export { projects, projectCategories } from './projects';
export { uiuxProjects } from './uiuxProjects';
export { mobileApps } from './mobileApps';

/**
 * Resolves the project for a /uiux/:slug URL.
 *
 * Matches on the explicit `slug` first, then falls back to a slugified
 * `title`, so a link built from either one lands on the same case study.
 */
export const findUIUXProject = (slug?: string): UIUXProject | undefined => {
  if (!slug) return undefined;
  const target = slugify(decodeURIComponent(slug));
  return uiuxProjects.find(
    (project) => slugify(project.slug) === target || slugify(project.title) === target,
  );
};

/**
 * Resolves the project for an /apps/:slug URL.
 *
 * Same matching rules as findUIUXProject — explicit `slug` first, then
 * a slugified `title` as a fallback.
 */
export const findMobileApp = (slug?: string) => {
  if (!slug) return undefined;
  const target = slugify(decodeURIComponent(slug));
  return mobileApps.find(
    (p) => slugify(p.slug) === target || slugify(p.title) === target,
  );
};