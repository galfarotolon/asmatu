import services, { Service } from "@/data/services";
import ServicesSingle1 from "@/components/Services/ServiceSingle1";
import Breadcumb from "@/layouts/breadcumb";
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
      <div className="px-20">
        <Breadcumb
          firstChild={lang === "es" ? "Servicios" : "Zerbitzuak"}
          SecondChild={"Construcción e Ingeniería"}
        />
        <ServicesSingle1 service={service} lang={lang} />
      </div>
    </Layout>
  );
}
