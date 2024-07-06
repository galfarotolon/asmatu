import BlogSingle2 from '@/components/Blog/BlogSingle2'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Blog Single Page 2',
}


export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={"Blog"} SecondChild={"Blog Single Page 2"} />
            <BlogSingle2 />
        </Layout>
    )
}
