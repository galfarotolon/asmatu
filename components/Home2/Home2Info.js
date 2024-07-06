import { Checked } from '@/public/svg/icon'
import React from 'react'

export default function Home2Info() {
    return (
        <>
            <div className="fn_cs_info_list full" data-cols="3">
                <div className="container">
                    <div className="list">
                        <ul>
                            <li>
                                <div className="item">
                                    <span className="icon">
                                        <Checked className="fn__svg" />
                                    </span>
                                    <h3>We Have ISO Certificate</h3>
                                    <p>An ISO 1900:2007</p>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <span className="icon">
                                        <Checked className="fn__svg" />
                                    </span>
                                    <h3>We Provide High Services</h3>
                                    <p>That you have expected</p>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <span className="icon">
                                        <Checked className="fn__svg" />
                                    </span>
                                    <h3>Most Expirienced Company</h3>
                                    <p>In the constrution business</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
