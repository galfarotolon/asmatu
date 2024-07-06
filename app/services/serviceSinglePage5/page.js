import ServiceSingle5 from '@/components/Services/ServiceSingle5'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Service Single Page 5',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 5"} />
            <ServiceSingle5 />
        </Layout>
    )
}
