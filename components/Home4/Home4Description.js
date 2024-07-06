import Link from "next/link";

export default function Home4Description() {
    return (
        <>
            <div className="fn_cs_description" data-margin-bottom="33">
                <div className="container max1500">
                    <div className="desc_holder max500">
                        <p>We are construction partners who are passionate about what we do and our partners success. We pride ourselves on being solution providers.</p>
                    </div>
                </div>
            </div>
            {/* <!-- /Description Shortcode --> */}

            {/* <!-- Button Shortcode --> */}
            <div className="fn_cs_button">
                <div className="container max1500">
                    <div className="inner max500">
                        <Link href="/services">Full Services List</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
