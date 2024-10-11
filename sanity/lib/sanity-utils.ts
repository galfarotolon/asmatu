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


export interface SliderItem {
  mediaType: 'image' | 'video';
  image: string | null;
  video: { asset: { url: string } } | null;
  serviceTitle: { es: string; eu: string };
  subHeader: { es: string; eu: string };
  description: { es: string; eu: string };
}

export interface SliderData {
  slides: SliderItem[];
}


/**
 * Fetches slider data based on locale.
 * @param locale - "es" or "eu"
 * @returns SliderData object
 */
export async function getSliderData(locale: string): Promise<SliderData> {
  // Validate the locale input
  if (!['es', 'eu'].includes(locale)) {
    console.error(`Invalid locale "${locale}". Expected "es" or "eu".`)
    return { slides: [] }
  }

  const query = `*[_type == "slider"][0]{
    slides[]{
      mediaType,
      image{
        asset->{
          url
        },
        "alt": alt_${locale}
      },
      video{
        asset->{
          url
        }
      },
      serviceTitle{
        ${locale}
      },
      subHeader{
        ${locale}
      },
      description{
        ${locale}
      }
    }
  }`

  try {
    const data = await client.fetch(query)

    console.log('Slider Data:', data)

    if (!data) {
      console.error('No slider data found')
      return { slides: [] }
    }

    return {
      slides: data.slides?.map((slide: any) => ({
        mediaType: slide.mediaType,
        image: slide.mediaType === 'image' && slide.image?.asset?.url ? slide.image.asset.url : null,
        video: slide.mediaType === 'video' && slide.video?.asset?.url ? { asset: { url: slide.video.asset.url } } : null,
        serviceTitle: slide.serviceTitle || { es: '', eu: '' },
        subHeader: slide.subHeader || { es: '', eu: '' },
        description: slide.description || { es: '', eu: '' },
      })) || [],
    }
  } catch (error) {
    console.error('Error fetching slider data:', error)
    return { slides: [] }
  }
}

/**
 * Fetches page data based on locale and slug.
 * @param locale - "es" or "eu"
 * @param slug - Page slug
 * @returns Page data object or null
 */
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