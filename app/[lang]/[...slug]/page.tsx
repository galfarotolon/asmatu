import { redirect, notFound } from "next/navigation";
import { getPage, getAllRoutes } from "@/sanity/queries";
import PageComponent from "@/components/PageComponent";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";

interface Params {
  lang: "es" | "eu";
  slug?: string[];
}

export async function generateStaticParams() {
  // Fetch all projectPage documents
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

export default async function DynamicPage({ params }: { params: Params }) {
  // If no slug segments are provided, assume it's the homepage.
  if (!params.slug || params.slug.length === 0) {
    return redirect(`/${params.lang}`);
  }

  // Combine the slug segments into a string.
  const slugStr = params.slug.join("/").toLowerCase();
  console.log(
    "DynamicPage: fetching page with slug:",
    slugStr,
    "for lang:",
    params.lang
  );

  const pageData = await getPage(slugStr, params.lang);
  console.log("DynamicPage: fetched page data:", pageData);

  return (
    <Layout>
      <Breadcrumb firstChild={params?.slug[0]} />
      <PageComponent data={pageData} _type={pageData._type} />;
    </Layout>
  );
}
