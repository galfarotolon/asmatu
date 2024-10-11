import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface MenuItem {
    _key?: string | null;
  title: string | null;
  slug: string | null;
  subItems?: (MenuItem | null)[] | null;
}

export interface HeaderData {
  logos: {
    light: string | StaticImport | null;
    dark: string | StaticImport | null;
  };
  menuItems: MenuItem[];
}

export async function getHeaderData(locale: string): Promise<HeaderData> {
    const query = `*[_type == "header"][0]{
        logos{
          "light": light.asset->url,
          "dark": dark.asset->url
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
        const data = await client.fetch(query);
        console.log('Fetched data:', JSON.stringify(data, null, 2));
    
        if (!data) {
          console.error('No header data found');
          return { logos: { light: null, dark: null }, menuItems: [] };
        }
  
        return {
          logos: {
            light: data.logos?.light ? urlForImage(data.logos.light) : null,
            dark: data.logos?.dark ? urlForImage(data.logos.dark) : null,
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
        console.error('Error fetching header data:', error);
        return { logos: { light: null, dark: null }, menuItems: [] };
    }
}