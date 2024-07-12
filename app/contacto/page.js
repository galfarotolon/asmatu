import Breadcrumb from '@/layouts/breadcrumb';
import Layout from '@/layouts/layout';
import { Location } from '@/public/svg/icon';
import Link from 'next/link';

export const metadata = {
    title: 'Contacto',
};

export default function page() {
    return (
        <Layout>
            <Breadcrumb firstChild={'Contacto'} />
            <div className="industify_fn_contact">
                <div className="container">
                    <div className="contact_in">
                        <div className="map_holder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.7807108617067!2d-2.0062973!3d43.297913799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b013666616c9%3A0x15637a2854f6e7cb!2sFrancisco%20Grandmontagne%20Kalea%2C%201%2C%2020018%20Donostia%2C%20Gipuzkoa%2C%20Spain!5e0!3m2!1sen!2spe!4v1720806943837!5m2!1sen!2spe"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="contact_holder">
                            <div className="contact_left">
                                <h3>Ponte en contacto con nosotros</h3>
                                <form className="contact_form" action="/" method="post" autoComplete="off" data-email="frenifyteam@gmail.com">
                                    <div className="success" data-success="Tu mensaje ha sido recibido, nos pondremos en contacto contigo pronto."></div>
                                    <div className="empty_notice"><span>Por favor, rellena los campos requeridos</span></div>
                                    <div className="items">
                                        <div className="item">
                                            <input id="name" type="text" placeholder="Nombre" />
                                        </div>
                                        <div className="item">
                                            <input id="email" type="email" placeholder="Email" />
                                        </div>
                                        <div className="item">
                                            <textarea id="message" placeholder="Mensaje"></textarea>
                                        </div>
                                        <div className="item">
                                            <Link href="#" id="send_message">Enviar Mensaje</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact_right">
                                <div className="fn_cs_location_list">
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
                                                        <li>Parque Empresarial Zuatzu, Francisco Grandmontagne nº 1, Edificio Zurriola, Planta 2ª - Local 7, 20018 DONOSTIA / SAN SEBASTIÁN</li>
                                                        <li>Teléfono: 943 317 300</li>
                                                        <li>Email: <Link href="mailto:asmatu@asmatu.es">asmatu@asmatu.es</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
