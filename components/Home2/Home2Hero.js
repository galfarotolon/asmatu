'use client'
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Home2Hero() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="fn_cs_hero_header">
                <div className="container">
                    <div className="content_holder max450">
                        <div className="title_holder">
                            <h3>Know About Mission <span>Statement</span></h3>
                            <p>We are committed to providing the highest level of professionalism, service response, personalised solutions, competitive prices, professional and qualified, integrated design and quality workmanship.</p>
                        </div>
                        <div className="btn_holder fn_cs_lightgallery">
                            <Link href="/services" className="discover" onClick={() => setIsOpen(true)}>Discover our Website</Link>
                            <span className="video lightbox" onClick={() => setIsOpen(true)}>
                                <span className="icon"></span>
                                <span className="text">Watch Video</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg_holder">
                    <div className="o_img" style={{ "backgroundImage": "url(/img/hero.jpg)" }}></div>
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
