// components/Blog/BlogLanding.tsx
import { getBaseRoute, ROUTE_CODES } from "@/app/lib/routing";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";
import BlogSideBar from "@/components/Blog/BlogSideBar";

interface BlogLandingData {
  headerTitle: { es: string; eu: string };
  introText: { es: string; eu: string };
  linkLabel: { es: string; eu: string };
  featuredPosts: any[]; // Array of blog posts (each with localized fields)
}

interface BlogLandingProps {
  data: BlogLandingData;
  lang: "es" | "eu";
}

export const metadata = {
  title: "Noticias",
};

export default async function BlogLanding({ data, lang }: BlogLandingProps) {
  // Get the blog base route from navigation (e.g. "noticias")
  const blogBaseRoute = await getBaseRoute(ROUTE_CODES.BLOG, lang);

  return (
    <>
      <div className="px-0 sm:px-10 md:px-20 lg:px-40 overflow-x-hidden">
        <Breadcrumb firstChild={data.headerTitle?.[lang]} />
        <BlogSideBar data={data} lang={lang} blogBaseRoute={blogBaseRoute} />
      </div>
    </>
  );
}
