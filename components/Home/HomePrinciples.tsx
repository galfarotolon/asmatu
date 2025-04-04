"use client";
import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Principle {
  title: { es: string; eu: string };
  anchor: { es: string; eu: string };
  description: { es: string; eu: string };
  number: string;
  slug: any; // your slug object
}

interface HomePrinciplesProps {
  principles: Principle[];
}

export default function HomePrinciples({ principles }: HomePrinciplesProps) {
  const { language } = useLanguage();

  //change to true when links are fixed for principles
  const showLink = false;

  return (
    <div className="fn_cs_principles_modern">
      <div className="container">
        <div className="inner">
          <div className="shape">
            <span className="shape1"></span>
            <span className="shape2"></span>
          </div>
          <ul className="fn_cs_miniboxes">
            {principles?.map((item, index) => (
              <li key={index}>
                <div className="item">
                  <div className="title_holder">
                    {showLink && (
                      <Link
                        href={`/principles#${language === "es" ? item.anchor.es : item.anchor.eu}`}
                      ></Link>
                    )}

                    <h3>{language === "es" ? item.title.es : item.title.eu}</h3>
                    <p>
                      {language === "es"
                        ? item.description.es
                        : item.description.eu}
                    </p>
                    <span className="icon">
                      {showLink && <Arrow_r className="fn__svg" />}
                    </span>
                  </div>
                  <div className="number_holder">{item.number}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
