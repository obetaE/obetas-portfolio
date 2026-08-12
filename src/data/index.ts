import type { UIUXProject } from '../types';
import { slugify } from '../utils/slug';
import { uiuxProjects } from './uiuxProjects';

export { projects, projectCategories } from './projects';
export { uiuxProjects } from './uiuxProjects';

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
