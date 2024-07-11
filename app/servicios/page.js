import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";
import Sidebar from "@/layouts/sidebar";
import Link from "next/link";
import services from "@/data/services";

export const metadata = {
    title: "Servicios",
};

export default function ServicesPage() {
    return (
        <Layout>
            <Breadcrumb firstChild={"Servicios"} />
            <div className="industify_fn_sidebarpage">
                <div className="container">
                    <div className="s_inner">
                        {/* Main Sidebar: Left */}
                        <div className="industify_fn_leftsidebar">
                            <ul className="industify_fn_service_list">
                                {services.map((service) => (
                                    <li key={service.id}>
                                        <div className="item">
                                            <div className="item_in">
                                                <div className="img_holder">
                                                    <div className="img_abs" style={{ backgroundImage: `url(${service.image})` }}></div>
                                                    <Link href={`/servicios/${service.slugEs}`} />
                                                </div>
                                                <div className="title">
                                                    <h3>
                                                        <Link href={`/servicios/${service.slugEs}`}>
                                                            {service.title}
                                                        </Link>
                                                    </h3>
                                                    <p>{service.summary}</p>
                                                </div>
                                                <div className="read_more">
                                                    <Link href={`/servicios/${service.slugEs}`}>Leer más</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>



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
                                        {services.map((service) => (
                                            <li key={service.id}>
                                                <Link href={`/servicios/${service.slugEs}`}>
                                                    {service.title}
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
        </Layout>
    );
}
