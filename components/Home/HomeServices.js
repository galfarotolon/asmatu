'use client'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Arrow_r } from '../../public/svg/icon';
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../context/LanguageContext";
import { SubmenuServices } from '@/data/services';

export default function HomeServices() {
    const { language } = useLanguage(); // Get the current language from the context

    const serviceVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.6, // Adjust this value as needed
    });

    return (
        <>
            {/* <!-- Service Query Shortcode --> */}
            <div className="fn_cs_service_query" data-mobile="disable" data-column-count="4">
                <motion.div
                    ref={ref}
                    className="top_bar"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    <div className="t_inner">
                        <motion.h3 variants={FADE_UP_ANIMATION_VARIANTS}>Nuestras Industrias</motion.h3>
                        <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
                            Asmatu se especializa en diversas áreas, ofreciendo servicios integrales y personalizados en cada proyecto.
                        </motion.span>
                        <div className="owl_control">
                            <div className="fn_prev"></div>
                            <div className="fn_next"></div>
                        </div>
                    </div>
                </motion.div>
                <div className="service_part">
                    <div className="owl-carousel">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={2}
                            loop={true}
                            navigation={{
                                prevEl: ".fn_prev",
                                nextEl: ".fn_next",
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {SubmenuServices.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="item service-card">
                                        <Link href={language === "ESP" ? item.linkEs : item.linkEu} className="full_link"></Link>
                                        <div className="img_holder">
                                            <img src={item.img} alt="" />
                                            <div className="abs_img" style={{ "backgroundImage": `url(${item.bg})` }}></div>
                                        </div>
                                        <div className="title">
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="view_more">
                                            <span className="more_link">
                                                <span className="text">Ver más</span>
                                                <span className="arrow"><Arrow_r className="fn__svg" /></span>
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}
