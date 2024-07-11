'use client'
import { motion } from "framer-motion";
import Layout from "@/layouts/layout";
import Breadcrumb from "@/layouts/breadcrumb";
import Image from "next/image";


const Calidad = () => {
    return (
        <Layout>
            <div className='px-40'>
                <Breadcrumb firstChild="Inicio" SecondChild="Calidad" />
                <div className="container mx-auto px-4 py-12 flex flex-col">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 "
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        <motion.div
                            className="text-left  "
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                        >
                            <h1 className="text-4xl font-bold mb-4">Calidad</h1>
                            <p className="mb-4">
                                La búsqueda de los más altos estándares de calidad y el respeto por el medio ambiente son dos de los principales objetivos de ASMATU dentro de su proceso de mejora continua. Los clientes satisfechos a lo largo de nuestros más de 25 años de trayectoria son nuestro mejor aval.
                            </p>
                            <p className="mb-4">
                                ASMATU SLP., con el fin de alcanzar un destacado nivel en la calidad de todas sus actividades y consciente de la necesidad de colaborar en la protección ambiental, asume el compromiso de la mejora constante de la eficacia del Sistema de Gestión mediante el enfoque basado en la gestión de riesgos y la puesta en marcha de las medidas adecuadas para minimizarlos, conforme a los siguientes principios de actuación:
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center items-center "
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
                                <motion.div
                                    className="mb-4"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <Image src="/img/calidad/1.jpg" alt="Calidad 1" width={150} height={100} className="rounded-lg " />
                                </motion.div>
                                <motion.div
                                    className="mb-4"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                                >
                                    <Image src="/img/calidad/2.jpg" alt="Calidad 2" width={150} height={100} className="rounded-lg" />
                                </motion.div>
                                <motion.div
                                    className="mb-4"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                                >
                                    <Image src="/img/calidad/3.jpg" alt="Calidad 3" width={150} height={100} className="rounded-lg " />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="mt-12"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        <h2 className="text-2xl font-semibold mb-2">POLÍTICA INTEGRAL DE CALIDAD</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Conseguir la satisfacción de los clientes y partes interesadas, adaptándose a sus necesidades y proponiendo mejoras ambientales adecuadas a cada proyecto y realizando una labor de colaboración e implicación continua con el cliente en todas y cada una de las fases de desarrollo de los trabajos.</li>
                            <li>Observar el cumplimiento de los requisitos legales aplicables, y de otros requisitos suscritos por la organización.</li>
                            <li>Buscar una mejora continua del desempeño ambiental de los proyectos así como la prevención de la contaminación durante todo el ciclo de vida del proyecto.</li>
                            <li>Garantizar el nivel de participación, formación, motivación y los medios técnicos necesarios para la eficiente realización de sus actividades, potenciando el desarrollo humano y profesional de todos ellos.</li>
                            <li>Compromiso de mejora continua de los proyectos, eco-diseñados, y su desempeño ambiental desde el diseño y desarrollo, a partir del conocimiento de los aspectos ambientales de sus ciclos de vida (materiales, soluciones constructivas, fin de vida…) sin trasladar impactos ambientales de una etapa del ciclo de vida a otra, a menos que tenga una reducción neta de los impactos ambientales negativos a lo largo del ciclo de vida del proyecto.</li>
                        </ul>
                        <p className="mb-4">
                            Por todo ello hemos documentado e implantado un Sistema Integral en conformidad con los requisitos de las normas UNE-EN-ISO 9001; UNE-EN-ISO 14001 y UNE-EN ISO 14006, enfocado hacia la Mejora Constante y que es conocido, entendido y aplicado por todas y cada una de las personas que integramos ASMATU SLP.
                        </p>
                        <p className="mb-4">
                            Se establecerán objetivos que garanticen el cumplimiento de la Política Integral. La consecución de estos objetivos es responsabilidad de todos, siendo necesaria la participación y colaboración de todo el personal de ASMATU SLP, para lo cual, la Dirección de la Empresa difunde la Política Integral establecida.
                        </p>
                    </motion.div>
                    <motion.div
                        className="mt-12"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                    >
                        <h2 className="text-2xl font-semibold mb-2">Entidades Públicas</h2>
                        <div className="flex space-x-4">
                            <Image src="/logo1.png" alt="Logo 1" width={100} height={100} className="rounded-lg shadow-lg" />
                            <Image src="/logo2.png" alt="Logo 2" width={100} height={100} className="rounded-lg shadow-lg" />
                            <Image src="/logo3.png" alt="Logo 3" width={100} height={100} className="rounded-lg shadow-lg" />
                            <Image src="/logo4.png" alt="Logo 4" width={100} height={100} className="rounded-lg shadow-lg" />
                            <Image src="/logo5.png" alt="Logo 5" width={100} height={100} className="rounded-lg shadow-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Calidad;
