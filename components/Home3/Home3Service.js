import { Arrow_r } from "@/public/svg/icon";
import { Design, Drawing, Learning, TowerCrane } from '@/public/svg/service/IconService';
import Link from "next/link";

export default function Home3Service() {
    return (
        <>
            <div className="fn_cs_services_classic">
                <div className="container">
                    <div className="list">
                        <ul>
                            <li>
                                <div className="item">
                                    <Link href="/services/serviceSinglePage1"></Link><span className="bg1"></span><span className="bg2"></span>
                                    <span className="icon">
                                        <Learning className="fn__svg" />
                                    </span>
                                    <h3>Preconstruction Estimating</h3>
                                    <p>During this phase, we will work to provide a detailed analysis of the project and we will establish project expectations along with our clients.</p>
                                    <span className="more_details">
                                        <Link href="#">
                                            More Details
                                            <Arrow_r className="fn__svg" />
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <Link href="/services/serviceSinglePage2"></Link><span className="bg1"></span><span className="bg2"></span>
                                    <span className="icon">
                                        <Drawing className="fn__svg" />
                                    </span>
                                    <h3>General <br />Contracting</h3>
                                    <p>The client retains an architect or engineer to design the project and to prepare the necessary drawings and specifications for new project.</p>
                                    <span className="more_details">
                                        <Link href="#">
                                            More Details
                                            <Arrow_r className="fn__svg" />
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <Link href="/services/serviceSinglePage3"></Link><span className="bg1"></span><span className="bg2"></span>
                                    <span className="icon">
                                        <TowerCrane className="fn__svg" />
                                    </span>
                                    <h3>Construction Management</h3>
                                    <p>Under a Construction Management contract, the client secures the services of a construction manager to work with the design team.</p>
                                    <span className="more_details">
                                        <Link href="#">
                                            More Details
                                            <Arrow_r className="fn__svg" />
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <Link href="/services/serviceSinglePage4"></Link><span className="bg1"></span><span className="bg2"></span>
                                    <span className="icon">
                                        <Design className="fn__svg" />
                                    </span>
                                    <h3>Design-Build</h3>
                                    <p>In this section, we let clients select a design-build arrangement when they want to work with one contract entity, instead of several contractors and consultants.</p>
                                    <span className="more_details">
                                        <Link href="#">
                                            More Details
                                            <Arrow_r className="fn__svg" />
                                        </Link>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
