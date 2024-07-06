'use client'
import { Arrow_r } from '@/public/svg/icon';
import Isotope from 'isotope-layout';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function PortfolioList() {
    const projects = [
        {
            id: 1,
            category: "one",
            img: "/img/portfolio/1.jpg",
            title: "Industify Gas and Oil Organization"
        },

        {
            id: 2,
            category: "two",
            img: "/img/portfolio/2.jpg",
            title: "Odeon Industrial Machinery"
        },
        {
            id: 3,
            category: "three",
            img: "/img/portfolio/3.jpg",
            title: "Chaban Car Industry"
        },
        {
            id: 4,
            category: "four",
            img: "/img/portfolio/4.jpg",
            title: "Arturo-Merino-Benítez"
        },
        {
            id: 5,
            category: "five",
            img: "/img/portfolio/5.jpg",
            title: "Femern Tunnel, Germany-Denmark"
        },
        {
            id: 6,
            category: "one",
            img: "/img/portfolio/6.jpg",
            title: "Femern Tunnel, Germany-Denmark"
        },

    ]
    const [isDropdown, setIsDropdown] = useState(false)

    const handleClick = () => {
        setIsDropdown(!isDropdown);
    };

    const [filterKey, setFilterKey] = useState('')
    const isotope = useRef()
    // store the filter keyword in a state
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".industify_fn_portfolio_list", {
                filter: '',
                itemSelector: ".gas_and_oil",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".gas_and_oil",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])

    // console.log(isotope.current);
    useEffect(() => {
        if (isotope.current) {
            filterKey === ''
                ? isotope.current.arrange({ filter: '' })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)



    return (
        <>
            <div className="industify_fn_portfolio_page">

                {/* PORTFOLIO LIST */}
                <div className="portfolio_list">
                    <div className="container">
                        <div className="filter">
                            <a onClick={handleClick}>All Projects</a>
                            <span className="spinner"></span>
                            <ul className={isDropdown ? "fn_filter opened" : "fn_filter"} onClick={handleClick}>
                                <li><a className={filterKey === "" ? "active" : ""} onClick={handleFilterKeyChange("")} >All Projects</a></li>
                                <li><a className={filterKey === "one" ? "active" : ""} onClick={handleFilterKeyChange("one")} >Aerospace</a></li>
                                <li><a className={filterKey === "two" ? "active" : ""} onClick={handleFilterKeyChange("two")} >Car Industry</a></li>
                                <li><a className={filterKey === "three" ? "active" : ""} onClick={handleFilterKeyChange("three")} >Construction</a></li>
                                <li><a className={filterKey === "four" ? "active" : ""} onClick={handleFilterKeyChange("four")} >Gas and Oil</a></li>
                                <li><a className={filterKey === "five" ? "active" : ""} onClick={handleFilterKeyChange("five")} >Machinery</a></li>
                            </ul>
                        </div>
                        <div className="list_in">
                            <ul className="industify_fn_portfolio_list">
                                {projects.map((project, i) => (
                                    <li className={`gas_and_oil ${project.category}`} key={i}>
                                        <div className="item">
                                            <div className="item_in">
                                                <Link href="/portfolio/portfolioSinglePage1"></Link>
                                                <div className="img_holder">
                                                    <img src="img/thumb/560-375.jpg" alt="" />
                                                    <div className="img_abs" style={{ "backgroundImage": `url(${project.img})` }}></div>
                                                </div>
                                                <div className="title_holder">
                                                    <h3>{project.title}</h3>
                                                    <p>View More<Arrow_r className="fn__svg" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /PORTFOLIO LIST */}
            </div>
        </>
    )
}
