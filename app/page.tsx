// app/[lang]/page.tsx
import { getHomepage, getNavigation } from "@/sanity/queries";
import { notFound } from "next/navigation";
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
import DesktopHeader from "@/layouts/desktop-header";

export const revalidate = 30;

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const homepageData = await getHomepage();
  const navigation = await getNavigation();
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
