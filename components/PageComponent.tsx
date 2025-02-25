// components/PageComponent.tsx
import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { getBaseRoute, ROUTE_CODES } from "@/app/lib/routing";

interface PageComponentProps {
  data: any;
  _type: string;
  lang: "es" | "eu";
}

const Projects = dynamic(() => import("@/components/Portfolio/ProjectsList"));
const ProjectDetail = dynamic(
  () => import("@/components/Portfolio/ProjectDetail")
);
const ServicesPage = dynamic(
  () => import("@/components/Services/ServicesLanding")
);
const ServiceDetail = dynamic(
  () => import("@/components/Services/ServiceSingle1")
);
const BlogLanding = dynamic(() => import("@/components/Blog/BlogLanding"));
const BlogDetail = dynamic(() => import("@/components/Blog/BlogDetail"));

export default async function PageComponent({
  data,
  _type,
  lang,
}: PageComponentProps) {
  let Component: React.ComponentType<any> | null = null;
  let basePageUrl = "";
  switch (_type) {
    case "projectPage":
      Component = Projects;
      basePageUrl = await getBaseRoute(ROUTE_CODES.PROJECTS, lang);
      break;
    case "project":
      Component = ProjectDetail;
      basePageUrl = await getBaseRoute(ROUTE_CODES.PROJECTS, lang);
      break;
    case "servicesPage":
      Component = ServicesPage;
      break;
    case "service":
      Component = ServiceDetail;
      break;
    case "blogPage":
      Component = BlogLanding;
      break;
    case "blogPost":
      Component = BlogDetail;
      break;
    case "companyPage":
      Component = BlogDetail;
      basePageUrl = await getBaseRoute(ROUTE_CODES.COMPANY, lang);
      break;
    default:
      return notFound();
  }
  return <Component data={data} lang={lang} baseRoute={basePageUrl} />;
}
