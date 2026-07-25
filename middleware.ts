import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const COOKIE = "ada_admin";
const secret = () =>
  new TextEncoder().encode(
    process.env.ADMIN_JWT_SECRET ?? "dev-secret-replace-in-production-minimum-32!"
  );

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login") {
    // If already authenticated, skip the login page
    const token = req.cookies.get(COOKIE)?.value;
    if (token) {
      try {
        await jwtVerify(token, secret());
        return NextResponse.redirect(new URL("/admin/projects", req.url));
      } catch {}
    }
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE)?.value;
  if (!token) return NextResponse.redirect(new URL("/admin/login", req.url));

  try {
    await jwtVerify(token, secret());
    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/admin/login", req.url));
    res.cookies.delete(COOKIE);
    return res;
  }
}

export const config = { matcher: ["/admin/:path*"] };
