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
 seo{
      metaTitle{ es, eu },
      metaDescription{ es, eu },
      metaKeywords,
      ogTitle{ es, eu },
      ogDescription{ es, eu },
      "ogImage": ogImage{ asset->{ url } }
    },
  }`;
  return client.fetch(query);
}
export async function getNavigation() {
  const query = `*[_type == "navigation"][0]{
    menuItems[]{
      key,
      title,
      es,
      eu,
      submenu[]->{
        _id,
        title,
        slug
      }
    },
    footerItems
  }`;
  return client.fetch(query);
}


// getPage: Given a slug and language, try to fetch a document.
// First, try a direct match (for pages that store the full slug).
// If not found, assume it's a service detail page: split into two segments,
// check that the first equals the navigation base route, then query by final slug.
export async function getPage(slug: string, lang: "es" | "eu") {
  // 1. Try a direct match for projectPage, service, or blogPost (full slug stored in document)
  const fullQuery = `
    *[
      (_type == "projectPage" || _type == "service" || _type == "blogPost") &&
      lower(slug.${lang}.current) == lower($slug)
    ][0]{
      _id,
      _type,
      title{ es, eu },
      slug,
      description,
      summary,
      image,
      features,
      date,
      mainImage { asset->{ url } },
      content{ es, eu },
      quote{ es, eu },
      tags[]{ es, eu },
      category,
      author,
      authorUrl,
      listItems[]{ es, eu },
      location,
       seo{
      metaTitle{ es, eu },
      metaDescription{ es, eu },
      metaKeywords,
      ogTitle{ es, eu },
      ogDescription{ es, eu },
      "ogImage": ogImage{ asset->{ url } }
    }
    }
  `;
  let result = await client.fetch(fullQuery, { slug });
  if (result) return result;

  // 2. Split the slug into segments
  const segments = slug.split("/").filter(Boolean);

  // 2a. Check services branch if segments.length === 2
  if (segments.length === 2) {
    const [baseSegment, finalSegment] = segments;
    const servicesBaseRoute = await getBaseRoute(ROUTE_CODES.SERVICES, lang);
    if (servicesBaseRoute.toLowerCase() === baseSegment.toLowerCase()) {
      // Query for a service detail using the final segment
      const serviceQuery = `
        *[_type == "service" && lower(slug.${lang}.current) == lower($finalSegment)][0]{
          _id,
          _type,
          title{ es, eu },
          slug,
          description,
          summary,
          image { asset->{ url } },
          features,
           seo{
      metaTitle{ es, eu },
      metaDescription{ es, eu },
      metaKeywords,
      ogTitle{ es, eu },
      ogDescription{ es, eu },
      "ogImage": ogImage{ asset->{ url } }
    }
        }
      `;
      const serviceResult = await client.fetch(serviceQuery, { finalSegment });
      if (serviceResult) return serviceResult;
    }
  }

  // 3. If slug exactly equals the base route for services, return servicesPage.
  const servicesBaseRoute = await getBaseRoute(ROUTE_CODES.SERVICES, lang);
  if (slug.toLowerCase() === servicesBaseRoute.toLowerCase()) {
    const servicesPage = await getServicesPage(lang);
    return { ...servicesPage, _type: "servicesPage" };
  }

  // 4. BLOG: Get blog base route
  const blogBaseRoute = await getBaseRoute(ROUTE_CODES.BLOG, lang);
  // If slug exactly equals the blog base route, return the blog landing page.
  if (slug.toLowerCase() === blogBaseRoute.toLowerCase()) {
    const blogPage = await getBlogPage(lang);
    return { ...blogPage, _type: "blogPage" };
  }

  // 5. BLOG POST: If the slug has two segments, assume it's a blog post.
  if (segments.length === 2) {
    const [baseSegment, postSlug] = segments;
    console.log("blogBaseRoute:", blogBaseRoute);
    console.log("URL segments:", segments);
    console.log("postSlug:", postSlug);
    if (baseSegment.toLowerCase() === blogBaseRoute.toLowerCase()) {
      // Query explicitly for a blogPost document.
      const blogPostQuery = `
        *[_type == "blogPost" && lower(slug.${lang}.current) == lower($postSlug)][0]{
          _id,
          _type,
          title{ es, eu },
          slug,
          date,
          mainImage { asset->{ url } },
          description{ es, eu },
          summary{ es, eu },
          content{ es, eu },
          quote{ es, eu },
          tags[]{ es, eu },
          category,
          author,
          authorUrl,
          listItems[]{ es, eu },
          location
        }
      `;
      const trimmedSlug = postSlug.trim();
      const blogPost = await client.fetch(blogPostQuery, { postSlug: trimmedSlug });
      if (blogPost) return blogPost;
    }
  }

    // 4. PROJECTS: Get project base route

  const projectsBaseRoute = await getBaseRoute(ROUTE_CODES.PROJECTS, lang);
  if (slug.toLowerCase() === projectsBaseRoute.toLowerCase()) {
    // This is the project landing page
    const projectPage = await getProjectPage(lang);
    return { ...projectPage, _type: "projectPage" };
  }
  
  if (segments.length === 2) {
    const [baseSegment, finalSegment] = segments;
    if (baseSegment.toLowerCase() === projectsBaseRoute.toLowerCase()) {
      // Fetch single project detail
      const projectDetailQuery = `
        *[_type == "project" && lower(slug.${lang}.current) == lower($finalSegment)][0]{
          _id,
          _type,
          "category": category->{
            _id,
            name{ es, eu },
            slug
          },
          img{ asset->{ url } },
          title{ es, eu },
          slug{ es, eu },
          description{ es, eu },
          detailedInfo{ es, eu },
          quote{ es, eu },
          value{ es, eu },
          client{ es, eu },
          architect{ es, eu },
          location{ es, eu },
          completionDate{ es, eu },
          squareFootage{ es, eu },
           seo{
      metaTitle{ es, eu },
      metaDescription{ es, eu },
      metaKeywords,
      ogTitle{ es, eu },
      ogDescription{ es, eu },
      "ogImage": ogImage{ asset->{ url } }
    },
        }
      `;
      const projectDetail = await client.fetch(projectDetailQuery, { finalSegment });
      if (projectDetail) return projectDetail;
    }
  }
  
  // No matching document found
  return null;
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

  export async function getProjectPage(lang: "es" | "eu") {
    // Fetch header info and localized SEO data from the projectPage document.
    const pageDoc = await client.fetch(`
      *[_type == "projectPage"][0]{
        headerTitle{ es, eu },
        introText{ es, eu },
        linkLabel{ es, eu },
        seo{
          metaTitle{ es, eu },
          metaDescription{ es, eu },
          metaKeywords,
          ogTitle{ es, eu },
          ogDescription{ es, eu },
          "ogImage": ogImage{ asset->{ url } }
        }
      }
    `);
    // Fetch all projects (for cards)
    const projects = await getProjects();
    // Fetch all categories
    const categories = await getCategories();
    
    // Merge the header data, projects, and categories into one object.
    return {
      ...pageDoc,
      projects,
      categories,
    };
  }
  export async function getProjects() {
    const query = `
      *[_type == "project"]{
        _id,
        // We "populate" the array of category references
        categories[]->{
          _id,
          name{ es, eu },
          slug
        },
        img{ asset->{ url } },
        title{ es, eu },
        slug{ es, eu },
        description{ es, eu }
        // Omit extra fields for the landing page if you want
      }
    `;
    return client.fetch(query);
  }
  export async function getProject(slug: string, lang: "es" | "eu") {
    // Fetch full project details for the detail page
    const query = `
      *[_type == "project" && lower(slug.${lang}.current) == lower($slug)][0]{
        _id,
        "category": category->{
          _id,
          name{ es, eu },
          slug
        },
        img{ asset->{ url } },
        title{ es, eu },
        slug{ es, eu },
        description{ es, eu },
        detailedInfo{ es, eu },
        quote{ es, eu },
        value{ es, eu },
        client{ es, eu },
        architect{ es, eu },
        location{ es, eu },
        completionDate{ es, eu },
        squareFootage{ es, eu },
         seo{
      metaTitle{ es, eu },
      metaDescription{ es, eu },
      metaKeywords,
      ogTitle{ es, eu },
      ogDescription{ es, eu },
      "ogImage": ogImage{ asset->{ url } }
    },
      }
    `;
    return client.fetch(query, { slug });
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
       seo{
      metaTitle{ es, eu },
      metaDescription{ es, eu },
      metaKeywords,
      ogTitle{ es, eu },
      ogDescription{ es, eu },
      "ogImage": ogImage{ asset->{ url } }
    },
    }
  `;
  return client.fetch(query);
}

export async function getAllRoutes() {
  const query = `
    *[_type in ["projectPage", "servicesPage", "service", "blogPage", "blogPost"]]{ 
      _id,
      title,
      slug,
      _type
    }
  `;
  return client.fetch(query);
}


export async function getBlogPage(lang: "es" | "eu") {
  const query = `
    *[_type == "blogPage"][0]{
      headerTitle{ es, eu },
      introText{ es, eu },
      featuredPosts[]->{
        _id,
        title{ es, eu },
        slug,
        date,
        mainImage { asset->{ url } },
        description,
        summary,
           author,
    authorUrl,
    location
      },
       seo{
      metaTitle{ es, eu },
      metaDescription{ es, eu },
      metaKeywords,
      ogTitle{ es, eu },
      ogDescription{ es, eu },
      "ogImage": ogImage{ asset->{ url } }
    },
    }
  `;
  return client.fetch(query);
}

export async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(date desc){
    _id,
    title,
    slug,
    date,
    mainImage { asset->{ url } },
    description{ es, eu },
    summary{ es, eu },
    content{ es, eu },
    quote{ es, eu },
    tags[]{ es, eu },
    category,
    author,
    authorUrl,
    listItems[]{ es, eu },
    location
  }`;
  return client.fetch(query);
}

export async function getBlogPost(slug: string, lang: "es" | "eu") {
  const query = `
    *[_type == "blogPost" && lower(slug.${lang}.current) == lower($slug)][0]{
      _id,
      title{ es, eu },
      slug,
      date,
      mainImage { asset->{ url } },
      description{ es, eu },
      summary{ es, eu },
      content{ es, eu },
      quote{ es, eu },
      tags[]{ es, eu },
      category,
      author,
      authorUrl,
      listItems[]{ es, eu },
      location
    }
  `;
  return client.fetch(query, { slug });
}

export async function getCategories() {
  const query = `
    *[_type == "category"]{
      _id,
      name{ es, eu },
      slug
    }
  `;
  return client.fetch(query);
}
