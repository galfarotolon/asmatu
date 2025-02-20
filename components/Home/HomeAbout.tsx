"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// Use react-intersection-observer from its own package
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Define the expected shape of your About data from Sanity.
export interface AboutData {
  title: {
    es: string;
    eu: string;
  };
  // We'll assume the body is rich text (Portable Text)
  bodyEs: any[];
  bodyEu: any[];
  signName: {
    es: string;
    eu: string;
  };
  signPosition: {
    es: string;
    eu: string;
  };
  // For the right image, we use an object that contains the image (from asset.url) and alt texts per language.
  rightImage?: {
    image?: {
      asset?: {
        url?: string;
      };
    };
    alt?: {
      es?: string;
      eu?: string;
    };
  };
}

interface HomeAboutProps {
  about: AboutData;
  lang: "es" | "eu";
}

export default function HomeAbout({ about, lang }: HomeAboutProps) {
  // Set up framer-motion animation controls and the inView hook.
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Choose the appropriate fields based on the language.
  const chosenTitle = lang === "es" ? about.title.es : about.title.eu;
  const chosenBody = lang === "es" ? about.bodyEs : about.bodyEu;
  const chosenSignName = lang === "es" ? about.signName.es : about.signName.eu;
  const chosenSignPosition =
    lang === "es" ? about.signPosition.es : about.signPosition.eu;

  // For the right image, if no image is provided from Sanity, fallback to the original path.
  const rightImageUrl =
    about.rightImage?.asset?.url || "/img/thumb/500-560.jpg";
  const rightImageAlt =
    lang === "es"
      ? about.rightImage?.alt?.es || "Thumbnail"
      : about.rightImage?.alt?.eu || "Thumbnail";

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
                <h3 className="title">{chosenTitle}</h3>
                {/* Render the rich text from Sanity */}
                <PortableText value={chosenBody} />
              </div>
              <div className="sign_holder">
                <h3 className="name">{chosenSignName}</h3>
                <p className="occ">{chosenSignPosition}</p>
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
                      backgroundImage: `url(${rightImageUrl})`,
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
