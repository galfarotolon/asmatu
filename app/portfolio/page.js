import Breadcumb from '@/layouts/breadcumb';
import Layout from '@/layouts/layout';
import dynamic from 'next/dynamic';

export const metadata = {
    title: 'Portfolio',
}

const PortfolioList = dynamic(
    () => {
        return import("@/components/Portfolio/PortfolioList");
    },
    { ssr: false }
);

export default function page() {
    return (
        <Layout>

            <Breadcumb firstChild={"Portfolio"} />
            <PortfolioList />

        </Layout>
    )
}
