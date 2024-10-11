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

interface HomeMainProps {
  locale: "es" | "eu";
}

export default function HomeMain({ locale }: HomeMainProps) {
  return (
    <Layout locale={locale}>
      <HomeSlider locale={locale} />
      <HomePrinciples locale={locale} />
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
