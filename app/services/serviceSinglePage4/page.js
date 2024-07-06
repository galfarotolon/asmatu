import ServiceSingle4 from '@/components/Services/ServiceSingle4'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'


export const metadata = {
    title: 'Service Single Page 4',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Service Single Page 4"} />
            <ServiceSingle4 />
        </Layout>
    )
}
