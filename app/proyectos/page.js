import Breadcrumb from '@/layouts/breadcrumb';
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
        <>

            <Breadcrumb firstChild={"Proyectos"} />
            <PortfolioList />

        </>
    )
}
