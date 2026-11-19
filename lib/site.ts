// Single source of truth for the production domain used in canonical
// URLs, the sitemap and robots.txt. Matches `metadataBase` in app/layout.tsx.
export const SITE_URL = "https://adadesign.com.au";

/** Absolute URL for a site path, e.g. absoluteUrl("/services") */
export function absoluteUrl(path: string = "/"): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
