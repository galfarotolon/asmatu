import PortfolioSingle1 from '@/components/Portfolio/PortfolioSingle1'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 1',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 1"} />
            <PortfolioSingle1 />
        </Layout>
    )
}
