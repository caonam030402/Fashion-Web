import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { path } from "./constants/path";

const privatePaths = [path.cart];

const authPaths = [path.signIn, path.signUp];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("access_token")?.value;

  if (privatePaths.some((path) => pathname.startsWith(path) && !accessToken)) {
    return NextResponse.redirect(new URL(path.signIn, request.url));
  }
  if (authPaths.some((path) => pathname.startsWith(path) && accessToken)) {
    return NextResponse.redirect(new URL(path.home, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...privatePaths, ...authPaths],
};
