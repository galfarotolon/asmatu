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
    const query = `
      *[_type == "projectPage" && lower(slug.${lang}.current) == lower($slug)][0]{
        _id,
        _type,
        title{ es, eu },
        slug
      }
    `;
    console.log("[getPage] Running query:", query, "with variables:", { slug });
    const result = await client.fetch(query, { slug });
    console.log("[getPage] Result from Sanity:", result);
    return result;
  }
  
  export async function getAllRoutes() {
    const query = `
      *[_type == "projectPage"]{
        _id,
        title,
        slug,
        _type
      }
    `;
    return client.fetch(query);
  }

