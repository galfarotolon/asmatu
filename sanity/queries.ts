import { getBaseRoute, ROUTE_CODES } from "@/app/lib/routing";
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
  // 1. Try a direct match first (for pages that store full slug)
  const fullQuery = `
    *[
      (_type == "projectPage" || _type == "service") &&
      lower(slug.${lang}.current) == lower($slug)
    ][0]{
      _id,
      _type,
      title{ es, eu },
      slug,
      description,
      summary,
      image,
      features
    }
  `;
  let result = await client.fetch(fullQuery, { slug });
  if (result) return result;
  
  // 2. Split the slug into segments
  const segments = slug.split("/").filter(Boolean);
  if (segments.length === 2) {
    const [baseSegment, serviceSegment] = segments;
    // Get the services base route from navigation
    const baseRoute = await getBaseRoute(ROUTE_CODES.SERVICES, lang);
    if (baseRoute.toLowerCase() === baseSegment.toLowerCase()) {
      // Now query for a service with the final slug matching serviceSegment
      const serviceQuery = `
        *[_type == "service" && lower(slug.${lang}.current) == lower($serviceSegment)][0]{
          _id,
          _type,
          title{ es, eu },
          slug,
          description,
          summary,
           image{ asset->{ url } },
          features
        }
      `;
      const serviceResult = await client.fetch(serviceQuery, { serviceSegment });
      if (serviceResult) return serviceResult;
    }
  }
  
  // 3. Check if it is the services landing page (if the slug matches the base route exactly)
  const baseRoute = await getBaseRoute(ROUTE_CODES.SERVICES, lang);
  if (slug.toLowerCase() === baseRoute.toLowerCase()) {
    const servicesPage = await getServicesPage(lang);
    servicesPage._type = "servicesPage";
    return servicesPage;
  }
  
  return null;
}
  export async function getAllRoutes() {
    const query = `
      *[_type in ["projectPage", "servicesPage", "service"]]{ 
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
  


export async function getServicesPage(lang: "es" | "eu") {
  const query = `
    *[_type == "servicesPage"][0]{
      headerTitle{
        es, eu
      },
      introText{
        es, eu
      },
      linkLabel{
        es, eu
      },
      services[]->{
        _id,
        title{ es, eu },
        slug,
        summary{ es, eu },
        image { asset->{ url } },
        // include additional fields as needed
      },
    }
  `;
  return client.fetch(query);
}
