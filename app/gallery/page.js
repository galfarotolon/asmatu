import Gallery from '@/components/Gallery/Gallery'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Gallery',
}

export default function page() {
    return (
        <Layout>

            {/* <Breadcumb firstChild={'Gallery'} /> */}
            <Gallery />

        </Layout>
    )
}
