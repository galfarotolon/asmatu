"use client";
import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Slide } from "@/types/slide";
import { useLanguage } from "@/context/LanguageContext";

// Register Swiper custom elements
register();

interface HomeSliderProps {
  slides: Slide[];
}

const HomeSlider: React.FC<HomeSliderProps> = ({ slides }) => {
  const { language } = useLanguage(); // language is "es" or "eu"
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Map language from context to the keys in Sanity data.
  const langMap: Record<string, "ESP" | "EU"> = {
    es: "ESP",
    eu: "EU",
  };

  // Handler to play/pause video on slide change
  const handleSlideChange = (swiper: any) => {
    if (!videoRef.current) return;
    if (swiper.slides[swiper.activeIndex].contains(videoRef.current)) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const swiperInstance = (document.querySelector(".custom-class") as any)
      ?.swiper;
    if (!swiperInstance) return;
    swiperInstance.on("slideChange", () => handleSlideChange(swiperInstance));
    return () => {
      swiperInstance?.off("slideChange", handleSlideChange);
    };
  }, []);

  // framer-motion animation variants
  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="industify_slider_alpha"
      data-desc-show="yes"
      data-category-show="yes"
      data-nav-types="square"
      data-autoplay-switch="enabled"
      data-autoplay-time="8000"
      data-effect="cards"
      data-progress="enabled"
      data-box-pos="cr"
      data-img-effect="enabled"
      data-text-effect="enabled"
    >
      {/* Navigation controls */}
      <div className="owl_control">
        <div className="fn_prev">
          <span>
            <span className="a"></span>
            <span className="b"></span>
            <span className="c"></span>
          </span>
        </div>
        <div className="fn_next">
          <span>
            <span className="a"></span>
            <span className="b"></span>
            <span className="c"></span>
          </span>
        </div>
      </div>

      {/* Pagination */}
      <div className="swiper-pagination"></div>

      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        navigation={{ prevEl: ".fn_prev", nextEl: ".fn_next" }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        className="custom-class"
      >
        {slides.map((slide, index) => {
          // Map language to the proper key:
          const langKey = langMap[language];
          const title = slide.title[langKey];
          const subtitle = slide.subtitle[langKey];
          const description = slide.description[langKey];

          const isVideo = slide.mediaType === "video";
          // If it's a video, get the file URL; if it's an image, get the image URL
          const videoSrc = slide.videoFile?.asset.url;
          const imgSrc = slide.backgroundImage?.asset.url;

          return (
            <SwiperSlide key={index}>
              <div className="item">
                {isVideo ? (
                  <div className="video_holder">
                    <video
                      className="video"
                      preload="auto"
                      loop
                      ref={videoRef}
                      style={{ width: "100%" }}
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Tu navegador no soporta el video.
                    </video>
                  </div>
                ) : (
                  <div
                    className="img_holder"
                    style={{ backgroundImage: `url(${imgSrc})` }}
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
                        <span>{title}</span>
                      </motion.p>
                      <motion.h3
                        initial="hidden"
                        animate="visible"
                        variants={slideVariants}
                        transition={{ duration: 0.7 }}
                      >
                        <span>{subtitle}</span>
                      </motion.h3>
                      <motion.div
                        className="desc"
                        initial="hidden"
                        animate="visible"
                        variants={slideVariants}
                        transition={{ duration: 1 }}
                      >
                        <span>{description}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
