import { client } from "./client";

export async function getHomepage(lang: "es" | "eu") {
  const query = `*[_type == "homepage"][0]{
    slides[]{
      mediaType,
      videoFile{ asset->{ url } },
      backgroundImage{ asset->{ url } },
      title{ ESP, EU },
      subtitle{ ESP, EU },
      description{ ESP, EU },
      link{ ESP, EU }
    }
  }`;
  return client.fetch(query);
}

export async function getNavigation(lang: "es" | "eu") {
    const query = `*[_type == "navigation"][0]{
      menuItems[]{
        labelESP,
        labelEU,
        "slugESP": slugESP.current,
        "slugEU": slugEU.current,
        submenu[]{
          labelESP,
          labelEU,
          "slugESP": slugESP.current,
          "slugEU": slugEU.current
        }
      }
    }`;
    return client.fetch(query);
  }

export async function getPage(slug: string, lang: "es" | "eu") {
  const slugField = `slug.${lang}.current`;
  const query = `*[_type == "projectPage" && ${slugField} == $slug][0]{
    _id,
    title{ es, eu },
    slug,
    // Add other fields
  }`;
  return client.fetch(query, { slug });
}

export async function getAllRoutes() {
  const query = `*[_type == "projectPage"]{
    "slugs": [
      { "params": { "slug": slug.es.current }, "lang": "es" },
      { "params": { "slug": slug.eu.current }, "lang": "eu" }
    ]
  }`;
  return client.fetch(query);
}