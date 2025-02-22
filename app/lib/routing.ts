// /lib/routing.ts

/**
 * Given the navigation document and the current language,
 * returns the blog base route by searching for the menu item
 * whose internal key equals "blog". It then returns its real slug.
 *
 * @param navigation - The navigation data (with menuItems array)
 * @param lang - "es" or "eu"
 * @returns The blog base route as a string.
 */

import { getNavigation } from "@/sanity/queries"

//these route codes must be unique, they are used to identify the menu item in the navigation document in SANITY. 
//VERY IMPORTANT!!! its for the sanity studio to know which menu item to use for the slug and centralize routing across
// the website
export const ROUTE_CODES = {
  HOMEPAGE: "", // No slug for homepage
  PROJECTS: "projects",
  SERVICES: "services",
  BLOG: "blog",
  CONTACT: "contact",
  // Add additional pages as needed
};



export async function getBaseRoute(code: string, lang: "es" | "eu"): Promise<string> {
  const nav: any = await getNavigation();
  if (!nav || !nav.menuItems) return code;
  const item = findNavItemByKey(nav.menuItems, code);
  if (item && item[lang] && item[lang].current) {
    return item[lang].current;
  }
  return code;
}

export function findNavItemByKey(items: any[], key: string): any | null {
  for (const item of items) {
    if (item && item.key === key) return item;
    if (item && item.submenu) {
      const found = findNavItemByKey(item.submenu, key);
      if (found) return found;
    }
  }
  return null;
}