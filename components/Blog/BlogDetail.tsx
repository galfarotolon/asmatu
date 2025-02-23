// components/Blog/BlogDetail.tsx
import Sidebar from "@/layouts/sidebar";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Breadcrumb from "@/layouts/breadcrumb";
import { getBaseRoute, ROUTE_CODES } from "@/app/lib/routing";

interface BlogDetailProps {
  data: any; // blogPost data from Sanity
  lang: "es" | "eu";
}

export default async function BlogDetail({ data, lang }: BlogDetailProps) {
  // Since this is a server component, we can await the base route directly.
  const blogBaseRoute = await getBaseRoute(ROUTE_CODES.BLOG, lang);
  console.log("Blog base route:", blogBaseRoute);

  return (
    <>
      <Breadcrumb firstChild={blogBaseRoute} SecondChild={data.title[lang]} />
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              <div className="industify_fn_blog_single">
                <div className="img_holder">
                  <Image
                    src={data.mainImage?.asset?.url || ""}
                    alt={data.title[lang]}
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
                <div className="desc_holder">
                  <h1>{data.title[lang]}</h1>
                  <p>{data.description[lang]}</p>
                  <PortableText value={data.content[lang]} />
                  <ul>
                    {data.listItems?.map((item: any, index: number) => (
                      <li key={index}>{item[lang]}</li>
                    ))}
                  </ul>
                  <blockquote className="my-10">
                    {data.quote?.[lang]}
                  </blockquote>
                </div>
                <div className="industify_fn_tags">
                  <label>Etiquetas:</label>
                  {data.tags?.map((tag: any, index: number) => (
                    <Link href="#" key={index}>
                      {tag[lang]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* /Main Sidebar: Left */}
            {/* Main Sidebar: Right */}
            <div className="industify_fn_rightsidebar">
              <Sidebar />
            </div>
            {/* /Main Sidebar: Right */}
          </div>
        </div>
      </div>
    </>
  );
}
