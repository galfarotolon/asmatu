// /components/Home/HomeBlog.tsx
"use client";

import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { useLanguage } from "@/context/LanguageContext";

export interface BlogPostRef {
  _id: string;
  title: { es: string; eu: string };
  slug: { es: { current: string }; eu: { current: string } };
  mainImage: { asset: { url: string } };
  date: string;
  author: string;
}

export interface BlogSectionData {
  sectionData: {
    title: { es: string; eu: string };
    leadText: { es: string; eu: string };
  };
  featuredBlogs: BlogPostRef[];
}

interface HomeBlogProps {
  blogSection: BlogSectionData;
}

export default function HomeBlog({ blogSection }: HomeBlogProps) {
  const { language } = useLanguage(); // e.g., "es" or "eu"
  const { sectionData, featuredBlogs } = blogSection;
  const base = "blog"; // Adjust if needed for language

  console.log(blogSection);

  return (
    <div className="blog_section">
      <div
        className="overlay"
        style={{ backgroundImage: `url(/img/blog/map.png)` }}
      ></div>
      <div className="fn_cs_main_title">
        <div className="container">
          <div className="title_holder">
            <h3>{sectionData.title[language]}</h3>
          </div>
        </div>
      </div>
      <div className="fn_cs_triple_blog_modern fn_alpha">
        <div className="container">
          <div className="inner">
            <ul>
              {featuredBlogs.map((blog) => {
                const slug =
                  language === "es"
                    ? blog.slug.es.current
                    : blog.slug.eu.current;
                return (
                  <li key={blog._id}>
                    <div className="item">
                      <div
                        className="img_holder"
                        style={{
                          backgroundImage: `url(${blog.mainImage.asset.url})`,
                        }}
                      >
                        <div className="time">
                          {/* Example: extract date parts as needed */}
                          <span></span>
                          <h3>{new Date(blog.date).getDate()}</h3>
                          <h5>
                            {new Date(blog.date).toLocaleString(language, {
                              month: "short",
                            })}
                          </h5>
                          <h5>{new Date(blog.date).getFullYear()}</h5>
                        </div>
                        <Link href={`/blog/${slug}`}></Link>
                        <img src="/img/thumb/370-250.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <p className="t_header">
                          Por{" "}
                          <Link href="#">
                            {/* Static or dynamic author */}
                            {blog.author}
                          </Link>{" "}
                          — En{" "}
                          <Link href="#">
                            {/* Static or dynamic location */}España
                          </Link>
                        </p>
                        <h3>
                          <Link href={`/blog/${slug}`}>
                            {blog.title[language]}
                          </Link>
                        </h3>
                        <p className="t_footer">
                          <Link href={`/blog/${slug}`}>Leer Más</Link>
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
