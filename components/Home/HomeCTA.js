import Link from 'next/link';
import React from 'react';

export default function HomeCTA() {
    return (
        <>
            <div className="fn_cs_call_to_action">
                <div className="container">
                    <div className="cta_holder">
                        <div className="title_holder">
                            <h3>Trabaja con nosotros</h3>
                            <p>Nos enfocamos en un negocio sostenible que ofrece los mejores resultados posibles en los proyectos.</p>
                        </div>
                        <div className="link_holder">
                            <Link href="/contact">Contactanos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
