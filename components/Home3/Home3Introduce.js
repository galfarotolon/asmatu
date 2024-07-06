'use client'
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home3Introduce() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="fn_cs_introduce_wrap fn_cs_lightgallery" data-url-show="yes" data-wing-switch="enable">
                <div className="container">
                    <div className="fn_cs_introduce">

                        <span className="wing11"></span>
                        <span className="wing12"></span>
                        <span className="wing21"></span>
                        <span className="wing22"></span>
                        <span className="video lightbox" onClick={() => setIsOpen(true)}><span></span></span>
                        <div className="o_color"></div>

                        <div className="content_holder">
                            <div className="title_holder">
                                <h5>Let Me Introduce</h5>
                                <h3>Our Company</h3>
                                <p>For over 47 years, the Industify family has been building relationships and projects that last. We build safe environments and eco-friendly solutions in the communities in which we work. Most importantly, we build strong relationships that allow us to build anything, anywhere.  No matter the job, we go beyond building.</p>
                            </div>
                            <div className="badge_holder">
                                <div className="title">
                                    <h3>World&apos;s Leading Industry<br />Corporation</h3>
                                </div>
                                <div className="content"><span className="year">47</span><span>years of experience</span></div>
                            </div>
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
