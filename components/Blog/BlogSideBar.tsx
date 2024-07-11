import Sidebar from "@/layouts/sidebar";
import Link from "next/link";
import blogs from "@/data/blog"; // Ensure you have a blogs data file with the necessary structure

export default function BlogSidebar() {
  return (
    <>
      <div className="industify_fn_sidebarpage ">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              <ul className="industify_fn_postlist">
                {blogs.map((blog) => (
                  <li key={blog.id}>
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
                        <Link href={`/noticias/${blog.slug}`}>
                          <img src={blog.img} alt={blog.title} />
                        </Link>
                        <span className="shape1"></span>
                        <span className="shape2"></span>
                      </div>
                      <div className="content_holder">
                        <div className="info_holder">
                          <p>
                            <span className="t_author">
                              By{" "}
                              <Link
                                href={blog.authorUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {blog.author}
                              </Link>
                            </span>
                            <span className="t_category">
                              In {blog.category}
                            </span>
                          </p>
                        </div>
                        <div className="title">
                          <h3>
                            <Link href={`/noticias/${blog.slug}`}>
                              {blog.title}
                            </Link>
                          </h3>
                        </div>
                        <div className="excerpt_holder">
                          <p>{blog.description}</p>
                        </div>
                        <div className="read_holder">
                          <p>
                            <Link href={`/noticias/${blog.slug}`}>
                              Leer Más
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="clearfix"></div>
              {/* <div className="industify_fn_pagination">
                <ul>
                  <li className="active">
                    <span className="current">1</span>
                  </li>
                  <li>
                    <Link href="#">2</Link>
                  </li>
                  <li className="view">
                    <p>Viendo página 1 de 2</p>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* /Main Sidebar: Left */}
            {/* Main Sidebar: Right */}
            <div className="industify_fn_rightsidebar">
              {/* Get Sidebar */}
              <Sidebar />
              {/* /Get Sidebar */}
            </div>
            {/* /Main Sidebar: Right */}
          </div>
        </div>
      </div>
    </>
  );
}
