import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'
import { Location } from '@/public/svg/icon'
import Link from 'next/link'

export const metadata = {
    title: 'Contact',
}

export default function page() {
    return (
        <Layout>

            <Breadcumb firstChild={'Contact'} />
            <div className="industify_fn_contact">
                <div className="container">
                    <div className="contact_in">

                        <div className="map_holder">
                            <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>

                        <div className="contact_holder">
                            <div className="contact_left">
                                <h3>Get in touch with us</h3>
                                <form className="contact_form" action="/" method="post" autoComplete="off" data-email="frenifyteam@gmail.com">


                                    {/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

                                    <div className="success" data-success="Your message has been received, we will contact you soon."></div>
                                    <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                    {/*  */}
                                    <div className="items">
                                        <div className="item">
                                            <input id="name" type="text" placeholder="Name" />
                                        </div>
                                        <div className="item">
                                            <input id="email" type="email" placeholder="Email" />
                                        </div>
                                        <div className="item">
                                            <textarea id="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="item">
                                            <Link href="#" id="send_message">Send Message</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact_right">

                                <div className="fn_cs_location_list">
                                    <ul className="list">

                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            <Location className="fn__svg" />
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>Washington Office</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>100-120 Ft.Drive NE, Washington, DC 20011</li>
                                                        <li>Phone: +1 202-415-7234</li>
                                                        <li>Email: <Link href="mailto:w.industify@gmail.com">w.industify@gmail.com</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            <Location className="fn__svg" />
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>New-York Office</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>110-115 Ft.Consort NE, New-York, DC 20031</li>
                                                        <li>Phone: +1 272-436-4524</li>
                                                        <li>Email: <Link href="mailto:n.industify@gmail.com">n.industify@gmail.com</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            <Location className="fn__svg" />
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>Boston Office</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>100-120 Ft.Albemarle NE, Boston, DC 20017</li>
                                                        <li>Phone: +1 252-925-7564</li>
                                                        <li>Email: <Link href="mailto:b.industify@gmail.com">b.industify@gmail.com</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
