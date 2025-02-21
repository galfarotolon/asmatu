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
  location: string;
}

export interface BlogSectionData {
  sectionData: {
    title: { es: string; eu: string };
    leadText: { es: string; eu: string };
  };
  featuredBlogs: BlogPostRef[];
}

export interface NavigationData {
  menuItems: Array<{
    _key: string;
    key?: string; // The stable internal key, e.g. "blog"
    title: { es: string; eu: string };
    es: { current: string };
    eu: { current: string };
    // ... potentially submenu items
  }>;
}

interface HomeBlogProps {
  blogSection: BlogSectionData;
  baseBlogPath: string;
}

export default function HomeBlog({ blogSection, baseBlogPath }: HomeBlogProps) {
  const { language } = useLanguage();

  // Destructure blogSection safely
  const { sectionData, featuredBlogs = [] } = blogSection || {
    sectionData: { title: { es: "", eu: "" }, leadText: { es: "", eu: "" } },
    featuredBlogs: [],
  };
  console.log(featuredBlogs);

  // Use the routing helper to get the blog base route from navigation.

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
                const postSlug = blog.slug[language].current;
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
                          <span></span>
                          <h3>{new Date(blog.date).getDate()}</h3>
                          <h5>
                            {new Date(blog.date).toLocaleString(language, {
                              month: "short",
                            })}
                          </h5>
                          <h5>{new Date(blog.date).getFullYear()}</h5>
                        </div>
                        <Link
                          href={`/${language}/${baseBlogPath}/${postSlug}`}
                        ></Link>
                        <img src="/img/thumb/370-250.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <p className="t_header">
                          Por <Link href="#">{blog.author}</Link> — En{" "}
                          <Link href="#">{blog.location}</Link>
                        </p>
                        <h3>
                          <Link
                            href={`/${language}/${baseBlogPath}/${postSlug}`}
                          >
                            {blog.title[language]}
                          </Link>
                        </h3>
                        <p className="t_footer">
                          <Link
                            href={`/${language}/${baseBlogPath}/${postSlug}`}
                          >
                            Leer Más
                          </Link>
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
