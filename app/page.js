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



export default function Home() {
    return (
        <>
            <Layout>

                <HomeSlider />
                <HomePrinciples />
                <HomeAbout />
                <HomeServices />
                <HomeWhyChooseUs />
                <HomeClients />
                <HomeCTA />
                <HomeTetimonial />
                <HomeProject />
                <HomeBlog />

            </Layout>
        </>
    )
}
