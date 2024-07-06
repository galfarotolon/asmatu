'use client'
import Link from 'next/link'

export default function Breadcumb({ firstChild, SecondChild }) {
    const href = firstChild.toLowerCase()
    return (
        <>

            <div className="industify_fn_pagetitle">
                <div className="container">
                    <div className="title_holder">
                        <h3>{SecondChild ? SecondChild : firstChild}</h3>
                        <div className="industify_fn_breadcrumbs">
                            <ul>
                                <li><Link href="/" title="Home">Home</Link></li>
                                <li className="separator"><span></span></li>
                                <li><Link href={`/${href}`} title={firstChild}>{firstChild}</Link></li>
                                {SecondChild ?
                                    <>
                                        <li className="separator"><span></span></li>
                                        <li><span className="bread-current">{SecondChild}</span></li>
                                    </>
                                    : ""
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
