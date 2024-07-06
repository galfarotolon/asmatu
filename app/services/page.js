import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'
import Sidebar from '@/layouts/sidebar'
import Link from 'next/link'

export const metadata = {
    title: 'Services',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} />
            <div className="industify_fn_sidebarpage">
                <div className="container">
                    <div className="s_inner">


                        {/* Main Sidebar: Left */}
                        <div className="industify_fn_leftsidebar">
                            <ul className="industify_fn_service_list">
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/9.jpg)" }}></div>
                                                <Link href="/services/serviceSinglePage9"></Link>
                                            </div>
                                            <div className="title">
                                                <h3><Link href="/services/serviceSinglePage9">Aerospace and  Defense</Link></h3>
                                                <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/serviceSinglePage9">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/8.jpg)" }}></div>
                                                <Link href="/services/serviceSinglePage8"></Link>
                                            </div>
                                            <div className="title">
                                                <h3><Link href="/services/serviceSinglePage8">Automative Manufacturing</Link></h3>
                                                <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/serviceSinglePage8">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/7.jpg)" }}></div>
                                                <Link href="/services/serviceSinglePage7"></Link>
                                            </div>
                                            <div className="title">
                                                <h3><Link href="/services/serviceSinglePage7">Chemical Industry</Link></h3>
                                                <p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/serviceSinglePage7">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/6.jpg)" }}></div>
                                                <Link href="/services/serviceSinglePage6"></Link>
                                            </div>
                                            <div className="title">
                                                <h3><Link href="/services/serviceSinglePage6">Oil and Gas Industry</Link></h3>
                                                <p>The Shale Oil and Gas Revolution has changed the energy world. Industify has kept pace by providing crucial and timely exploration, production, quality, quantity inventory,</p>
                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/serviceSinglePage6">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/5.jpg)" }}></div>
                                                <Link href="/services/serviceSinglePage5"></Link>
                                            </div>
                                            <div className="title">
                                                <h3><Link href="/services/serviceSinglePage5">Energy &amp; Commodities</Link></h3>
                                                <p>Today’s energy and commodities industries power and feed the world economy. The efficient and effective operation of these projects is vital to sustained energy growth</p>
                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/serviceSinglePage5">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/4.jpg)" }}></div>
                                                <Link href="/services/serviceSinglePage4"></Link>
                                            </div>
                                            <div className="title">
                                                <h3><Link href="/services/serviceSinglePage4">Medical Devices</Link></h3>
                                                <p>Get your medical device tested and into the hands of your customers faster than ever before. Time to market starts with partnership, and for more</p>
                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/serviceSinglePage4">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="clearfix"></div>

                            <div className="industify_fn_pagination">
                                <ul>
                                    <li className="active"><span className="current">1</span></li>
                                    <li><Link href="#">2</Link></li>
                                    <li className="view"><p>Viewing page 1 of 2</p></li>
                                </ul>
                            </div>


                        </div>
                        {/* /Main Sidebar: Left */}


                        {/* Main Sidebar: Right */}
                        <div className="industify_fn_rightsidebar">


                            {/* Service List */}
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
                                        <li><Link href="/services/serviceSinglePage3">Housewares &amp; Home Decor</Link></li>
                                        <li><Link href="/services/serviceSinglePage2">Textiles &amp; Apparel</Link></li>
                                        <li><Link href="/services/serviceSinglePage1">Construction &amp; Engineering</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* /Service List */}

                            {/* Get Sidebar */}
                            <Sidebar />
                            {/* /Get Sidebar */}


                        </div>
                        {/* Main Sidebar: Right */}

                    </div>
                </div>
            </div>
        </Layout>
    )
}
