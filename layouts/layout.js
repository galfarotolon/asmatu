// layouts/layout.js
import DesktopHeader from './desktop-header';
import Footer from './footer';
import MobileHeader from './mobile-header';
import { getHeaderData } from '@/sanity/lib/sanity-utils';
import "../styles/globals.css";

export default async function Layout({ children, locale }) {
    const lang = locale || 'es'; // Default to 'es' if locale is undefined

    const headerData = await getHeaderData(locale);

    return (
        <div className="">
            <div className="">
                <DesktopHeader headerData={headerData} locale={lang} />
                <MobileHeader locale={lang} />
                <div className="">
                    {children}
                </div>
                <Footer locale={lang} />
            </div>
        </div>
    );
}
