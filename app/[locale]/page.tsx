// app/[locale]/page.tsx
import HomeMain from "@/components/Home/HomeMain";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Only 'eu' is handled here; others return 404
  if (locale !== "eu") {
    notFound();
  }

  return <HomeMain locale="eu" />;
}
