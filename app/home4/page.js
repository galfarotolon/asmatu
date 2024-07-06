import Home4Blog from '@/components/Home4/Home4Blog'
import Home4Description from '@/components/Home4/Home4Description'
import Home4Partners from '@/components/Home4/Home4Partners'
import Home4ProjectElegantList from '@/components/Home4/Home4ProjectElegantList'
import Home4Service from '@/components/Home4/Home4Service'
import Home4Slider from '@/components/Home4/Home4Slider'
import Home4Testimonial from '@/components/Home4/Home4Testimonial'
import Layout from '@/layouts/layout'

const sixfoldGallery1 = "/img/sixfold-gallery/1.jpg"
const sixfoldGallery2 = "/img/sixfold-gallery/2.jpg"
const sixfoldGallery3 = "/img/sixfold-gallery/3.jpg"
const sixfoldGallery4 = "/img/sixfold-gallery/4.jpg"
const sixfoldGallery5 = "/img/sixfold-gallery/5.jpg"
const sixfoldGallery6 = "/img/sixfold-gallery/6.jpg"

export const metadata = {
    title: 'Home Delta',
}

export default function page() {
    return (
        <>
            <Layout className={"nobglight"}>
                <Home4Slider />

                {/* <!-- Service Classic (with video button) --> */}
                <Home4Service />
                {/* <!-- /Service Classic (with video button) --> */}

                {/* <!-- Description Shortcode --> */}
                <Home4Description />
                {/* <!-- /Button Shortcode --> */}

                <div className="space" style={{ "paddingBottom": "70px" }}></div>

                <Home4Testimonial />

                <Home4ProjectElegantList />

                {/* <!-- Section 4 --> */}
                <Home4Partners />
                {/* <!-- /Section 4 --> */}

                {/* <!-- Section 5 --> */}
                <Home4Blog />
                {/* <!-- /Section 5 --> */}

            </Layout>
        </>
    )
}
