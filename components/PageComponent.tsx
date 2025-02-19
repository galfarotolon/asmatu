// components/PageComponent.tsx
import React from "react";
import dynamic from "next/dynamic";

interface PageComponentProps {
  data: any;
  _type: string;
}

const Projects = dynamic(() => import("@/components/Portfolio/PortfolioList"));

// Adjust the mapping as per your actual document types
const PageComponent = ({ data, _type }: PageComponentProps) => {
  console.log("type here", _type);
  let Component: React.ComponentType<any> | null = null;
  switch (_type) {
    case "projectPage":
      Component = Projects;
      break;
    default:
      return <p>Page not found</p>;
  }
  return <Component data={data} />;
};

export default PageComponent;
