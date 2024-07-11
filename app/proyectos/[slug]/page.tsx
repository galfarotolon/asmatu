import projects from "@/data/projects";
import ProjectDetail from "@/components/Portfolio/ProjectDetail";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";
import { notFound } from "next/navigation";

interface PortfolioPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params }: PortfolioPageProps) => {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found - Asmatu Projects",
    };
  }
  return {
    title: `${project.title} - Asmatu Projects`,
  };
};

async function getProjectData(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const project = await getProjectData(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <Layout>
      <div className="px-4 md:px-5 lg:px-10 xl:px-20">
        <Breadcrumb firstChild={"Proyectos"} SecondChild={project.title} />
        <ProjectDetail project={project} />
      </div>
    </Layout>
  );
}
