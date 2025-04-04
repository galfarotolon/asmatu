"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Client {
  _id: string;
  name: string;
  image: {
    asset: { url: string };
    altText: { es: string; eu: string };
  };
}

interface ClientsCollectionData {
  header: { es: string; eu: string };
  subheader: { es: string; eu: string };
  clients: Client[];
}

interface HomeClientsProps {
  data: ClientsCollectionData;
  lang: "es" | "eu";
}

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.8, delay: 0.5 },
  },
};

export default function HomeClients({ data, lang }: HomeClientsProps) {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="py-10 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {lang === "es" ? data.header.es : data.header.eu}
      </motion.h2>
      <motion.p
        className="text-center mb-8"
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {lang === "es" ? data.subheader.es : data.subheader.eu}
      </motion.p>
      <div
        ref={containerRef}
        className="container mx-auto px-4 flex flex-wrap justify-center"
      >
        {data.clients.map((client, index) => (
          <motion.div
            key={client._id}
            initial={{ opacity: 0, x: -50 }}
            animate={containerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            className="mx-4 my-6"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-6">
                {client.image?.asset?.url ? (
                  <Image
                    src={client.image.asset?.url}
                    alt={
                      lang === "es"
                        ? client.image.altText?.es
                        : client.image.altText?.eu
                    }
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    {client.name}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
