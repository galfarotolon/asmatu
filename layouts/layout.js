import DesktopHeader from './desktop-header'
import Footer from './footer'
import MobileHeader from './mobile-header'
import "../styles/globals.css";

export default function Layout({ children }) {
    return (
        <>
            <div className="">

                {/* <!-- Wrapper --> */}
                <div className="">

                    {/* <!-- Header --> */}
                    <DesktopHeader />
                    {/* <!-- /Header --> */}

                    {/* <!-- Mobile Menu --> */}
                    <MobileHeader />
                    {/* <!-- /Mobile Menu --> */}

                    {/* <!-- Preloader --> */}
                    {/* <Preloader /> */}
                    {/* <!-- /Preloader --> */}

                    {children}

                    {/* Site Footer Start */}
                    <Footer />
                    {/* Site Footer End */}

                </div>
            </div>
        </>
    )
}
