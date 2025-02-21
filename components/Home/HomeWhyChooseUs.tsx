"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Certificate, Checked } from "@/public/svg/icon";
import Counter from "@/components/animations/Counter";
import { PortableText } from "@portabletext/react";

interface StatItem {
  number: number;
  label: { es: string; eu: string };
}

interface Badge {
  title: { es: string; eu: string };
  description: { es: string; eu: string };
  yearsExperience: number;
  badgeImage: any; // use your imageObject type if needed
}

interface FeatureItem {
  text: { es: string; eu: string };
}

export interface WhyChooseUsData {
  title: { es: string; eu: string };
  description: { es: any[]; eu: any[] }; // blockContent arrays
  statistics: StatItem[];
  badge: Badge;
  featuresList: FeatureItem[];
}

interface HomeWhyChooseUsProps {
  data: WhyChooseUsData;
  lang: "es" | "eu";
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HomeWhyChooseUs({ data, lang }: HomeWhyChooseUsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="service_section py-10 px-4 md:px-40 mb-20">
      <div className="fn_cs_about_with_rating">
        <div className="container mx-auto px-4 py-4">
          <div className="awr_inner flex flex-wrap">
            <motion.div
              className="left_part w-full lg:w-1/2 mb-8 lg:mb-0"
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="title_holder mb-6 md:pr-10">
                <h3 className="text-3xl font-bold mb-4 ">
                  {lang === "es" ? data.title.es : data.title.eu}
                </h3>
                <PortableText
                  value={
                    lang === "es" ? data.description.es : data.description.eu
                  }
                />
              </div>
              <div className="signature flex items-center mb-8">
                <Certificate className="fn__svg w-12 h-12 mr-4" />
                <p className="text-lg">
                  Tenemos un
                  <br />
                  Certificado SGS.
                </p>
              </div>
              <div className="stats flex flex-wrap  bottom-0">
                {data.statistics.map((stat, index) => (
                  <div className="stat-item w-1/3 mb-4 lg:mb-0" key={index}>
                    <Counter
                      value={stat.number}
                      className="text-4xl font-bold"
                    />
                    <p> {lang === "es" ? stat.label.es : stat.label.eu}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="right_part w-full lg:w-1/2"
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="r_inner">
                <div className="top_section mb-8">
                  <div className="badge_holder flex items-center mb-6">
                    <div className="badge_left flex-1 p-2 md:p-4">
                      <div className="b_title">
                        <h3 className="text-2xl font-bold w-full sm:w-1/3">
                          {lang === "es"
                            ? data.badge.title.es
                            : data.badge.title.eu}
                        </h3>
                      </div>
                      <div className="b_desc flex items-center text-sm">
                        <Counter
                          value={data.badge.yearsExperience}
                          className="text-4xl font-bold mr-2"
                        />
                        <span>
                          {lang === "es"
                            ? data.badge.description.es
                            : data.badge.description.eu}
                        </span>
                      </div>
                    </div>
                    <div
                      className="badge_right bg-cover bg-center hidden sm:block"
                      style={{
                        backgroundImage: `url(/img/service/area-edificacion-asmatu.jpg)`,
                      }}
                    />
                  </div>
                  <div className="rating_holder relative">
                    <div className="r_header"></div>
                    <div className="r_footer"></div>
                    <>
                      <h3 className="rating_number font-bold">9.7</h3>
                      <h3 className="rating_text text-sm">
                        Líderes de Industria
                      </h3>
                    </>
                  </div>
                </div>
                <div className="bottom_section">
                  <div className="list">
                    <ul>
                      {data.featuresList.map((feature, idx) => (
                        <li key={idx}>
                          <div className="item flex items-center mb-4">
                            <span className="icon w-8 h-8 mr-4">
                              <Checked className="fn__svg w-full h-full" />
                            </span>
                            <p>
                              {lang === "es"
                                ? feature.text.es
                                : feature.text.eu}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
