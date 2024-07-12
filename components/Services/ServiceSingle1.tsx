"use client";
import { FC } from "react";
import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";
import services, { Service } from "@/data/services";
import Image from "next/image";
import { usePathname } from "next/navigation";
interface ServiceProps {
  service: Service;
  lang: string;
}

const ServicesSingle1: FC<ServiceProps> = ({ service, lang }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              {/* Single Service */}
              <div className="industify_fn_service_single">
                <div className="img_holder">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                </div>
                <div className="desc_holder">
                  <p>{service.description}</p>
                </div>
                {/* Check List Shortcode */}
                <div className="fn_cs_check_list">
                  <h3>Características del Servicio</h3>
                  <div className="list">
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>{feature}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* /Check List Shortcode */}
                {/* Call to Action Shortcode (with corner) */}
                <div className="fn_cs_call_to_action corner">
                  <div className="container">
                    <div className="cta_holder">
                      <div className="title_holder">
                        <h3>Asmatu</h3>
                        <p>Contáctenos para obtener información detallada.</p>
                      </div>
                      <div className="link_holder">
                        <Link href="/contacto">Contactanos</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Call to Action Shortcode (with corner) */}
              </div>
              {/* /Single Service */}
            </div>
            {/* /Main Sidebar: Left */}
            {/* Main Sidebar: Right */}
            <div className="industify_fn_rightsidebar">
              {/* Service List */}
              <div className="service_list_as_function">
                <div className="title">
                  <h3>Lista Completa de Servicios</h3>
                </div>
                <div className="list_holder">
                  <ul>
                    {services.map((serviceItem, index) => (
                      <li
                        key={index}
                        className={
                          pathname ===
                          `/${lang === "es" ? "servicios" : "zerbitzuak"}/${
                            lang === "es"
                              ? serviceItem.slugEs
                              : serviceItem.slugEu
                          }`
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          href={`/${
                            lang === "es" ? "servicios" : "zerbitzuak"
                          }/${
                            lang === "es"
                              ? serviceItem.slugEs
                              : serviceItem.slugEu
                          }`}
                        >
                          {serviceItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* /Service List */}
              {/* Get Sidebar */}
              <Sidebar />
              {/* /Get Sidebar */}
            </div>
            {/* Main Sidebar: Right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSingle1;
