import BlogSideBar from '@/components/Blog/BlogSideBar'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'


export const metadata = {
    title: 'Blog',
}


export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={"Blog"} />
            <BlogSideBar />
        </Layout>
    )
}
