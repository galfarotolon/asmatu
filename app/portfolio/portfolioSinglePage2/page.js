import PortfolioSingle2 from '@/components/Portfolio/PortfolioSingle2'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 2',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 2"} />
            <PortfolioSingle2 />
        </Layout>
    )
}
