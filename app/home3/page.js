import Home3Blog from '@/components/Home3/Home3Blog';
import Home3Hero from '@/components/Home3/Home3Hero';
import Home3Info from '@/components/Home3/Home3Info';
import Home3Introduce from '@/components/Home3/Home3Introduce';
import Home3Principle from '@/components/Home3/Home3Principle';
import Home3Project from '@/components/Home3/Home3Project';
import Home3Service from '@/components/Home3/Home3Service';
import DesktopHeader from '@/layouts/desktop-header';
import Layout from '@/layouts/layout';
import MobileHeader from '@/layouts/mobile-header';

export const metadata = {
    title: 'Home Gama',
}

export default function page() {
    return (
        <>

            <Layout className={"nobglight"}>

                {/* <!-- Hero Header --> */}
                <Home3Hero />
                {/* <!-- /Hero Header --> */}


                {/* <!-- Introduce Shortcode --> */}
                <Home3Introduce />
                {/* <!-- /Introduce Shortcode --> */}


                {/* <!-- Service Classic Shortcode --> */}
                <Home3Service />
                {/* <!-- /Service Classic Shortcode --> */}



                {/* <!-- Info & Rating --> */}
                <Home3Info />
                {/* <!-- /Info & Rating --> */}


                {/* <!-- Principles --> */}
                <Home3Principle />
                {/* <!-- /Principles --> */}


                {/* <!-- Project Sticky Modern Shortcode --> */}
                <Home3Project />
                {/* <!-- /Project Sticky Modern Shortcode --> */}




                {/* <!-- Blog Section --> */}
                <Home3Blog />
                {/* <!-- /Blog Section --> */}
            </Layout>

        </>
    )
}
