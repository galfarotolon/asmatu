import BlogSingle1 from '@/components/Blog/BlogSingle1'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Blog Single Page 1',
}



export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={"Blog"} SecondChild={"Blog Single Page 1"} />
            <BlogSingle1 />
        </Layout>
    )
}

