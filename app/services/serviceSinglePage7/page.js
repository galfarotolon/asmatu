import ServiceSingle7 from '@/components/Services/ServiceSingle7'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Service Single Page 7',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 7"} />
            <ServiceSingle7 />
        </Layout>
    )
}
