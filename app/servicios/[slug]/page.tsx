import services, { Service } from "@/data/services";
import ServicesSingle1 from "@/components/Services/ServiceSingle1";
import Breadcrumb from "@/layouts/breadcrumb";
import Layout from "@/layouts/layout";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.flatMap((service) => [
    { slug: service.slugEs },
    { slug: service.slugEu },
  ]);
}

async function getServiceData(slug: string): Promise<Service | undefined> {
  return services.find(
    (service) => service.slugEs === slug || service.slugEu === slug
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceData(params.slug);

  if (!service) {
    return notFound();
  }

  const lang = service.slugEs === params.slug ? "es" : "eu";

  return (
    <Layout>
      <div className="px-0 sm:px-5 md:px-20">
        <Breadcrumb
          firstChild={lang === "es" ? "Servicios" : "Zerbitzuak"}
          SecondChild={service.title}
        />
        <ServicesSingle1 service={service} lang={lang} />
      </div>
    </Layout>
  );
}
