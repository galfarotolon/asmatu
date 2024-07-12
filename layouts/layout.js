import DesktopHeader from './desktop-header'
import Footer from './footer'
import MobileHeader from './mobile-header'
import "../styles/globals.css";

export default function Layout({ children }) {
    return (
        <>
            <div className="">
                <div className="">
                    <DesktopHeader />
                    <MobileHeader />
                    <div className=''>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
