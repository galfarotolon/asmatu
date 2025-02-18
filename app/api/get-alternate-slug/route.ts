import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let path = searchParams.get('path') || '';
  const targetLang = searchParams.get('lang') as 'es' | 'eu';
  const sourceLang = (searchParams.get('sourceLang') || 'es') as 'es' | 'eu';

  console.log("[API] Raw params:", {
    rawPath: searchParams.get('path'),
    sourceLang,
    targetLang,
  });

  // Clean the path: remove leading/trailing slashes and lowercase it.
  path = path.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  console.log("[API] Cleaned path:", path);

  if (!path || !sourceLang) {
    console.log("[API] Missing path or sourceLang, returning empty alternateSlug.");
    return NextResponse.json({ alternateSlug: "" });
  }

  // Query the navigation document
  const query = `*[_type == "navigation"][0]{
    menuItems[]{
      labelESP,
      labelEU,
      "slugESP": slugESP.current,
      "slugEU": slugEU.current
    }
  }`;
  console.log("[API] Running query");
  const navigation = await client.fetch(query);
  console.log("[API] Navigation doc:", navigation);

  // Find the matching menu item based on the source language
  const match = navigation?.menuItems?.find((item: any) =>
    sourceLang === 'es'
      ? item.slugESP?.toLowerCase() === path
      : item.slugEU?.toLowerCase() === path
  );

  // Return the alternate slug from the matched menu item.
  const alternateSlug =
    sourceLang === 'es'
      ? match?.slugEU || ""
      : match?.slugESP || "";
  console.log("[API] Returning alternateSlug:", alternateSlug);

  return NextResponse.json({ alternateSlug });
}
