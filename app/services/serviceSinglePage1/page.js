import ServicesSingle1 from '@/components/Services/ServiceSingle1'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Service Single Page 1',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 1"} />
            <ServicesSingle1 />
        </Layout>
    )
}
