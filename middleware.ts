// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'eu'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // EXCLUDE Studio routes (and other static assets) from locale redirection.
  if (
    pathname.startsWith('/studio') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/img')
  ) {
    return NextResponse.next();
  }

  // Determine if the URL already has a locale.
  const pathLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  // Check if there's a locale cookie.
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  // Redirect root "/" to default or cookie locale.
  if (pathname === '/') {
    const locale = cookieLocale || defaultLocale;
    request.nextUrl.pathname = `/${locale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // If the URL does not have a locale, prepend the cookie/default locale.
  if (!pathLocale) {
    const locale = cookieLocale || defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // If the cookie is not set, set it using the locale found in the URL.
  if (!cookieLocale) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', pathLocale);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|studio).*)'],
};
