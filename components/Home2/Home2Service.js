import { Arrow_r } from "@/public/svg/icon";
import { Drawing, Learning, TowerCrane } from "@/public/svg/service/IconService";
import Link from "next/link";

export default function Home2Service() {
    return (
        <>
            <div className="service_section_2">

                {/* <!-- Main Title --> */}
                <div className="fn_cs_main_title">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Our Helpful &amp; Services</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- /Main Title --> */}



                {/* <!-- Services Shortcode --> */}
                <div className="fn_cs_services">
                    <div className="container">
                        <div className="list">
                            <ul>
                                <li>
                                    <div className="item">
                                        <Link href="/services/serviceSinglePage9"></Link><span className="bg1"></span><span className="bg2"></span>
                                        <span className="icon">
                                            <span></span>
                                            <Learning className="fn__svg" />
                                        </span>
                                        <h3>Aerospace and  <br />Defense</h3>
                                        <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance,</p>
                                        <span className="arrow">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <Link href="/services/serviceSinglePage8"></Link><span className="bg1"></span><span className="bg2"></span>
                                        <span className="icon">
                                            <span></span>
                                            <Drawing className="fn__svg" />
                                            {/* <img className="fn__svg" src="/svg/service/drawing.svg" alt="svg" /> */}
                                        </span>
                                        <h3>Automative Manufacturing</h3>
                                        <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance,</p>
                                        <span className="arrow">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <Link href="/services/serviceSinglePage7"></Link><span className="bg1"></span><span className="bg2"></span>
                                        <span className="icon">
                                            <span></span>
                                            <TowerCrane className="fn__svg" />
                                        </span>
                                        <h3>Chemical <br />Industry</h3>
                                        <p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance,</p>
                                        <span className="arrow">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /Services Shortcode --> */}
            </div>
        </>
    )
}
