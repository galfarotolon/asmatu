"use client";

import Link from "next/link";
import React from "react";
import { urlFor } from "@/sanity/lib/image"; // if needed for images

interface HomeCTAProps {
  ctaData: {
    header: { es: string; eu: string };
    subheader: { es: string; eu: string };
    buttonText: { es: string; eu: string };
    buttonLink: { es: { current: string }; eu: { current: string } }; // using slugObject structure
  };
  lang: "es" | "eu";
}

export default function HomeCTA({ ctaData, lang }: HomeCTAProps) {
  // Build the URL from the slugObject
  const slug =
    lang === "es"
      ? ctaData.buttonLink.es.current
      : ctaData.buttonLink.eu.current;
  const buttonLink = `/${slug}`;

  return (
    <div className="fn_cs_call_to_action">
      <div className="container">
        <div className="cta_holder">
          <div className="title_holder">
            <h3>{lang === "es" ? ctaData.header.es : ctaData.header.eu}</h3>
            <p>{ctaData.subheader[lang]}</p>
          </div>
          <div className="link_holder">
            <Link href={buttonLink}>
              {lang === "es" ? ctaData.buttonText.es : ctaData.buttonText.eu}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
