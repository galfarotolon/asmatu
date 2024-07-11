import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Principios y Valores",
};

const PrincipiosPage: React.FC = () => {
  return (
    <Layout>
      <div className="px-0 sm:px-20">
        <Breadcrumb firstChild="Principios y Valores" />
        <div className="industify_fn_principles">
          <div className="container">
            <div className="principles">
              <h2 style={{ marginBottom: "40px" }}>Valores</h2>
              <p>
                ASMATU es una empresa con unos valores plenamente arraigados en
                el día a día de la empresa y sus trabajadores y que aplicamos en
                cada uno de nuestros proyectos.
              </p>
              <p>
                Son la accesibilidad, la cercanía en el trato al cliente y el
                afán de servicio.
              </p>

              <h2 style={{ marginTop: "90px" }}>Principios de actuación</h2>
              <ul>
                <li>
                  <div
                    className="item flex  items-center"
                    id="Satisfacción del Cliente"
                  >
                    <div className="item_left ">
                      <h2>01.</h2>
                      <h3>Satisfacción del Cliente</h3>
                    </div>
                    <div className="item_right ">
                      <p>
                        Conseguir la satisfacción de los clientes, adaptándose a
                        sus necesidades y proponiendo mejoras ambientales
                        adecuadas a cada proyecto y realizando una labor de
                        colaboración e implicación continua con el cliente en
                        todas y cada una de las fases de desarrollo de los
                        trabajos.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="item flex  items-center"
                    id="Cumplimiento Legal"
                  >
                    <div className="item_left">
                      <h2>02.</h2>
                      <h3>Cumplimiento Legal</h3>
                    </div>
                    <div className="item_right">
                      <p>
                        Observar el cumplimiento de los requisitos legales
                        aplicables, y de otros requisitos suscritos por la
                        organización.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item flex  items-center" id="Mejora Continua">
                    <div className="item_left">
                      <h2>03.</h2>
                      <h3>Mejora Continua</h3>
                    </div>
                    <div className="item_right">
                      <p>
                        Buscar una mejora continua del desempeño ambiental de
                        los proyectos así como la prevención de la contaminación
                        durante todo el ciclo de vida del proyecto.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="item flex  items-center"
                    id="Participación y Formación"
                  >
                    <div className="item_left">
                      <h2>04.</h2>
                      <h3>Participación y Formación</h3>
                    </div>
                    <div className="item_right">
                      <p>
                        Garantizar el nivel de participación, formación,
                        motivación y los medios técnicos necesarios para la
                        eficiente realización de sus actividades, potenciando el
                        desarrollo humano y profesional de todos ellos.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="item flex  items-center"
                    id="Compromiso de Mejora"
                  >
                    <div className="item_left">
                      <h2>05.</h2>
                      <h3>Compromiso de Mejora</h3>
                    </div>
                    <div className="item_right">
                      <p>
                        Compromiso de mejora continua de los proyectos,
                        eco-diseñados, y su desempeño ambiental desde el diseño
                        y desarrollo, a partir del conocimiento de los aspectos
                        ambientales de sus ciclos de vida (materiales,
                        soluciones constructivas, fin de vida…) sin trasladar
                        impactos ambientales de una etapa del ciclo de vida a
                        otra, a menos que tenga una reducción neta de los
                        impactos ambientales negativos a lo largo del ciclo de
                        vida del proyecto.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrincipiosPage;
