'use client'
import { PlayVideo, Stars } from '@/public/svg/icon';
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
const background1 = "img/about/rating_bg.jpg";


export default function Home3Info() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="fn_cs_info_rating">
                <div className="container">
                    <div className="inner">
                        <div className="left_part">
                            <div className="title_holder">
                                <h3 className="l_title">World&apos;s Leading Industry Corporation</h3>
                                <p className="l_desc">To further develop our corporate strengths we have established a corporate mandate to maintain strong core values that truly reflect the companys philosophy.</p>
                            </div>
                            <div className="l_video fn_cs_lightgallery">
                                <span className="lightbox" onClick={() => setIsOpen(true)}>
                                    <span className="icon">
                                        <PlayVideo className="fn__svg" />
                                    </span>
                                    <span className="text">View Company Promo Video</span>
                                </span>
                            </div>
                        </div>
                        <div className="middle_part">
                            <div className="m_in">
                                <div className="rating_holder">
                                    <div className="r_header"></div>
                                    <div className="r_footer"></div>
                                    <Link href="#"></Link>
                                    <Stars className="fn__svg" />
                                    <h3 className="rating_number">9.7</h3>
                                    <h3 className="rating_text">Customer Rating</h3>
                                </div>
                                <div className="tagline_holder">
                                    <div className="tl_inner"><span>Full reviews at trustpilot</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="right_part">
                            <div className="o_img" style={{ backgroundImage: `url(${background1})` }}></div>
                            <div className="o_color"></div>
                        </div>
                    </div>
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
