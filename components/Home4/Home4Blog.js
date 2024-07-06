import Link from 'next/link'

export default function Home4Blog() {
    return (
        <>
            <div className="section_5">

                <div className="title__holder" data-margin-bottom="112">
                    <div className="container">
                        <h3>Our company&apos;s latest news</h3>
                    </div>
                </div>


                {/* <!-- Triple Blog Modern Shortcode --> */}
                <div className="fn_cs_triple_blog_modern fn_beta">
                    <div className="container max1500">
                        <div className="inner">
                            <ul>
                                <li>
                                    <div className="item">
                                        <div className="img_holder" style={{ "backgroundImage": "url(/img/blog/1.jpg)" }}>
                                            <Link href="/blog/blogSinglePage1"></Link>
                                            <img src="/img/thumb/370-250.jpg" alt="" />
                                        </div>
                                        <div className="beta_t_holder">
                                            <p className="t_header"><span className="t_author">By <Link href="https://themeforest.net/user/trendycoder" target="_blank" rel="noreferrer">TrendyCoder</Link></span> / <span>August 28, 2018</span></p>
                                            <h3><Link href="/blog/blogSinglePage1">Laing O’Rourke: Moves, projects and bids</Link></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder" style={{ "backgroundImage": "url(/img/blog/2.jpg)" }}>
                                            <Link href="/blog/blogSinglePage2"></Link>
                                            <img src="/img/thumb/370-250.jpg" alt="" />
                                        </div>
                                        <div className="beta_t_holder">
                                            <p className="t_header"><span className="t_author">By <Link href="https://themeforest.net/user/trendycoder" target="_blank" rel="noreferrer">TrendyCoder</Link></span> / <span>August 27, 2018</span></p>
                                            <h3><Link href="/blog/blogSinglePage2">How to turn Victorian gasholders apartments</Link></h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder" style={{ "backgroundImage": "url(/img/blog/3.jpg)" }}>
                                            <Link href="/blog/blogSinglePage3"></Link>
                                            <img src="/img/thumb/370-250.jpg" alt="" />
                                        </div>
                                        <div className="beta_t_holder">
                                            <p className="t_header"><span className="t_author">By <Link href="https://themeforest.net/user/trendycoder" target="_blank" rel="noreferrer">TrendyCoder</Link></span> / <span>August 26, 2018</span></p>
                                            <h3><Link href="https://industify.frenify.net/1/citb-appoints-peter-lauener-as-new-chairman/">CITB appoints Peter Lauener as new chairman</Link></h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /Triple Blog Modern Shortcode --> */}

            </div>
        </>
    )
}
