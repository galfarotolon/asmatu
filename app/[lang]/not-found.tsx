// app/[lang]/not-found.tsx
import { getSiteSettings } from "@/sanity/queries";
import Layout from "@/layouts/layout";
import Link from "next/link";

interface Params {
  lang?: string;
}

export const revalidate = 30; // Optional: Revalidate every 60 seconds if using SSG/ISR

export default async function NotFoundPage({ params }: { params: Params }) {
  const lang = params?.lang || "es";
  const settings = await getSiteSettings();

  const title = settings?.notFoundTitle?.[lang] ?? "Página no encontrada";
  const message = settings?.notFoundMessage?.[lang] ?? "Lo sentimos...";
  const buttonLabel = settings?.notFoundButton?.[lang] ?? "Volver al Inicio";

  return (
    <Layout>
      <div className="industify_fn_error_page">
        <div className="container">
          <div className="error_box max550">
            <div className="title_holder">
              <h1>404</h1>
              <h3>{title}</h3>
              <p>{message}</p>
            </div>
            <div className="search_holder">
              <Link href={`/${lang}`} className="btn">
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
