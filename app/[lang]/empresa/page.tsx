"use client";
import Layout from "@/layouts/layout";
import Breadcrumb from "@/layouts/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import { Location } from "@/public/svg/icon";

const Empresa = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Layout>
      <Breadcrumb firstChild="Inicio" SecondChild="Empresa" />
      <div className="empresa_page py-16">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-8 text-left mt-8">
              Sobre Nosotros
            </h2>
          </div>
          <div className="empresa_content flex flex-wrap">
            <div
              className="text_content w-full md:w-1/2 pr-12"
              style={{
                lineHeight: 1.8,
                color: "#666",
                fontSize: "18px",
              }}
            >
              <p>
                ASMATU fue creada en 1992 por el Ingeniero de Caminos, Canales y
                Puertos Pedro Idarreta Lapazaran con espíritu de dar servicio de
                consultoría civil y de edificación en materia de Expedientes
                Técnicos y Project Management. Desde entonces hasta ahora, la
                empresa no ha dejado de crecer, tanto con la incorporación del
                departamento de medio ambiente en 2009, como en la envergadura
                de los proyectos acometidos.
              </p>
              <p>
                Desde el año 2012 hasta el 2016 estuvimos inmersos en un proceso
                de internacionalización y crecimiento en Perú, sin perder nunca
                de vista nuestra esencia. Actualmente contamos con un equipo de
                más de 30 profesionales entre ingenieros, arquitectos,
                estructuristas, geólogos, delineantes, topógrafos y licenciados
                en Medio ambiente, personal de apoyo.
              </p>
              <p>
                Todo ello, nos ha permitido convertirnos en una de las
                ingenierías de mayor prestigio de Gipuzkoa y el País Vasco.
              </p>
            </div>
            <div className="image_content w-full md:w-1/2">
              <Image
                src="/img/about/edificio-asmatu.png"
                alt="Asmatu team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100" id="Trabaja-con-nosotros">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Trabaja Con Nosotros
          </h2>
          <div className="contact_holder flex flex-wrap">
            <div className="contact_left w-full md:w-1/2 pr-4">
              <h3 className="text-xl font-semibold mb-4">Envíanos tu CV</h3>
              <form
                className="contact_form"
                action="/"
                method="post"
                autoComplete="off"
                data-email="frenifyteam@gmail.com"
              >
                <div
                  className="success"
                  data-success="Tu mensaje ha sido recibido, nos pondremos en contacto contigo pronto."
                ></div>
                <div className="empty_notice">
                  <span>Por favor, rellena los campos requeridos</span>
                </div>
                <div className="items">
                  <div className="item">
                    <input
                      id="name"
                      type="text"
                      placeholder="Nombre"
                      required
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                  </div>
                  <div className="item">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                  </div>
                  <div className="item">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Teléfono"
                      required
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                  </div>
                  <div className="item">
                    <input
                      id="cv"
                      type="file"
                      required
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                  </div>
                  <div className="item">
                    <textarea
                      id="message"
                      placeholder="Mensaje"
                      required
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                    ></textarea>
                  </div>
                  <div className="item">
                    <label className="inline-flex items-center">
                      <input type="checkbox" required className="mr-2" />
                      <span className="text-sm">
                        Acepto los{" "}
                        <Link
                          href="#"
                          onClick={openModal}
                          className="terms-link text-blue-500"
                        >
                          términos y condiciones
                        </Link>
                      </span>
                    </label>
                  </div>
                  <div className="item">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact_right w-full md:w-1/2 pl-4 flex flex-col justify-end">
              <div className="my-4">
                <p
                  className="mb-4"
                  style={{ lineHeight: 1.8, color: "#666", fontSize: "18px" }}
                >
                  Si estás interesado en formar parte de un equipo joven y con
                  espíritu de trabajo, puedes enviarnos tu currículum y rellenar
                  el formulario de la derecha. Tu candidatura será valorado para
                  los puestos que puedan surgir próximamente.
                </p>
                <p
                  className="mb-4"
                  style={{ lineHeight: 1.8, color: "#666", fontSize: "18px" }}
                >
                  Asmatu es una empresa que colabora habitualmente con las
                  entidades de formación de los técnicos especializados. Por
                  tanto, si estás intereado en realizar las prácticas de
                  ingeniería con nosotros, puedes facilitarnos tu CV a través
                  del formulario de la derecha.
                </p>
              </div>
              <div className="fn_cs_location_list mt-auto">
                <ul className="list">
                  <li className="location_item">
                    <div className="item">
                      <div className="title_holder">
                        <span className="icon_wrapper">
                          <span className="icon">
                            <Location className="fn__svg" />
                          </span>
                          <span className="shape"></span>
                        </span>
                        <h3>Oficina Principal</h3>
                      </div>
                      <div className="content_holder">
                        <ul>
                          <li>
                            Parque Empresarial Zuatzu, Francisco Grandmontagne
                            nº 1, Edificio Zurriola, Planta 2ª - Local 7, 20018
                            DONOSTIA / SAN SEBASTIÁN
                          </li>
                          <li>Teléfono: 943 317 300</li>
                          <li>
                            Email:{" "}
                            <Link href="mailto:asmatu@asmatu.es">
                              asmatu@asmatu.es
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Add more locations if needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Terms and Conditions"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
        <p className="mb-4">
          De conformidad con lo establecido en la normativa vigente en
          Protección de Datos de Carácter Personal, por la presente le
          informamos que los datos personales obtenidos mediante este
          formulario, han sido incorporados en un fichero del cual es
          responsable <strong>ASMATU SL</strong>, con la finalidad de poder
          gestionar su participación en los procesos de selección de personal
          realizados por nuestra entidad.
        </p>
        <p className="mb-4">
          Le informamos que trataremos sus datos conforme a la existencia de su
          consentimiento.
        </p>
        <p className="mb-4">
          Puede ejercer sus derechos de acceso, rectificación, limitación de
          tratamiento, supresión, portabilidad y oposición al tratamiento en los
          términos establecidos en la Ley Orgánica 15/1999, mediante un escrito
          a la dirección: FCO. GRANDMONTAGNE 1-2º LOC.7 ED.ZURRIOLA POL.ZUATZU
          20018, DONOSTIA-SAN SEBASTIAN (GIPUZKOA).
        </p>
        <p className="mb-4">
          <strong>ASMATU SL</strong> se compromete a usar los datos recogidos
          mediante este formulario, únicamente para la finalidad anteriormente
          mencionada. Asimismo, en virtud de lo establecido en el artículo 21 de
          la Ley 34/2002 de servicios de la sociedad de la información y de
          comercio electrónico, solicitamos su consentimiento para enviarle
          publicidad de nuestros productos y/o servicios a la dirección e-mail
          que usted nos ha facilitado.
        </p>
        <p className="mb-4">
          Asimismo, le informamos que podrá revocar en cualquier momento el
          consentimiento prestado a la recepción de comunicaciones comerciales
          enviando un e-mail a la dirección de correo electrónico:
          asmatu@asmatu.es.
        </p>
        <p className="mb-4">
          El envío de este formulario implica la aceptación de las cláusulas
          expuestas.
        </p>
        <button
          onClick={closeModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Cerrar
        </button>
      </Modal>
    </Layout>
  );
};

export default Empresa;
