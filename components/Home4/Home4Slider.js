'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

const slider3 = [
    { src: "/img/slider/1.jpg" },
    { src: "/img/slider/2.jpg" },
    { src: "/img/slider/4.jpg" },
    { src: "/img/slider/1.jpg" },
    { src: "/img/slider/5.jpg" }
]


export default function Home4Slider() {
    return (
        <>
            {/* <!-- Kenburnsy Slider --> */}
            <div className="fn_cs_kenburnsy_wrap">
                <div className="fn_cs_kenburnsy" data-interval="7000">
                    <Swiper
                        spaceBetween={2}
                        slidesPerView={1}

                        loop={true}
                        pagination={{ clickable: true }}
                        className="custom-class"
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true
                        }}
                    >
                        {slider3.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item.src} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
            {/* <!-- /Kenburnsy Slider --> */}
        </>
    )
}
