import Sidebar from '@/layouts/sidebar'
import { Check } from '@/public/svg/icon'
import Link from 'next/link'

export default function ServiceSingle9() {
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
                                    <img src="/img/service/single/9.jpg" alt="" />
                                </div>

                                <div className="desc_holder">
                                    <p>From quality testing, manufacturing process troubleshooting and health and environmental guidance to business assurance, auditing, inspection, certification, training and consulting, we are the ideal partner to provide the tailored Total Quality Assurance solutions you require.</p>
                                    <p>Industify is accredited to conduct testing in accordance with major industry bodies such as the Civil Aviation Authority (CAA) and Federal Aviation Administration (FAA). Our accreditations provide you with the confidence and peace of mind that your company is operating safely and adhere to regulation.</p>
                                    <p>Industify is a trusted partner in the provision of global quality and safety services to the aerospace and defence industries, helping ensure increased asset reliability, design integrity and optimal systems performance. Our independent Total Quality Assurance solutions cross the entire spectrum of land, sea and field operations, from vessel and vehicle construction, to maintenance and safety inspections.</p>
                                </div>

                                {/* Check List Shortcode  */}
                                <div className="fn_cs_check_list">
                                    <h3>Service Features</h3>
                                    <div className="list">
                                        <ul>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>CE Marking for Military Products</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Transparent Armor and Military Glass Testing</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Performance Testing</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Accelerated Stress Testing (AST)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Failure Analysis for Metals and Non-Metals</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Non-Destructive Testing</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Mechanical Testing</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Aerospace Polymers and Plastics Testing</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Aerospace Composites Testing</p>
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
                                                <Link href="/contact">Our Responsibility </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Call to Action Shortcode (with corner)  */}

                                {/* Get Random Services  */}
                                {/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
                                <div data-html="includes/random-service" data-index="9" data-count="2"></div>
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

