import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib/session";
import { cookies } from "next/headers";

export default async function proxy(req: NextRequest) {

  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);

  const isLoggedIn = session.isLoggedIn;
  const { pathname } = req.nextUrl;

  // ✅ exact match for home, startsWith for everything else
  const isProtected = pathname === "/" || pathname.startsWith("/graveyard");
  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/sign_up");

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};