import PortfolioSingle9 from '@/components/Portfolio/PortfolioSingle9'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 9',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 9"} />
            <PortfolioSingle9 />
        </Layout>
    )
}
