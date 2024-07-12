import projects from "@/data/projects";
import ProjectDetail from "@/components/Portfolio/ProjectDetail";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";
import { notFound } from "next/navigation";

interface PortfolioPageProps {
  params: {
    slug: string;
    lang: string; // Add language parameter
  };
}

export const generateMetadata = async ({ params }: PortfolioPageProps) => {
  const project = projects.find(
    (project) =>
      project.slugEs === params.slug || project.slugEu === params.slug
  );
  if (!project) {
    return {
      title: "Project Not Found - Asmatu Projects",
    };
  }
  return {
    title: `${project.title} - Asmatu Projects`,
  };
};

async function getProjectData(slug: string, language: string) {
  return projects.find(
    (project) => (language === "es" ? project.slugEs : project.slugEu) === slug
  );
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const language = params.lang || "es"; // Determine the language from the URL parameters
  const project = await getProjectData(params.slug, language);

  if (!project) {
    return notFound();
  }

  return (
    <Layout>
      <div className="px-4 md:px-5 lg:px-10 xl:px-20">
        <Breadcrumb
          firstChild={language === "es" ? "Proyectos" : "Proiektuak"}
          SecondChild={project.title}
        />
        <ProjectDetail project={project} language={language} />
      </div>
    </Layout>
  );
}
