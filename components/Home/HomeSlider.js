'use client'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// register Swiper custom elements
register();

// Images imported
const slider1 = "/img/slider/area-edificacion-asmatu.jpg"  // Change the image paths accordingly
const slider2 = "/img/slider/consultoria-ambiental.jpg"
const slider3 = "/img/slider/proyecto-urbanismo-asmatu.jpg"
const slider4 = "/img/slider/area-internacional-mapa-asmatu.jpg"
const slider5 = "/img/slider/gestion-proyectos.jpg"
const videoUrl = "/videos/video-inicio-asmatu.mp4"  // Your video file path

export default function HomeSlider() {
    const videoRef = useRef(null);

    const handleSlideChange = (swiper) => {
        const videoElement = videoRef.current;
        if (swiper.slides[swiper.activeIndex].contains(videoElement)) {
            videoElement.play();
        } else {
            videoElement.pause();
            videoElement.currentTime = 0;

        }
    };

    useEffect(() => {
        const swiperInstance = document.querySelector('.custom-class').swiper;
        swiperInstance.on('slideChange', () => handleSlideChange(swiperInstance));

        // Cleanup
        return () => {
            swiperInstance.off('slideChange', handleSlideChange);
        };
    }, []);

    const slideVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                    <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 4000,
                        "disableOnInteraction": true
                    }}
                    className="custom-class"
                >
                    <SwiperSlide>
                        <div className="item">
                            <div className="video_holder">
                                <video
                                    className="video"
                                    preload="auto"
                                    loop
                                    ref={videoRef}
                                    style={{ width: '100%' }}
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <motion.p initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.5 }}><span>Servicios globales</span></motion.p>
                                        <motion.h3 initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.7 }}><span>Consultoría, ingeniería, urbanismo, arquitectura y medio ambiente.</span></motion.h3>
                                        <motion.div className="desc" initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 1 }}><span>Con un enfoque multidisciplinar, nuestra actividad abarca todas las fases del ciclo de vida del proyecto, desde su concepción hasta su puesta en servicio, incluyendo la prestación de los servicios técnicos asociados como garantía de calidad.</span></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider1})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <motion.p initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.5 }}><span>Ingeniería</span></motion.p>
                                        <motion.h3 initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.7 }}><span>Ingeniería Civil y Edificación</span></motion.h3>
                                        <motion.div className="desc" initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 1 }}><span>Proyectos de ingeniería civil y edificación, garantizando calidad y cumplimiento en todas las etapas del ciclo de vida del proyecto.</span></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider2})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <motion.p initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.5 }}><span>Medio Ambiente</span></motion.p>
                                        <motion.h3 initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.7 }}><span>Consultoría Ambiental</span></motion.h3>
                                        <motion.div className="desc" initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 1 }}><span>Servicios integrales de consultoría ambiental, comprometidos con la sostenibilidad y la protección del entorno.</span></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider3})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <motion.p initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.5 }}><span>Urbanismo</span></motion.p>
                                        <motion.h3 initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.7 }}><span>Planificación y Diseño Urbano</span></motion.h3>
                                        <motion.div className="desc" initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 1 }}><span>Planificación y diseño urbano innovador, creando espacios sostenibles y funcionales para comunidades vibrantes.</span></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider4})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <motion.p initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.5 }}><span>Consultoría</span></motion.p>
                                        <motion.h3 initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.7 }}><span>Consultoría Internacional</span></motion.h3>
                                        <motion.div className="desc" initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 1 }}><span>Experiencia en proyectos internacionales, con un enfoque global y soluciones adaptadas a cada cliente.</span></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider5})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <motion.p initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.5 }}><span>Gestión</span></motion.p>
                                        <motion.h3 initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 0.7 }}><span>Gestión de Proyectos</span></motion.h3>
                                        <motion.div className="desc" initial="hidden" animate="visible" variants={slideVariants} transition={{ duration: 1 }}><span>Gestión integral de proyectos, asegurando la ejecución exitosa y la satisfacción del cliente.</span></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    );
}
