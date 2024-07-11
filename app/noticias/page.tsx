import BlogSideBar from "@/components/Blog/BlogSideBar";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Noticias",
};

export default function page() {
  return (
    <Layout>
      <div className="px-0 sm:px-10 md:px-20 lg:px-40 overflow-x-hidden">
        <Breadcrumb firstChild={"Noticias"} />
        <BlogSideBar />
      </div>
    </Layout>
  );
}
