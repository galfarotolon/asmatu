import Home2About from '@/components/Home2/Home2About'
import Home2Blog from '@/components/Home2/Home2Blog'
import Home2CTA from '@/components/Home2/Home2CTA'
import Home2Hero from '@/components/Home2/Home2Hero'
import Home2Info from '@/components/Home2/Home2Info'
import Home2InfoRating from '@/components/Home2/Home2InfoRating'
import Home2Project from '@/components/Home2/Home2Project'
import Home2Service from '@/components/Home2/Home2Service'
import Home2Support from '@/components/Home2/Home2Support'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Home Beta',
}

export default function home2() {
    return (
        <>
            <Layout className={"nobglight"} >
                
                {/* <!-- Hero Header --> */}
                <Home2Hero />
                {/* <!-- /Hero Header --> */}

                {/* <!-- Info List --> */}
                <Home2Info />
                {/* <!-- /Info List --> */}

                {/* <!-- About Section --> */}
                <Home2About />
                {/* <!-- /About Section --> */}

                {/* <!-- Info & Rating --> */}
                <Home2InfoRating />
                {/* <!-- /Info & Rating --> */}

                {/* <!-- Service Section #2 --> */}
                <Home2Service />
                {/* <!-- /Service Section #2 --> */}

                {/* <!-- Call to Action --> */}
                <Home2CTA />
                {/* <!-- /Call to Action --> */}

                {/* <!-- Project Sticky Shortcode --> */}
                <Home2Project />
                {/* <!-- /Project Sticky Shortcode --> */}

                {/* <!-- Support Section --> */}
                <Home2Support />
                {/* <!-- /Support Section --> */}

                {/* <!-- Blog Section --> */}
                <Home2Blog />
                {/* <!-- /Blog Section --> */}

            </Layout>
        </>

    )
}
