// app/[lang]/[[...slug]]/page.tsx
import { redirect, notFound } from "next/navigation";
import {
  getPage,
  getAllRoutes,
  getNavigation,
  getServices,
} from "@/sanity/queries";
import PageComponent from "@/components/PageComponent";
import Layout from "@/layouts/layout";

interface Params {
  lang: "es" | "eu";
  slug?: string[];
}

export const revalidate = 30; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const paths: { lang: string; slug: string[] }[] = [];

  // 1. Use navigation to get the base route for services.
  const nav = await getNavigation();
  const servicesNavItem = findNavItemByKey(nav.menuItems, "services");
  if (servicesNavItem) {
    if (servicesNavItem.es?.current) {
      const segments = servicesNavItem.es.current.split("/").filter(Boolean);
      paths.push({ lang: "es", slug: segments });
    }
    if (servicesNavItem.eu?.current) {
      const segments = servicesNavItem.eu.current.split("/").filter(Boolean);
      paths.push({ lang: "eu", slug: segments });
    }
  }

  // 2. For each service document, combine the base route with the final slug.
  const services = await getServices();
  services.forEach((service: any) => {
    if (service.slug?.es?.current) {
      const base =
        servicesNavItem?.es?.current.split("/").filter(Boolean) || [];
      paths.push({ lang: "es", slug: [...base, service.slug.es.current] });
    }
    if (service.slug?.eu?.current) {
      const base =
        servicesNavItem?.eu?.current.split("/").filter(Boolean) || [];
      paths.push({ lang: "eu", slug: [...base, service.slug.eu.current] });
    }
  });

  // 3. Optionally, add routes for other document types.
  const otherRoutes = await getAllRoutes();
  otherRoutes.forEach((doc: any) => {
    if (doc.slug) {
      if (doc.slug.es?.current) {
        const segments = doc.slug.es.current.split("/").filter(Boolean);
        paths.push({ lang: "es", slug: segments });
      }
      if (doc.slug.eu?.current) {
        const segments = doc.slug.eu.current.split("/").filter(Boolean);
        paths.push({ lang: "eu", slug: segments });
      }
    }
  });
  return paths;
}

function findNavItemByKey(items: any[], key: string): any | null {
  for (const item of items) {
    if (item.key === key) return item;
    if (item.submenu) {
      const found = findNavItemByKey(item.submenu, key);
      if (found) return found;
    }
  }
  return null;
}

export default async function DynamicPage({ params }: { params: Params }) {
  if (!params.slug || params.slug.length === 0) {
    return redirect(`/${params.lang}`);
  }
  const slugStr = params.slug.join("/").toLowerCase();
  const pageData = await getPage(slugStr, params.lang);
  if (!pageData) return notFound();

  return (
    <Layout>
      <PageComponent
        data={pageData}
        _type={pageData._type}
        lang={params.lang}
      />
    </Layout>
  );
}
