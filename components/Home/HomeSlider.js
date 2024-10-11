"use client";

// Import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSliderData } from '@/sanity/lib/sanity-utils';

// Register Swiper custom elements
register();

const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const HomeSlider = ({ data, locale }) => {
    const videoRefs = useRef([]);
    const [sliderData, setSliderData] = useState(data);

    const handleSlideChange = (swiper) => {
        sliderData.forEach((slide, index) => {
            const videoElement = videoRefs.current[index];

            if (slide.mediaType === "video" && videoElement) {
                if (swiper.realIndex === index) {
                    console.log(`Attempting to play video on slide ${index}`);
                    videoElement.play().catch((err) => {
                        console.error("Error attempting to play video:", err);
                    });
                } else {
                    videoElement.pause();
                    videoElement.currentTime = 0;
                }
            }
        });
    };

    // Fetch slider data based on the current language
    useEffect(() => {
        const fetchSliderData = async () => {
            try {
                const data = await getSliderData(locale);
                setSliderData(data.slides);
            } catch (error) {
                console.error('Error fetching slider data:', error);
            }
        };

        fetchSliderData();
    }, [locale]);

    useEffect(() => {
        const swiperInstance = document.querySelector('.custom-class').swiper;
        swiperInstance.on('slideChange', () => handleSlideChange(swiperInstance));

        // Cleanup
        return () => {
            swiperInstance.off('slideChange', handleSlideChange);
        };
    }, []);

    return (
        <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

            {/* Alpha Slider: navigation */}
            <div className="owl_control">
                <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
            </div>

            {/* Alpha Slider: pagination */}
            <div className="swiper-pagination"></div>

            {/* Alpha Slider: wrapper */}
            <Swiper
                spaceBetween={2}
                slidesPerView={1}
                loop={true}
                navigation={{
                    prevEl: ".fn_prev",
                    nextEl: ".fn_next",
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                className="custom-class"
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="item">
                            {slide.mediaType === "video" ? (
                                <div className="video_holder">
                                    <video
                                        className="video"
                                        preload="auto"
                                        loop
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                                        muted
                                        playsInline
                                        autoPlay
                                    >
                                        <source src={slide.video?.asset.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : (
                                <div
                                    className="img_holder"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>
                            )}
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <motion.p
                                            initial="hidden"
                                            animate="visible"
                                            variants={slideVariants}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <span>{slide.serviceTitle[locale]}</span>
                                        </motion.p>
                                        <motion.h3
                                            initial="hidden"
                                            animate="visible"
                                            variants={slideVariants}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <span>{slide.subHeader[locale]}</span>
                                        </motion.h3>
                                        <motion.div
                                            className="desc"
                                            initial="hidden"
                                            animate="visible"
                                            variants={slideVariants}
                                            transition={{ duration: 1 }}
                                        >
                                            <span>{slide.description[locale]}</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Alpha Slider: wrapper */}
        </div>
    );
};

export default HomeSlider;
