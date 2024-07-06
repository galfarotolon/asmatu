import { Arrow_r } from '@/public/svg/icon';
import Link from 'next/link';
const portfolio_bg1 = "img/portfolio/1.jpg";
const portfolio_bg2 = "img/portfolio/2.jpg";
const portfolio_bg3 = "img/portfolio/3.jpg";



export default function Home3Project() {
    return (
        <>
            <div className="fn_cs_project_sticky_modern" data-animation-type="alpha">
                <div className="container">
                    <div className="inner">
                        <div className="left_part">
                            <div className="fn_cs_sticky_section">
                                <div className="left_part_in">
                                    <h3>Our latest Projects</h3>
                                    <p>It&apos;s a burning, never-ending desire to help our clients maximize their outcomes and exceed their strategic goals. Though our goal is a bit aspirational, our values are what drive us every day. </p>
                                    <Link href="/portfolio">All Projects</Link>
                                </div>
                            </div>
                        </div>
                        <div className="right_part">
                            <div className="fn_cs_sticky_section">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="img_holder">
                                                <img src="img/thumb/560-375.jpg" alt="" />
                                                <div className="abs_img" style={{ backgroundImage: `url(${portfolio_bg1})` }}><Link href="/portfolio/portfolioSinglePage1"></Link></div>
                                            </div>
                                            <div className="title_holder">
                                                <h3><Link href="/portfolio/portfolioSinglePage1">Industify Gas and Oil Organization</Link></h3>
                                                <p>
                                                    <Link href="/portfolio/portfolioSinglePage1">
                                                        <span className="text">View More</span>
                                                        <span className="arrow">
                                                            <Arrow_r className="fn__svg" />
                                                        </span>
                                                    </Link>
                                                </p>
                                                <Link href="/portfolio/portfolioSinglePage1"></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="img_holder">
                                                <img src="img/thumb/560-375.jpg" alt="" />
                                                <div className="abs_img" style={{ backgroundImage: `url(${portfolio_bg2})` }}><Link href="/portfolio/portfolioSinglePage2"></Link></div>
                                            </div>
                                            <div className="title_holder">
                                                <h3><Link href="/portfolio/portfolioSinglePage2">Chaban Car Industry</Link></h3>
                                                <p>
                                                    <Link href="/portfolio/portfolioSinglePage2">
                                                        <span className="text">View More</span>
                                                        <span className="arrow">
                                                            <Arrow_r className="fn__svg" />
                                                        </span>
                                                    </Link>
                                                </p>
                                                <Link href="/portfolio/portfolioSinglePage2"></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="img_holder">
                                                <img src="img/thumb/560-375.jpg" alt="" />
                                                <div className="abs_img" style={{ backgroundImage: `url(${portfolio_bg3})` }}><Link href="/portfolio/portfolioSinglePage3"></Link></div>
                                            </div>
                                            <div className="title_holder">
                                                <h3><Link href="/portfolio/portfolioSinglePage3">Industify Gas and Oil Organization</Link></h3>
                                                <p>
                                                    <Link href="/portfolio/portfolioSinglePage3">
                                                        <span className="text">View More</span>
                                                        <span className="arrow">
                                                            <Arrow_r className="fn__svg" />
                                                        </span>
                                                    </Link>
                                                </p>
                                                <Link href="/portfolio/portfolioSinglePage3"></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
