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
import HomeTetimonial from "@/components/Home/HomeTetimonial";
import HomeProject from "@/components/Home/HomeProject";
import HomeBlog from "@/components/Home/HomeBlog";

export const revalidate = 30;

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang as "es" | "eu";
  const homepageData = await getHomepage(lang);

  if (!homepageData) return notFound();

  return (
    <>
      <HomeSlider slides={homepageData.slides} />
      <HomePrinciples />
      <HomeAbout />
      <HomeServices />
      <HomeWhyChooseUs />
      <HomeClients />
      <HomeCTA />
      <HomeTetimonial />
      <HomeProject />
      <HomeBlog />
    </>
  );
}
