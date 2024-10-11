// app/[locale]/layout.tsx
import { ReactNode, Suspense } from "react";
import "../../styles/globals.css";
import Loading from "../loading";
import { LanguageProvider } from "../../context/LanguageContext";
import { notFound } from "next/navigation";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Validate the locale
  if (locale !== "eu") {
    // Optionally handle invalid locales
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <LanguageProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
