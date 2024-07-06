import Link from 'next/link'
import React from 'react'

export default function Home2Support() {
    return (
        <>
            <div className="support_section_2">
                {/* <!-- Support Shortcode --> */}
                <div className="fn_cs_support_block" data-icon-type="none">
                    <div className="container">
                        <div className="support_block">
                            <div className="content">
                                <div className="desc">
                                    <p>Don&apos;t hesitate and lets get started! Contact us for a free quote on your next home improvement project.</p>
                                </div>
                                <div className="bottom_section">
                                    <div className="link_block"><Link href="https://industify.frenify.net/1/contact/">Request an Estimate</Link></div>
                                    <div className="tfree_block">
                                        <p>Toll Free: 1-800-987-6543 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="img_wrap">
                                <span></span>
                                <img src="/img/about/support.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Support Shortcode --> */}
            </div>
        </>
    )
}
