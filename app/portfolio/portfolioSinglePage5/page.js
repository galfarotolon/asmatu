import PortfolioSingle5 from '@/components/Portfolio/PortfolioSingle5'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 5',
}

export default function page() {
    return (
        <Layout>

            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 5"} />
            <PortfolioSingle5 />

        </Layout>
    )
}
