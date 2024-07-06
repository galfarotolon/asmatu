"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";
import Image from "next/image";

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const clients = [
  { name: "Client 1", logo: "/img/clients/arcelor.png" },
  { name: "Client 2", logo: "/img/clients/gobierno-vasco.png" },
  { name: "Client 3", logo: "/img/clients/loar.png" },
  // Add more clients as needed
];

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.8, delay: 2 },
  },
};

const TEXT_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.8, delay: 0.5 },
  },
};

const HomeClients: React.FC = () => {
  const [headerRef, headerInView] = useInView();
  const [textRef, textInView] = useInView();
  const [containerRef, containerInView] = useInView();

  return (
    <div className="py-10 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "show" : "hidden"}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Conoce nuestros clientes
      </motion.h2>
      <motion.p
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={TEXT_ANIMATION_VARIANTS}
        className="text-center mb-8"
      >
        Entidades públicas y privadas han confiado desde hace años en nosotros
        por nuestra experiencia y saber hacer.
      </motion.p>
      <div
        ref={containerRef}
        className="container mx-auto px-4 flex flex-wrap justify-center"
      >
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial="hidden"
            animate={containerInView ? "visible" : "hidden"}
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
                  src={client.logo}
                  alt={client.name}
                  layout="fill"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeClients;
