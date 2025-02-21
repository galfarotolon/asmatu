import { client } from "./client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
  }

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
      },
      principles[]{
        title{ es, eu },
        anchor{ es, eu },
        description{ es, eu },
        number,
        slug
      },
      about{
        title{ es, eu },
        bodyEs[]{ ..., markDefs[]{ ... }, children[]{ ... } },
        bodyEu[]{ ..., markDefs[]{ ... }, children[]{ ... } },
        signName{ es, eu },
        signPosition{ es, eu },
        rightImage{ asset->{ url } }
      },
    servicesSection{
      title{ es, eu },
      text{ es, eu }
    },
      services[]->{
        _id,
        title,
        slug,
        description,
        summary,
         image { asset->{ url }, alt },
        features
      },
       whyChooseUs{
      title{ es, eu },
      description{ es, eu },
      statistics,
      badge{
        title{ es, eu },
        description{ es, eu },
        yearsExperience,
        badgeImage
      },
      featuresList
    },
    clientsSection{
      header{ es, eu },
      subheader{ es, eu },
      clients[]->{
        _id,
        name,
       image { asset->{ url }, alt },
      }
    },
    ctaSection{
      header{ es, eu },
      subheader{ es, eu },
      buttonText{ es, eu },
      buttonLink
    },
    testimonialSection{ 
  backgroundImage{ asset->{ url } },
  quote{ es, eu },
  name{ es, eu },
  position{ es, eu }
},
projectsSection{
  header{ es, eu },
  description{ es, eu },
  projectsLink{ es, eu }
},
featuredProjects[]->{
  _id,
  title{ es, eu },
  slug{ es, eu },
  description{ es, eu },
  img{ asset->{ url } }
},
   blogSection{
  sectionData{ title{ es, eu }, leadText{ es, eu } },
  featuredBlogs[]->{ _id, title{ es, eu }, slug{ es, eu }, mainImage{ asset->{ url } }, author, date, location }
},
  }`;
  return client.fetch(query);
}
export async function getNavigation() {
  const query = `*[_type == "navigation"][0]{
    menuItems,
    footerItems
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



  export async function getServices() {
    const query = `*[_type == "service"]{
      _id,
      title,
      slug,
      description,
      summary,
       image { asset->{ url }, alt },
      features
    }`;
    return client.fetch(query);
  }


  export async function getProjects(lang: "es" | "eu") {
    const query = `*[_type == "project"]{
      _id,
      category,
      img{ asset->{ url } },
      title{ es, eu },
      slug{ es, eu },
      description,
      detailedInfo,
      quote,
      value,
      client,
      architect,
      location,
      completionDate,
      squareFootage
    }`;
    return client.fetch(query);
  }
  