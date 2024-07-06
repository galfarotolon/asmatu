import Link from "next/link";

const map = "/img/blog/map.png";
const blog1 = "/img/blog/blog-1.jpg";
const blog2 = "/img/blog/blog-2.png";
const blog3 = "/img/blog/blog-3.jpg";

export default function HomeBlog() {
    return (
        <>
            <div className="blog_section">
                <div className="overlay" style={{ backgroundImage: `url(${map})` }}></div>

                {/* <!-- Main Title --> */}
                <div className="fn_cs_main_title">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Últimas Noticias</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- /Main Title --> */}

                {/* <!-- Triple Blog Modern Shortcode --> */}
                <div className="fn_cs_triple_blog_modern fn_alpha">
                    <div className="container">
                        <div className="inner">
                            <ul>
                                <li>
                                    <div className="item">
                                        <div className="img_holder" style={{ backgroundImage: `url(${blog1})` }}>
                                            <div className="time">
                                                <span></span>
                                                <h3>28</h3>
                                                <h5>Ago</h5>
                                                <h5>2018</h5>
                                            </div>
                                            <Link href="/blog/blogSinglePage1"></Link>
                                            <img src="img/thumb/370-250.jpg" alt="" />
                                        </div>
                                        <div className="title_holder">
                                            <p className="t_header">Por <Link href="#">Asmatu</Link> — En <Link href="#">España</Link></p>
                                            <h3><Link href="/blog/blogSinglePage1">Laing O’Rourke: Movimientos, proyectos y ofertas</Link></h3>
                                            <p className="t_footer"><Link href="/blog/blogSinglePage1">Leer Más</Link></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder" style={{ backgroundImage: `url(${blog2})` }}>
                                            <div className="time">
                                                <span></span>
                                                <h3>27</h3>
                                                <h5>Ago</h5>
                                                <h5>2018</h5>
                                            </div>
                                            <Link href="/blog/blogSinglePage2"></Link>
                                            <img src="img/thumb/370-250.jpg" alt="" />
                                        </div>
                                        <div className="title_holder">
                                            <p className="t_header">Por <Link href="#">Asmatu</Link> — En <Link href="#">España</Link></p>
                                            <h3><Link href="/blog/blogSinglePage2">Cómo convertir apartamentos de gasómetros victorianos</Link></h3>
                                            <p className="t_footer"><Link href="/blog/blogSinglePage2">Leer Más</Link></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder" style={{ backgroundImage: `url(${blog3})` }}>
                                            <div className="time">
                                                <span></span>
                                                <h3>26</h3>
                                                <h5>Ago</h5>
                                                <h5>2018</h5>
                                            </div>
                                            <Link href="/blog/blogSinglePage3"></Link>
                                            <img src="img/thumb/370-250.jpg" alt="" />
                                        </div>
                                        <div className="title_holder">
                                            <p className="t_header">Por <Link href="#">Asmatu</Link> — En <Link href="#">España</Link></p>
                                            <h3><Link href="/blog/blogSinglePage3">CITB nombra a Peter Lauener como nuevo presidente</Link></h3>
                                            <p className="t_footer"><Link href="/blog/blogSinglePage3">Leer Más</Link></p>
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
    );
}
