// sanity/lib/sanity-utils.ts
import { client } from "./client"
import { urlForImage } from "./image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface MenuItem {
  _key?: string | null;
  title: string | null;
  slug: string | null;
  subItems?: (MenuItem | null)[] | null;
}

export interface HeaderData {
  logos: {
    light: {
      url: string | StaticImport | null;
      alt: string | null;
    };
    dark: {
      url: string | StaticImport | null;
      alt: string | null;
    };
  };
  menuItems: MenuItem[];
}

export async function getHeaderData(locale: string): Promise<HeaderData> {
  const query = `*[_type == "header"][0]{
    logos{
      light{
        "url": asset->url,
        "alt": ${locale}
      },
      dark{
        "url": asset->url,
        "alt": ${locale}
      }
    },
    menuItems[] {
      "title": title.${locale},
      "slug": slug.${locale}.current,
      subItems[] {
        "title": title.${locale},
        "slug": slug.${locale}.current
      }
    }
  }`

  try {
    const data = await client.fetch(query)

    console.log(data)

    if (!data) {
      console.error('No header data found')
      return { 
        logos: { 
          light: { url: null, alt: null }, 
          dark: { url: null, alt: null } 
        }, 
        menuItems: [] 
      }
    }

    return {
      logos: {
        light: {
          url: data.logos?.light?.url ? urlForImage(data.logos.light.url) : null,
          alt: data.logos?.light?.alt || null,
        },
        dark: {
          url: data.logos?.dark?.url ? urlForImage(data.logos.dark.url) : null,
          alt: data.logos?.dark?.alt || null,
        },
      },
      menuItems: data.menuItems?.map((item: MenuItem) => ({
        title: item.title || null,
        slug: item.slug || null,
        subItems: item.subItems?.map((subItem: MenuItem) => ({
          title: subItem.title || null,
          slug: subItem.slug || null
        })) || null
      })) || []
    }
  } catch (error) {
    console.error('Error fetching header data:', error)
    return { 
      logos: { 
        light: { url: null, alt: null }, 
        dark: { url: null, alt: null } 
      }, 
      menuItems: [] 
    }
  }
}


export async function getPageData(locale: string, slug: string) {
  const query = `
      *[_type == "page" && slug.${locale}.current == $slug][0] {
          title,
          "slug": slug.${locale}.current,
          content,
          type
      }
  `;

  try {
      const data = await client.fetch(query, { slug: slug || 'home' });
      return data;
  } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
  }
}