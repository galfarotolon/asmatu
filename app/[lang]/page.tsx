// app/[lang]/page.tsx
import { notFound } from "next/navigation";
import { getHomepage, getNavigation } from "@/sanity/queries";
import HomeSlider from "@/components/Home/HomeSlider";
import HomePrinciples from "@/components/Home/HomePrinciples";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeServices from "@/components/Home/HomeServices";
import HomeWhyChooseUs from "@/components/Home/HomeWhyChooseUs";
import HomeClients from "@/components/Home/HomeClients";
import HomeCTA from "@/components/Home/HomeCTA";
import HomeTestimonial from "@/components/Home/HomeTestimonial";
import HomeProjects from "@/components/Home/HomeProjects";
import HomeBlog from "@/components/Home/HomeBlog";
import { getBaseRoute } from "../lib/routing";

export const revalidate = 30;

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang as "es" | "eu";
  const homepageData = await getHomepage(lang);

  const baseBlogPath = await getBaseRoute("blog", lang);
  const baseProjectPath = await getBaseRoute("projects", lang);
  const baseServicePath = await getBaseRoute("services", lang);

  if (!homepageData) return notFound();

  console.log("homepage", homepageData.clientsSection);

  return (
    <>
      <HomeSlider slides={homepageData.slides} />
      <HomePrinciples principles={homepageData.principles} />
      <HomeAbout about={homepageData.about} lang={lang} />
      <HomeServices
        services={homepageData.services}
        servicesHeader={homepageData.servicesSection}
        baseServicePath={baseServicePath}
        lang={lang}
      />
      <HomeWhyChooseUs data={homepageData.whyChooseUs} lang={lang} />
      <HomeClients data={homepageData.clientsSection} lang={lang} />
      <HomeCTA ctaData={homepageData.ctaSection} lang={lang} />
      <HomeTestimonial data={homepageData.testimonialSection} lang={lang} />
      <HomeProjects
        projectsSection={homepageData.projectsSection}
        featuredProjects={homepageData.featuredProjects}
        baseprojectPath={baseProjectPath}
        lang={lang}
      />
      <HomeBlog
        blogSection={homepageData.blogSection}
        baseBlogPath={baseBlogPath}
      />
    </>
  );
}
