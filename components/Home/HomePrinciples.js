import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

export default function HomePrinciples() {
    return (
        <>
            <div className="fn_cs_principles_modern">
                <div className="container">
                    <div className="inner">
                        <div className="shape"><span className="shape1"></span><span className="shape2"></span></div>
                        <ul className="fn_cs_miniboxes">
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/principles#Honesty"></Link>
                                        <h3>Honestidad</h3>
                                        <p>Ser humilde en todos los tratos con nuestros socios, clientes y miembros del equipo. La verdadera sabiduría y comprensión pertenecen a los humildes.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">01</div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/principles#Passion"></Link>
                                        <h3>Pasión</h3>
                                        <p>El éxito es cuando podemos lograr resultados en las cosas que nos apasionan y sentimos que estamos haciendo una diferencia.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">02</div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/principles#Quality"></Link>
                                        <h3>Trabajo de Calidad</h3>
                                        <p>Nos aseguramos de que todos los proyectos se realicen con la máxima profesionalidad utilizando materiales de calidad, mientras ofrecemos a los clientes el soporte y la accesibilidad necesarios.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">03</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
