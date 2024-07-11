import blogs from "@/data/blog";
import BlogDetail from "@/components/Blog/BlogDetail";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params }: BlogPageProps) => {
  const blog = blogs.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return {
      title: "Blog No Encontrado - Asmatu Blogs",
    };
  }
  return {
    title: `${blog.title} - Asmatu Blogs`,
  };
};

async function getBlogData(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return notFound();
  }

  return (
    <Layout>
      <div className="px-4 md:px-5 lg:px-10 xl:px-20">
        <Breadcrumb firstChild={"Noticias"} SecondChild={blog.title} />
        <BlogDetail blog={blog} />
      </div>
    </Layout>
  );
}
