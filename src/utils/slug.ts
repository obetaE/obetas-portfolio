/**
 * Turns a project title into a URL-safe slug.
 *
 *   slugify('Averly Haven')     -> 'averly-haven'
 *   slugify('My WE Mobile App') -> 'my-we-mobile-app'
 */
export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')          // drop apostrophes rather than hyphenating them
    .replace(/[^a-z0-9]+/g, '-')   // everything else becomes a separator
    .replace(/^-+|-+$/g, '');      // trim leading/trailing separators
