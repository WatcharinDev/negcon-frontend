import { User } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname }: { pathname: string } = request.nextUrl;
  const token = await getToken({ req: request });
  const user: User | null = token as User;
  if(pathname==="/") return NextResponse.redirect(new URL('/signin', request.url))
  if (!user) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

}

export const config = {
  matcher: [
    "/",
    "/portal",
    "/expense/:path*",
    "/religion/:path*",
    "/master/:path*"
  ],
};