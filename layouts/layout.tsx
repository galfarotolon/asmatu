// /layouts/layout.tsx
import DesktopHeader from "./desktop-header";
import Footer from "./footer";
import MobileHeader from "./mobile-header";
import "../styles/globals.css";
import { getNavigation } from "@/sanity/queries";
import { ReactNode } from "react";

export const revalidate = 60; // Optional: Revalidate every 60 seconds if using SSG/ISR

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  // Fetch navigation data once at the layout level
  const navigation = await getNavigation();

  return (
    <>
      <DesktopHeader navigation={navigation} />
      <MobileHeader navigation={navigation} />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}
