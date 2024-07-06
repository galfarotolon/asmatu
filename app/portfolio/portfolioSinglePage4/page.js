import PortfolioSingle4 from '@/components/Portfolio/PortfolioSingle4'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Portfolio Single Page 4',
}

export default function page() {
    return (
        <Layout>

            <Breadcumb firstChild={'Portfolio'} SecondChild={"Portfolio Single Page 4"} />
            <PortfolioSingle4 />

        </Layout>
    )
}
