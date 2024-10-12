// components/Home/HomeMain.tsx
import HomeAbout from "@/components/Home/HomeAbout";
import HomeBlog from "@/components/Home/HomeBlog";
import HomeClients from "@/components/Home/HomeClients";
import HomeCTA from "@/components/Home/HomeCTA";
import HomePrinciples from "@/components/Home/HomePrinciples";
import HomeProject from "@/components/Home/HomeProject";
import HomeServices from "@/components/Home/HomeServices";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeTetimonial from "@/components/Home/HomeTetimonial";
import HomeWhyChooseUs from "@/components/Home/HomeWhyChooseUs";
import Layout from "@/layouts/layout";

import {
  getSliderData,
  SliderData,
  SliderItem,
  getPrinciplesData,
} from "@/sanity/lib/sanity-utils";
import { notFound } from "next/navigation";

interface HomeMainProps {
  locale: "es" | "eu";
}

export default async function HomeMain({ locale }: HomeMainProps) {
  // Fetch slider data
  const sliderData: SliderData = await getSliderData(locale);
  const principlesData = await getPrinciplesData(locale);

  // Optional: Handle case where no slider data is found
  if (!sliderData || sliderData.slides.length === 0) {
    console.error("No slider data available");
    // You can choose to return null, a fallback UI, or proceed without the slider
    // Here, we'll proceed without the slider
  }

  return (
    <Layout locale={locale}>
      {/* Pass sliderData and locale to HomeSlider */}
      <HomeSlider data={sliderData.slides} locale={locale} />
      <HomePrinciples data={principlesData} locale={locale} />
      <HomeAbout locale={locale} />
      <HomeServices locale={locale} />
      <HomeWhyChooseUs locale={locale} />
      <HomeClients locale={locale} />
      <HomeCTA locale={locale} />
      <HomeTetimonial locale={locale} />
      <HomeProject locale={locale} />
      <HomeBlog locale={locale} />
    </Layout>
  );
}
