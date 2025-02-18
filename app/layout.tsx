// app/[lang]/layout.tsx
import { ReactNode, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";
import "../styles/globals.css";

import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "../public/css/base.css";
// import "../../public/css/custom.css";
import "../public/css/fontawesome-all.min.css";
import "../public/css/fontello.css";
import "../public/css/justified.css";
import "../public/css/magnific-popup.css";
import "../public/css/nice-select.css";
import "../public/css/style.css";
import "../public/css/swiper.css";

import { Open_Sans, Rubik } from "next/font/google";
import Loading from "./loading";
import { getNavigation } from "@/sanity/queries";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--Rubik",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--OpenSans",
});

// Dynamically import DesktopHeader (SSR disabled to avoid hydration mismatches)
const DesktopHeader = dynamic(() => import("@/layouts/desktop-header"), {
  ssr: false,
});

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "eu" }];
}

export const metadata: Metadata = {
  title: {
    template: "Asmatu | %s",
    default: "Asmatu | Asmatu es tu ingeniería en Donostia-San Sebastián",
  },
};

export default async function LangRootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const navigation = await getNavigation();
  return (
    <html lang={params.lang}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags can go here */}
      </Head>
      <body className={`${openSans.className} ${rubik.className}`}>
        <LanguageProvider initialLanguage={params.lang as "es" | "eu"}>
          <Suspense fallback={<Loading />}>
            <DesktopHeader navigation={navigation} />
            {children}
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
