'use client'
import { motion } from "framer-motion";
import Layout from "@/layouts/layout";
import Breadcrumb from "@/layouts/breadcrumb";
import Image from "next/image";
import calidadData from "@/data/calidad";
import useInView from "@/hooks/useInView";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Calidad = () => {
    const [sectionRef, sectionInView] = useInView({ triggerOnce: true });
    const [logosRef, logosInView] = useInView({ triggerOnce: true });
    const [entitiesRef, entitiesInView] = useInView({ triggerOnce: true });

    return (
        <Layout>
            <div className='px-10 md:px-20 lg:px-40'>
                <Breadcrumb firstChild="Inicio" SecondChild="Calidad" />
                <div className="container mx-auto px-4 py-12 flex flex-col">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        ref={sectionRef}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        <motion.div
                            className="text-left"
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                        >
                            <h1 className="text-4xl font-bold mb-4">{calidadData.section1.title}</h1>
                            <p className="mb-4" style={{ margin: 0, padding: 0, lineHeight: 1.8, marginBottom: '20px', color: '#666', fontSize: '18px' }}>{calidadData.section1.content}</p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center items-center"
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 } },
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
                                {calidadData.logos.map((logo, index) => (
                                    <motion.div
                                        key={index}
                                        className="mb-4"
                                        variants={itemVariants}
                                    >
                                        <Image src={logo.src} alt={logo.name} width={150} height={100} className="rounded-lg" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="mt-12"
                        initial="hidden"
                        animate={logosInView ? "visible" : "hidden"}
                        ref={logosRef}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        <h2 className="text-2xl font-semibold mb-2">{calidadData.section2.title}</h2>
                        <ul className="list-disc list-inside mb-4 pl-4" style={{ lineHeight: 1.8, color: '#666', fontSize: '18px' }}>
                            {calidadData.section2.bulletPoints.map((point, index) => (
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
                        <p className="mb-4" style={{ lineHeight: 1.8, color: '#666', fontSize: '18px' }}>
                            Por todo ello hemos documentado e implantado un <strong>Sistema Integral</strong> en conformidad con los requisitos de las normas <strong>UNE-EN-ISO 9001; UNE-EN-ISO 14001</strong> y <strong>UNE-EN ISO 14006</strong>, enfocado hacia la <strong>Mejora Constante</strong> y que es conocido, entendido y aplicado por todas y cada una de las personas que integramos <strong>ASMATU SLP</strong>. Se establecerán objetivos que garanticen el cumplimiento de la <strong>Política Integral</strong>. La consecución de estos objetivos es responsabilidad de todos, siendo necesaria la participación y colaboración de todo el personal de <strong>ASMATU SLP</strong>, para lo cual, la Dirección de la Empresa difunde la <strong>Política Integral</strong> establecida.
                        </p>
                    </motion.div>
                    <motion.div
                        className="mt-12"
                        initial="hidden"
                        animate={entitiesInView ? "visible" : "hidden"}
                        ref={entitiesRef}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 } },
                        }}
                    >
                        <h2 className="text-2xl font-semibold mb-2">Entidades Públicas</h2>
                        <motion.div
                            className="flex space-x-4"
                            initial="hidden"
                            animate={entitiesInView ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                            }}
                        >
                            {calidadData.publicEntities.map((entity, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.3, duration: 0.5 }}
                                    className="mx-4 my-6"
                                >
                                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                                        <div className="relative w-40 h-40 mb-6">
                                            <Image src={entity.src} alt={entity.name} layout="fill" className="object-contain rounded-lg" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Calidad;
