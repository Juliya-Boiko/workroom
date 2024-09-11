import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidToken } from './libs/jwt';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/sign-in' || path === '/sign-up';
  const token = request.cookies.get('workroom')?.value || '';

  if (token) {
    const valid = isValidToken(token);
    if (!valid) {
      return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
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
  matcher: ['/', '/sign-in', '/sign-up'],
};
