
export default function Home2About() {
    return (
        <>
            <div className="about_section">
                {/* <!-- About Shortcode --> */}
                <div className="fn_cs_about">
                    <div className="container">
                        <div className="a_inner">
                            <div className="leftpart">
                                <div className="title_holder">
                                    <h3 className="title">We are Industify</h3>
                                    <p>Industify is a pioneer in design-build specializing in engineering, architecture and construction services to both domestic and international customers. Founded in 1960, Industify is a family-owned company headquartered in Lexington, Ky. with offices across the U.S., Canada and Japan.</p>
                                    <p>To provide exceptional services to the insurance industry and thier clients, the property owner. We are committed to providing the highest level of professionalism, service response, and quality workmanship.</p>
                                </div>
                                <div className="sign_holder">
                                    <h3 className="name">Alan Michaelis</h3>
                                    <p className="occ">Chief Executive</p>
                                </div>
                            </div>
                            <div className="rightpart">
                                <div className="r_inner" id="scene">
                                    <div className="layer border" data-depth="0.3">
                                        <span className="span1"></span>
                                        <span className="span2"></span>
                                        <img src="/img/thumb/500-560.jpg" alt="" />
                                    </div>
                                    <div className="img_holder layer" data-depth="0.5">
                                        <img src="/img/thumb/500-560.jpg" alt="" />
                                        <div className="abs_img" style={{ "backgroundImage": "url(/img/about/right.jpg)" }}></div>
                                    </div>
                                    <div className="dots layer" data-switch="disable" data-depth="0.9">
                                        <img src="/img/thumb/500-560.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /About Shortcode --> */}
            </div>
        </>
    )
}
