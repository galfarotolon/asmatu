// /sanity/queries.ts
import { client } from './lib/client';

export async function getHomepage() {
    const query = `*[_type == "homepage"][0]{
      slides[]{
        mediaType,
        videoFile{
          asset->{
            url
          }
        },
        backgroundImage{
          asset->{
            url
          }
        },
        title{
          ESP,
          EU
        },
        subtitle{
          ESP,
          EU
        },
        description{
          ESP,
          EU
        },
        link{
          ESP,
          EU
        }
      }
    }`;
  return client.fetch(query);
}


export async function getNavigation() {
    const query = `*[_type == "navigation"][0]{
      menuItems[]{
        labelESP,
        labelEU,
        slugESP{ current },
        slugEU{ current },
        submenu[]{
          labelESP,
          labelEU,
          slugESP{ current },
          slugEU{ current }
        }
      }
    }`;
    return client.fetch(query);
  }

  export async function getPage(slug: string, lang: "es" | "eu") {
    const query =
      lang === "es"
        ? `*[_type == "page" && slugESP.current == $slug][0]`
        : `*[_type == "page" && slugEU.current == $slug][0]`;
    return client.fetch(query, { slug });
  }

  export async function getProjectPage() {
    const query = `
      *[_type == "projectPage"][0]{
        titleESP,
        titleEU,
        slugESP,
        slugEU
      }
    `;
    return client.fetch(query);
  }