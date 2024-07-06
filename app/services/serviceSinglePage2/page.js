import ServiceSingle2 from '@/components/Services/ServiceSingle2'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Service Single Page 2',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 2"} />
            <ServiceSingle2 />
        </Layout>
    )
}
