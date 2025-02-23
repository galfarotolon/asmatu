// components/PageComponent.tsx
import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

interface PageComponentProps {
  data: any;
  _type: string;
  lang: string;
}

const Projects = dynamic(() => import("@/components/Portfolio/PortfolioList"));
const ServicesPage = dynamic(
  () => import("@/components/Services/ServicesLanding")
);
const ServiceDetail = dynamic(
  () => import("@/components/Services/ServiceSingle1")
);
const BlogLanding = dynamic(() => import("@/components/Blog/BlogLanding"));
const BlogDetail = dynamic(() => import("@/components/Blog/BlogDetail"));

const PageComponent = ({ data, _type, lang }: PageComponentProps) => {
  let Component: React.ComponentType<any> | null = null;
  switch (_type) {
    case "projectPage":
      Component = Projects;
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
    default:
      return notFound();
  }
  return <Component data={data} lang={lang} />;
};

export default PageComponent;
