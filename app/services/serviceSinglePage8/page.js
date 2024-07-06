import ServiceSingle8 from '@/components/Services/ServiceSingle8'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'


export const metadata = {
    title: 'Service Single Page 8',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 8"} />
            <ServiceSingle8 />
        </Layout>
    )
}
