import ServiceSingle6 from '@/components/Services/ServiceSingle6'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Service Single Page 6',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 6"} />
            <ServiceSingle6 />
        </Layout>
    )
}
