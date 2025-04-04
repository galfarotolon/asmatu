import Link from "next/link";
import Sidebar from "@/layouts/sidebar";
import { FC } from "react";

interface BlogPostItem {
  location: React.ReactNode | Iterable<React.ReactNode>;
  _id: string;
  date: string;
  mainImage?: { asset: { url: string } };
  title: { es: string; eu: string };
  slug: { es?: { current: string }; eu?: { current: string } };
  description: { es: string; eu: string };
  author: string;
  authorUrl: string;
  category: string;
}

interface BlogLandingData {
  headerTitle: { es: string; eu: string };
  introText: { es: string; eu: string } | null;
  linkLabel: { es: string; eu: string };
  featuredPosts: BlogPostItem[];
}

interface BlogSideBarProps {
  data: BlogLandingData;
  lang: "es" | "eu";
  blogBaseRoute: string;
}

const BlogSideBar: FC<BlogSideBarProps> = ({ data, lang, blogBaseRoute }) => {
  return (
    <div className="industify_fn_sidebarpage">
      <div className="container">
        <div className="s_inner">
          {/* Main Sidebar: Left */}
          <div className="industify_fn_leftsidebar">
            <ul className="industify_fn_postlist">
              {data?.featuredPosts?.map((blog) => {
                // Safely retrieve the final slug value
                const finalSlug = blog?.slug?.[lang]?.current;
                // Build href using fallback values if necessary
                const href = `/${lang}/${blogBaseRoute}/${finalSlug || ""}`;
                return (
                  <li key={blog._id}>
                    <div className="post has-post-thumbnail">
                      <div className="time">
                        <span></span>
                        <h3>{new Date(blog.date).getDate()}</h3>
                        <h5>
                          {new Date(blog.date).toLocaleString("default", {
                            month: "short",
                          })}
                        </h5>
                        <h5>{new Date(blog.date).getFullYear()}</h5>
                      </div>
                      <div className="img_holder">
                        <Link href={href}>
                          <img
                            src={blog.mainImage?.asset?.url || ""}
                            alt={blog.title[lang]}
                          />
                        </Link>
                        <span className="shape1"></span>
                        <span className="shape2"></span>
                      </div>
                      <div className="content_holder">
                        <div className="info_holder">
                          <p>
                            <span className="t_author">
                              Por{" "}
                              <Link href={`/`} target="_blank" rel="noreferrer">
                                {blog?.author}
                              </Link>
                            </span>
                            <span className="t_category">
                              En {blog?.location}
                            </span>
                          </p>
                        </div>
                        <div className="title">
                          <h3>
                            <Link href={href}>{blog.title[lang]}</Link>
                          </h3>
                        </div>
                        <div className="excerpt_holder">
                          <p>{blog.description[lang]}</p>
                        </div>
                        <div className="read_holder">
                          <p>
                            <Link href={href}>
                              {data.linkLabel?.[lang] || "Leer Más"}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="clearfix"></div>
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
  );
};

export default BlogSideBar;
