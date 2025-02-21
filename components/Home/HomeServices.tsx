"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Arrow_r } from "@/public/svg/icon";
import { useInView } from "react-intersection-observer";

// Define a TypeScript interface for your service data.
export interface Service {
  _id: string;
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
  description: any; // blockContent array
  summary: string;
  image: {
    asset: { url: string };
    alt: { es: string; eu: string };
  };
  features: string[];
}

export interface ServicesHeader {
  title: { es: string; eu: string };
  text: { es: string; eu: string };
}

interface HomeServicesProps {
  services: Service[];
  servicesHeader: ServicesHeader;
  baseServicePath: string;
  lang: "es" | "eu";
}

export default function HomeServices({
  services,
  servicesHeader,
  baseServicePath,
  lang,
}: HomeServicesProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Helper: build the link URL for a service.
  const buildServiceLink = (service: Service) => {
    const slug =
      lang === "es" ? service.slug.es.current : service.slug.eu.current;

    return `${lang}/${baseServicePath}/${slug}`;
  };

  return (
    <div
      className="fn_cs_service_query"
      data-mobile="disable"
      data-column-count="4"
    >
      <motion.div
        ref={ref}
        className="top_bar"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <div className="t_inner">
          <motion.h3 variants={FADE_UP_ANIMATION_VARIANTS}>
            {lang === "es" ? servicesHeader.title.es : servicesHeader.title.eu}
          </motion.h3>
          <motion.span variants={FADE_UP_ANIMATION_VARIANTS}>
            {lang === "es" ? servicesHeader.text.es : servicesHeader.text.eu}
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
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service._id}>
                <div className="item service-card">
                  <Link
                    href={buildServiceLink(service)}
                    className="full_link"
                  />
                  <div className="img_holder">
                    <img src="/img/thumb/480-700.jpg" alt="" />
                    <div
                      className="abs_img"
                      style={{
                        backgroundImage: `url(${service.image?.asset?.url})`,
                      }}
                    ></div>
                  </div>
                  <div className="title">
                    <h3>
                      {lang === "es" ? service.title.es : service.title.eu}
                    </h3>
                  </div>
                  <div className="view_more">
                    <span className="more_link">
                      <span className="text">
                        {lang === "es" ? "Ver más" : "Ikusi gehiago"}
                      </span>
                      <span className="arrow">
                        <Arrow_r className="fn__svg" />
                      </span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
