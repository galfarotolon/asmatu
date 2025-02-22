"use client";
import { FC } from "react";
import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PortableText } from "@portabletext/react"; // Import PortableText
import services, { Service } from "@/data/services"; // for sidebar list
import Breadcrumb from "@/layouts/breadcrumb";

interface ServiceProps {
  data: Service;
  lang: "es" | "eu";
}

const ServicesSingle1: FC<ServiceProps> = ({ data, lang }) => {
  console.log("service data", data);

  return (
    <>
      <Breadcrumb
        firstChild={lang === "es" ? "Servicios" : "Zerbitzuak"}
        SecondChild={data.title[lang]}
      />
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              {/* Single Service */}
              <div className="industify_fn_service_single">
                <div className="img_holder">
                  <Image
                    src={data.image?.asset?.url || ""}
                    alt={data.title?.[lang] || "Service"}
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                </div>
                <div className="desc_holder">
                  {/* Render blockContent using PortableText */}
                  <PortableText value={data.description?.[lang]} />
                </div>
                {/* Check List Shortcode */}
                <div className="fn_cs_check_list">
                  <h3>Características del Servicio</h3>
                  <div className="list">
                    <ul>
                      {data.features.map((feature, index) => (
                        <li key={index}>
                          <div className="item">
                            <Check className="fn__svg" />
                            <p>{feature?.[lang]}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                      <li key={index}>
                        <Link
                          href={`/${lang}/${serviceItem.slugEs ? serviceItem.slugEs : serviceItem.slugEu}`}
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
            {/* /Main Sidebar: Right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSingle1;
