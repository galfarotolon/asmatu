import PortfolioSingle3 from '@/components/Portfolio/PortfolioSingle3'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 3',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 3"} />
            <PortfolioSingle3 />
        </Layout>
    )
}
