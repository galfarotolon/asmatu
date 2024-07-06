'use client'
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const headerBG = "img/hero.jpg";

export default function Home3Hero() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="fn_cs_hero_header">
                <div className="container">
                    <div className="content_holder max800">
                        <div className="title_holder">
                            <h3>A Global Leader in Automotive Seating &amp; E-Systems.</h3>
                            <p>Industify Corporation is ranked #07 on the Fortune 500 with world-class products designed, engineered and manufactured by a diverse team of talented employees. Our vision is to be consistently recognized as the supplier of choice, an employer of choice, the investment of choice and a company that supports the communities where we do business.</p>
                        </div>
                        <div className="btn_holder fn_cs_lightgallery">
                            <Link href="/services" className="discover">Discover Industify</Link>
                            <span className="video lightbox" onClick={() => setIsOpen(true)}>
                                <span className="icon"></span>
                                <span className="text">Watch Video</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg_holder">
                    <div className="o_img" style={{ background: `url(${headerBG})` }}></div>
                    <div className="o_color"></div>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                autoplay={true}
                isOpen={isOpen}
                videoId="3j3SQEUfREs"
                animationSpeed={300}
                onClose={() => setIsOpen(false)}
                modalVideoClose="mfp-close"
            />
        </>
    )
}
