"use client";
import { FC, useEffect, useState } from "react";
import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PortableText } from "@portabletext/react"; // Import PortableText
import services, { Service } from "@/data/services"; // for sidebar list
import Breadcrumb from "@/layouts/breadcrumb";
import { getBaseRoute, ROUTE_CODES } from "@/app/lib/routing";
import { TypedObject } from "sanity";
import ServicesSidebar from "./ServicesSidebar";

interface ServiceProps {
  data: Service;
  lang: any;
}

const useBaseRoute = (code: string, lang: "es" | "eu") => {
  const [base, setBase] = useState<string>("");
  useEffect(() => {
    getBaseRoute(code, lang).then((route) => setBase(route));
  }, [code, lang]);
  return base;
};

const ServicesSingle1: FC<ServiceProps> = ({ data, lang }) => {
  const contactBaseRoute = useBaseRoute(ROUTE_CODES.CONTACT, lang);
  const servicesBaseRoute = useBaseRoute(ROUTE_CODES.SERVICES, lang);

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
                    //@ts-ignore
                    src={data.image?.asset?.url || ""}
                    alt={data.title?.[lang] || "Service"}
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                </div>
                <div className="desc_holder">
                  {/* Render blockContent using PortableText */}
                  <PortableText
                    value={
                      data.description?.[lang] as unknown as
                        | TypedObject
                        | TypedObject[]
                    }
                  />
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
                        <Link href={`/${lang}/${contactBaseRoute}`}>
                          Contactanos
                        </Link>
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
              <ServicesSidebar lang={lang} />
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
