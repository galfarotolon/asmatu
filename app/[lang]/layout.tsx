// app/[lang]/layout.tsx
import { ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";
import { LanguageProvider } from "@/context/LanguageContext";
import { Metadata } from "next";
import "../../styles/globals.css";
import "../../public/css/custom.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "../../public/css/base.css";
import "../../public/css/fontawesome-all.min.css";
import "../../public/css/fontello.css";
import "../../public/css/justified.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/nice-select.css";
import "../../public/css/style.css";
import "../../public/css/swiper.css";

import { Open_Sans, Rubik } from "next/font/google";
import Loading from "../loading";
import { getNavigation, getSiteSettings } from "@/sanity/queries";
import Footer from "@/layouts/footer";
import { notFound } from "next/navigation";

export const revalidate = 30; // Optional: Revalidate every 60 seconds if using SSG/ISR

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

// DesktopHeader includes the language switcher.
// IMPORTANT: DO NOT import schema files here.
const DesktopHeader = dynamic(() => import("@/layouts/desktop-header"), {
  ssr: false,
});

const MobileHeader = dynamic(() => import("@/layouts/mobile-header"), {
  ssr: false,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang; // "es" or "eu"
  const navigation = await getNavigation();
  const settings = await getSiteSettings();

  // <MobileHeader navigation={navigation} />
  return (
    <html lang={lang} className={`${openSans.className} ${rubik.className}`}>
      <body>
        <LanguageProvider initialLanguage={lang as "es" | "eu"}>
          <Suspense fallback={<Loading />}>
            <DesktopHeader navigation={navigation} />

            {children}
          </Suspense>
          <Footer navigation={navigation} settings={settings} />
        </LanguageProvider>
      </body>
    </html>
  );
}
