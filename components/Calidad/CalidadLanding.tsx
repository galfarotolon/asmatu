"use client";

import React from "react";
import { motion } from "framer-motion";
import Layout from "@/layouts/layout";
import Breadcrumb from "@/layouts/breadcrumb";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { PortableText } from "@portabletext/react";

interface CalidadData {
  headerTitle: { es: string; eu: string };
  section1: {
    title: { es: string; eu: string };
    content: { es: any[]; eu: any[] }; // Changed to any[] to accept block content
  };
  section2: {
    title: { es: string; eu: string };
    bulletPoints: { es: string[]; eu: string[] };
    content: { es: any[]; eu: any[] }; // Changed to any[] to accept block content
  };
  logos: {
    src: any;
    altText: any;
    logo: {
      name: { es: string; eu: string };
      src: { asset: { url: string } };
    };
  }[];
  publicEntities: { name: string; src: string }[];
  // Optionally, you can include privateEntities if needed.
  seo: any;
}

interface CalidadProps {
  data: CalidadData;
  lang: "es" | "eu";
  baseRoute: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CalidadContent = ({
  data,
  lang,
}: {
  data: CalidadData;
  lang: "es" | "eu";
}) => {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });
  const [logosRef, logosInView] = useInView({ triggerOnce: true });
  const [entitiesRef, entitiesInView] = useInView({ triggerOnce: true });

  console.log(data);

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col">
      {/* Section 1 */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        ref={sectionRef}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <motion.div
          className="text-left"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <h1 className="text-4xl font-bold mb-4">
            {data.section1.title[lang]}
          </h1>
          <div
            className="mb-4"
            style={{
              margin: 0,
              padding: 0,
              lineHeight: 1.8,
              marginBottom: "20px",
              color: "#666",
              fontSize: "18px",
            }}
          >
            <PortableText value={data.section1.content[lang]} />
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.div
            className="flex space-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {data.logos?.map((logo, index) => (
              <motion.div key={index} className="mb-4" variants={itemVariants}>
                <Image
                  src={logo.src.asset.url}
                  alt={logo?.altText}
                  width={150}
                  height={100}
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="mt-12"
        initial="hidden"
        animate="visible"
        ref={logosRef}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          {data.section2.title[lang]}
        </h2>
        <ul
          className="list-disc list-inside mb-4 pl-4"
          style={{ lineHeight: 1.8, color: "#666", fontSize: "18px" }}
        >
          {data.section2.bulletPoints[lang].map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="mb-2"
            >
              {point}
            </motion.li>
          ))}
        </ul>
        <div
          className="mb-4"
          style={{ lineHeight: 1.8, color: "#666", fontSize: "18px" }}
        >
          <PortableText value={data.section2.content[lang]} />
        </div>
      </motion.div>

      {/* Public Entities */}
      <motion.div
        className="mt-12"
        initial="hidden"
        animate="visible"
        ref={entitiesRef}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <h2 className="text-2xl font-semibold mb-2">Entidades Públicas</h2>
        <motion.div
          className="flex space-x-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {data.publicEntities?.map((entity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="mx-4 my-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-40 h-40 mb-6">
                  <Image
                    src={entity.src}
                    alt={entity.name}
                    layout="fill"
                    className="object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Calidad = ({ data, lang, baseRoute }: CalidadProps) => {
  return (
    <Layout>
      <div className="px-0 sm:px-10 md:px-20 lg:px-40 overflow-x-hidden">
        <Breadcrumb firstChild={data.headerTitle?.[lang]} />
        <CalidadContent data={data} lang={lang} />
      </div>
    </Layout>
  );
};

export default Calidad;
