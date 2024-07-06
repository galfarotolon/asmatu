'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Certificate, Checked } from "@/public/svg/icon";
import Counter from "@/components/animations/Counter"; // Adjust the import path as necessary

const rightImage = "/img/service/area-edificacion-asmatu.jpg";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function HomeWhyChooseUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <>
            <div className="service_section py-10 px-4 md:px-40 mb-20">
                <div className="fn_cs_about_with_rating">
                    <div className="container mx-auto px-4">
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
                                        ¿Por qué elegir nuestros servicios?
                                    </h3>
                                    <p className="mb-4">
                                        En Asmatu, nos basamos en la honestidad, la disciplina y el
                                        trabajo duro, y creemos que nuestro éxito se debe a mantener un
                                        conjunto simple de valores fundamentales que se remontan al
                                        comienzo de la empresa.
                                    </p>
                                    <p>
                                        Asmatu es una firma de diseño-construcción integrada que ofrece
                                        servicios de ingeniería, arquitectura y construcción a clientes
                                        nacionales e internacionales. Lo que hace única a Asmatu es el
                                        hecho de que realizamos todas las disciplinas internamente en un
                                        entorno colaborativo.
                                    </p>
                                </div>
                                <div className="signature flex items-center mb-8">
                                    <Certificate className="fn__svg w-12 h-12 mr-4" />
                                    <p className="text-lg">
                                        Tenemos un<br />
                                        Certificado SGS.
                                    </p>
                                </div>
                                <div className="stats flex flex-wrap  bottom-0">
                                    <div className="stat-item w-1/3 mb-4 lg:mb-0">
                                        <Counter value={3000} className="text-4xl font-bold" />
                                        <p> Proyectos Completados</p>
                                    </div>
                                    <div className="stat-item w-1/3 mb-4 lg:mb-0">
                                        <Counter value={2000} className="text-4xl font-bold" />
                                        <p> Clientes Satisfechos</p>
                                    </div>
                                    <div className="stat-item w-1/3 mb-4 lg:mb-0">
                                        <Counter value={150} className="text-4xl font-bold" />
                                        <p> Trabajadores Dedicados</p>
                                    </div>
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
                                                        Industria Líder <br />

                                                    </h3>
                                                </div>
                                                <div className="b_desc flex items-center text-sm">
                                                    <Counter value={32} className="text-4xl font-bold mr-2" />
                                                    <span>Años de Experiencia</span>
                                                </div>
                                            </div>
                                            <div
                                                className="badge_right bg-cover bg-center hidden sm:block"
                                                style={{ backgroundImage: `url(${rightImage})` }}
                                            />
                                        </div>
                                        <div className="rating_holder relative">
                                            <div className="r_header"></div>
                                            <div className="r_footer"></div>

                                            <>
                                                <h3 className="rating_number font-bold">9.7</h3>
                                                <h3 className="rating_text text-sm">Lideres de Industria</h3>
                                            </>
                                        </div>
                                    </div>
                                    <div className="bottom_section">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item flex items-center mb-4">
                                                        <span className="icon w-8 h-8 mr-4">
                                                            <Checked className="fn__svg w-full h-full" />
                                                        </span>
                                                        <p>El mejor talento en la industria.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item flex items-center mb-4">
                                                        <span className="icon w-8 h-8 mr-4">
                                                            <Checked className="fn__svg w-full h-full" />
                                                        </span>
                                                        <p>Una de las empresas más experimentadas.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item flex items-center mb-4">
                                                        <span className="icon w-8 h-8 mr-4">
                                                            <Checked className="fn__svg w-full h-full" />
                                                        </span>
                                                        <p>Hemos completado más de 3000 proyectos.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item flex items-center mb-4">
                                                        <span className="icon w-8 h-8 mr-4">
                                                            <Checked className="fn__svg w-full h-full" />
                                                        </span>
                                                        <p>Equipo más dedicado y apasionado.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item flex items-center mb-4">
                                                        <span className="icon w-8 h-8 mr-4">
                                                            <Checked className="fn__svg w-full h-full" />
                                                        </span>
                                                        <p>La empresa cuenta con más de 2000 trabajadores.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/* <!-- /About with Rating Shortcode --> */}
            </div>
        </>
    );
}
