// components/Home/HomePrinciples.tsx
import { PrincipleItem } from "@/sanity/lib/sanity-utils";
import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

interface HomePrinciplesProps {
  data: PrincipleItem[];
  locale: "es" | "eu";
}

export default function HomePrinciples({ data, locale }: HomePrinciplesProps) {
  console.log("principios", data);
  return (
    <div className="fn_cs_principles_modern">
      <div className="container">
        <div className="inner">
          <div className="shape">
            <span className="shape1"></span>
            <span className="shape2"></span>
          </div>
          <ul className="fn_cs_miniboxes">
            {data.map((principle, index) => (
              <li key={index}>
                <div className="item">
                  <div className="title_holder">
                    <Link href={`/${principle.slug[locale]}`}> </Link>
                    <h3>{principle.title[locale]}</h3>
                    <p>{principle.description[locale]}</p>
                    <span className="icon">
                      <Arrow_r className="fn__svg" />
                    </span>
                  </div>
                  <div className="number_holder">
                    {principle.number.toString().padStart(2, "0")}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
