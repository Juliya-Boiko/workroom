import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { isValidToken } from './libs/jwt';
import { isValid } from './libs/jose';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/sign-in' || path === '/sign-up';
  const token = request.cookies.get('workroom')?.value || '';

  if (token) {
    const valid = isValid(token);
    if (!valid) {
      const response = NextResponse.json({});
      response.cookies.set('workroom', '', { httpOnly: true });
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
