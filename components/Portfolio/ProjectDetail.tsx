"use client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Breadcrumb from "@/layouts/breadcrumb";

interface CategoryRef {
  _id: string;
  name: { es: string; eu: string };
}

interface MediaBlock {
  mediaType: string;
  image?: { asset: { url: string } };
  altText?: string;
  videoFile?: { asset: { url: string } };
  description?: { es: string; eu: string };
}

interface Project {
  _id: string;
  categories: CategoryRef[];
  img: { asset: { url: string } };
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
  description: { es: any; eu: any };
  detailedInfo: { es: any; eu: any };
  quote: { es: string; eu: string };
  value: { es: string; eu: string };
  client: { es: string; eu: string };
  architect: { es: string; eu: string };
  location: { es: string; eu: string };
  completionDate: { es: string; eu: string };
  squareFootage: { es: string; eu: string };
  media?: MediaBlock[];
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
  const projectBaseRoute = lang === "es" ? "proyectos" : "proiektuak";
  const slug = data.slug[lang].current;
  const firstCategory = data.categories?.[0];
  const categoryName =
    firstCategory?.name?.[lang] ||
    (lang === "es" ? "Sin Categoría" : "Kategori gabe");

  return (
    <>
      <Breadcrumb firstChild={baseRoute} SecondChild={data.title[lang]} />
      <div className="industify_fn_psingle_content">
        <div className="container flex flex-col items-left">
          {/* Main Image */}
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
                    <label>{lang === "es" ? "Compartir:" : "Partekatu:"}</label>
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
                      {/* Add additional share links if needed */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="helpful_part">
              <div className="hp_inner">
                <ul>
                  {data.categories && data.categories.length > 0 && (
                    <li>
                      <p>{lang === "es" ? "Categoría" : "Kategori"}</p>
                      <span>{categoryName}</span>
                    </li>
                  )}
                  {data.value?.[lang] && (
                    <li>
                      <p>{lang === "es" ? "Valor" : "Balioa"}</p>
                      <span>{data.value[lang]}</span>
                    </li>
                  )}
                  {data.client?.[lang] && (
                    <li>
                      <p>{lang === "es" ? "Cliente" : "Bezeroa"}</p>
                      <span>{data.client[lang]}</span>
                    </li>
                  )}
                  {data.architect?.[lang] && (
                    <li>
                      <p>{lang === "es" ? "Arquitecto" : "Arkitektoa"}</p>
                      <span>{data.architect[lang]}</span>
                    </li>
                  )}
                  {data.location?.[lang] && (
                    <li>
                      <p>{lang === "es" ? "Ubicación" : "Kokapena"}</p>
                      <span>{data.location[lang]}</span>
                    </li>
                  )}
                  {data.completionDate?.[lang] && (
                    <li>
                      <p>
                        {lang === "es"
                          ? "Fecha de Finalización"
                          : "Amaierako Data"}
                      </p>
                      <span>{data.completionDate[lang]}</span>
                    </li>
                  )}
                  {data.squareFootage?.[lang] && (
                    <li>
                      <p>
                        {lang === "es" ? "Superficie (m²)" : "Azalera (m²)"}
                      </p>
                      <span>{data.squareFootage[lang]}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* Media block – keep it exactly below the helpful part */}
          {data.media && data.media.length > 0 && (
            <div className="project-media">
              {data.media.map((item, idx) => {
                if (item.mediaType === "image" && item.image) {
                  return (
                    <div key={idx} className="project-media-item my-10">
                      <Image
                        src={item.image.asset.url}
                        alt={item.altText || data.title[lang]}
                        layout="responsive"
                        width={1200}
                        height={800}
                        className="rounded-lg"
                      />
                      {item.description && item.description[lang] && (
                        <p className="mt-4 text-center">
                          {item.description[lang]}
                        </p>
                      )}
                    </div>
                  );
                } else if (item.mediaType === "video" && item.videoFile) {
                  return (
                    <div key={idx} className="project-media-item my-10">
                      <video controls width="100%">
                        <source
                          src={item.videoFile.asset.url}
                          type="video/mp4"
                        />
                        {lang === "es"
                          ? "Tu navegador no soporta el video."
                          : "Zure nabigatzaileak bideoa ez du onartzen."}
                      </video>
                      {item.description && item.description[lang] && (
                        <p className="mt-4 text-center">
                          {item.description[lang]}
                        </p>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
