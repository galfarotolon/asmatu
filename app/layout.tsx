// app/layout.tsx
import { ReactNode, Suspense } from "react";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "../public/css/base.css";
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
import { LanguageProvider } from "../context/LanguageContext";
import { headers } from "next/headers";

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
  const headersList = headers();
  const pathname = headersList.get("x-nextjs-pathname") || "/";
  const segments = pathname.split("/").filter(Boolean);
  let locale: "es" | "eu" = "es";

  if (segments[0] === "eu") {
    locale = "eu";
  }

  return (
    <html lang={locale}>
      <body className={`${openSans.className} ${rubik.className}`}>
        <LanguageProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
