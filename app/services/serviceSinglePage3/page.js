import ServiceSingle3 from '@/components/Services/ServiceSingle3'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Service Single Page 3',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 3"} />
            <ServiceSingle3 />
        </Layout>
    )
}
