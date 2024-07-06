import PortfolioSingle6 from '@/components/Portfolio/PortfolioSingle6'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 6',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 6"} />
            <PortfolioSingle6 />
        </Layout>
    )
}
