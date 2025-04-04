"use client";

import React from "react";
import { Quotes } from "@/public/svg/icon";
import Image from "next/image";

// Define the expected shape of testimonial data
export interface TestimonialData {
  backgroundImage: { asset: { url: string } };
  quote: { es: string; eu: string };
  name: { es: string; eu: string };
  position: { es: string; eu: string };
}

interface HomeTestimonialProps {
  data: TestimonialData;
  lang: "es" | "eu";
}

export default function HomeTestimonial({ data, lang }: HomeTestimonialProps) {
  const bgUrl = data.backgroundImage?.asset?.url || "";
  const quote = data.quote[lang];
  const authorName = data.name[lang];
  const authorPosition = data.position[lang];

  return (
    <div
      className="testimonial_section"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="overlay"></div>
      <div className="fn_cs_single_testimonial">
        <div className="container">
          <div className="inner">
            <Quotes className="fn__svg" />
            <div className="content_holder">
              <p>{quote}</p>
              <h3>{authorName}</h3>
              <h5>{authorPosition}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
