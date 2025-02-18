import { notFound } from "next/navigation";
import { getPage, getAllRoutes } from "@/sanity/queries";
import PageComponent from "@/components/PageComponent";

// Generate static parameters for dynamic routes
export async function generateStaticParams() {
  // Assume getAllRoutes returns an array of projectPage documents like:
  // [{ slug: { es: { current: "proyectos" }, eu: { current: "proiektuak" } }, ... }, ...]
  const routes = await getAllRoutes();
  const paths: { lang: string; slug: string[] }[] = [];

  routes.forEach((page: any) => {
    if (page.slug?.es?.current) {
      const segments = page.slug.es.current.split("/").filter(Boolean);
      paths.push({ lang: "es", slug: segments });
    }
    if (page.slug?.eu?.current) {
      const segments = page.slug.eu.current.split("/").filter(Boolean);
      paths.push({ lang: "eu", slug: segments });
    }
  });

  return paths;
}

interface Params {
  lang: "es" | "eu";
  slug: string[];
}

// The default export must be a React Server Component.
export default async function DynamicPage({ params }: { params: Params }) {
  // Combine the slug segments into a string
  const slugStr = params.slug.join("/");
  // Fetch the page data from Sanity for the specified language and slug
  const pageData = await getPage(slugStr, params.lang);

  if (!pageData) {
    return notFound();
  }

  return <PageComponent data={pageData} _type={pageData._type} />;
}
