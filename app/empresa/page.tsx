import Layout from "@/layouts/layout";
import Breadcrumb from "@/layouts/breadcrumb";
import Image from "next/image";

const Empresa = () => {
  return (
    <Layout>
      <Breadcrumb firstChild="Empresa" />
      <div className="empresa_page py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Sobre Nosotros</h1>
          <div className="empresa_content flex flex-wrap">
            <div className="text_content w-full md:w-1/2 pr-4">
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
            <div className="image_content w-full md:w-1/2 pl-4">
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
    </Layout>
  );
};

export default Empresa;
