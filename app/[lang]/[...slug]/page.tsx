// app/[lang]/[[...slug]]/page.tsx
import { redirect, notFound } from "next/navigation";
import {
  getPage,
  getAllRoutes,
  getNavigation,
  getServices,
  getBlogPosts,
  getProjects,
} from "@/sanity/queries";
import PageComponent from "@/components/PageComponent";
import Layout from "@/layouts/layout";

interface Params {
  lang: "es" | "eu";
  slug?: string[];
}

export const revalidate = 10;

// Define generateMetadata to fetch SEO data from Sanity
export async function generateMetadata({ params }: { params: Params }) {
  const lang = params.lang;
  const slugStr = params.slug ? params.slug.join("/").toLowerCase() : "";
  const pageData = await getPage(slugStr, lang);

  if (pageData && pageData.seo) {
    return {
      title:
        `Asmatu | ${pageData.seo.metaTitle?.[lang]}` ||
        `Asmatu | ${pageData.headerTitle?.[lang]}` ||
        "Asmatu",
      description: pageData.seo.metaDescription?.[lang] || "Asmatu",
      openGraph: {
        title:
          pageData.seo.ogTitle?.[lang] ||
          pageData.headerTitle?.[lang] ||
          "Asmatu",
        description: pageData.seo.ogDescription?.[lang] || "Asmatu",
        images: pageData.seo.ogImage
          ? [{ url: pageData.seo.ogImage.asset?.url || "" }]
          : [],
      },
    };
  }
  return {
    title: pageData?.headerTitle?.[lang] || "Asmatu",
    description: "Asmatu",
  };
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

// Helper: push a route if a final slug exists
function pushRoute(
  paths: { lang: string; slug: string[] }[],
  lang: "es" | "eu",
  base: string[],
  finalSlug: string | undefined
) {
  if (finalSlug) {
    paths.push({ lang, slug: [...base, finalSlug] });
  }
}

export async function generateStaticParams() {
  const paths: { lang: string; slug: string[] }[] = [];
  const nav = await getNavigation();
  const langs: ("es" | "eu")[] = ["es", "eu"];

  // SERVICES
  const servicesNavItem = findNavItemByKey(nav.menuItems, "services");
  if (servicesNavItem) {
    langs.forEach((lang) => {
      if (servicesNavItem?.[lang]?.current) {
        const segments = servicesNavItem[lang].current
          .split("/")
          .filter(Boolean);
        paths.push({ lang, slug: segments });
      }
    });
    const services = await getServices();
    services.forEach((service: any) => {
      langs.forEach((lang) => {
        const base =
          servicesNavItem?.[lang]?.current.split("/").filter(Boolean) || [];
        pushRoute(paths, lang, base, service.slug?.[lang]?.current);
      });
    });
  }

  // BLOG
  const blogNavItem = findNavItemByKey(nav.menuItems, "blog");
  if (blogNavItem) {
    langs.forEach((lang) => {
      if (blogNavItem?.[lang]?.current) {
        const segments = blogNavItem[lang].current.split("/").filter(Boolean);
        paths.push({ lang, slug: segments });
      }
    });
    const blogPosts = await getBlogPosts();
    blogPosts.forEach((post: any) => {
      langs.forEach((lang) => {
        const base =
          blogNavItem?.[lang]?.current.split("/").filter(Boolean) || [];
        pushRoute(paths, lang, base, post.slug?.[lang]?.current);
      });
    });
  }

  // PROJECTS
  const projectsNavItem = findNavItemByKey(nav.menuItems, "projects");
  if (projectsNavItem) {
    langs.forEach((lang) => {
      if (projectsNavItem?.[lang]?.current) {
        const segments = projectsNavItem[lang].current
          .split("/")
          .filter(Boolean);
        paths.push({ lang, slug: segments });
      }
    });
    const projects = await getProjects();
    projects.forEach((project: any) => {
      langs.forEach((lang) => {
        const base =
          projectsNavItem?.[lang]?.current.split("/").filter(Boolean) || [];
        pushRoute(paths, lang, base, project.slug?.[lang]?.current);
      });
    });
  }

  // Other routes
  const otherRoutes = await getAllRoutes();
  otherRoutes.forEach((doc: any) => {
    langs.forEach((lang) => {
      if (doc.slug?.[lang]?.current) {
        const segments = doc.slug[lang].current.split("/").filter(Boolean);
        paths.push({ lang, slug: segments });
      }
    });
  });

  return paths;
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
