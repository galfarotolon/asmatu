import Link from "next/link";

export default function Home4Partners() {
    return (
        <>
            <div className="section_4">

                <div className="title__holder" data-margin-bottom="112">
                    <div className="container">
                        <h3>Companies who trust our services</h3>
                    </div>
                </div>

                {/* <!-- Partners Gamma Shortcode --> */}
                <div className="fn_cs_personal_partners_gamma" data-margin-bottom="30">
                    <div className="container max1500">
                        <div className="partners_inner">
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <img src="/img/partners/1.png" alt="" />
                                        <span className="shape"><span className="brand">wikoo.com</span></span>
                                        <Link href="http://wikoo.com/" className="full_link"></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <img src="/img/partners/2.png" alt="" />
                                        <span className="shape"><span className="brand">aduyu.com</span></span>
                                        <Link href="http://aduyu.com/" className="full_link"></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <img src="/img/partners/3.png" alt="" />
                                        <span className="shape"><span className="brand">design.com</span></span>
                                        <Link href="http://design.com/" className="full_link"></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <img src="/img/partners/4.png" alt="" />
                                        <span className="shape"><span className="brand">goldage.com</span></span>
                                        <Link href="http://goldage.com/" className="full_link"></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <img src="/img/partners/5.png" alt="" />
                                        <span className="shape"><span className="brand">yalgoo.com</span></span>
                                        <Link href="http://yalgoo.com/" className="full_link"></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <img src="/img/partners/6.png" alt="" />
                                        <span className="shape"><span className="brand">dalgate.com</span></span>
                                        <Link href="http://dalgate.com/" className="full_link"></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /Partners Gamma Shortcode --> */}


                <div className="container max1500">
                    <div className="contact_alpha">
                        <div className="contact_in">
                            <div className="contact_left">
                                <div className="left_in">
                                    <h3>Do you want to be in our clients list?</h3>
                                    <p>You have a very good chance right now. Don’t miss it out</p>
                                </div>
                            </div>
                            <div className="contact_right">
                                <form className="contact_form" action="/" method="post" autoComplete="off" data-email="TrendyCoderteam@gmail.com">


                                    {/* Don't remove below code in avoid to work contact form properly.
                    You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

                                    <div className="success" data-success="Your message has been received, we will contact you soon."></div>
                                    <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                    {/* <!-- --> */}

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
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
