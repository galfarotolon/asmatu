"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

export default function HomeAbout() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div className="about_section py-10 md:py-20 bg-white">
            {/* About Shortcode */}
            <div className="fn_cs_about px-4 md:px-20">
                <div className="container">
                    <motion.div
                        className="a_inner"
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <div className="leftpart">
                            <div className="title_holder">
                                <h3 className="title">Somos Asmatu</h3>
                                <p>
                                    En Asmatu, desde nuestra fundación en 1992 por el Ingeniero Pedro
                                    Idarreta Lapazaran, hemos sido pioneros en la prestación de servicios
                                    de consultoría civil y de edificación, abarcando desde expedientes técnicos
                                    hasta el Project Management. Nuestro compromiso con la excelencia y la
                                    innovación nos ha permitido expandirnos continuamente, incorporando en
                                    2009 un departamento de medio ambiente y embarcándonos en un proceso de
                                    internacionalización en Perú entre 2012 y 2016.
                                </p>
                                <p>
                                    Nos diferenciamos por nuestro enfoque integral y personalizado en cada
                                    proyecto, utilizando tecnologías de vanguardia y un equipo de más de 30
                                    profesionales altamente cualificados. Nuestra misión es proporcionar
                                    soluciones eficientes y sostenibles que superen las expectativas de nuestros
                                    clientes, asegurando siempre los más altos estándares de calidad y
                                    profesionalismo.
                                </p>
                            </div>
                            <div className="sign_holder">
                                <h3 className="name">Jokin Idarreta</h3>
                                <p className="occ">Director Ejecutivo</p>
                            </div>
                        </div>
                        <div className="rightpart">
                            <div
                                className="r_inner"
                                id="scene"
                                style={{
                                    transform: "translate3d(0px, 0px, 0px)",
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                <motion.div
                                    className="layer border"
                                    data-depth="0.3"
                                    style={{
                                        position: "relative",
                                        display: "block",
                                        left: "0px",
                                        top: "0px",
                                        transform: "translate3d(21.2782px, -19.0075px, 0px)",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                    }}
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                >
                                    <span className="span1"></span>
                                    <span className="span2"></span>
                                    <Image
                                        src="/img/thumb/500-560.jpg"
                                        alt="Thumbnail"
                                        width={500}
                                        height={560}
                                    />
                                </motion.div>
                                <motion.div
                                    className="img_holder layer"
                                    data-depth="0.5"
                                    style={{
                                        position: "absolute",
                                        display: "block",
                                        left: "0px",
                                        top: "0px",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                        transform: "translate3d(35.4636px, -31.6792px, 0px)",
                                    }}
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                >
                                    <Image
                                        src="/img/thumb/500-560.jpg"
                                        alt="Thumbnail"
                                        width={500}
                                        height={560}
                                    />
                                    <div
                                        className="abs_img"
                                        data-bg-img="/img/about/right.jpg"
                                        style={{
                                            backgroundImage: "url(/img/about/molinos-viento.jpg)",
                                        }}
                                    ></div>
                                </motion.div>
                                <motion.div
                                    className="dots layer"
                                    data-switch="disable"
                                    data-depth="0.9"
                                    style={{
                                        position: "absolute",
                                        display: "block",
                                        left: "0px",
                                        top: "0px",
                                        transform: "translate3d(63.8345px, -57.0226px, 0px)",
                                        transformStyle: "preserve-3d",
                                        backfaceVisibility: "hidden",
                                    }}
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                >
                                    <Image
                                        src="/img/thumb/500-560.jpg"
                                        alt="Thumbnail"
                                        width={500}
                                        height={560}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* /About Shortcode */}
        </div>
    );
}
