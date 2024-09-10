import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/sign-in' || path === '/sign-up';
  const token = request.cookies.get('workroom')?.value || '';
  let isValid = false;
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const { exp } = decodedToken as { exp: number };
      if (exp && Date.now() < exp * 1000) {
        isValid = true;
      }
    } catch (error) {
      console.log(error);
      isValid = false;
    }
  }

  if (!isValid) {
    return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
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
