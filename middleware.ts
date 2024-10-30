import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValid } from './libs/jose';
import { ELanguage } from '@/typings';

export async function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language');
  const browserLocale = acceptLanguage?.includes(ELanguage.UK) ? ELanguage.UK : ELanguage.EN;

  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/sign-in' || path === '/sign-up';
  const token = request.cookies.get('workroom')?.value || '';

  let response = NextResponse.next();

  response.cookies.set('locale', browserLocale, {
    path: '/',
  });

  if (token) {
    const valid = await isValid(token);
    if (!valid) {
      response = NextResponse.redirect(new URL('/sign-in', request.nextUrl));
      response.cookies.set('workroom', '', {
        httpOnly: true,
        path: '/',
        expires: new Date(0),
      });
      return response;
    }
  }

  if (isPublicPath && token) {
    response = NextResponse.redirect(new URL('/', request.nextUrl));
  }
  if (!isPublicPath && !token) {
    response = NextResponse.redirect(new URL('/sign-in', request.nextUrl));
  }
  return response;
}

export const config = {
  matcher: [
    '/',
    '/projects',
    '/project/:path*',
    '/task/:path*',
    '/calendar',
    '/employees',
    '/sign-in',
    '/sign-up',
    '/profile',
    '/info-portal',
    '/folder/:path*',
  ],
};
