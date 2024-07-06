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

// Import images
const service1 = "/img/service/single/areas-actividad.jpg";
const service2 = "/img/service/single/molinos-viento.jpg";
const service3 = "/img/service/single/proyecto-urbanismo-asmatu.jpg";
const service4 = "/img/service/single/area-internacional-asmatu.jpg";
const service5 = "/img/service/single/apartado-area-edificacion.jpg";


const services = [
    {
        link: "/services/serviceSinglePage1",
        img: "img/thumb/480-700.jpg",
        bg: service1,
        title: "Ingeniería Civil y Edificación"

    },
    {
        link: "/services/serviceSinglePage2",
        img: "img/thumb/480-700.jpg",
        bg: service2,
        title: "Consultoría Ambiental"

    },
    {
        link: "/services/serviceSinglePage3",
        img: "img/thumb/480-700.jpg",
        bg: service3,
        title: "Planificación y Diseño Urbano"

    },
    {
        link: "/services/serviceSinglePage4",
        img: "img/thumb/480-700.jpg",
        bg: service4,
        title: "Consultoría Internacional"

    },
    {
        link: "/services/serviceSinglePage5",
        img: "img/thumb/480-700.jpg",
        bg: service5,
        title: "Gestión de Proyectos"

    },
];

export default function HomeServices() {
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
                            {services.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="item service-card">
                                        <Link href={item.link} className="full_link" ></Link>
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