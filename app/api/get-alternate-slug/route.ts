import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let path = searchParams.get('path') || '';
  const targetLang = searchParams.get('lang') as 'es' | 'eu';
  const sourceLang = (searchParams.get('sourceLang') || 'es') as 'es' | 'eu';


  // Clean the path: remove leading/trailing slashes and lowercase it.
  path = path.trim().toLowerCase().replace(/^\/+|\/+$/g, '');


  if (!path || !sourceLang) {
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
 const navigation = await client.fetch(query);


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


  return NextResponse.json({ alternateSlug });
}
