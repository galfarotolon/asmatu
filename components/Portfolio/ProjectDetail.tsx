// components/Portfolio/ProjectDetail.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Sidebar from "@/layouts/sidebar";
import Breadcrumb from "@/layouts/breadcrumb";

interface CategoryRef {
  _id: string;
  name: { es: string; eu: string };
}

interface Project {
  _id: string;
  // Assuming each project references one (or more) categories. Here we use the first category for display.
  category: CategoryRef;
  img: { asset: { url: string } };
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
  description: { es: any; eu: any }; // blockContent
  detailedInfo: { es: any; eu: any }; // blockContent
  quote: { es: string; eu: string };
  value: { es: string; eu: string };
  client: { es: string; eu: string };
  architect: { es: string; eu: string };
  location: { es: string; eu: string };
  completionDate: { es: string; eu: string };
  squareFootage: { es: string; eu: string };
}

interface ProjectDetailProps {
  data: Project;
  lang: "es" | "eu";
  baseRoute: string;
}

export default function ProjectDetail({
  data,
  lang,
  baseRoute,
}: ProjectDetailProps) {
  // Compute the base route. For now, we assume that the base route is static.
  // You might get this value from your server logic; here we'll hardcode it:
  const projectBaseRoute = lang === "es" ? "proyectos" : "proiektuak";
  const slug = data.slug[lang].current;
  const categoryName = data.category?.name
    ? data.category.name[lang]
    : "Uncategorized";

  return (
    <>
      <Breadcrumb firstChild={baseRoute} SecondChild={data.title[lang]} />
      <div className="industify_fn_psingle_content">
        <div className="container flex flex-col items-left">
          <div className="w-full mb-10 relative h-[400px] md:h-[600px]">
            <Image
              src={data.img.asset.url}
              alt={data.title[lang]}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="content_in">
            <div className="flex-col">
              <div className="content_part">
                <h3 className="text-2xl font-bold mb-4">{data.title[lang]}</h3>
                <div className="py-10 text-xl">
                  <PortableText value={data.description[lang]} />
                </div>
                <div className="py-10">
                  <PortableText value={data.detailedInfo[lang]} />
                </div>
                <blockquote>{data.quote[lang]}</blockquote>
                <div className="share_box">
                  <div className="industify_fn_share_icons">
                    <label>Share:</label>
                    <ul>
                      <li>
                        <Link
                          href={`http://www.facebook.com/sharer.php?u=https://example.com/${projectBaseRoute}/${slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`https://twitter.com/share?url=https://example.com/${projectBaseRoute}/${slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`https://plus.google.com/share?url=https://example.com/${projectBaseRoute}/${slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-gplus"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`http://pinterest.com/pin/create/button/?url=https://example.com/${projectBaseRoute}/${slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-pinterest"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`https://www.vk.com/sharer.php?url=https://example.com/${projectBaseRoute}/${slug}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="xcon-vkontakte"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="helpful_part">
              <div className="hp_inner">
                <ul>
                  <li>
                    <p>Category</p>
                    <span>{categoryName}</span>
                  </li>
                  <li>
                    <p>Value</p>
                    <span>{data.value[lang]}</span>
                  </li>
                  <li>
                    <p>Client</p>
                    <span>{data.client[lang]}</span>
                  </li>
                  <li>
                    <p>Architect</p>
                    <span>{data.architect[lang]}</span>
                  </li>
                  <li>
                    <p>Location</p>
                    <span>{data.location[lang]}</span>
                  </li>
                  <li>
                    <p>Completion Date</p>
                    <span>{data.completionDate[lang]}</span>
                  </li>
                  <li>
                    <p>Square Footage</p>
                    <span>{data.squareFootage[lang]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
