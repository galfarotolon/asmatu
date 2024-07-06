import BlogSingle4 from '@/components/Blog/BlogSingle4'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Blog Single Page 4',
}


export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={"Blog"} SecondChild={"Blog Single Page 4"} />
            <BlogSingle4 />
        </Layout>
    )
}
