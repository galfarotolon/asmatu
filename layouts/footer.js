import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="industify_fn_footer">
                <div className="top_footer">
                    <div className="top_footer_img" style={{ background: 'url(/img/footer/bg.jpg)' }}></div>

                    {/* Main Info Section */}
                    <div className="footer_widget">
                        <div className="container">

                            <div className="inner">

                                <ul className="widget_area">
                                    <li>
                                        <div className="item">
                                            <div className="wid-title">
                                                <span>Parque Empresarial Zuatzu</span>
                                            </div>
                                            <div className="textwidget">
                                                <p>Francisco Grandmontagne nº 1</p>
                                                <p>Edificio Zurriola</p>
                                                <p>Planta 2ª - Local 7</p>
                                                <p>20018 DONOSTIA / SAN SEBASTIÁN</p>
                                                <p>Tel: 943 317 300</p>
                                                <p>Fax: 943 316 350</p>
                                                <p>Email: asmatu@asmatu.es</p>
                                                <Link href="/trabaja-con-nosotros">TRABAJA CON NOSOTROS</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title">
                                                <span>Horario de Oficina</span>
                                            </div>
                                            <div className="industify_fn_widget_business_hours">
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Lunes-Viernes:</span>
                                                                <span className="hours">9am a 5pm</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Sábado:</span>
                                                                <span className="hours">10am a 3pm</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">Domingo:</span>
                                                                <span className="hours">Cerrado</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title">
                                                <span>Enlaces Útiles</span>
                                            </div>
                                            <div className="widget_nav_menu">
                                                <ul className="menu">
                                                    <li>
                                                        <Link href="/services">Nuestros Servicios</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Aviso Legal</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Vitrina</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Política de Privacidad</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Afiliados</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /Main Info Section */}

                </div>
                {/* BOTTOM */}
                <div className="footer_bottom">
                    <div className="container">
                        <div className="footer_bottom_in">
                            <div className="bottom_widget">
                                <div className="widget_nav_menu">
                                    <ul className="menu">
                                        <li>
                                            <Link href="/services">Servicios</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Afiliados</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Aviso Legal</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Política de Privacidad</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Carrera</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_copyright">
                                <p>
                                    &copy; 2024 Asmatu. Todos los derechos reservados.

                                </p>
                            </div>
                            <Link href="#" className="industify_fn_totop">
                                <span className="top"></span>
                                <span className="text">Arriba</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* /BOTTOM */}
            </footer>
        </>
    );
}
