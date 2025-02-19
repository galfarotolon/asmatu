"use client";
import Link from "next/link";

interface BreadcrumbProps {
  firstChild: string;
  SecondChild?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ firstChild, SecondChild }) => {
  const href = firstChild.toLowerCase();

  firstChild =
    firstChild.split("")[0].toUpperCase() +
    firstChild.slice(1, firstChild.length);

  firstChild.split("")[0].toUpperCase() + firstChild.slice(1);
  return (
    <div className="industify_fn_pagetitle">
      <div className="container">
        <div className="title_holder">
          <h3>{SecondChild ? SecondChild : firstChild}</h3>
          <div className="industify_fn_breadcrumbs">
            <ul>
              <li>
                <Link href="/" title="Inicio">
                  Inicio
                </Link>
              </li>
              <li className="separator">
                <span></span>
              </li>
              <li>
                <Link href={`/${href}`} title={firstChild}>
                  {firstChild}
                </Link>
              </li>
              {SecondChild && (
                <>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <span className="bread-current">{SecondChild}</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
