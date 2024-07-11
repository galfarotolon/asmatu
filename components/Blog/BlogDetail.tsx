import Sidebar from "@/layouts/sidebar";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  slug: string;
  img: string;
  description: string;
  listItems: string[];
  text: string[];
  quote: string;
  tags: string[];
}

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
  return (
    <>
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              {/* Single Blog */}
              <div className="industify_fn_blog_single">
                <div className="img_holder">
                  <Image src={blog.img} alt="" width={500} height={500} />
                </div>
                <div className="desc_holder">
                  <h5 className="text-3xl py-5">{blog.description}</h5>
                  <ul>
                    {blog.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  {blog.text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <blockquote className="my-10">{blog.quote}</blockquote>
                </div>
                <div className="industify_fn_tags">
                  <label>Etiquetas:</label>
                  {blog.tags.map((tag, index) => (
                    <Link href="#" key={index}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              {/* /Single Blog */}
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
};

export default BlogDetail;
