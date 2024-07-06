import BlogSingle3 from '@/components/Blog/BlogSingle3'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Blog Single Page 3',
}


export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={"Blog"} SecondChild={"Blog Single Page 3"} />
            <BlogSingle3 />
        </Layout>
    )
}
