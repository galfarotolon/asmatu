'use client'
// import 'mmenujs/style';
import Link from 'next/link';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';


export default function MobileHeader() {

    const [isMobileMenu, setMobileMenu] = useState(false);
    const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className="industify_fn_mobilemenu_wrap">
                <div className="industify_fn_toppanel">
                    <div className="left_panel">
                        <div className="info"><Link href="/tel:07787744741">(0778) 774 - 474 -1</Link></div>
                        <div className="info"><Link href="/mailto:trendycoder.com@gmail.com">trendycoder.com@gmail.com</Link></div>
                        <div className="industify_fn_social_list">
                            <ul>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Facebook className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Twitter className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Instagram className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Vk className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Linkedin className="fn__svg" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
                {/* <!-- TOLL FREE MOBILE --> */}
                < div className="m_toll_free_lang" >
                    <div className="lang_switcher">
                        <ul>
                            <li className="active"><span>Eng</span></li>
                            <li><Link href="#"><span>Spa</span></Link></li>
                            <li><Link href="#"><span>Rus</span></Link></li>
                        </ul >
                    </div >
                    <div className="m_toll_free">
                        <span className="shape1"></span>
                        <span className="shape2"></span>
                        <span className="shape3"></span>
                        <div className="tf_in">
                            <div className="img_holder" style={{ "backgroundImage": "url(/img/call.png)" }}></div>
                            <p><span>Toll Free:</span> 1-800-987-6543</p>
                        </div>
                    </div>
                </div >
                {/* <!-- /TOLL FREE MOBILE --> */}
                {/* <!-- LOGO & HAMBURGER --> */}
                <div className="logo_hamb">
                    <div className="in">
                        <div className="menu_logo">
                            <Link href="/"><img src="/img/logo-light.png" alt="Industry Template" /></Link>
                        </div>
                        <div onClick={MobileMenuTrueFalse} className={!isMobileMenu ? "hamburger hamburger--collapse-r" : "hamburger hamburger--collapse-r is-active"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <!-- /LOGO & HAMBURGER --> */}
                {/* <!-- MOBILE DROPDOWN MENU --> */}
                <div className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}>
                    <div>
                        <nav >
                            <ul className="mmenu">
                                <li>
                                    <Link href="#" className={`has-arrow ${isActive.key == 1 ? "mm-active" : ""} `} onClick={() => handleToggle(1)}>Home</Link>
                                    <ul className={`mm-collapse ${isActive.key == 1 ? "mm-show" : ""} `}>
                                        <li><Link href="/">Home Alpha</Link></li>
                                        <li><Link href="/home-2">Home Beta</Link></li>
                                        <li><Link href="/home-3">Home Gama</Link></li>
                                        <li><Link href="/home-4">Home Delta</Link></li>
                                    </ul>
                                </li >
                                <li><Link href="/portfolio">Projects</Link></li >
                                <li>
                                    <Link href="#" className={`has-arrow ${isActive.key == 2 ? "mm-active" : ""} `} onClick={() => handleToggle(2)}>Our Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/services/serviceSinglePage9">Aerospace and Defense</Link></li>
                                        <li><Link href="/services/serviceSinglePage8">Automative Manufacturing</Link></li >
                                        <li><Link href="/services/serviceSinglePage7">Chemical Industry</Link></li >
                                        <li><Link href="/services/serviceSinglePage6">Oil and Gas Industry</Link></li >
                                        <li><Link href="/services/serviceSinglePage5">Energy &#038; Commodities</Link></li >
                                        <li><Link href="/services/serviceSinglePage4">Medical Devices</Link></li >
                                        <li><Link href="/services/serviceSinglePage3">Housewares &#038; Home Decor</Link></li >
                                        <li><Link href="/services/serviceSinglePage2">Textiles &#038; Apparel</Link></li >
                                        <li><Link href="/services/serviceSinglePage1">Construction &#038; Engineering</Link></li >
                                    </ul >
                                </li >
                                <li>
                                    <Link href="#" onClick={() => handleToggle(3)} className={`has-arrow ${isActive.key == 3 ? "mm-active" : ""} `}>Pages</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/gallery">Gallery</Link></li>
                                        <li><Link href="/404">404 Page</Link></li >
                                        <li><Link href="/principles">Our Principles</Link></li >
                                        <li><Link href="/services">Our Services</Link></li >
                                        <li><Link href="/blog-full">Blog Full</Link></li >
                                        <li><Link href="/protected">Protected Page</Link></li >
                                    </ul >
                                </li >
                                <li><Link href="/blog">Blog</Link></li >
                                <li><Link href="/contact">Contact</Link></li >
                            </ul >
                        </nav >
                    </div >
                </div >
                {/* <!-- /MOBILE DROPDOWN MENU --> */}
            </div >
        </>
    )
}
