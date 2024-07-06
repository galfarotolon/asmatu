
import Sidebar from '@/layouts/sidebar'
import { Check } from '@/public/svg/icon'
import Link from 'next/link'

export default function ServiceSingle7() {
    return (
        <>
            <div className="industify_fn_sidebarpage">
                <div className="container">
                    <div className="s_inner">


                        {/* Main Sidebar: Left  */}
                        <div className="industify_fn_leftsidebar">

                            {/* Single Service  */}
                            <div className="industify_fn_service_single">

                                <div className="img_holder">
                                    <img src="/img/service/single/7.jpg" alt="" />
                                </div>

                                <div className="desc_holder">
                                    <p>Polymers and plastics such as polyethylene, polypropylene, polyvinyl chloride, polyethylene terephthalate, polystyrene and polycarbonate comprise about 80% of the industry&apos;s output worldwide. These materials are often converted to fluoropolymer tubing products and used by the industry to transport highly corrosive materials. Chemicals are used in a lot of different consumer goods, but they are also used in a lot of different other sectors; including agriculture manufacturing, construction, and service industries. Major industrial customers include rubber and plastic products, textiles, apparel, petroleum refining, pulp and paper, and primary metals. Chemicals are nearly a $3 trillion global enterprise, and the EU and U.S. chemical companies are the world&apos;s largest producers.(c)</p>
                                    <p>Sales of the chemical business can be divided into a few broad categories, including basic chemicals (about 35 to 37 percent of the dollar output), life sciences (30 percent), specialty chemicals (20 to 25 percent) and consumer products (about 10 percent).</p>
                                </div>

                                {/* Check List Shortcode  */}
                                <div className="fn_cs_check_list">
                                    <h3>Service Features</h3>
                                    <div className="list">
                                        <ul>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Life sciences</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Specialty chemicals</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Consumer products</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Check List Shortcode  */}

                                {/* Call to Action Shortcode (with corner)  */}
                                <div className="fn_cs_call_to_action corner">
                                    <div className="container">
                                        <div className="cta_holder">
                                            <div className="title_holder">
                                                <h3>Industify LLC</h3>
                                                <p>We build your dream house. Contact us for detailed information.</p>
                                            </div>
                                            <div className="link_holder">
                                                <Link href="/contact">Our Responsibility</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Call to Action Shortcode (with corner)  */}

                                {/* Get Random Services  */}
                                {/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
                                <div data-html="includes/random-service" data-index="7" data-count="2"></div>
                                {/* /Get Random Services  */}

                            </div>
                            {/* /Single Service  */}


                        </div>
                        {/* /Main Sidebar: Left  */}


                        {/* Main Sidebar: Right  */}
                        <div className="industify_fn_rightsidebar">


                            {/* Service List  */}
                            <div className="service_list_as_function">
                                <div className="title">
                                    <h3>Full list of Services</h3>
                                </div>
                                <div className="list_holder">
                                    <ul>
                                        <li><Link href="/services/serviceSinglePage9">Aerospace and Defense</Link></li>
                                        <li><Link href="/services/serviceSinglePage8">Automative Manufacturing</Link></li>
                                        <li><Link href="/services/serviceSinglePage7">Chemical Industry</Link></li>
                                        <li><Link href="/services/serviceSinglePage6">Oil and Gas Industry</Link></li>
                                        <li><Link href="/services/serviceSinglePage5">Energy &amp; Commodities</Link></li>
                                        <li><Link href="/services/serviceSinglePage4">Medical Devices</Link></li>
                                        <li className="active"><Link href="/services/serviceSinglePage3">Housewares &amp; Home Decor</Link></li>
                                        <li><Link href="/services/serviceSinglePage2">Textiles &amp; Apparel</Link></li>
                                        <li><Link href="/services/serviceSinglePage1">Construction &amp; Engineering</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* /Service List  */}

                            {/* Get Sidebar  */}
                            <Sidebar />
                            {/* /Get Sidebar  */}


                        </div>
                        {/* Main Sidebar: Right  */}

                    </div>
                </div>
            </div>
        </>
    )
}
