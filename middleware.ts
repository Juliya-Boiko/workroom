import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValid } from './libs/jose';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/sign-in' || path === '/sign-up';
  const token = request.cookies.get('workroom')?.value || '';

  if (token) {
    const valid = await isValid(token);
    if (!valid) {
      const response = NextResponse.redirect(new URL('/sign-in', request.nextUrl));
      response.cookies.set('workroom', '', {
        httpOnly: true,
        path: '/',
        expires: new Date(0),
      });
      return response;
    }
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
  }
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
