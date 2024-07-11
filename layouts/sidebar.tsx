import { FileDoc, FilePdf, FileZip } from "@/public/svg/icon";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="industify_fn_sidebar">
      <div className="industify_fn_sidebar_in">
        <div className="widget_block">
          <div className="industify_fn_widget_estimate">
            <div className="img_holder">
              <span className="helper1"></span>
              <span className="helper2"></span>
              <span className="helper3"></span>
              <span className="helper4"></span>
              <span className="helper5"></span>
              <span className="helper6"></span>
              <div
                className="abs_img"
                style={{ backgroundImage: "url(/img/widget/2.png)" }}
              ></div>
            </div>
            <div className="bfwe_inner">
              <p>
                ¡Empecemos! Contáctanos para una cotización gratuita en tu
                próximo proyecto de mejora del hogar.
              </p>
              <Link href="/contact">Solicitar una Cotización</Link>
            </div>
          </div>
        </div>

        <div className="widget_block widget_brochure">
          <div className="wid-title">
            <span>Informacion de Empresa</span>
          </div>
          <div className="industify_fn_widget_brochure">
            <div className="fn_brochures">
              <ul>
                <li>
                  <div className="br_item">
                    <Link href="#" download=""></Link>
                    <span className="icon">
                      <FilePdf className="fn__svg" />
                    </span>
                    <span className="text">Descargar .PDF</span>
                  </div>
                </li>
                <li>
                  <div className="br_item">
                    <Link href="#" download=""></Link>
                    <span className="icon">
                      <FileZip className="fn__svg" />
                    </span>
                    <span className="text">Descargar .ZIP</span>
                  </div>
                </li>
                <li>
                  <div className="br_item">
                    <Link href="#" download=""></Link>
                    <span className="icon">
                      <FileDoc className="fn__svg" />
                    </span>
                    <span className="text">Descargar .DOC</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="widget_block">
          <div className="industify_fn_widget_contact">
            <div className="wid-title">
              <span>Contacto</span>
            </div>
            <ul>
              <li>Parque Empresarial Zuatzu</li>
              <li>Francisco Grandmontagne nº 1</li>
              <li>Edificio Zurriola</li>
              <li>Planta 2ª - Local 7</li>
              <li>20018 DONOSTIA / SAN SEBASTIÁN</li>
              <li>Tel: 943 317 300</li>
              <li>Fax: 943 316 350</li>
              <li>
                Email:{" "}
                <Link href="mailto:asmatu@asmatu.es">asmatu@asmatu.es</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
