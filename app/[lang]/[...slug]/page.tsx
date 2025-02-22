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

export async function generateStaticParams() {
  const paths: { lang: string; slug: string[] }[] = [];

  // 1. Get the base route from navigation (using a recursive search if needed)
  const nav = await getNavigation();
  const servicesNavItem = findNavItemByKey(nav.menuItems, "services"); // see recursive search below
  if (servicesNavItem) {
    if (servicesNavItem.es?.current) {
      const segments = servicesNavItem.es.current.split("/").filter(Boolean);
      // This is the base route, e.g. ["areas-de-actividad"]
      paths.push({ lang: "es", slug: segments });
    }
    if (servicesNavItem.eu?.current) {
      const segments = servicesNavItem.eu.current.split("/").filter(Boolean);
      paths.push({ lang: "eu", slug: segments });
    }
  }

  // 2. Get all service documents and add their final slug segment
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

  // Optionally: add routes for other document types (projectPage, etc.)
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
    if (item.subMenu) {
      const found = findNavItemByKey(item.subMenu, key);
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
