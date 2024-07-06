import PortfolioSingle8 from '@/components/Portfolio/PortfolioSingle8'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 8',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 8"} />
            <PortfolioSingle8 />
        </Layout>
    )
}
