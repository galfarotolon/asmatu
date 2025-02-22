// components/Services/ServicesLanding.tsx
import { getBaseRoute, ROUTE_CODES } from "@/app/lib/routing";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";
import Sidebar from "@/layouts/sidebar";
import Link from "next/link";

interface ServiceItem {
  _id: string;
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
  summary: { es: string; eu: string };
  image: { asset: { url: string } };
}

interface ServicesLandingProps {
  data: {
    headerTitle: { es: string; eu: string };
    introText: { es: string; eu: string };
    linkLabel: { es: string; eu: string };
    services?: ServiceItem[];
  };
  lang: "es" | "eu";
}

export const metadata = {
  title: "Servicios",
};

export default async function ServicesLanding({
  data,
  lang,
}: ServicesLandingProps) {
  // Await getBaseRoute so that we have a string.
  const servicesBaseRoute = await getBaseRoute(ROUTE_CODES.SERVICES, lang);
  return (
    <Layout>
      <Breadcrumb firstChild={data.headerTitle?.[lang] || "Servicios"} />
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              <ul className="industify_fn_service_list">
                {data.services?.map((service) => (
                  <li key={service._id}>
                    <div className="item">
                      <div className="item_in">
                        <div className="img_holder">
                          <div
                            className="img_abs"
                            style={{
                              backgroundImage: `url(${service.image.asset.url})`,
                            }}
                          ></div>
                          <Link
                            href={`/${lang}/${servicesBaseRoute}/${service.slug[lang].current}`}
                          >
                            <span className="sr-only">Ver servicio</span>
                          </Link>
                        </div>
                        <div className="title">
                          <h3>
                            <Link
                              href={`/${lang}/${servicesBaseRoute}/${service.slug[lang].current}`}
                            >
                              {service.title[lang]}
                            </Link>
                          </h3>
                          <p>{service.summary[lang]}</p>
                        </div>
                        <div className="read_more">
                          <Link
                            href={`/${lang}/${servicesBaseRoute}/${service.slug[lang].current}`}
                          >
                            {data.linkLabel?.[lang] || "Leer más"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Main Sidebar: Left */}

            {/* Main Sidebar: Right */}
            <div className="industify_fn_rightsidebar">
              <div className="service_list_as_function">
                <div className="title">
                  <h3>Lista Completa de Servicios</h3>
                </div>
                <div className="list_holder">
                  <ul>
                    {data.services?.map((service) => (
                      <li key={service._id}>
                        <Link
                          href={`/${lang}/${servicesBaseRoute}/${service.slug[lang].current}`}
                        >
                          {service.title[lang]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Sidebar />
            </div>
            {/* Main Sidebar: Right */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
