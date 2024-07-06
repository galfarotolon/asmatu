import { Quotes } from "@/public/svg/icon";

const testimonial = "/img/testimonial/bg.jpg";

export default function HomeTetimonial() {
    return (
        <>
            <div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

                <div className="overlay"></div>

                {/* <!-- Single Testimonial Shortcode --> */}
                <div className="fn_cs_single_testimonial">
                    <div className="container">
                        <div className="inner">
                            <Quotes className="fn__svg" />
                            <div className="content_holder">
                                <p>Asmatu ha demostrado ser un socio invaluable en la construcción de nuestras nuevas instalaciones de 10,000 m². Su compromiso con la calidad y la atención al detalle ha superado nuestras expectativas. Hemos recibido numerosos elogios de nuestros clientes, y nuestro equipo está encantado con el nuevo espacio.</p>
                                <h3>Aitor Etxeberria</h3>
                                <h5>CEO de Eguzki Motors.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Single Testimonial Shortcode --> */}

            </div>
        </>
    );
}
