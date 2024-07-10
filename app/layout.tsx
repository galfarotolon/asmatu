// app/layout.tsx
import { ReactNode, Suspense } from "react";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "../public/css/base.css";
// import "../public/css/custom.css";
import "../public/css/fontawesome-all.min.css";
import "../public/css/fontello.css";
import "../public/css/justified.css";
import "../public/css/magnific-popup.css";
import "../public/css/nice-select.css";
import "../public/css/style.css";
import "../public/css/swiper.css";
import Loading from "./loading";
import { Open_Sans, Rubik } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";
import { LanguageProvider } from "../context/LanguageContext";

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

export const metadata = {
  title: {
    template: "Asmatu | %s",
    default: "Asmatu | Asmatu es tu ingeniería en Donostia-San Sebastián",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any additional meta tags or links here */}
      </Head>
      <body className={`${openSans.className} ${rubik.className}`}>
        <LanguageProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
