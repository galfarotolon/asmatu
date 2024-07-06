import BlogFull from '@/components/Blog/BlogFull'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Blog Full Page',
}


export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={"Blog"} SecondChild={"Blog Full Page"} />
            <BlogFull />
        </Layout>
    )
}
